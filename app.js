const express = require('express');
const app = express();
app.listen(3000, () => console.log('Welcome to Tao Wallet! Go to localhost:3000 in your browser.'))
app.use(express.static(__dirname + '/dist/tao-web'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname)));
app.locals.data = {};

require('crypto');
const TaoWallet = require('tao-wallet');

app.get('/login', async (req, res) => {
  try {
    const tao = await new TaoWallet({ lnmSecret: req.query.lnMarketsSecret, network: req.query.network });
    app.locals.data.tao = tao;
    await tao.login();
    res.json(tao);
  } catch (error) {
    console.log(error)
  }
});

app.get('/fetch-deposit-address', async (req, res) => {
  try {
    let payload = {
      type: req.query.type
    }
    if (req.query.amountSats) payload['amountSats'] = parseInt(req.query.amountSats);
    const address = await app.locals.data.tao.fetchDepositAddress(payload);
    console.log(address)
    res.json(address);
  } catch (error) {
    console.log(error)
  }
});

app.get('/fetch-balances', async (req, res) => {
  try {
    const balances = await app.locals.data.tao.fetchBalances();
    console.log(balances)
    res.json(balances);
  } catch (error) {
    console.log(error)
  }
});

app.get('/swap', async (req, res) => {
  try {
    let payload = {
      from: req.query.from,
      to: req.query.to,
      amountUsd: parseInt(req.query.amountUsd)
    }
    const swap = await app.locals.data.tao.swap(payload);
    console.log(swap)
    res.json(swap);
  } catch (error) {
    console.log(error)
  }
});

app.get('/send', async (req, res) => {
  try {
    let payload = {
      type: req.query.type,
      address: req.query.address
    }
    if (req.query.amountSats) payload['amountSats'] = req.query.amountSat;
    const invoice = await app.locals.data.tao.send(payload);
    console.log(invoice)
    res.json(invoice);
  } catch (error) {
    console.log(error)
  }
});

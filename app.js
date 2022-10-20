const express = require('express');
require('crypto');
const app = express();
app.locals.data = {};

app.listen(3000, () => console.log('Node.js app listening on port 3000.'))
app.use(express.static(__dirname + '/dist/tao-web'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname)));

const TaoWallet = require('tao-wallet');

app.get('/login', async (req, res) => {
  try {
    const tao = await new TaoWallet({ lnmSecret: req.query.lnMarketsSecret, network: req.query.network });
    app.locals.data.tao = tao;
    await tao.login();
    return res.json(tao);
  } catch (error) {
    console.log(error)
  }
});

app.get('/lightning-invoice', async (req, res) => {
  console.log(req.query.amountSats)
  try {
    const invoice = await app.locals.data.tao.fetchDepositAddress({ type: 'bolt11', amountSats: parseInt(req.query.amountSats) })
    return res.json(invoice);
  } catch (error) {
    console.log(error)
  }
});

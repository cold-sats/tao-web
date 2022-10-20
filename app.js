const express = require('express');
const app = express();

app.listen(3000, () => console.log('Node.js app listening on port 3000.'))
app.use(express.static(__dirname + '/dist/tao-web'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname)));

const TaoWallet = require('tao-wallet');
const lnmSecret = require('crypto').randomBytes(16).toString('hex');

app.get('/test', function(req, res) {
  console.log('test');
  return res.send({test: 'test'});
})

app.get('/deposit-address', async (req, res) => {
  try {
    const tao = await new TaoWallet({ lnmSecret, network: 'mainnet' });
    await tao.login();
    const depositAddress = await tao.fetchDepositAddress({ type: 'bolt11', amountSats: 1000000 })
    console.log(depositAddress);
    return res.json(depositAddress);
  } catch (error) {
    console.log(error)
  }
});

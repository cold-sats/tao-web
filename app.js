const express = require('express');
const app = express();

app.listen(3000, () => console.log('Node.js app listening on port 3000.'))
app.use(express.static(__dirname + '/dist/tao-web'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname)));

const TaoWallet = require('tao-wallet');
const lnmSecret = require('crypto').randomBytes(16).toString('hex');
const tao = new TaoWallet({ lnmSecret, network: 'testnet' });

app.get('/test-tao-login', async (req, res) => {
  try {
    console.log('IT WORKS')
    res.send('IT WORKS');
    await tao.login();
  } catch (error) {
    console.log(error)
  }
});

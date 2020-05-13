const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
      <div>
        <form method="POST">
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <input type="password" name="passwordConfirmation" placeholder="confirm password" />
            <button>Sign up</button>
        </form>
      </div>
    `);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('WOO');
});

app.listen(3000, () => {
  console.log('Listening');
});

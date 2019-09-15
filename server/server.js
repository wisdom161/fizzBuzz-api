const express = require('express');

const fizzBuzzController = require('./controllers/fizzBuzzController');

const app = express();

// app.use((err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// });

app.get('/', fizzBuzzController.fizzBuzz, (req, res) => {
  res.send(res.locals);
});

app.listen(3000, () => console.log('Listening on Port: 3000'));

module.exports = app;
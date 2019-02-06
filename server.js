const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const BART_API_KEY = process.env.BART_API_KEY;

app.get('/', (req, res) => {
  res.send('My Bart Landing Page');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
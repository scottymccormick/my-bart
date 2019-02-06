const express = require('express');
const app = express();
require('dotenv').config();
const axios = require('axios');
const PORT = process.env.PORT || 4000;
const BART_API_KEY = process.env.BART_API_KEY;

app.get('/', (req, res) => {
  res.send('My Bart Landing Page');
  axios.get('http://api.bart.gov/api/etd.aspx?cmd=etd&orig=LAFY&key=MW9S-E7SL-26DU-VV8V&json=y')
    .then((response) => {
      console.log(response.data.root)
    })
    .catch((error) => {
      console.log(error)
    })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
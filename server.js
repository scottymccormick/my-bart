const express = require('express');
const app = express();
require('dotenv').config();
const axios = require('axios');
const PORT = process.env.PORT || 4000;
const BART_API_KEY = process.env.BART_API_KEY;

app.get('/', (req, res) => {
  axios.get(`http://api.bart.gov/api/etd.aspx?cmd=etd&orig=LAFY&key=${BART_API_KEY}&json=y`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      res.send(error)
    })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
const express = require('express');
const app = express();
require('dotenv').config();
const axios = require('axios');
const PORT = process.env.PORT || 4000;
const BART_API_KEY = process.env.BART_API_KEY;

app.set('view engine', 'ejs');

// Show
app.get('/:station', (req, res) => {
  axios.get(`http://api.bart.gov/api/etd.aspx?cmd=etd&orig=${req.params.station}&key=${BART_API_KEY}&json=y`)
    .then((response) => {
      console.log(response.data.root.station[0])
      res.render('show', {
        station: response.data.root.station[0]
      })
    })
    .catch((error) => {
      res.send(error)
    })
})

// Index
app.get('/', (req, res) => {
  axios.get(`http://api.bart.gov/api/stn.aspx?cmd=stns&key=${BART_API_KEY}&json=y`)
    .then((response) => {
      console.log(response.data.root.stations)
      res.render('index', {
        stations: response.data.root.stations.station
      })
      // res.send(response.data.root.stations.station)
    })
    .catch((error) => {
      res.send(error)
    })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
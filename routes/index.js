var express = require('express');
var router = express.Router();

const API_KEY = process.env.API_KEY;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDEwOGM4N2E2YTIxNzc0NjM0ZmMzNjU2N2RlN2VmZCIsInN1YiI6IjY1YzM1MDAzYjc2Y2JiMDE4NDBmZmVkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._nwHMtrbd1Qdcyngx-8liEQPPQ15agdw3PFDqzBA0jQ'
    }
  };
router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
 .then(response => response.json())
 .then(data => {
   res.json({ movies: data.results });
 });
});







module.exports = router;
const express = require("express");
const router = express.Router();
const filmes = require("../data/filmes");

// Get a list of unique genres
router.get("/", (req, res) => {
  const generos = new Set();

  filmes.forEach((filme) => {
    // Check if generos exists and is an array before using forEach
    if (Array.isArray(filme.generos)) {
      filme.generos.forEach((genero) => {
        generos.add(genero);
        console.log(`Added genre: ${genero}`); // Debugging log
      });
    } else {
      console.log(`No genres found for movie: ${filme.title}`); // Debugging log
    }
  });

  // Convert the Set to an array and return as JSON
  res.json(Array.from(generos));
});

module.exports = router;

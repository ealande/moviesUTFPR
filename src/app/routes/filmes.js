const express = require("express");
const router = express.Router();
const filmes = require("../data/filmes");

// Get all filmes
router.get("/", (req, res) => {
  res.json(filmes);
});

// Get filmes by genero
router.get("/genero/:genero", (req, res) => {
  const genero = req.params.genero;
  const filteredFilmes = filmes.filter((filme) =>
    filme.generos.includes(genero),
  );
  res.json(filteredFilmes);
});

// Get a specific filme by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const filme = filmes.find((m) => m.id === id);
  if (filme) {
    res.json(filme);
  } else {
    res.status(404).send("Filme not found");
  }
});

module.exports = router;

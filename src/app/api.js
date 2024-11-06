const express = require("express");
const app = express();
const port = 3000;

// Import routes
const generosRoutes = require("./routes/generos");
const filmesRoutes = require("./routes/filmes");

// Use JSON middleware
app.use(express.json());

// Define routes
app.use("/api/generos", generosRoutes);
app.use("/api/filmes", filmesRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

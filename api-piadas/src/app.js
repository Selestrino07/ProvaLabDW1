const express = require("express");
const piadaRoutes = require("./routes/piadaRoutes");

const app = express();

app.use(express.json());

// rota principal
app.use("/api", piadaRoutes);

module.exports = app;
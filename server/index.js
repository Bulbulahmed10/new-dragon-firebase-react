const express = require("express");
const app = express();
const PORT = 4000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
const cors = require('cors')
app.use(cors())
app.get("/", (req, res) => {
  res.send("server is running");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});

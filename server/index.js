const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
const highlightsCategoryNews = require("./data/highlightCategoryNews.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("server is running");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const categoryNews = news.filter(
    (singleCategoryNews) => parseInt(singleCategoryNews.category_id) === id
  );
  res.send(categoryNews);
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/highlightCategoryNews", (req, res) => {
  res.send(highlightsCategoryNews);
});
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});

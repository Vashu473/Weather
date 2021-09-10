// express
const express = require("express");
const app = express();
const port = process.env.PORT || 80;
// hbs
const hbs = require("hbs");
// path
const path = require("path");

// path setting
const vPath = path.join(__dirname, "templates/views");
const pPath = path.join(__dirname, "templates/partials");
const pbPath = path.join(__dirname, "public");
// setting templates
app.set("view engine", "hbs");
app.set("views", vPath);
hbs.registerPartials(pPath);

// setting middleware (css,js)
app.use(express.static(pbPath));

// rendering
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log("done");
});

var path = require("path");
var express = require("express");

var app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "/dist")));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "/dist") });
});

app.listen(PORT, function () {
  console.log(`App is running at localhost: ${PORT}`);
});

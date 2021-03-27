const express = require('express');
const app = express();
const port = 8080;
app.use(express.static("public"));
const bodyParser = require('body-parser');
const urlendcodedParser = bodyParser.urlencoded({ extended: false});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});

app.set("view engine", "ejs");
app.set("views", "./views");


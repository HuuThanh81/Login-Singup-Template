const express = require('express');
const app = express();
const port = 4000;
app.use(express.static("public"));
const bodyParser = require('body-parser');
const urlendcodedParser = bodyParser.urlencoded({ extended: false});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/",function(req, res){
    res.render("login");
});
const express = require('express');
const app = express();
const port = process.env.port || 4000;

const bodyParser = require('body-parser');
const urlendcodedParser = bodyParser.urlencoded({ extended: false});

app.use(express.static("public"));
app.use(express.json());

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/",function(req, res){
    res.render("login");
});

app.get("/profile",function(req, res){
    res.render("profile");
});
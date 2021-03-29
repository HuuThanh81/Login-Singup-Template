const express = require('express')
const expressLayout = require('express-ejs-layouts')
const bodyParser = require('body-parser');

const urlendcodedParser = bodyParser.urlencoded({ extended: false});

const app = express();
const port = 4000;

app.use(express.static('public'))
app.use(express.json());
app.use(expressLayout);

app.set('view engine', 'ejs')

app.get('',function(req,res){
    res.render('index')
})

app.get('/profile',function(req,res){
    res.render('profile')
})

app.listen(port,()=> console.info(`App listen on port ${port}`))
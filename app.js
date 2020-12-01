const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ntpw0601',
  detabase: 'test'
});




app.get('/', (req, res) => {
  res.render('top.ejs',　{title: 'Soccer world cup'});
});




app.get('/register', (req, res) => {
  res.render('register.ejs');
});


app.get('/login', (req, res) => {
  res.render('login.ejs');
});

r

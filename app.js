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

app.get('/index', (req, res) => {
  connection.query(
    'SELECT * FROM boards',
    (error, results) => {
      res.render('index.ejs', {boards: results});
    }
  );
});

app.post('/create/:user_id', (req, res) => {
  connection.query(
    'INSERT INTO users (email) VALUES (?)',
    [req.body.user_id],
    (error, result) => {
      res.redirect('/index');
    }
  );
});



app.listen(3000);
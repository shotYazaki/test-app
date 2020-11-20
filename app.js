const  express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('index.ejs',　{title: 'Soccer world cup'});
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.listen(3000);

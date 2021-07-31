const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random()*10 + 1);
    res.render('random', { num });
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
});

app.listen(port, ()=> {
    console.log('Listening on port' + port);
})
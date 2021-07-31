const express = require('express');
const redditData = require('./data.json');
const app = express();
const port = 8080;
const path = require('path');

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/r/:subreddit', (req, res) => {
    console.log("requested");
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    }
})

app.listen(port, () => {
    console.log("Listening on port 8080");
});
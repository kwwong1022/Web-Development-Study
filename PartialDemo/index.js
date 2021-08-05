const express = require('express');
const app = express();
const port = 8080;
const redditData = require('./data.json');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];

    if (data) {
        res.render('subreddit.ejs', { ...data });
    }
})

app.get('/tacos', (req, res) => {
    res.render('tacos');
})

app.post('/tacos', (req, res) => {
    console.log(req.body);
    res.send("sdf")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
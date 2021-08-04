const express = require('express');
const app = express();
const port = 8080;
const redditData = require('./data.json');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];

    if (data) {
        res.render('subreddit.ejs', { ...data });
    }
})

app.post('/tacos', (req, res) => {
    
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
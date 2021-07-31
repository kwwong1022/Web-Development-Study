const express = require("express");
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('home page');
});

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send("haha");
});

app.get('*', (req, res) => {
    res.send('404 not found.');
});

app.listen(port, ()=> {
    console.log(`listening on port: ${port}`);
});

/*
app.use((req, res)=> {
    console.log('new quest');
    console.dir(req);
    res.send('hello!');
});
*/
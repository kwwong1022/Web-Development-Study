const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// fake comments
const comments = [
    {
        id: 0,
        name: 'user0',
        comment: 'set view engine to ejs, no need to require'
    },
    {
        id: 1,
        name: 'user1',
        comment: 'and express assume that our views are exist in a dir called ‘views’'
    },
    {
        id: 2,
        name: 'user2',
        comment: 'views may not found outside of the main dir'
    },
    {
        id: 3,
        name: 'user3',
        comment: 'can’t find views folder'
    }
];

// home route:
app.get('/', (req, res) => {
    res.render('home.ejs');
});

// CRUD - Create, Read, Update, Delete
// read:
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

// create:
app.get('/comments/new', (req, res) => {
    res.render("comments/new");
})

app.post('/comments', (req, res) => {
    const { name, comment } = req.body;
    const newId = comments.length;
    comments.push({
        id: newId,
        name,
        comment
    });
    res.redirect('/comments');
})

// show specific comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id === parseInt(id));
    if (typeof comment != 'undefined') {
        res.render('comments/show', { ...comment });
    } else {
        res.send('404 Not Found');
    }
});

// update:


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
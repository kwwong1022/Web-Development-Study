const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');
const methodOverride = require('method-override');
const app = express();
const port = 8080;

mongoose
    .connect('mongodb://localhost:27017/yelp-camp-01', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('database connected');
});

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('./campgrounds/index', { campgrounds });
})

app.get('/campgrounds/new', (req, res) => {
    res.render('./campgrounds/new');
});

app.post('/campgrounds', async (req, res) => {
    let id;
    await new Campground(req.body.campground)
        .save()
        .then((data) => {
            id = data._id;
        })
        .catch(err => console.log(err))
    res.redirect(`/campgrounds/${id}`);
});

app.get('/campgrounds/:id/edit', async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('./campgrounds/edit', { campground });
})

app.put('/campgrounds/:id', async (req, res) => {
    await Campground.findByIdAndUpdate(req.params.id, req.body.campground, {
        useFindAndModify: false
    })
    res.redirect(`/campgrounds/${req.params.id}`);
})

app.delete('/campgrounds/:id', async (req, res) => {
    await Campground.findByIdAndDelete(req.params.id);
    res.redirect(`/campgrounds`);
});

app.get('/campgrounds/:id', async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('./campgrounds/show', { campground });
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
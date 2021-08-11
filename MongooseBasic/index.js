const mongoose = require('mongoose');
// 'mongodb://localhost:27017/test' which 'test' is the name of our DB
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connection open');
    })
    .catch(err => {
        console.log(err);
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); db.once('open', function () {
    console.log('connection open')
});


const movieSchema = mongoose.Schema({
    title: String,
    rate: Number
});

const Movie = mongoose.model('Movie', movieSchema);
// const insideOut = new Movie({ title: 'Inside Out', rate: 9 });

Movie.insertMany([{title: 'Movie 1', rate: 8}, {title: 'Movie 2', rate: 5}, {title: 'Movie 3', rate: 2}])
    .then(data => {
        console.log(`saved \n${data}`);
    }).catch(err => {
        console.log(err);
    })
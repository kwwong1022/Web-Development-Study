const mongoose = require('mongoose');
// 'mongodb://localhost:27017/test' which 'test' is the name of our DB
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connection open');
    })
    .catch(err => {
        console.log(err);
    });

const movieSchema = mongoose.Schema({
    title: String,
    type: String,
    rate: Number
});


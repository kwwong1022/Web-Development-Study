const mongoose = require('mongoose');
const Campground = require('../models/campground');

const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');

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

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const camp = new Campground({
            location: `${sample(cities).city}, ${sample(cities).state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
        console.log(camp);
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connection open');
    })
    .catch(err => {
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    onSale: {
        type: Boolean,
        default: false
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Mountain Bike', price: 599 });
bike
    .save()
    .then(data => console.log(`Data saved.\n${data}`))
    .catch(err => console.log(err));

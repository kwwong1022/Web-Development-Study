// mongoose
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose
    .connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongoDB connection open');
    })
    .catch(err => {
        console.log(err);
    });

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// });

// p.save()
//     .then(() => {
//         console.log('product saved');
//     })
//     .catch((err) => {
//         console.log(err);
//     })

const seedProduct = [
    {
        name: 'product 1',
        price: Math.random()*10+1,
        category: 'fruit'
    },
    {
        name: 'product 2',
        price: Math.random()*10+1,
        category: 'fruit'
    },
    {
        name: 'product 3',
        price: Math.random()*10+1,
        category: 'dairy'
    },
    {
        name: 'product 4',
        price: Math.random()*10+1,
        category: 'vegetable'
    }
];

Product.insertMany(seedProduct)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
});
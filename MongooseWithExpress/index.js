// express
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/', (req, res)=> {
    console.log('home');
    res.send('home');
})

app.get('/products', async (req, res)=> {
    const products = await Product.find({});
    console.log(products);
    res.render('./products/index', { products });
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    //res.send('product search done');
    console.log(product);
    res.render('products/show', { product });
});

// routing
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})
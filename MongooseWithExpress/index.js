// express
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
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
    res.render('./products/index', { products });
})

app.post('/products', async (req, res) => {
    const {productName: name, productPrice: price, productCategory: category} = req.body;
    const newProduct = new Product({name, price, category});
    await newProduct.save();
    res.redirect('/products');
});

app.get('/products/new', (req, res) => {
    res.render('products/new');
});

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/edit', { product });
});

app.patch('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = {
        name: req.body.productName,
        price: req.body.productPrice,
        category: req.body.productCategory
    }
    await Product.updateOne({ _id: id }, product)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
    res.redirect('/products');
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    //res.send('product search done');
    res.render('products/show', { product });
});

// routing
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})
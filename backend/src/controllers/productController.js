const Product = require('../models/product');
var moment = require('moment');
moment().format();

exports.product = (req, res, next) => {
  res.render('product', { title: 'Product' });
}

async function postProduct (req, res, next) {

  const product = new Product({
    type: req.body.type,
    title: req.body.title,
    description: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    price: req.body.price
  });

  product.save().then(
    () => {
      res.status(201).json({ product });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

async function getProduct (req, res, next) {
    Product.find()
      .then(product => {
        if (!product) {
          return res.status(401).json({ error: 'No product in database !' });
        }
        res.status(201).json({ product });
      })
      .catch(error => res.status(500).json({ error }));
};

async function getLastProduct (req, res, next) {
  Product.find()
    .sort({ startDate: 'desc'})
    .skip(2)
    .limit(3)
    .then(product => {
      if (!product) {
        return res.status(401).json({ error: 'No product in stock !' });
      }
      res.status(201).json({ product });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.postProduct = postProduct;
exports.getProduct = getProduct;
exports.getLastProduct = getLastProduct;

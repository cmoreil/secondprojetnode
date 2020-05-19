const Product = require('../models/product');

exports.product = (req, res, next) => {
  res.render('product', { title: 'Product' });
}

async function postProduct (req, res, next) {

  const product = new Product({
    ...req.body
  });
  product.save()
    .then(() => res.status(201).json({ product: 'Product available in database' }))
    .catch(error => res.status(500).json({ error }));
};

async function getProduct (req, res, next) {
    product.find()
      .then(product => {
        if (!product) {
          return res.status(401).json({ error: 'No product in database !' });
        }
        res.status(201).json({ product });
      })
      .catch(error => res.status(500).json({ error }));
};

async function getLastProduct (req, res, next) {
  product.find()
    .sort({_id: -1})
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

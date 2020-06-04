const Product = require('../models/product');
const Cart = require('../models/cart');

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
    price: req.body.price,
    availableQty: req.body.availableQty
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

async function getSeminaries (req, res, next) {
  Product.find()
  .where({price: 70})
  .then(product => res.status(200).json(product))
  .catch(error => res.status(404).json({ error }));
};

async function getTrainings (req, res, next) {
  Product.find()
  .where('price').gt(249).lt(751)
  .then(product => res.status(200).json(product))
  .catch(error => res.status(404).json({ error }));
};

async function getByIdProduct (req, res, next) {
  Product.findOne({ _id: req.params.id })
  .then(product => res.status(200).json(product))
  .catch(error => res.status(404).json({ error }));
};

async function deleteProduct (req, res, next) {
  Product.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Product deleted !'}))
      .catch(error => res.status(400).json({ error }));
};

async function addToCart (req, res, next) {
  let productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
  Product.findById(productId, function(err, product) {
    if (err) {
      return res.status(401).json({error: 'This activity doesn\'t exist' });
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    res.status(200).json({cart});
  });
};

async function getCart (req, res, next) {
  if (!req.session.cart) {
    return res.status(404).json({products: null});
  }
  let cart = new Cart(req.session.cart);
  res.status(200).json({products: cart.generateArray(), totalPrice: cart.totalPrice});
};

async function getCheckout (req, res, next) {
  if (!req.session.cart) {
    return res.status(404).json({products: null});
  }
  let cart = new Cart(req.session.cart);
  res.status(200).json({ total: cart.totalPrice });
};

async function checkout (req, res, next) {
  let cart = new Cart(req.session.cart);
  const order = new Order({
    totaloforder: cart.totalPrice,
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    adress: req.body.adress,
    email:req.body.email,
    phone: req.body.phone,
    creditcart: req.body.creditcart
  });

  order.save().then(
    () => {
      res.status(201).json({ order });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// à faire delete et remove

exports.postProduct = postProduct;
exports.getProduct = getProduct;
exports.getLastProduct = getLastProduct;
exports.getByIdProduct = getByIdProduct;
exports.deleteProduct = deleteProduct;
exports.getSeminaries = getSeminaries;
exports.getTrainings = getTrainings;
exports.addToCart = addToCart;
exports.getCart = getCart;
exports.getCheckout = getCheckout;
exports.checkout = checkout;
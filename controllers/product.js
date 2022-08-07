const Product = require("../models/Product");

// get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const allProduct = await Product.find({});
    res.status(200).json({ success: true, allProduct });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// get Product By Id
exports.getProduct = async (req, res) => {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ success: false, msg: "No Product Found" });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

//Create Product
exports.createProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  try {
    const savedProduct = await product.save();
    if (!savedProduct) {
      return res
        .status(400)
        .json({ success: false, msg: "Prouduct is not saved in DB" });
    }
    res.status(200).json({ success: true, savedProduct });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

//Update Product
exports.updateProduct = async (req, res) => {
  const { name, price, quantity } = req.body;
  try {
    if (name || price || quantity !== null) {
      let product = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name,
          price,
          quantity,
        },
        {
          new: true,
          useFindAndModifiy: false,
        }
      );
      if (!product) {
        return res
          .status(400)
          .json({ success: false, msg: "Can't Update Product " });
      }
      res.status(200).json({ success: true, product });
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

//Delete Product
exports.deleteProduct = async (req, res) => {
  let product;
  try {
    product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res
        .status(400)
        .json({ success: false, msg: "Can't Delete Product " });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

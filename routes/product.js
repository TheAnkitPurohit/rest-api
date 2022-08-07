const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

// get All Products
router.get("/getAllProducts", getAllProducts);

// get Product By Id
router.get("/getProduct/:id", getProduct);

//Create Product
router.post("/createProduct", createProduct);

//Update Product
router.patch("/updateProduct/:id", updateProduct);

//Delete Product
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;

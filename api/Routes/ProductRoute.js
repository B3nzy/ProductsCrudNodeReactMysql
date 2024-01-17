const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../Services/ProductService");

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/add", addProduct);
router.post("/update", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;

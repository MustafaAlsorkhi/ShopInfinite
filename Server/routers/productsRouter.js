const express = require("express");
const productsController = require("../controllers/productsController");
const router = express.Router();

// router.post("/addProduct", productsController.addProduct);
router.post("/addProductWithImage", productsController.addProductWithImage);
router.put("/updateProduct/:product_id", productsController.updateProduct);
router.delete("/deleteProduct/:product_id", productsController.deleteProduct);
 router.get("/getProduct/:product_id", productsController.getProduct);
router.get("/getAllProduct/", productsController.getAllProduct);

module.exports = router;

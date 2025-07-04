const express = require("express");
const { isAuthenticatedUser ,  authorizeRoles } = require("../middleware/auth");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReviews } = require("../controller/productController");
const { getAllUsers } = require("../controller/userController");
 

const router = express.Router();

  router.route("/products").get(   getAllProducts);
  router.route("/admin/product/new").post( isAuthenticatedUser, authorizeRoles("admin") ,createProduct);  
  router.route("/admin/product/:id").put( isAuthenticatedUser, authorizeRoles("admin") ,updateProduct)
  .delete( isAuthenticatedUser, authorizeRoles("admin") , deleteProduct).get(getProductDetails)

   router.route("/product/:id").get(getProductDetails);
   router.route("/review").put(isAuthenticatedUser,createProductReview);
   router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReviews);


   


module.exports = router;
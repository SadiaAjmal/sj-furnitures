const express = require("express");
const { isAuthenticatedUser ,  authorizeRoles } = require("../middleware/auth");

const { registerUser, loginUser, logout,getAllUsers, forwardPassword , resetPassword, getUserDetails, updatePassword, updateProfile, getSingleUsers, updateUserRole, deleteUser } = require("../controller/userController");
const router = express.Router();

router.route("/register").post(registerUser);
 
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forwardPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser,getUserDetails);
router.route("/password/update").put(isAuthenticatedUser,updatePassword);
router.route("/me/update").put(isAuthenticatedUser,updateProfile);
router.route("/admin/users").get(isAuthenticatedUser,authorizeRoles("admin"), getAllUsers);
router.route("/admin/user/:id").get(isAuthenticatedUser,authorizeRoles("admin"), getSingleUsers)
.put(isAuthenticatedUser,authorizeRoles("admin"),updateUserRole).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteUser);



module.exports = router;
      
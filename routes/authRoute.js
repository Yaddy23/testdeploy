import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
  getAllUsersController,
  updateUserController,
} from "../controllers/authController.js";

import { isAdmin, requireSignIn } from "../middlewares/authMidleware.js";

//router object
const router = express.Router();

//routing
router.post("/register", registerController);

//LOGIN
router.post("/login", loginController);

//forgot password
router.post("/forgot-password", forgotPasswordController);

//test
router.get("/testing", requireSignIn, isAdmin, testController);

//protected route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

//get all users
router.get("/all-users", requireSignIn, isAdmin, getAllUsersController);

//update single user
router.put("/update-user/:id", requireSignIn, isAdmin, updateUserController);

export default router;

const { Router } = require("express");
const authController = require("../controllers/authController");

const { signup_get, login_get, signup_post, login_post } = authController;

const router = Router();

router.get("/signup", signup_get);

router.post("/signup", signup_post);

router.get("/login", login_get);

router.post("/login", login_post);

module.exports = router;

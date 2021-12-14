const express = require("express")
const signupcontroller = require("../controllers/signupcontroller")
const signupcontrollerRestaurant = require("../controllers/signupcontrollerRestaurant")


const router = express.Router();
router.use(express.json())
//middleware to read req.body.<params>

//CREATE USER
router.post("/", signupcontroller.signup_index); //end of app.post()
router.get("/", signupcontroller.signup_index2);


module.exports = router;
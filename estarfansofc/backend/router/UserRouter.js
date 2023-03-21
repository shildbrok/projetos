const express = require("express")
const router = express.Router()

//controller
const {register} = require("../controllers/UserController")

//middlewars
const validade = require("../middlers/handlerValidator")

//router
router.post("/register",validate , register)

module.exports = router;

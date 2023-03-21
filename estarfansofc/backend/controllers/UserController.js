const User = require("../models/User")

const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")


//generate user token
const jwtSecret = process.env.JWT_SECRET

const generateToken = (id) => {
    return jwt.sign({id},jwtSecret,{
        expiresIn: "7d",
    })
}

const register = async (res, req) => {
    res.send("Registro")
}

module.exports = {
    register,
}
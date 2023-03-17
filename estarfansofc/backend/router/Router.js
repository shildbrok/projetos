const express = require("express")
const router = express()

//route testing

router.get("/", (req, res) => {
    res.send("API, WORKING")
})


module.exports = router
const express = require("express")
const router = express()

router.use("/api/users", require("./UserRouter.js"))

//route testing

router.get("/", (req, res) => {
    res.send("API, WORKING")
})


module.exports = router
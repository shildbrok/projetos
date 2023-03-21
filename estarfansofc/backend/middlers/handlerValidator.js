const {validationResult}  = require("express-validator")

const validate = (req, res, next) => {
    const error = validationResult(res)

    if(error.isEmpty()){
        return next
    }
    const extractError = []
    error.array().map((err)=> extractError.push(err.msg))

    return res.status(422).json({
        errors: extractError,
    })
}
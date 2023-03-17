const mongoose = require("mongoose")
const {Schema} = mongoose

const sexPhotosSchema = new Schema({
    image: String,
    title: String,
    likes: Array,
    coments: Array,
    userID: mongoose.ObjectId,
    userName: String,
},{
    timestamps: true
});
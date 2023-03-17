const mongoose = "mongoose"
const {Schema} = mongoose

const userSchema= new Schema( {
        name: String,
        email: String,
        password: String,
        profileImage: String,
        bio: String
    },
    {
        timestaps: true
    }
)

const Model = mongoose.model("User", userSchema)

module.exports = User;
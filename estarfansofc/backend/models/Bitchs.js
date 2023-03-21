const mongoose = ("mongoose")
const {Schema} = mongoose

const bitchSchema = new Schema({
    name: String,
    idade: String,
    vulgo: String,
    password: String,
    bio: String,
    profileImage: String,
    email: String
},
    {
        timestamps: true
    }
)
const bitch = mongoose.model("Bitchs", bitchSchema)

module.exports(bitch);
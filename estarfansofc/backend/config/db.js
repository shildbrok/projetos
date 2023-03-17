const mongoose = require("mongoose");

const user = process.env.DB_USER
const pass = process.env.DB_PASS
//3qqo0TqzTuhyv5E1
//mongodb+srv://estevanMoreira:<password>@cluster0.imwgn5f.mongodb.net/?retryWrites=true&w=majority
const conn = async () => {
    try {   
        const dbCon = await mongoose.connect(
            `mongodb+srv://${user}:${pass}@cluster0.imwgn5f.mongodb.net/?retryWrites=true&w=majority`
        )
        console.log("Connection DB!")
        return dbCon;
    } catch (error) {
        console.log(error);
    }
}
conn();
module.exports=conn;
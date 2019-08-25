const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/secureDatabase')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    permissionLevel : String
})

const User = mongoose.model('user',userSchema);

exports.createUser = (userData) => {
    const user = new User(userData);
    return user.save()
}
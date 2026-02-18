const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is reuired"]
    },
    mobileNum: {
        type: Number,
        required: [true, "mobile number is required"]
    },
    emailId: {
        type: String,
        required: [true, "email id is required"],
        unique: [true, "dublicate email id"]
    }
})
module.exports = mongoose.model('User', userSchema)
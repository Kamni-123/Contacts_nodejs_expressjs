const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please add your name."],
    },
    email: {
        type: String,
        required: [true, "please provide your email"],
    },
    phone: {
        type: String,
        required: [true, "Important! please provide your number."]
    },
},

{
    timestamps : true,
}

);
module.exports = mongoose.model("contact", contactSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    sno: {
        type: Number,
        required:true
    },
    customer_id: {
        type: Number,
        required :true
    },
    customer_name: {
        type: String,
        required :true
    },
    email: {
        type: String,
        required :true
    },
    phone: {
        type: Number,
        required :true
    },
    balance: {
        type: Number,
        required :true
    }
})

const UserDetails = mongoose.model("DETAIL" , userSchema);

module.exports = UserDetails;
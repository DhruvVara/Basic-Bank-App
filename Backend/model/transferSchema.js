const mongoose = require("mongoose");

const Transfer = new mongoose.Schema({
    to:{
        type:Number,
        required: true
    },
    from:{
        type:Number,
        required: true
    },
    amount:{
        type:Number,
        required: true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const transfer = mongoose.model("TRANSACTION",Transfer);

module.exports = transfer;
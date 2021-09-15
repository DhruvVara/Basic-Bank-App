const express = require("express");
const router = express.Router();

const Customers = require('../model/userSchema');


const transfer = require("../model/transferSchema");


// router.post('/register', (req, res) => {
    // console.log(req.body);
    // res.json({message:req.body});

    // const {sno ,customer_id , customer_name,email,phone , balance} = req.body;
    //  console.log(customer_name);
    // console.log(email);

    // const user = new User({sno,customer_id, customer_name,email,phone,balance});

    // user.save().then(()=>{
    //     res.status(201).json({message:"user registered succesfully"});
    // }).catch((err)=>{res.status(500).json({Failed})})

// })

router.route("/details").get((req,res)=>{
    Customers.find()
        .then((found) => {
            res.json(found);
        })
})

router.route("/transactiondata").get((req,res)=>{
    transfer.find()
        .then((data) => {
            res.json(data);
        })
})

module.exports = router;
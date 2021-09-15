const express = require("express");
const router = express.Router();

const Customers = require('../model/userSchema');

const transaction = require("../model/transferSchema");

router.get("/", (req, res) => {
  res.send("hello customer ");
})

// router.route("/transferdata").post((req, res) => {
//   const to = req.body.to;
//   const from = req.body.from;
//   const amount = req.body.amount;

//   const transactiondata = new transaction({
//     to,
//     from,
//     amount
//   })

//   transactiondata.save();
// })

router.post('/transferdata', async (req, res) => {
  const { from, to, amount } = req.body;

  if (from === to) {
    window.alert("Account Number must be different. ");
  }
  else {
    try {
      const fromCustomer = await Customers.findOne({ 'customer_id': `${from}` })
      const newFromBalance = Number(fromCustomer.balance) - Number(amount)
      Customers.updateOne({ customer_id: from }, { balance: newFromBalance }, err => {

        if (err) {
          console.log(err)
          res.status(500).send('Server Error')
        }
        else {
          console.log('UPDATED')
        }
      })
      const toCustomer = await Customers.findOne({ 'customer_id': `${to}` })
      const newToBalance = Number(toCustomer.balance) + Number(amount)
      Customers.updateOne({ customer_id: to }, { balance: newToBalance }, err => {
        if (err) {
          console.log(err)
          res.status(500).send('Server Error')
        }
        else {
          console.log('UPDATED')
        }
      })
      const transactiondata = new transaction({
        from,
        to,
        amount,
      })
      transactiondata.save()
      res.json(transaction)
      window.alert("Succesfully Transfered");
    }
    catch (error) {
      console.log(error)
      res.status(500).send('Server Error')
    }
  }
})
module.exports = router;
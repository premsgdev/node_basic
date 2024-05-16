const db = require('../models')
const Customer = db.Customer; 
exports.addNewCustomer = async (req, res) => {
    console.log(req.body);
    const {firstName, lastName, email} = req.body
    const newCustomer = await Customer.create({firstName, lastName, email})
    res.status(201).json({ message: 'Customer created successfully!', customer: newCustomer });
}
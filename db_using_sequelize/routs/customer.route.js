module.exports = (app) => {
    const router = require('express').Router()
    const CustomerController = require('../controller/customer.controller')

    router.post('/customer', CustomerController.addNewCustomer)

    app.use('/api', router)
}
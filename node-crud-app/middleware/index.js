const blockAddNewCustomerRequest = (req, res, next) => {
    console.log(`Intercepted ${req.method} request to ${req.url}` )
    const url = req.url
    if(url == '/customer/add'){
        res.status(400).send('Too many requests')
    } else {
        next()
    }
}

module.exports = {
    blockAddNewCustomerRequest
}
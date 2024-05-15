
module.exports = (app, router) => {

    const controller = require('../controller/products.controller')
    router.get('/products', controller.getAllProducts)
    router.get('/products/:id', controller.getProduct)
    router.get('/categories/', controller.getCategories)
    app.use('/api', router)


};
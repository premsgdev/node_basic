const express = require('express')
const express_handlebars = require('express-handlebars')
const axios = require('axios')

const app = express()

app.listen(8000)
app.engine('handlebars',express_handlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home', {
        title: "ABC Grocery Store",
        message: "<h1>Welcome to ABC Grocery Store</h1>"
    })
})
app.get('/products', async (req, res) => {
    let products = null
    await axios.get('https://fakestoreapi.com/products')
    .then(res => {
         products = res.data
    })
    .catch(error => {
        res.status(500).send('Something went wrong')
    })
    res.render('products/list', {
        title: "Product List",
        products: products
    })
})

app.get('/news', async (req, res) => {
    let news = null
    await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5497647da2114041ad647eba8e002d6f')
    .then(res => {
         news = res.data
    })
    .catch(error => {
        res.status(500).send('Something went wrong')
    })
    console.log(news)
    res.render('news/list', {
        title: "News",
        news: news
    })
})

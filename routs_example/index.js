const express = require('express')
const express_handlebars = require('express-handlebars')

const app = express()
const router = express.Router()

require('./routes/products.routs')(app,router)

app.listen(8000)


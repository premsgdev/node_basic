const express = require('express')

const app = express()
const router = express.Router()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const db = require('./models')

db.sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been establishedsuccessfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

require('./routs/customer.route')(app)
app.listen(8000)


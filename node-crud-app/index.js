const express = require('express')
let customer = require('./lib/customer')
const app = express()
const {blockAddNewCustomerRequest} = require('./middleware')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(blockAddNewCustomerRequest)

app.listen(8000)

app.get('/', (req, res) => {
    res.send({ message: "Welcome to Customer Service Server 1.0" })
})

app.get('/customers/all',(req,res)=>{
    let customerList = '<ul>';
    customer.forEach((customer,index)=>{
        customerList += `<div>
            <ul>
                <li>${customer.first_name}</li>
                 <li>${customer.address}</li>
                  <li>${customer.contact}</li>
            </ul>
            </div>`
    })
    customerList += '</ul>'
    res.send(customerList);
})
/*
sample input json
{
    "id":3,
    "first_name": "Deepa",
    "last_name": "Jose",
    "address": "Kerala",
    "contact": 11233353525
}
*/
app.post('/customer/add',(req,res)=>{
    customer.push(req.body);

    res.status(201).send('created')

})

app.put('/customer/:id',(req, res)=>{
    const id = req.params.id
    customer[id].first_name = req.body.first_name
    customer[id].last_name = req.body.last_name
    customer[id].address = req.body.address
    customer[id].contact = req.body.contact

    res.status(200).send('updated')
})

app.delete('/customer/:id',(req, res)=>{
    const id = req.params.id
    customer.splice(id,1)
    res.status(200).send('deleted')
})
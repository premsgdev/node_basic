const express = require('express')

const app = express()

//middlewere to accept json as post request 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req, res) =>{
    res.send({message:"Welcome to express server!"})

})

app.get('/:name/:email',(req, res) =>{
    const name = req.params.name
    const email = req.params.email
    res.send('<h1>Success</h1>')
    console.log(name,email)
})
const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})

app.post('/submit',(req,res)=>{
    res.send({message:'it is done!'})
})
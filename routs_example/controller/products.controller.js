const axios = require('axios')
var myProducts = null 
exports.getAllProducts = async (req, res) => {
    let products = await fetchData('https://fakestoreapi.com/products')
    console.log('dhdhgehedh', products);
    if(products){
         res.status(200).send(products)
    } else {
        res.status(500).send('Something went wrong')
    }
};

exports.getProduct = async (req, res) => {
    let id = req.params.id
    let product = await fetchData(`https://fakestoreapi.com/products/${id}`)
    console.log('dhdhgehedh', product);
    if(product){
         res.status(200).send(product)
    } else {
        res.status(500).send('Something went wrong')
    }
};


const fetchData =  async (url) => {
    var data = null;
   await  axios.get(url)
    .then(result => {
        data = result.data 
    })
    .catch(error => {
        data = false;
    });
    return data;
}
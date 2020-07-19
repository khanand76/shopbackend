
require('dotenv').config()
const express = require('express'),
    app = express(),
    cors = require('cors'),
    Product = require('./models/Product')
    app.use(cors())

app.use(express.json())
app.use(express.static('build'))

// let products = [{
//     Product_id: 1,
//     Product_Name: "Tea",
//     Product_Category: "Beverages",
//     Product_Qty: 1,
//     Product_Price: 100
// },
// {
//     Product_id: 2,
//     Product_Name: "Oranges",
//     Product_Category: "Fruits",
//     Product_Qty: 3,
//     Product_Price: 87.5
// }]

let orders = [];



app.get('/api/products', (req, res) => {

    Product.find({}).then(products => {
        console.log("Products: ", products)
        res.json(products)
    }).catch(error => {
        console.log("error while retreiving products: ", error)
        res.status(404).end()
    })


})

app.post('/api/orders', (req, res) => {

    let newOrder = {
        orderId: Math.floor(Math.random() * 1000),
        amount: req.body.amount,
        items: req.body.items,
        qty: req.body.qty,
        number: req.body.number
    }

    console.log("Adding order...")
    orders = orders.concat(newOrder);

    res.json(newOrder)

})

app.get('/api/orders', (req, res) => {
    res.json(orders)
})

app.get('/api/orders/:id', (req, res) => {

    let id = req.params.id;

    let orderRequired = orders.filter((o) => o.id == id)

    res.json(orderRequired)

})


const port=process.env.PORT
app.listen(port, () => {
    console.log("Server has started")
})
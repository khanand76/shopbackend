const mongoose=require('mongoose')

const url=process.env.PRODUCTDB_URI

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected to mongodb")
})

const productSchema=new mongoose.Schema({
    Product_Name: String,
    Product_Category: String,
    Product_Qty: Number,
    Product_Price: Number
})


module.exports=mongoose.model('Product',productSchema)
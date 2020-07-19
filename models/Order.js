const mongoose=require('mongoose')

const url=process.env.ORDERDB_URI

mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})

const orderSchema=new mongoose.Schema({
    amount:Number,
    items:String,
    qty:Number,
    number:Number
})

module.exports=mongoose.model('Order',orderSchema)
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
    product:[
        {
            product: { type: mongoose.Types.ObjectId, ref:'Product'},
            count : Number,
            color: String,
        }
    ],
    status:{
        type:String,
        default: 'processing',
        enum:['cancelled', 'processing', 'successed'],
    },
    paymentIntent:{},
    order:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
});

//Export the model
module.exports = mongoose.model('Order', orderSchema);
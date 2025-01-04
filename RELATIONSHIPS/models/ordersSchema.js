const mongoose = require('mongoose');
const { Schema } = mongoose;

//one to many //implementaion
//Store a reference to th echild document inside parent
const orderSchema = new Schema({
    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true,
        min:1
    }
});

const ORDER = mongoose.model('ORDER', orderSchema);

module.exports = {ORDER}
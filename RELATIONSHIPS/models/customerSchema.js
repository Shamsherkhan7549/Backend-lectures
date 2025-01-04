 const mongoose = require('mongoose');
 const{Schema} = mongoose;
 
//one to many / Aproach 2
//Store a reference to th echild document inside parent

 //customer schema
const customerSchema = new Schema({
    username:{
        type:String,
        required:true,
    },

    orders:[
       {
            type: Schema.Types.ObjectId,
            ref:'ORDER'
        }   
    ]
});

const CUSTOMER = mongoose.model('CUSTOMER', customerSchema);

module.exports = {CUSTOMER}



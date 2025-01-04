 const mongoose = require('mongoose');
 const{Schema} = mongoose;
 const {ORDER} = require('./ordersSchema');
 
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

// customerSchema.pre('findOne',async() => {
//     console.log('pre middleware')
// });


customerSchema.post('findOneAndDelete', async(data) => {
    if(data.orders.length){
        const result = await ORDER.deleteMany({_id: {$in :data.orders}});
        console.log('post - result ', result);
        return;
    }
});

const CUSTOMER = mongoose.model('CUSTOMER', customerSchema);

module.exports = {CUSTOMER}



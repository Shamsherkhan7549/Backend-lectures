const mongoose  = require('mongoose');
const {Schema} = mongoose;

//One to many / Approach1 (one to few)
//store the child document inside parent

const relatshipsSchema = new Schema({
    username:{
        type:String,
        required:true
    },

    addresses:[
        { 
            _id:false,

            location:{
                type:String,
                require:true
            },

            city:{
                type:String,
                required:true
            }

        }
    ]
});

const USER = mongoose.model('USER', relatshipsSchema);

const  insertUser = async() => {
    const user1 = new USER({
        username:'@shamsher',
        addresses: [{
            location:'ward-09, Aunsi babhangawan , Bisfi',
            city:'Madhubani'
        }]});

    user1.addresses.push({location: 'Block-B, Adarsh Nagar', city:"Delhi"});

    await user1.save().then(result=>{
        console.log(result)
    })
}
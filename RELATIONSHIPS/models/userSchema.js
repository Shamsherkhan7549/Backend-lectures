const mongoose = require('mongoose');
const {Schema} = mongoose;


const userSchema = new Schema({
    username:{
        type:String,
        required:true
    }
});

const USER = mongoose.model('USER', userSchema)

module.exports = {USER}
const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = new Schema({
    content:{
        type:String,
        required:true
    },

    like:{
        type:Number,
        default:0
    },

    user:{
        type:Schema.Types.ObjectId,
        ref:'USER'
    }
});

const POST =  new mongoose.model('POST', postSchema);

module.exports = {POST};
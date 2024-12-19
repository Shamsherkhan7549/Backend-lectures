const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(result=>{
    console.log("connection successful");
}).catch(err=>{
    console.log(err)
});

async function main(){
     await mongoose.connect('mongodb://127.0.0.1:27017/flipkart');
};

const bookSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        min:1
    },
    discount:{
        type:Number,
        default:0,
    },
    genre:[String],
    category:{
        type:String,
        enum:['fiction', 'non-fiction'],
        required:true
    }
});

const Book = mongoose.model("Book", bookSchema);

// const book1 = new Book({name:"spiderman", author:"stan lee", price:"299"});

// book1.save().then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// });

// const book2 = new Book({name:'thor', price:399, genre:["action", "fiction","mythology"], category:"fiction"});
// book2.save().then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// });

const book3 = new Book({name:'ironman', discount:50, author:"stan lee", category:"fiction"});
book3.save().then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
});

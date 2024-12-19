const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(res=>{
    console.log('connection successfull')
})
.catch(err => console.log(err));

async function main() {
 await mongoose.connect('mongodb://127.0.0.1:27017/demoDB');
};

const userSchema = new Schema({
    name:String,
    email:String,
    age:Number
});

const Data = mongoose.model("Data", userSchema);

// Data.insertMany([
//     {name:"tony", email:"tony@gmail.com", age:50},
//     {name:"bruce", email:"bruce@gmail.com", age:47},
//     {name:"peter", email:"peter@gmail.com", age:30},
// ]);

// const data2 = new Data({name:"eve", email:"eve@gmail.com", age:30});

// data2.save().then(result=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// });

// Data.findById('6762936598bb5ee8fd357189').then(result=>{
//     console.log(result.name)
// });

// Data.updateOne({name:"tony"}, {age:25}).then(res=>{
//     console.log(res)
// });

// Data.updateMany({age:30}, {age:27}).then(res=>{
//         console.log(res)
//     });

// Data.findOneAndUpdate({age:27}, {age:25}).then(res=>{
//     console.log(res)
// });

    // Data.findOneAndDelete({name:"adam"}).then(res=>{
    //     console.log(res)
    // });

    // Data.deleteOne({age:27}).then(res=>{
    //     console.log(res)
    // })
    // .catch(err=>{
    //     console.log(err)
    // });


    Data.deleteMany({age:{$gte:25}}).then(result=>{
        console.log(result)
    }).catch(err=> {
        console.log(err)
    })
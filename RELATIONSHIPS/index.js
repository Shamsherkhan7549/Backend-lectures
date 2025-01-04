const mongoose  = require('mongoose');

//ONE TO MANY RELATIONSHIPS
const {ORDER} = require('./models/ordersSchema');
const {CUSTOMER} = require('./models/customerSchema');

//ONE TO SQUILLION RELATIONSHIPS
const{USER}  = require('./models/userSchema');
const{POST} = require('./models/postSchema')

main().then(()=>{
    console.log('mongoose connected!')
}).catch(err=>{
   console.log(err)
});

//one to few relationships
// async function main(){
//     mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
// };


//one to many //implementaion
//Store a reference to th echild document inside parent 
async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/zomato');
};

 const insertOrders = async() => {
    const orders = await ORDER.insertMany([{name:"laddu", price:7},{name:"rosogulla", price:15}]);
    console.log(orders);
};
// insertOrders();

const insertCustomer = async() =>{
    const customer1 = new CUSTOMER({username:'@sameer'});

    // const customer1 = await CUSTOMER.findOne({username:'@raj'});
    const order1 = await ORDER.findOne({name:"laddu"});
    const order2 = await ORDER.findOne({name: "rosogulla"});

    customer1.orders.push(order1);
    customer1.orders.push(order2);

    const result = await customer1.save()
    console.log(result)
};
// insertCustomer();

const showCustomers = async() =>{
    const customers = await CUSTOMER.findOne({username:'@sameer'}).populate('orders');
    console.log(customers)
};
// showCustomers();

const showOrders = async() =>{
    const orders = await ORDER.find({});
    console.log(orders)
};
// showOrders();

const deleteCustomer = async() => {
    const customers = await CUSTOMER.findByIdAndDelete('677963378775803cccd21124');
    console.log('deletedCustomer= ', customers);
};
deleteCustomer();

// one to squillion relationships
// async function main(){
//     mongoose.connect('mongodb://127.0.0.1:27017/hola')
// };

// const insertUser = async() => {
//     const user1 = new USER({username:'@rehan'});
//     const resultUser  = await user1.save();
//     console.log("resultUser= ", resultUser);

//     const post1 = new POST({content:"Honesty is the best policy", like:5});
//     post1.user = user1;
//     const resultPost = await post1.save()
//     console.log("resultPost= ", resultPost)
// };
// insertUser();

const insertPost = async() => {
    const user1 = await USER.findOne({username: '@rehan'});
    console.log(user1);

    const post1 = new POST({content:"Hardwork is first step of execellence", like:15});
    post1.user = user1;
    const resultPost = await post1.save()
    console.log("resultPost= ", resultPost)
};
// insertPost();


const deleteUser = async() => {
    const deletedUser = await POST.deleteMany({});
    console.log(deletedUser)
};
// deleteUser();

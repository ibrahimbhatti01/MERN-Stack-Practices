const mongoose = require("mongoose");
const { Schema } = require("mongoose");

main()
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
};

const orderSchema = new Schema({
        item: String,
        Price: Number,
    });

// One to many || Approach 02 || Reference to the cild inside parent || For -Restaurant -Food app ...
const customerSchema = new Schema({
    name: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }]
});


// customerSchema.pre("findOneAndDelete", async (data) => {
//     console.log(data);
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length){
       let result = await Order.deleteMany({_id: {$in: customer.orders}})
       console.log(result);
    }
})

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


// Functions

// const findCustomer = async () => {
//     let result = await Customer.find({}).populate("orders")
//     console.log(result);
// };

// findCustomer();


const addData = async () => {
    let customer = new Customer({
        name: "Noman Afzal"
    });

    let order = new Order({
        item: "Burger",
        Price: "150"
    });

    customer.orders.push(order);

    await customer.save();
    await order.save();

    console.log("added new customer");
};

// addData();


const delCustomer = async () => {
    let data = await Customer.findByIdAndDelete("Put _id here !!");
    console.log("deleted");
};

// delCustomer();
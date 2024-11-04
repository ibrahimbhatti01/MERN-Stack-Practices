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

const customerSchema = new Schema({
    name: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }]
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async () => {
//     let customer1 = new Customer({
//         name: "ibrahim",
//     });

//     let order1 = await Order.findOne({item: "Chips"});
//     let order2 = await Order.findOne({item: "Wrapsta"});

//     customer1.orders.push(order1);
//     customer1.orders.push(order2);

//     let result = await customer1.save();
//     console.log(result);
// };

// addCustomer();

const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders")
    console.log(result[0]);
};

findCustomer();

// const addOrder = async () => {
//     let result = await Order.insertMany(
//         [
//             {
//                 item: "Chips",
//                 Price: 50
//             },
//             {
//                 item: "Wrapsta",
//                 Price: 170
//             },
//             {
//                 item: "Peppricorn",
//                 Price: 350
//             }
//         ]
//     );
//     console.log(result);
// };

// addOrder();
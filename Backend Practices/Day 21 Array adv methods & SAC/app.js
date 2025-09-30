// let arr = [1, 2, 3, 4, 5];

// let sum = 0;
// let count = 0;
// let sumF = (element) => {
//     console.log(this);
//     sum += element;
// }

// arr.forEach(sumF);

// console.log(sum / arr.length);


// let arr = [1, 2, 3, 4, 5];

// let sum = 0;
// arr.forEach(function(element){sum+=element});

// console.log(sum/arr.length);


// let cart = [{
//     name: "icebar",
//     price: 100
// },{
//     name: "mouse",
//     price: 500
// },{
//     name: "laptop",
//     price: 5000
// },{
//     name: "pen",
//     price: 400
// }];

// let total = 0;
// let products = [];
// cart.forEach((product) => {
//     total += product.price;
//     products.push(product.name);
//     console.log(this);
// })

// console.log(total, "\n", products);




// let array = [1, 2, 3, 4, 5];

// let doubleArr = array.map((element) => {
//     console.log(this);
//     return element * 2;
// })

// console.log(doubleArr);




// let students = [{
//     name: "ali",
//     marks: 90
// }, {
//     name: "salma",
//     marks: 43
// }, {
//     name: "noreen",
//     marks: 65
// }, {
//     name: "hassan",
//     marks: 87
// }];

// let highAchievers = students.filter((student) =>{
//     if(student.marks > 85){
//         console.log(student);
//         return true;
//     }
// })

// console.log(highAchievers);
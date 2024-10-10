// Q no.01 Write an arrow function named arrayAverage that accepts an array of numbers
// and returns the average of those numbers.

// let marks = [15, 15, 15];

// const arrayAverage = (array) => {
//     let average = 0;
//     for(element of array){
//         average += element;
//     }
//     let result = average / (array.length);
//     return result;
// }


// Q no.02 Write an arrow function named isEven() that takes a single number as argument
//  and returns if it is even or not.

// const isEven = (a) => a % 2 == 0;


// Q no.03 Predict output:

const object = {
    message: "Hello, World!",

    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage(), 4000);


// Q no.04 Predict output:

// let length = 4;

// function callback(){
//     console.log(this.length);
// };

// const object2 = {
//     length: 5,

//     method(callback) {
//         callback();
//     }
// }

// object2.method(callback, 1, 2);














// const student = {
//     name: "ibrahim",
//     class: 13,
//     marks: 3.02,
//     address: "sahiwal",
//     fatherName: "snaullah",
//     phy: 15,
//     chem: 19,
//     eng: 23,
//     getAvg() {
//         try{
//             let average = (phy + chem + eng) / 3;
//             console.log(`${this.name} got ${average} average marks per subject.`);
//         } catch(err){
//             console.log(err);
//             let average = (this.phy + this.chem + this.eng) / 3;
//             console.log(`${this.name} got ${average} average marks per subject.`);
//         }
//     }
// }

// console.log(student.getAvg());


// const sum = (a, b) => a + b;

// const subtract = (a, b) => a - b;

// const cube = n => n * n * n; //implicit arrow function

// const multiply = (a, b) => a * b;

// const concat = (a, b) => a + b;


// console.log("Hi there");

// setTimeout(() => {
//     console.log("My Business!")
// }, 3000);

// console.log("welcome to");


// let id = setInterval(() => {
//     console.log("ki haaal ayyyyy?");
// }, 2000);

// let id2 = setInterval(() => {
//     console.log("o thieek ooooo?");
// }, 3000);


// const square = n => n * n;


// function printHello(a) {

//     let timeOut = a * 2000;

//     let id = setInterval(() => {
//         console.log("Hello World");
//     }, 2000);

//     setTimeout(() => {
//         clearInterval(id);
//     },timeOut);

// }
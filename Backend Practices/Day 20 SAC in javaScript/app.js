/// Different Functions

// let sum = (a, b) => {
//     return a+b;
// }

// const cube = n => {
//     return n*n*n;
// }

// function cubeF(n){
//     return n*n*n;
// }

// const cubeV = function(n){
//     return n*n*n;
// }



// setTimeout Function anotomy 

// console.log("salam");
// console.log("salam");

// setTimeout(() => console.log("Hey Salam, I'm new here"), 2000);

// console.log("w salam");
// console.log("w salam");

// setTimeout(() => console.log("w slam"), 2000);



// setInterval Function anotomy

//     let i=0;
// let id = setInterval(() => {
//     if(i===5){
//         console.log("kitni dafa or puchun?? 🙄");
//         clearInterval(id);
//     }else{
//         console.log(`${i}. Ksy hoo?`);
//     }
//     i++;
// }, 1000);

//Chotu gang things 😂

// let name = "Noman";
// let i=1;
// let id = setInterval(function () {
//     if(i <= 2){
//         console.log(`${i}. ${name} uu`);
//     }else if(i > 2 && i <= 4){
//         console.log(`${i}. teri aysi ki taysii`);
//     }else if(i > 4 && i <= 6){
//         console.log(`${i}. Baddmashi karna ayyn?`);
//     }else if(i > 6 && i <= 9){
//         console.log(`${i}. Samajh ayya?`);
//     }else{
//         clearInterval(id);
//     }
//     i++;
// }, 1500);


// mystery of this inside arrow & regular function

// const mystery = {
//     clue: "🔍 I know who THIS is!",
    
//     investigate: function () {
//         // Regular function
//         setTimeout(function() {
//             console.log("Regular function clue:", this.clue, this);
//         }, 1000);
        
//         console.log("function clue:", this.clue, this);

//         // Arrow function  
//         setTimeout(() => {
//             console.log("Arrow function clue:", this.clue, this);
//         }, 2000);
//     }
// };

// mystery.investigate();


// problem question 01

// let id = setInterval(() => console.log("Salam world!"), 2000);

// setTimeout(() => {
//     console.log("clear interval ran");
//     clearInterval(id);
// }, 10100);


// problem question 02

// let arrayAvg = (arr) => {
//     let avg = 0;
//     arr.map(n => (avg+=n));
//     return avg/arr.length;
// }

// let arrayAvg = (arr) => {
//     return arr.reduce((sum, n) => sum+n, 0)/arr.length;
// }


// problem 03

// const isEven = (n) => {
//     return n%2 === 0 ? true : false;
// }



// // problem 04

// let obj = {
//     message: "Salam world",

//     logMsg() {
//         console.log(this.message);
//     }
// };

// obj.logMsg(); //this knows what to print cause of obj is calling

// setTimeout(obj.logMsg, 1000); //this loses obj cause of setTimeout is invoking it and scope of setTimeout is Window.



// problem 05

// let length = 4;

// function callback(){
//     console.log(this);
//     console.log(this.length);
// }

// let object = {
//     length: 5,
//     method(callback) {
//         callback();
//         console.log(this);
//     }
// }

// object.method(callback);



// "Arrow functions look OUTSIDE themselves for THIS, Regular functions look at HOW THEY'RE CALLED... unless forced by 'new', 'call/apply/bind', or special browser rules!"

//     Arrow function? → Parent scope ✅

//     Used new? → New object ✅

//     Used call/apply/bind? → Forced context ✅

//     Event handler? → Target element ✅

//     Strict mode + no context? → undefined ✅

//     None of above? → Left of dot or window ✅

//     This covers 99% of cases! 
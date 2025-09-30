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




// console.log([1,2,3,4].every(n => n%2 === 0));//false
// console.log([2,4,6,8].every(n => n%2 === 0));//true

// console.log([1,3,5,7].some(n => n%2 === 0));//false
// console.log([1,2,3,4,5].some(n => n%2 === 0));//true




// console.log([1,2,3,4,5].reduce((accumulator, element) => accumulator + element));

// console.log([3,4,52,1,4,5,6,1,1,3,4,5,6,7,0,0,43].reduce((accumulator, element) => {
//     if(element > accumulator){
//         return element;
//     }else{
//        return accumulator; 
//     }
// }))





// problem 01

// if([10,20,30,40,89].every((element) => element%10 === 0)){
//     console.log("Yes all number's are multiple of 10");
// }else{
//     console.log("No, all numbers are not multiple of 10");
// }


// problem 02 finding minimum in array
// console.log([1,2,3,4,5,6,7].reduce((min, n) => n < min ? n : min));

// console.log([10,1,2,3,4,5,6,7,0].sort()[0]);

// function min(nums){
//     return nums.reduce((min, n) => n < min ? n : min);
// }



//Spread

// console.log(...[1,2,3,4,5,6]);

//objects are not iterable
// console.log(...{
//         name: "saleem",
//         age: 12
// })

// console.log(Math.min(...[1,2,3,4,5,5,6,7,7,0]))
// console.log(Math.max(...[1,2,3,4,5,5,6,7,7,0]))

// console.log(..."ibrahim");



// Wrong way to copy an array

// let arr = [1,2,3,4]
// let copy = arr;
// console.log(copy);

// arr.push(1);

// console.log(copy);


// Right way to copy an array using spreads

// let arr = [1,2,3,4,5];
// let copy = [...arr];
// console.log(copy);

// arr.push(1);

// console.log(copy);
// console.log(arr);


// Merging 2 arrays

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...odd, ...even];

// console.log(...nums);


//Convert string to array

// let name = "ibrahim"

// let nameArr = [...name];

// console.log(nameArr);




// spread with object literals

// let obj = {
//     name: "bahir likha h",
//     age: "temporary h",
//     language: "code ki"
// }

// let copyObj = {...obj, culture: "desi h"};

// console.log(copyObj);


// let name = "pta ni";
// let objStr = {...name};
// console.log(objStr);


// let nums = [1,2,3,4,5];
// let obj = {...nums};
// console.log(obj);



// //we can add infinite nums using this func cause of Rest(...nameOfArgumentsArray)
// function sum(...args){
//     return args.reduce((acc, el) => acc+el);
// }

// //args is an array of incoming arguments(can be infinite-1)
// function multiply(...args){
//     return args.reduce((res, el) => res*el);
// }

// function min(...argumentsArray){
//     return argumentsArray.reduce((min, el) => el < min ? el : min);
// }

// function max(...argsArray){
//     return argsArray.reduce((max, el) => el > max ? el : max);
// }




// Destructing objects

// let student = {
//     name: "ibrahim",
//     age: 21,
//     lang: "en",
//     address: ["nai abadi", "sahiwal"]
// }

// let {name, age, location: city = "Sahiwal", ...others} = student;





//// problem 01
////Square and sum the array elements using the arrow function and then find the
//// average of the array.

// let arr = [1,2,3,4,5,8]
// let sqSum = (arr) => {
//     return arr.reduce((sqSum, el) => sqSum + (el*el));
// }

// let avg = sqSum(arr)/arr.length;

// console.log(avg);



// // problem 02
////Create a new array using the map function whose each element is equal to the original element plus 5.

// let original = [1,2,3,4,-1];

// let newArr = original.map((el) => el + 5);

// console.log(newArr);



// // problem 03
//// Create a new array whose elements are in uppercase of words present in the

// original array.

// let original = ["ali", "salma", "usman", "shaveer"];

// let uppercase = original.map((el) => el.toUpperCase());

// console.log(uppercase);




// // problem 04
// // Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// // variable number of arguments. The function should return a new array with the original
// // array values and all of the additional arguments doubled.

// function doubleAndReturnArgs(array, ...args){
//     let newArr = [...array, ...args.map((el) => el+el)];
//     return newArr;
// }

// console.log(doubleAndReturnArgs([1,2,3,4], 1,2,3,4,5));



// // problem 05
// // Write a function called mergeObjects that accepts two objects and returns a new
// // object which contains all the keys and values of the first object and second object.

// function mergeObjects(obj1, obj2){
//     return {...obj1, ...obj2};
// }

// let student = {
//     name: "ibrahim",
//     age: 21,
//     city: "sahiwal"
// }

// let college = {
//     collegeName: "Aspire College",
//     collegeSince: 2002,
//     collegeCity: "sahiwal"
// }

// console.log(mergeObjects(student, college));
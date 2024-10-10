// let array = [1, 2, 3, 4, 5];

// array.forEach((el) => console.log(el));

// console.log("*****");

// function printArray(el){
//     console.log(el);
// };

// array.forEach(printArray);


// let studentData = [{
//     name: "ibrahim",
//     marks: 90
// },{
//     name: "noman",
//     marks: 91
// },{
//     name: "umair",
//     marks: 92
// }];

// let studentList = function(student){
//     console.log(student);
// }

// studentData.forEach(studentList);

// let marksInCGPA = studentData.map((el) => {
//     return el.marks / 10;
// })

// // for(elements of studentData){
// //     console.log(elements);
// // }



// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//     return el * 2;
// })



// let ranndomNumbers = [1, 3, 45, 6, 3, 8, 9, 0, 2, 5, 3, 7];

// let evenNumbers = ranndomNumbers.filter((el) => {
//     return el % 2 == 0; //True for evens, False for odd
// })



// let num = [1,1,3,4,5,6,7,6,8,9,8,5,6,3,2];

// let finalValue = num.reduce((result, el) => {
//     console.log(result);
//     return result + el;
// })



// let array = [1,2,3, 1,5,7,3,9];

// let max = array.reduce((max, el) => {
//     if (el > max) {
//         return el;
//     } else {
//         return max;
//     }
// })

// console.log(max);


// // let maxx = 0;

// // for (let i = 0; i < array.length; i++) {
// //     if (maxx < array[i]) {
// //         maxx = array[i];
// //     }
// // }

// // console.log(maxx);



// the program to find if, all elements of array are multiple of 10;

// let array = [10, 20, 5];

// let multipleOfTen = array.every((el) => el % 10 == 0);

// console.log(multipleOfTen);



//  the program to find min number of an array;

// let numbers = [-2, 2, 3, 4, 5, 0];

// function getMin(array) {
//     let min = numbers.reduce((min, el) => {
//         if (min < el) {
//             return min;
//         }else{
//             return el;
//         }
//     })
//     return min;
// }



// function min(...arguments) {
//     return arguments.reduce((min, el) => {
//         if (min < el) {
//             return min;
//         } else{
//             return el;
//         }
//     })
// }

// function sum(...arguments) {
//     return arguments.reduce((acc, el) => acc + el)
// }

// function sum(...arguments) {
//     return arguments.reduce(function(acc, el) {
//         return acc + el
//     })
// }



// let names = ["iron", "tony", "cheena", "meena", "keenu", "teenu"];

// let [winner, runnerUp, ...others] = names;


// let student = {
//     name: "ustad",
//     age: 65,
//     city: "malayria",
//     subjects: ["nasha patta", "duccyti specialist", "hunting", "comedy"],
//     username: "ustad@gmail.com",
//     password: "abcd"
// }

// let {name, age, id = "3310", ...others} = student;



/* Qs1. Square and sum the array elements using the arrow function and then find the
average of the array. */

// let array = [1, 2, 3];

// let result = array.reduce((acc,el) => (acc + el*el)/array.length);

// let averageOfSquareSum = (...arguments) => {
//     return arguments.reduce((acc,el) => (acc + el * el)/arguments.length);
// }



/*Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5*/

// let array = [1, 2, 3];

// let newArray = array.map((el) => el + 5);



/*Qs3. Create a new array whose elements are in uppercase of words present in the
original array.*/

// let array = ["ibrahim", "usman", "shahid"];

// let uppercaseArray = array.map((el) => el.toUpperCase());



/*Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled*/

// let array = [1, 2, 3];

// function doubleAndReturnArgs(array, ...arguments){
//     let newArray = array;
//     // newArray.push(...(array.map((el) => el * 2)));
//     newArray.push(...(arguments.map((el) => el * 2)));
//     return newArray;
// }



/*Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object*/

// object01 = {
//     name: "ibrar",
//     age: 19,
// }
// object02 = {
//     class: 10,
//     place: "sahiwal",
// }

// function mergeObjects(obj1, obj2){
//     let merged = {
//         ...obj1, 
//         ...obj2 
//     }
//     return merged;
// }




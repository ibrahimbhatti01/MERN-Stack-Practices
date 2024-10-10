    // Q #01
    /*Write a JS program to delete all occurrences of element ‘num’ in a given array.
    Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
    Result should be arr = [1, 3, 4, 5, 6, 3]*/

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// console.log("********");
// for(list of arr){
//     console.log(list);
// }
// console.log("********");
// let num = prompt("Enter the number you want to remove from the list completely :");
//     num = parseInt(num);
// while(arr.includes(num)){
//     console.log(arr.splice(arr.indexOf(num),1));
// }
// console.log("Number deleted successfully..!")
// console.log("********");
// for(list of arr){
//     console.log(list);
// }
// console.log("********");


    // Q #02
    /*Qs2. Write a JS program to find the no of digits in a number.
    Example : if number = 287152, count = 6*/

// let number = prompt("Enter any random number to check it's length :");
// console.log(`Length of the given number is '${number.length}' characters.`);


    // Q #03
    /*Qs3. Write a JS program to find the sum of digits in a number.
    Example : if number = 287152, sum = 25*/

// let number2 = prompt("Enter any random number to find sum of it's characters :");
// console.log(`Your given number is ${number2}`);
// console.log(`Length of the given number is '${number2.length}' characters.`);
// let sum = 0;
// for(let i=0; i<number2.length; i++){
//     intNum = parseInt(number2[i]);
//     sum = sum + intNum;
// }
// console.log(`The sum of all the characters in the number is '${sum}'.`);


    // Q #04
    /*Print the factorial of a number n.
    [Factorial of a number n is the product of all positive integers less than or equal to a
    given positive integer and denoted by that integer. ]
    Example :
    7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
    5! (factorial of 5) = 1x2x3x4x5 = 120
    3! (factorial of 3) = 1x2x3 = 6
    0! Is always 1*/

// let permission = prompt("Do you want to start calculating Factorial 'y/n'");
// if(permission != "n"){
//     let fact = prompt("Enter the number whoose factorial you want to calculate :");
//     while(fact == "" || fact == null){
//         fact = prompt("You must enter any number first! Enter :");
//     }
//     let result = 1;
//         for(let i = parseInt(fact); i>=1; i--){
//         result = result * i;
//         }
//     console.log(`Factorial of '${fact}' will be = ${result}`);
// }
// else{
//     console.log("Quitting...");
// }


    // Q #05
    // Qs5. Find the largest number in an array with only positive numbers.

let arr = [1, 2, 3, 4, 45, 6, 667, 8, 9];
let largest = 0;
for(let i=0; i<arr.length; i++){
    if(largest<arr[i]){
        largest = arr[i];
    }
}
console.log(`The largest number in the array is '${largest}'`);
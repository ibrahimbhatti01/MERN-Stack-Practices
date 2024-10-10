// function Poem() {
//     console.log("Twinkle Twinkle, little star");
//     console.log("How I wonder what you are?");
//     console.log("up Above the world so high.");
//     console.log("like a diamond in the sky.");
// };

// function Print1to5() {
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// };

// function isAdult(){
//     let age = 18;
//     if(age>=18){
//         console.log("adult");
//     }
//     else{
//         console.log("not adult");
//     };
// };

// function rollDice(){
//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);
// };

// function average(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// };

// function tableOf(n){
//     for(let i=1; i<=10; i++){
//         console.log(`${n} X ${i} = ${n*i}`);
//     };
// };

// function sum(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum += i;
//     };
//     return sum;
// }; 

// let str = ["hi","Hello","Bye","!"];
// function concString(str) {
//     let result = "";

//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }

//     return result;
// };

// let greet = function(){
//     console.log("Hello Boss!");
// };

// function mutipleGreet(func, n){
//     for(let i=1; i<=n; i++){
//         func();
//     }
// };



// let request = "odd";

// let oddOrEvenTest = function(request){
//     if(request == "odd"){
//         return function(n) {
//             console.log(!(n%2 == 0));
//         };
//     }else if(request == "even"){
//         return function(n) {
//             console.log(n%2 == 0);
//         };
//     }else{
//         console.log("Wrong request!");
//     };
// };



// const calculator = {
//     add: function(a, b){
//         console.log(a + b);
//     },
//     sub: function(a, b){
//         console.log(a - b);
//     },
//     mul: function(a, b){
//         console.log(a * b);
//     },
//     num: 35
// };



/*Qs#01. a JavaScript function that returns array elements larger than a number!*/

// function arrayElement(n){
//     let arr = [1,2,33,4,5,6,7,8,9];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>n){
//             console.log(arr[i]);
//         };
//     };
// };



/*Qs#02. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh” ans = “abcdefgh*/

// let str ="abbbbccdceeefffggghijklllmmmnnnoooooppppqqqrrrrssstttuuuuuvvvvwwwwxxxxyyyzzzzuiaasuidtuqwertyuiopasdfghjklzxcvbnm";
// function printUnique(string){
//     let uniqueCharacters = new Set();
//     for(let char of string){
//         uniqueCharacters.add(char);
//     };
//     return Array.from(uniqueCharacters).join("");
// };

// console.log(printUnique(str));



/*Qs#03. Write a JavaScript function that accepts a list of country names as input and 
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] output : 
"United States of America" */

// let country = ["Pakistan", "Bangladesh", "Veitnam", "United States of America"];

// function printLongest(array){
//     let longest = "";
//     for (let i=0; i<array.length; i++){
//         if(array[i].length > longest.length){
//             longest = array[i];
//         };
//     };
//     return longest;
// };

// console.log(printLongest(country));



/*Qs#04. Write a JavaScript function to count the number of vowels in a String 
argument.*/

// let name = "ibrahimbhattivhwifuowqdyquidhqiuhhxqhiuqwyet";
// function printVowelsInString(string){
//     let vowels = "aeiou";
//     let includes = [];
//     for(let i=0; i<string.length; i++){
//         if(vowels.includes(string[i])){
//             includes.push(string[i]);
//         };
//     };
//     console.log(includes.length);
//     console.log(includes.join(""));
// };
// console.log(printVowelsInString(name));



/*Qs5. Write a JavaScript function to generate a random number within a range 
(start, end)*/
function randomNumberGenerator(start, end){
    let range= end-start+1;
    console.log(Math.floor(Math.random()*range)+start);
};
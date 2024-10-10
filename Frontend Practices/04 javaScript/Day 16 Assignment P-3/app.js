// Before checking answer sheet!

/*//      Q #01
let array1 =[1, 2, 3, 4, 5];
let n1 = 2;
console.log(array1.slice(0, n1))

//      Q #02
let array2 = [7, 8, 9, -2, 0];
let n2 = 3;
console.log(array2.slice(-n2))

//      Q #03
let string = "";
console.log(string);


//      Q #04
let char = "Apna Business";
let n = 0;
console.log(char.slice(n, n+1));

//      Q #05
let str = "   hello!   ";
console.log(str.trim());

//      Q #06
let arr = ["bmw", "xuv", "bhugati", "porche"];
console.log(arr.includes("mercedes"));*/


//  After checking answer sheet!

//      Q #01
let array1 =[1, 2, 3, 4, 5];
let n1 = 2;
console.log(array1.slice(0, n1))

//      Q #02
let array2 = [7, 8, 9, -2, 0];
let n2 = 3;
console.log(array2.slice(-n2))

//      Q #03
let string = prompt("Please enter a string to check, if it's blank : ")
if(string.length != 0){
    console.log("Given sring isn't blank.")
}
else{
    console.log("Given string is blank.")
}

//      Q #04
let char = "Apna Business";
let n = 4;
if(char[n] == " "){
    console.log("Character at the given index is space.")
}
else if(char[n] == char[n].toLowerCase()){
    console.log("Character at the give index is in lowercase.")
}
else{
    console.log("Character at the given index is in uppercase.")
}


//      Q #05
let str = "   hello!   ";
console.log(str.trim());

//      Q #06
let arr = ["bmw", "xuv", "bhugati", "porche"];
if(arr.includes(prompt("Enter a string to search in array : "))){
    console.log("Your searched element is present in the array.")
}
else{
    console.log("Your search isn't valid.")
}

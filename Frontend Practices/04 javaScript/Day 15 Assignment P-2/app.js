/*let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");
let msg = alert(`Welcome ${firstName + " " + lastName}!`)*/

//      Q #01
let num = 21;
if(num%10 === 0){
    console.log("good");
}
else if(num%10 != 0){
    console.log("bad");
}

//      Q #02
let userName = prompt("Please enter your full name: ");
let userAge = prompt("Please enter your age: ");
let msg = alert(`${userName} is ${userAge} years old.`);

//      Q #03
let quartNum = 1;
switch(quartNum){
    case 1:
        console.log("Months in Quarter 1 : January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2 : April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3 : July, August, September");
        break;    
    case 4:
        console.log("Months in Quarter 4 : October, November, December");
        break;
    default:
        console.log("Quarter number: Out of order (1 - 4)")
}

//      Q #04
let str = "Aiimed";
if((str[0] === "a" || str[0] === "A") && str.length > 5){
    console.log("It is a golden string.");
}
else{
    console.log("It isn't a golden string.");
}

//      Q #05
let firstNum = 5;
let secNum = 5;
let thirdNum = 5;
if(firstNum == secNum && secNum == thirdNum){
    console.log("All the numbers are equal.")
}
else if(firstNum > secNum){
    if(firstNum > secNum){
        if(firstNum > thirdNum){
            console.log(`The greater number of these three numbers is first number: ${firstNum}`);
        }
        else if(thirdNum > firstNum){
            console.log(`The greater number of these three numbers is third number: ${thirdNum}`);
        }
        else if(firstNum == thirdNum){
            console.log("The first and the third numbers are equal.");
        }
    }
}
else if(secNum > firstNum){
    if(secNum > firstNum){
        if(secNum > thirdNum){
            console.log(`The greater number of these three numbers is second number: ${secNum}`);
        }
        else if(thirdNum > secNum){
            console.log(`The greater number of these three numbers is third number: ${thirdNum}`);
        }
        else if(secNum == thirdNum){
            console.log("The second and the third numbers are equal.");
        }
    }
}
else if(firstNum == secNum){
    console.log("The first and the second numbers are equal.");
}

//      Q #06
let num1 = "33";
let num2 = "47853";
if(num1[num1.length - 1] === num2[num2.length - 1]){
    console.log("The given two numbers have the same last digit, which is: " , num1[(num1.length) - 1]);
}
else{
    console.log("The given two numbers haven't the same last digit.");
}
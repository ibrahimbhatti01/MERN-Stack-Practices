// function generateRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let redInHex = red.toString(16);
//     let greenInHex = green.toString(16);
//     let blueInHex = blue.toString(16);

//     let randomColor = `rgb(${red},${green},${blue})`;

//     let randomColorInHex = `#${redInHex}${greenInHex}${blueInHex}`



//     let heading = document.querySelector("h1");
//     heading.innerText = randomColor;

//     heading.addEventListener("click",function(){
//         this.innerText = randomColorInHex;
//     })



//     let boxBackgroundColor = document.querySelector(".box");
//     boxBackgroundColor.style.border = `20px solid ${randomColorInHex}`;   
// }

// let input = document.querySelector(".box input");

// input.addEventListener("keydown", function(event){
//     console.dir(event.key);    
// })

// input.addEventListener("input", function(){

//     let para = document.querySelector(".box p");
//     para.innerText = this.value;
// })



// let btn = document.querySelector("button");

// btn.addEventListener("scroll", function(){
//     console.log("hey bro!")
// });

// let input = document.querySelector("input");

// input.addEventListener("scroll",function(){
//     console.log("hey bro!")
// });



// const element = document.querySelector("div#scroll-box");
// const output = document.querySelector("p#output");

// element.addEventListener("scroll", (event) => {
//   output.textContent = "Scroll event fired!";
//   setTimeout(() => {
//     output.textContent = "Waiting on scroll events...";
//   }, 1000);
// });



// window.addEventListener("load", (event) => {
//     console.log("page is fully loaded");
//   });



// Select the input and the h2 element
const input = document.getElementById('nameInput');
const displayName = document.getElementById('displayName');
const errorMsg = document.getElementById("errorMsg");
errorMsg.style.display = 'none';

// Add an event listener to the input element
input.addEventListener('input', function() {

// Filter the input value to allow only letters and spaces
const filteredInput = this.value.replace(/[^a-zA-Z]/g, ' ');
    
// Update the h2 element with the filtered name
displayName.innerText = filteredInput;

    if(/[^a-zA-Z, ' ']/g.test(this.value)){
        errorMsg.style.display = 'inline';
        errorMsg.style.color = 'red';
    } else{
        errorMsg.style.display = 'none';
    }
});
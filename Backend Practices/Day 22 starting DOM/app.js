// function shake() {
//     // Get the html element to shake the entire page
//     const html = document.documentElement;
    
//     // Store original position to restore later
//     const originalPosition = html.style.position;
//     const originalTop = html.style.top;
//     const originalLeft = document.body.style.left;
    
//     // Set relative positioning if not already set
//     if (getComputedStyle(html).position === 'static') {
//         html.style.position = 'relative';
//     }
    
//     // Shake parameters
//     const intensity = 20; // Maximum shake distance in pixels
//     const duration = 90 // Shake duration in milliseconds
//     const interval = 20; // Time between each shake movement in milliseconds
//     const shakes = duration / interval; // Total number of shakes
    
//     let currentShake = 0;
    
//     // Create the shake animation
//     const shakeInterval = setInterval(() => {
//         // Random offsets for each shake
//         const randomX = (Math.random() - 0.5) * 2 * intensity;
//         const randomY = (Math.random() - 0.5) * 2 * intensity;
        
//         // Apply the shake
//         html.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
//         currentShake++;
        
//         // Stop shaking after duration
//         if (currentShake >= shakes) {
//             clearInterval(shakeInterval);
            
//             // Reset to original position with smooth transition
//             html.style.transition = 'transform 0.3s ease';
//             html.style.transform = 'translate(0, 0)';
            
//             // Clean up after transition
//             setTimeout(() => {
//                 html.style.transition = '';
//                 html.style.position = originalPosition;
//                 html.style.top = originalTop;
//                 html.style.left = originalLeft;
//             }, 300);
//         }
//     }, interval);
// }

// let ans;
//     ans = prompt("are you pakistani? y/n ↓ ");
//     if(ans === 'y'){ 
//         document.all[10].innerText = "peter-saleem";
//     }else if(ans != 'y' && ans != 'n'){
//         shake();
//         setTimeout(() => {
//             alert("your answer is wrong.");
//         }, 150); // Small delay to let shake start
//     }else{
//         document.all[10].innerText = "peter-parker";
//     }





// let imgs = document.getElementsByTagName("img");

// for(let i=0; i<imgs.length; i++){
//     imgs[i].src = "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
// }




// let oluluObject = document.getElementById("olulu");

// console.dir(oluluObject); //object



// let collection = document.getElementsByClassName("peepee");

// if(collection.length) //cause it can return empty collection
//     console.dir(collection);//HTMLCollection








// let imgs = document.querySelector("img"); //select by tag

// console.dir(imgs); //single first img tag object

// //  imgs.src = "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80";




// let oluluObject = document.querySelector("#olulu"); //select by id,
// //if there'll be multiple, select and return first

// console.dir(oluluObject); //object




// let collection = document.querySelector(".peepee"); //select by class name

// console.dir(collection);//object





// let allImgs = document.querySelectorAll("div img"); //select all, or all nested ones

// console.dir(allImgs); //NodeList array of objects




// console.log(document.querySelector("img").getAttribute("src"));

// document.querySelector("img").setAttribute("class", "firstImage");




// console.dir(document.querySelector("img").style);

// document.querySelector("img").style.cursor = "grab";



////failed idea
// let length = document.all.length;
// while(length){
//     document.all[length];
//     length--;
// }




// console.dir(document.querySelector("div").classList);

// document.querySelector("div").classList.add("yellowBg");

// document.querySelector("div").classList.remove("yellowBg");

// console.log(document.querySelector("div").classList.contains("yellowBg")); //false

// document.querySelector("div").classList.toggle("yellowBg"); //added class to classList

// console.dir(document.querySelector("div").classList);





// console.dir(document.querySelector("div").parentElement); //header

// console.dir(document.querySelector("div").children); //HTMLCollection of 2 childs

// console.dir(document.querySelector("div").childElementCount); //2


// console.dir(document.querySelector("div").previousElementSibling); //null

// console.log(document.querySelector("div").nextElementSibling); //web effect div






// let body = document.querySelector("body");

// let container = document.createElement("div");
// body.insertAdjacentElement("afterbegin",container);

// container.classList.add("container");



// let p = document.createElement("p");

// container.appendChild(p);
// p.append("Hey I'm red!");
// p.style.color = "red";



// let h3 = document.createElement("h3");

// container.appendChild(h3);
// h3.innerText = "I'm a blue h3!";
// h3.style.color = "blue";



// let div = document.createElement("div");
// container.append(div);
// div.style.border = "1px solid black";
// div.style.background = "pink";



// let h1 = document.createElement("h1");
// div.append(h1);
// h1.innerText = "I'm in a div";


// let pInDiv = document.createElement("p");
// div.appendChild(pInDiv);
// pInDiv.append("ME TOO!");






// Qsl. Create a new input and button element on the page using JavaScript only. Set the

// text of button to "Click me'

let input = document.createElement("input");
let button = document.createElement("button");

let body  = document.querySelector("body");
body.prepend(button);
body.prepend(input);

button.innerText = "Press me";


// Qs2. Add following attributes to the element :

// Change placeholder value of input to "username"
// Change the id of button to "btn'

input.placeholder = "username";
button.id = "btn";


// Qs3. Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.

document.querySelector("#btn").style.background = "blue";
document.querySelector("#btn").style.color = "white";


// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
body.prepend(h1);

h1.classList.add("custom-title");


// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.

let pTag = document.createElement("p");
pTag.innerHTML = `Apna Vision <b>Delta</b> Practice`;
body.insertAdjacentElement("afterbegin", pTag);
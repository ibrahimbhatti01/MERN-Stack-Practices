function shake() {
    // Get the html element to shake the entire page
    const html = document.documentElement;
    
    // Store original position to restore later
    const originalPosition = html.style.position;
    const originalTop = html.style.top;
    const originalLeft = document.body.style.left;
    
    document.querySelector("body").style.backgroundColor = "red";


    // Set relative positioning if not already set
    if (getComputedStyle(html).position === 'static') {
        html.style.position = 'relative';
    }
    
    // Shake parameters
    const intensity = 20; // Maximum shake distance in pixels
    const duration = 90 // Shake duration in milliseconds
    const interval = 20; // Time between each shake movement in milliseconds
    const shakes = duration / interval; // Total number of shakes
    
    let currentShake = 0;
    
    // Create the shake animation
    const shakeInterval = setInterval(() => {

        // Random offsets for each shake
        const randomX = (Math.random() - 0.5) * 2 * intensity;
        const randomY = (Math.random() - 0.5) * 2 * intensity;
        
        // Apply the shake
        html.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        currentShake++;
        
        // Stop shaking after duration
        if (currentShake >= shakes) {
            clearInterval(shakeInterval);
            
            // Reset to original position with smooth transition
            html.style.transition = 'transform 0.3s ease';
            html.style.transform = 'translate(0, 0)';
            
            // Clean up after transition
            setTimeout(() => {
                html.style.transition = '';
                html.style.position = originalPosition;
                html.style.top = originalTop;
                html.style.left = originalLeft;
            }, 300);
        }

        document.querySelector("body").style.backgroundColor = "";
    }, interval);
}



console.log(document.querySelector("button").getAttribute("onmouseenter"));

console.log(document.querySelector("button").nextElementSibling.getAttribute("onclick"));








// let fan = document.querySelector(".fanToggle");

// function fanToggle(){
//     if(fan.classList.contains("off")){
//         fan.classList.remove("off");
//         alert("Turning on the Fan");
//         fan.classList.add("on");
//     }else{
//         fan.classList.remove("on");
//         alert("Turning off the Fan");
//         fan.style.backgroundColor = "";
//         fan.classList.add("off");
//     }
// }

// fan.onclick = fanToggle;

// let light = document.querySelector(".lightToggle");

// function lightToggle(){
//     if(light.classList.contains("lightOff")){
//         light.classList.remove("lightOff");
//         alert("Turning on the light");
//         light.innerText = "🔦💡";
//         light.classList.add("lightOn");
//     }else{
//         light.classList.remove("lightOn");
//         alert("Turning off the light");
//         light.innerText = "🔦";
//         light.style.backgroundColor = "";
//         light.classList.add("lightOff");
//     }
// }

// light.onclick = lightToggle;




let fan = document.querySelector(".fanToggle");
fan.title = "fan";

let light = document.querySelector(".lightToggle");
light.title = "light";

function toggleOnOff(){
    if(this.title == "fan"){
        if(this.classList.contains("off")){
            this.classList.remove("off");
            alert("Turning on the Fan");
            this.classList.add("on");
        }else{
            this.classList.remove("on");
            alert("Turning off the Fan");
            this.style.backgroundColor = "";
            this.classList.add("off");
        }
    }else{
        if(this.classList.contains("lightOff")){
            this.classList.remove("lightOff");
            alert("Turning on the light");
            this.innerText = "🔦💡";
            this.classList.add("lightOn");
        }else{
            this.classList.remove("lightOn");
            alert("Turning off the light");
            this.innerText = "🔦";
            this.style.backgroundColor = "";
            this.classList.add("lightOff");
        }
    }
}

fan.addEventListener("click", toggleOnOff);
light.addEventListener("click", toggleOnOff);








let hi = document.querySelector(".sayHi");

function sayHi(){
    alert("Hi");
}

function sayName(){
    alert("Hi ibrahim");
}

// hi.onclick = sayHi; //will not work
// hi.onclick = sayName;

hi.addEventListener("click", sayHi); //will work
hi.addEventListener("click", sayName); //will work








let h3Content = document.querySelector(".colorH3").innerText;

function generateRandomColor(){
    let R = Math.floor(Math.random()*256);
    let G = Math.floor(Math.random()*256);
    let B = Math.floor(Math.random()*256);

    let colorH3 = document.querySelector(".colorH3");
    let colorDiv = document.querySelector(".colorDiv");

    colorDiv.style.backgroundColor = `rgb(${R},${G},${B})`;
    colorH3.style.color = `rgb(${R},${G},${B})`;
    colorH3.innerText = `rgb(${R},${G},${B})`;
}

function resetRandomColor() {
    let colorH3 = document.querySelector(".colorH3");
    let colorDiv = document.querySelector(".colorDiv");

    colorDiv.style.backgroundColor = "";
    colorH3.style.color = "";
    colorH3.innerText = h3Content;
}


let colorBtn = document.querySelector(".colorBtn");
colorBtn.addEventListener("click", generateRandomColor);

let colorResetBtn = document.querySelector(".colorResetBtn");
colorResetBtn.addEventListener("click", resetRandomColor);






// colorResetBtn.addEventListener("click", function() {console.log(this)}); //colorResetBtn
// colorResetBtn.addEventListener("click", () => {console.log(this)}); //window






let input = document.querySelector(".input");
let submit = document.querySelector(".submit");

input.addEventListener("keyup", function(event) {
    console.log("key Code = ", event.code);
    console.log("key = ", event.key);
})







let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();//prevent all the default values/actions/operations
    console.dir(event);
    console.dir(this);
    console.dir(this.elements);
    console.log(this.elements[0].value);
})






let textArea = document.querySelector("#textArea");
// textArea.addEventListener("input", function(event) {
//     console.log(event.data);//data in every single input
//     console.dir(this.value);//changing value of textArea
//     console.dir(event.target.value);//changing value of textArea
// })

textArea.addEventListener("change", function(event) {
    // console.log(event.data);//invalid, change event do not have data
    // console.dir(this.value);
    // console.dir(event);
})

let textInput = document.querySelector(".textInput");
textInput.addEventListener("input", function(event){
    // console.log(event.data);
    textArea.value = this.value;
})

textInput.addEventListener("change", function(event){
    this.value = "";
})





let scrollBox = document.querySelector("#scroll-box");
let outputMsg = document.querySelector("#output");

scrollBox.addEventListener("scroll", function(){
    outputMsg.innerText = "Scroll event fired!";
    setTimeout(() => {
        // console.log(this);
        outputMsg.innerText = "Waiting on scroll events..";
    }, 1000);
    console.log("waiting done");
})



// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.

let body = document.querySelector("body");
let greenBtn = body.insertAdjacentElement("afterbegin", document.createElement("button"));
greenBtn.innerText = "click black magic";
greenBtn.addEventListener("click", function(){
    if(greenBtn.style.color == ""){
        greenBtn.style.color = "green";
        greenBtn.innerText = "click green magic";
    }
    else{
        greenBtn.style.color = "";
        greenBtn.innerText = "click black magic";
    }
})



let nameH2 = document.querySelector(".nameH2");
let inputH2 = document.querySelector(".inputH2");

let defaultName = nameH2.innerText;

inputH2.addEventListener("input", function(event){
    if(inputH2.value.length){
        //replace any character outside of ↓ a-z, A-Z, " " with "";
        this.value = this.value.replace(/[^a-z ]/ig, '');
        nameH2.innerText = inputH2.value;
        if( !inputH2.value.length ) 
            nameH2.innerText = defaultName;
    }
    else
        nameH2.innerText = defaultName;
})
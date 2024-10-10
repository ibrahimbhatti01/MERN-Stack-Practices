    /*Qsl. Create a new input and button element on the page using JavaScript only. Set the
    text of button to "Click me'*/

let input = document.createElement("input");

let button = document.createElement("button");

document.querySelector("body").append(input);

document.querySelector("body").append(button);
button.innerText = "Click me";



    /*Qs2. Add following attributes to the element :
          - Change placeholder value of input to "username"
          - Change the id of button to "btn'*/

// input.placeholder = "username";
// button.id = "btn";

input.setAttribute("placeholder","username");
button.setAttribute("id","btn");


    /*Qs3. Access the btn using the querySelector and button id. Change the button background 
    color to blue and text color to white.*/

document.querySelector("#btn").classList.add("bluebg", "whiteText");



    /*Qs4. Create an h1 element on the page and set its text to "DOM Practice" underlined. 
    Change its color to purple.*/

let h1 = document.createElement("h1");
h1.innerHTML = " <u> DOM Practice </u> ";

h1.classList.toggle("purpleText");

document.querySelector("body").append(h1);
// // let deleteBtn = document.querySelectorAll(".delete-btn");

// let lis = document.querySelectorAll(".todo-list li");
// let todoCount = 0;
// for(li of lis){
//     console.log(li.innerText);
//     storeTodo(li.innerText);
//     todoCount++;
// }
// // console.log(todoCount);


// document.addEventListener("DOMContentLoaded", loadTodo);

// let count = localStorage.length-1;
// function loadTodo(){
//     console.log("inside load func");
//     while(localStorage.key(count)){
//         let tempLi = todoList.insertAdjacentElement("afterbegin",document.createElement("li"));

//         tempLi.innerText = localStorage.getItem(localStorage.key(count));
//         // storeTodo(tempLi.innerText);

//         let img = document.createElement("img");
//         img.src = "trash.svg";
//         img.classList.add("delete");

//         let deleteBtn = document.createElement("button");
//         deleteBtn.appendChild(img);
//         deleteBtn.classList.add("delete-btn")

//         tempLi.appendChild(deleteBtn);
//         console.log(count);
//         count--;
//     }
// }


// function storeTodo(text){
//     localStorage.setItem(`${text}`, `${text}`);
//     // console.log(text);
// }

// function deleteTodo(text){
//     // console.log(text);
//     localStorage.removeItem(`${text}`);
// }

// let todoList = document.querySelector(".todo-list");
// let todoInput = document.querySelector(".todo-input");
// todoInput.addEventListener("change", function (event){
//     let tempLi = todoList.insertAdjacentElement("afterbegin",document.createElement("li"));

//     tempLi.innerText = this.value.trim();
//     storeTodo(tempLi.innerText);

//     let img = document.createElement("img");
//     img.src = "trash.svg";
//     img.classList.add("delete");

//     let deleteBtn = document.createElement("button");
//     deleteBtn.appendChild(img);
//     deleteBtn.classList.add("delete-btn")

//     tempLi.appendChild(deleteBtn);

//     this.value = "";
//     // deleteBtn = document.querySelectorAll(".delete-btn");
//     // console.log(deleteBtn);
// })


// ////This code logic will not work, so we will use event delegation
// // deleteBtn = document.querySelectorAll(".delete-btn");
// // for(btn of deleteBtn){
// //     btn.addEventListener("click", function(){
// //         this.style.backgroundColor = "#B22222";
// //         setTimeout(() => this.style.backgroundColor = "", 80)

// //         console.log(this);

// //         setTimeout(() => this.parentElement.remove(), 80);
// //     })
// // }


// todoList.addEventListener("click", function(event){
//     // console.log(this);//UL
//     // console.dir(event.target.nodeName);//UL or any child of it
//     if(event.target.nodeName == "BUTTON" || event.target.nodeName == "IMG"){
//         if(event.target.nodeName == "BUTTON"){
//             event.target.style.backgroundColor = "#B22222";
//             setTimeout(() => event.target.style.backgroundColor = "", 80)

//             setTimeout(() => {
//                 deleteTodo(event.target.parentElement.innerText);
//                 event.target.parentElement.remove()
//             }, 80);
//         }else{ //In case image inside button is clicked
//             event.target.parentElement.style.backgroundColor = "#B22222";
//             setTimeout(() => event.target.parentElement.style.backgroundColor = "",80)

//             setTimeout(() => {
//                 deleteTodo(event.target.parentElement.parentElement.innerText);
//                 event.target.parentElement.parentElement.remove()
//             }, 80);
//         }
//     }
// })




// DOM Elements
let todoList = document.querySelector(".todo-list");
let todoInput = document.querySelector(".todo-input");

// Store initial hardcoded todos in localStorage
let lis = document.querySelectorAll(".todo-list li");
let todoCount = 0;
for (li of lis) {
    storeTodo(li.innerText);
    todoCount++;
}

// Load saved todos when page loads
document.addEventListener("DOMContentLoaded", loadTodo);

// Add new todo on input change
todoInput.addEventListener("change", function (event) {
    let tempLi = todoList.insertAdjacentElement("afterbegin", document.createElement("li"));
    tempLi.innerText = this.value.trim();
    storeTodo(tempLi.innerText);
    
    let deleteBtn = updateDeleteUi();
    
    tempLi.appendChild(deleteBtn);
    this.value = "";
});

// Event delegation for delete functionality
todoList.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON" || event.target.nodeName == "IMG") {
        if (event.target.nodeName == "BUTTON") {
            // Visual feedback
            event.target.style.backgroundColor = "#B22222";
            setTimeout(() => event.target.style.backgroundColor = "", 80);
            
            // Remove from DOM and storage
            setTimeout(() => {
                deleteTodo(event.target.parentElement.innerText);
                event.target.parentElement.remove();
            }, 80);
        } else {
            // Handle image click (inside button)
            event.target.parentElement.style.backgroundColor = "#B22222";
            setTimeout(() => event.target.parentElement.style.backgroundColor = "", 80);
            
            // Remove from DOM and storage
            setTimeout(() => {
                deleteTodo(event.target.parentElement.parentElement.innerText);
                event.target.parentElement.parentElement.remove();
            }, 80);
        }
    }
});

// Load todos from localStorage
let count = localStorage.length - 1;
function loadTodo() {
    while (localStorage.key(count)) {
        let tempLi = todoList.insertAdjacentElement("afterbegin", document.createElement("li"));
        tempLi.innerText = localStorage.getItem(localStorage.key(count));
        
        let deleteBtn = updateDeleteUi();
        
        tempLi.appendChild(deleteBtn);
        count--;
    }
}

function updateDeleteUi(){
        let img = document.createElement("img");
        img.src = "trash.svg";
        img.classList.add("delete");
        
        let deleteBtn = document.createElement("button");
        deleteBtn.appendChild(img);
        deleteBtn.classList.add("delete-btn");

        return deleteBtn;
}

// Save todo to localStorage
function storeTodo(text) {
    localStorage.setItem(`${text}`, `${text}`);
}

// Remove todo from localStorage
function deleteTodo(text) {
    localStorage.removeItem(`${text}`);
}
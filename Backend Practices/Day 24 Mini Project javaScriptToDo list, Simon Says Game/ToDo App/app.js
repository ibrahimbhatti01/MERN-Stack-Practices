// let deleteBtn = document.querySelectorAll(".delete-btn");
let todoList = document.querySelector(".todo-list");
let todoInput = document.querySelector(".todo-input");
todoInput.addEventListener("change", function (event){
    let tempLi = todoList.insertAdjacentElement("afterbegin",document.createElement("li"));

    tempLi.innerText = this.value.trim();

    let img = document.createElement("img");
    img.src = "trash.svg";
    img.classList.add("delete");

    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(img);
    deleteBtn.classList.add("delete-btn")

    tempLi.appendChild(deleteBtn);

    this.value = "";
    // deleteBtn = document.querySelectorAll(".delete-btn");
    // console.log(deleteBtn);
})


////This code logic will not work, so we will use event delegation
// deleteBtn = document.querySelectorAll(".delete-btn");
// for(btn of deleteBtn){
//     btn.addEventListener("click", function(){
//         this.style.backgroundColor = "#B22222";
//         setTimeout(() => this.style.backgroundColor = "", 80)

//         console.log(this);

//         setTimeout(() => this.parentElement.remove(), 80);
//     })
// }


todoList.addEventListener("click", function(event){
    // console.log(this);//UL
    // console.dir(event.target.nodeName);//UL or any child of it
    if(event.target.nodeName == "BUTTON" || event.target.nodeName == "IMG"){
        if(event.target.nodeName == "BUTTON"){
            event.target.style.backgroundColor = "#B22222";
            setTimeout(() => event.target.style.backgroundColor = "", 80)

            setTimeout(() => event.target.parentElement.remove(), 80);
        }else{ //In case image inside button is clicked
            event.target.parentElement.style.backgroundColor = "#B22222";
            setTimeout(() => event.target.parentElement.style.backgroundColor = "",80)

            setTimeout(() => event.target.parentElement.parentElement.remove(), 80);
        }
    }
})
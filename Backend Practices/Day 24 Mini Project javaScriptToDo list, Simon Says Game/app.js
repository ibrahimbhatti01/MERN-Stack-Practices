let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function(event){
    //use stopPropagation to stop event bubbling
    event.stopPropagation();
    console.log("div was clicked");
})

ul.addEventListener("click", function(event){
    //use stopPropagation to stop event bubbling
    event.stopPropagation();
    console.log("ul was clicked");
})

for(li of lis){
    li.addEventListener("click", function(event){
        //use stopPropagation to stop event bubbling
        event.stopPropagation();
        console.log("li was clicked");
})}








let todoList = document.querySelector(".todo-list");
let todoInput = document.querySelector(".todo-input");
todoInput.addEventListener("change", function (event){
    let tempLi = todoList.insertAdjacentElement("afterbegin",document.createElement("li"));
    tempLi.innerText = this.value.trim();
    this.value = "";
})
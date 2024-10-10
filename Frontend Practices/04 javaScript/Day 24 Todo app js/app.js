let input = document.querySelector("#taskInput");
let addTaskBtn = document.querySelector("#addTaskBtn");
let ul = document.querySelector("ul");
let deleteBtns = document.querySelectorAll(".delete")
let list = document.createElement("li");

addTaskBtn.addEventListener("click", function(){
    if(input.value != "" && input.value != " "){
        let list = document.createElement("li");

        let task = input.value;
        list.textContent = task;
        ul.appendChild(list);

        let delBtn = document.createElement("button");
        list.appendChild(delBtn);
        delBtn.classList.add("delete");
        delBtn.textContent = "delete";

        input.value = "";
}});



/* We've used Even Delegation (event bubbling) programming method, by using this
 we can trigger new buttons using pprevious event listener, How can we do this is
 just we add event listener to the parent of that required thing to be triggered.*/

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})
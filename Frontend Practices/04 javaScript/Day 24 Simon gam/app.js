let h3 = document.querySelector("h3");
let container = document.querySelector(".container");
let h2 = document.querySelector("h2");
let body = document.querySelector("body");

let colors = ["yellow", "green", "red", "blue"];

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 200); 
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = colors[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(`game seq: ${gameSeq}`);
    setTimeout( () => {btnFlash(randBtn)}, 300);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(() => {
                levelUp();
            }, 250);
        }
    } else {
        h3.innerText = `Game Over! Press any key to start`;
        h2.innerText = `High Score ${Math.max(level - 1)}`
        
        body.classList.add("gameOver");
        setTimeout(() => {
            body.classList.toggle("gameOver")
        }, 250)

        reset();
    }
}

function btnPress(){
    let btn = this;

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(`user seq: ${userSeq}`);

    btnFlash(btn);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".button");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
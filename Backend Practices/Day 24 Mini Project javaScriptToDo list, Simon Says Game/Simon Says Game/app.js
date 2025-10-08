let gameSeq = [];
let userSeq = [];
let buttons = document.querySelectorAll(".box");

let gameStarted = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(!gameStarted){
        gameStarted = true;

        document.querySelector(".title").innerText = `Simon Says Gam 3`;

        levelUpdate();
    }
})

// do simple button flash
function buttonFlash(button, delay = 0){
    setTimeout(() => {
        button.style.backgroundColor = "white";
        setTimeout(() => {
            //remove inline style, cs style will be applied back
            button.style.backgroundColor = "";
        }, 200);
    }, delay)
}

//generate new button flash to buildup sequence
function genRandButtonFlash(delay = 0){
    let randomBtn = Math.floor(Math.random()*4);
    buttonFlash(buttons[randomBtn], delay);
    return buttons[randomBtn];
}

//compare and check both sequences
function checkSeq(){
    for(let i=0; i<userSeq.length; i++){
        if(!(gameSeq[i] === userSeq[i]))
            return false;
    }
    return true;
}

//update the level
function levelUpdate(){
    if(level++)
        userSeq = [];

    gameSeq.push(genRandButtonFlash());
    document.querySelector(".score-board").innerText = `Level ${level}`;

    //Take and buildUp user sequence
    for(userBtn of document.querySelectorAll(".box")){
        userBtn.addEventListener("click", inputUserSeq);
    }
}

function gameOver(){
    const highestScore = level-1;
    console.log(highestScore);
    document.querySelector(".score-board").innerHTML = `Game Over 😙, Your Score is: <b>${highestScore}</b> <br> Press any key to continue.`;
    document.querySelector("body").style.backgroundColor = "#B00020";

    if(highestScore < 4){
        document.querySelector(".title").innerText = `Hmm, Keep it up 😁`;
    }else if(highestScore < 7 && highestScore > 3){
        document.querySelector(".title").innerText = `Ahh, Played well, Here's your Toy 🍭😁`;
    }else {
        document.querySelector(".title").innerText = `Dang, Genius is here 😃. You deserve 🍏`;
    }

    setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "";
    }, 150);

    console.log(gameSeq);
    console.log(userSeq);
    gameSeq = [];
    userSeq = [];

    for(userBtn of document.querySelectorAll(".box")){
        userBtn.removeEventListener("click", inputUserSeq);
    }

    gameStarted = false;
    level = 0;

    return;
}

function inputUserSeq(event){
    if(userSeq.length <= gameSeq.length){
        // console.log(this);
        userSeq.push(event.target);
        buttonFlash(event.target);
        if(!checkSeq())
            setTimeout(() => gameOver(), 200);
        else if(userSeq.length === gameSeq.length){
            for(userBtn of document.querySelectorAll(".box")){
                userBtn.removeEventListener("click", inputUserSeq);
            }
            setTimeout(() => levelUpdate(), 500);
        }
    }
}
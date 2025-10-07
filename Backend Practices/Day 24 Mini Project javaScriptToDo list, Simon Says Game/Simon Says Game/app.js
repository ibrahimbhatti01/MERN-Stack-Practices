let gameSeq = [];
let userSeq = [];
let buttons = [];

let gameStarted = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(!gameStarted){

        for(btn of document.querySelectorAll(".box")){
            buttons.push(btn);
        };

        console.log("key pressed, game started");

        levelUpdate();
        
        gameStarted = true;
    }
})

// do simple button flash
function buttonFlash(button){
    button.style.backgroundColor = "white";
    setTimeout(() => {
        //remove inline style, cs style will be applied back
        button.style.backgroundColor = "";
    }, 150);
}

//generate new button flash to buildup sequence
function genRandButtonFlash(){
    let randomBtn = Math.floor(Math.random()*4);

    ////it'll just work with using window.getComputedStyle("element");
    // let btnColor = buttons[randomBtn].style.backgroundColor;
    // console.log(btnColor);

    //style inline, which has more specificity
    buttons[randomBtn].style.backgroundColor = "white";
    setTimeout(() => {
        //remove inline style, cs style will be applied back
        buttons[randomBtn].style.backgroundColor = "";
    }, 150);

    return buttons[randomBtn];
}

//compare and check both sequences
function checkSeq(){
    for(let i=0; i<=level; i++){
        if(!(gameSeq[i] === userSeq[i]))
            return false;
    }
    return true;
}

//update the level
function levelUpdate(){
    level++;

    for(btn of gameSeq){
        buttonFlash(btn);
    }

    document.querySelector(".score-board").innerText = `Level ${level}`;

    gameSeq.push(genRandButtonFlash());

    inputUserSeq();

    // if(checkSeq()){
    //    userSeq = [];
    //    levelUpdate();}
    // else
    //    gameOver();
}

function gameOver(){
    document.querySelector(".score-board").innerText = `Game Over, Your Highest Score Was: ${level}`;
    document.querySelector("*").style.color = "#B00020";

    setTimeout(() => {
        document.querySelector("*").style.color = "";
    }, 100);
}

function inputUserSeq(){
    for(let i=1; i<=level; i++){
        //Take and buildUp user sequence
        for(userBtn of document.querySelectorAll(".box")){
            userBtn.addEventListener("click", function(){
                userSeq.push(this);
                buttonFlash(this);
            })
        }
    }
}
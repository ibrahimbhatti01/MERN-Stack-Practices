let n = prompt("Enter the max number.");

if(n == "Quit" || n == "quit"){
    console.log("Quitting the game...");
}
else{
    let nGen = Math.floor( Math.random() * n ) + 1;
    //  console.log(nGen);
    let nGuess = prompt("Guess a number :");
    while(true){
        if(nGuess == "quit" || nGuess == "Quit"){
            console.log("Quitting the game...");
            break;
        }
        if(nGuess == nGen){
            console.log("Congrats! You win, The Random number was:", nGen);
            break;
        }
        else if(nGuess > nGen){
        nGuess = prompt("hint: Your guessed number is too large. Try again: ");
        }
        else{
        nGuess = prompt("hint: Your guessed number is too small. Try again: ");
        } 
    }
}
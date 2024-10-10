// let n = prompt("Which table do you want?")
// for(let i=1; i<=10; i++){
//     console.log(`${n} X ${i} = ${n*i}`);
// }

// let n = prompt("which table do you want?");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// let favMovie = "Sufna";
// let game = prompt("Guess my favourite movie : ");
// while(game != favMovie){
//     if(game == "quit" || game == "Quit"){
//         console.log("Game ended!");
//         break;
//     }
//     console.log("Wrong Attempt!");
//     game = prompt("Wrong attempt! Guess again : ");
// }
// if(game == favMovie){
//     console.log("Congrats!! You won.")
// }


// let fruits = [ "banana", "mango", "litchi", "dates", "watermelon" ]
// let i = 0;
// while(i<fruits.length){
//     console.log(i, fruits[i]);
//     i++;
// }


// let result = [
//     ["anas", 54, "A"],
//     ["usaid", 55, "B"],
//     ["sheikh", 52, 'C']
// ];
// let caption = ["name", "marks", "grade"]
// for(i=0; i<result.length; i++){
//     console.log("Result of Std #", i+1);
//     for(j=0; j<result[i].length; j++){
//         console.log(caption[j], ": ", result[i][j]);
//     }
// }


// let heroes = ["name", "marks", "grade"];
// for(char of heroes){
//     console.log(char);
// }


//      TODO App Program

let tasks = ["code",  "coffee", "workout", "repeat", "get repeated"];
    console.log("--------------------");
    for(i=0; i<tasks.length; i++){
        console.log(i+1, tasks[i]);
    }
    console.log("--------------------");
    console.log("Type 'add' to add a task.");
    console.log("Type 'delete' to delete a task.");
    console.log("Type 'list' to list added tasks.");
    console.log("Type 'quit' to close the app.");
let ask = prompt("Enter what do you wanna do.");
while(true){
    if(ask == "quit" || ask == "Quit"){
        console.log("Quitting the app...");
        break;
    }
    if(ask == "add" || ask == "Add"){
        let ntask = prompt("How many tasks do you wanna add?");
        console.log("--------------------");
        for(i=1; i<=ntask; i++){
            tasks.push(prompt(`Enter task #${i}`));
            console.log(i, tasks[i-1]);
        }
        console.log("--------------------");
    }
    else if(ask == "delete" || ask == "Delete"){
        console.log("--------------------");
        for(i=0; i<tasks.length; i++){
            console.log(i+1, tasks[i]);
        }
        console.log("--------------------");
        let ndel = prompt(`how many tasks do you wanna delete (${tasks.indexOf(tasks[0])+1} - ${tasks.length}) ?`);
        for(i=1; i<=ndel; i++){
            let idx = prompt(`#${i}. Please enter the task index:`);
            tasks.splice(idx-1, 1);
            console.log("--------------------");
            for(j=0; j<tasks.length; j++){
            console.log(j+1, tasks[j]);
            }
            console.log("--------------------");
        }
    }
    else if(ask == "list" || ask == "List"){
        console.log("--------------------");
        for(i=0; i<tasks.length; i++){
            console.log(i+1, tasks[i]);
        }
        console.log("--------------------");
    }
    else{
        console.log("Wrong option selected! 'Refresh your page'");
        console.log("This app can only 'add', 'delete' or 'list' your tasks.")
        break;
    }
    ask = prompt("Enter what do you wanna do next.");
}
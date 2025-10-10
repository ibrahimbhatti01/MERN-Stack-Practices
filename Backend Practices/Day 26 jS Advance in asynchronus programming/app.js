// async function greet(){
//     if((Math.floor(Math.random() * 10) + 1) < 5)
//          "hello";
//     else
//         throw("weak connection");

//     // try{
//     //     a = 1;
//     //      b
//     // }catch(error){
//     //      error;
//     // }
    
// }

//OLD FORM
// greet()
//     .then((result)=>{
//         console.log("call successful");
//         console.log(result);//hello
//         console.log(this);
//     })
//     .catch((error)=>{
//         console.log("call unsuccessful");
//         console.log(error);//weak connection
//     })




// //USING await KEYWORD
// async function callGreet() {
//     let res = await greet();
//     console.log(res);
// }

// callGreet();




//NOT VALID, await can only be used inside async functions
// let res = await greet();
// console.log(res);







// async function num(){
//     return new Promise((resolve)=>{ setTimeout(()=>{
//         console.log( Math.floor(Math.random() * 10) + 1);
//         resolve();
//     }, 1000)})
// }

// async function demo() {
//      num();
// }

async function num(){
    return new Promise((resolve, reject)=>{ 
        setTimeout(()=>{
        console.log( Math.floor(Math.random() * 10) + 1);
        resolve();
    }, 1000);
    // abc.abc();
    // reject();
})
}

async function demo() {
    try{
        await num();
        await num();
        num();
    }catch(error){
        console.log(error);
    }
}
demo();





//IMPROVED USING async and await
// let h2 = document.querySelector(".salam");

// function changeColor(color, delay = 1000){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h2.style.color = `${color}`;
//             resolve();
//         }, delay);
//     })
// }

// async function animateColors(){
//     await changeColor("#F48020")
//     await changeColor("#E60026");
//     await changeColor("#720e9e");
//     await changeColor("#FEBE10");
//     await changeColor("#50C878");
//     await changeColor("#1F75FE");
//     await changeColor("#FFFF00");
//     await changeColor("#4B5320");
//     changeColor("#EE82EE");
// }
// animateColors();









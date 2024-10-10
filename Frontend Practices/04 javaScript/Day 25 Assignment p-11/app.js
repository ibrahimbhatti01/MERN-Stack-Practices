let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay)
// }

// changeColor("red", 500, () => {
//     changeColor("pink", 500, () => {
//         changeColor("palegreen", 500, () => {
//             changeColor("orange", 500, () => {
//                 changeColor("lightblue", 500)
//                 })
//             })
//         })
//     })

// This is called as callback Hell / Callback Nesting;



// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed");
//         }, delay);
//     });
// }

// changeColor("red", 1000)
//  .then(() => {
//     return changeColor("green", 1000);
//  })
//  .then(() => {
//     return changeColor("yellow", 1000);
//  })
//  .then(() => {
//     return changeColor("blue", 1000);
//  })
//  .then(() => {
//     return changeColor("orange", 1000);
//  })
//  .then(() => {
//     return changeColor("indigo", 1000);
//  })



function saveToDb(data){
    return new Promise((resolve, reject) => {
        let internet = Math.floor(Math.random() * 10) + 1;
        if (internet > 4){
            resolve("data saved");
        } else {
            reject("weak connection");
        }
    })
}

saveToDb("apna business")
.then((result) => {
    console.log("data 1 saved");
    console.log(result);
    return saveToDb("Hello Babu");
})
.then((result) => {
    console.log("data 2 saved");
    console.log(result);
})
.catch((error) => {
    console.log("data was not saved");
    console.log(error);
})
// function hello(){
//     console.log("inside hello funx");
//     console.log("hello");
// }

// function demo(){
//     console.log("inside demo funx")
//     console.log("clalling hello()");
//     hello();
//     console.log("clalling hello(), done");
// }

// console.log("calling demo");
// demo();

// console.log("done, tata bye!");


// //example to illustrate js Call Stack
// function one() {
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans =  two() + one();
//     return ans;
// }

// three();





// 
//     console.log("Kaiy hoo? businessman");
// }, 1000);

// console.log("hello..");






// let h2 = document.querySelector(".salam");

// function changeColor(color, callback, delay = 1000){
//     setTimeout(() => {
//         h2.style.color = `${color}`;
//         if(callback)
//             callback();
//     }, delay)
// }

// function repeat(){
// // Call Back HELLL 🔥💀
// changeColor("#F48020", ()=>{
//     changeColor("#E60026", () => {
//         changeColor("#40E0D0", () => {
//             changeColor("#720e9e", ()=>{
//                 changeColor("#FEBE10", () => {
//                     changeColor("#50C878", () => {
//                         changeColor("#1F75FE", () => {
//                             changeColor("#FFFF00", ()=>{
//                                 changeColor("#4B5320", () => {
//                                     changeColor("#EE82EE",repeat)
//                                 });
//                             });
//                         });
//                     });
//                 });
//             })
//         });
//     });
// });
// }

// repeat()









// function saveToDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if(internetSpeed > 4)
//         success(data);
//     else
//         failure();
// }

// // CallBack HELLL 🔥💀
// // only save data to DB if internet speed is good. 
// saveToDb("hello.", (data)=>{
//     console.log("Data saved: ", data);
//     saveToDb("kaisy hoo?", (data)=>{
//         console.log("Data2 saved: ", data);
//         saveToDb("shukar allah ka ap sunao?", (data)=>{
//             console.log("Data3 saved: ", data);
//             saveToDb("Jee mn b thk hu, btao kidhr ho?", (data)=>{
//                 console.log("Data4 saved: ", data);
//                 saveToDb("mn agya hu wapis, ap gay thy college aj?", (data)=>{
//                     console.log("Data5 saved: ", data);
//                 }, ()=>{
//                     console.log("weak connection, data5 couldnt saved.");
//                 })
//             }, ()=>{
//                 console.log("weak connection, data4 couldnt saved.");
//             })
//         }, ()=>{
//             console.log("weak connection, data3 couldnt saved.");
//         })
//     }, ()=>{
//         console.log("weak connection, data2 couldnt saved.");
//     })
// }, ()=>{
//     console.log("weak connection, data couldnt saved.");
// })







function saveToDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if(internetSpeed > 4)
            resolve(`Data Saved: ${data}`);
        else    
            reject("Weak Connection");
    })
}

//Handling Promises
// let request = saveToDb("salam world!");
// request
//     .then(()=>{
//         console.log("Promise resolved!");
//         console.log(this);
//     })
//     .catch(()=>{
//         console.log("Promise rejected!");
//         console.log(this);
//     })

//Handling Promises - More compact form
// saveToDb("waalikum salam world!")
//     .then(()=>{
//         console.log("Promise resolved!");
//         // console.log(this);//window
//     })
//     .catch(()=>{
//         console.log("Promise rejected!");
//         // console.log(this);//window
//     })




//Promise chaining
// saveToDb("salam world!")
//     .then(()=>{
//         console.log("Promise resolved!");
//         // console.log(this);//window
//         saveToDb("waalikum salam world!")
//             .then(()=>{
//                 console.log("Promise resolved!");
//                 saveToDb("kaisy ho world!?")
//                     .then(()=>{
//                         console.log("Promise resolved!");
//                     })
//                     .catch(()=>{
//                         console.log("Promise rejected!");
//                     })
//             })
//             .catch(()=>{
//                 console.log("Promise rejected!");
//             })
//     })
//     .catch(()=>{
//         console.log("Promise rejected!");
//         // console.log(this);//window
//     })



// //Promise Chaining - More compact form
// saveToDb("salam world!")
//     .then(()=>{
//         console.log("Promise resolved");
//         return saveToDb("waalikum salam world!");
//     })
//     .then(()=>{
//         console.log("Promise2 resolved");
//         return saveToDb("kaisy ho world!?");
//     })
//     .then(()=>{
//         console.log("Promise3 resolved");
//     })
//     .catch(()=>{
//         console.log("Promise rejected");
//     })



//Promise Chaining - More compact form - using result and error
saveToDb("salam world!")
    .then((result)=>{
        console.log("Promise resolved");
        console.log(result);
        return saveToDb("waalikum salam world!");
    })
    .then((result)=>{
        console.log("Promise2 resolved");
        console.log(result);
        return saveToDb("kaisy ho world!?");
    })
    .then((result)=>{
        console.log("Promise3 resolved");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Promise rejected");
        console.log(error);
    })
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

// OLD FORM - USING PROMISE METHODS
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




// NOT VALID, await can only be used inside async functions
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

// async function num(){
//     return new Promise((resolve, reject)=>{ 
//         setTimeout(()=>{
//         console.log( Math.floor(Math.random() * 10) + 1);
//         resolve();
//     }, 1000);
//     // abc.abc();
//     // reject();
// })
// }

// async function demo() {
//     try{
//         await num();
//         await num();
//         num();
//     }catch(error){
//         console.log(error);
//     }
// }
// demo();





// IMPROVED USING async and await
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






// //JSON data returned from API is as a string
// let res = '{"fact":"The largest cat breed is the Ragdoll. Male Ragdolls weigh between 12 and 20 lbs (5.4-9.0 k). Females weigh between 10 and 15 lbs (4.5-6.8 k).","length":141}';

// console.log(res.fact); //undefined, cause res isn't a js object.

// console.log(JSON.parse(res)); //js object

// console.log(JSON.parse(res).fact); //fact key value

// console.log(JSON.parse(res).length); //length key value

// console.log(JSON.stringify(JSON.parse(res))); //object json again into string json




// let obj = {
//     name: "ibrahim",
//     age: 20
// }

// let JSONData = JSON.stringify(obj);

// console.log(JSONData); // JSON string data

// console.log(JSON.stringify(obj).name); //undefined - cuz obj is now a string json data








// What is Ajax ??
// Ajax - A process of making calls(req/res) to API's asynchronously and dealing with returned JSON(nowadays, xml is old) data is known as Ajax calling.






let url = 'https://api.thecatapi.com/v1/images/search';

console.log(fetch(url));

// fetch(url)
//     .then((response) => {
//         // console.log(response);
//         // let data = response.json();
//         // console.log(data);
//         // // return response.json(); //stream can be read just once.
//         // return data;
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data[0].url);
//         return fetch(url);
//     })
//     .then((response2) => {
//         return response2.json();
//     })
//     .then((data2) => {
//         console.log(data2[0].url);
//     })
//     .catch((error) => {
//         console.log("ERROR: ", error);
//     })


// (async function fetchFunc(url) {
//     try {
//         let data = await fetch(url); //returns a non readable data stream response
//         let dataObj = await data.json(); //return api's exact response
//         console.log(dataObj[0].url);

//         let data2 = await fetch(url);
//         let dataObj2 = await data2.json();
//         console.log(dataObj2[0].url);
//     } catch (error) {
//         console.log(error, "Error getting response");
//     }
// })(url)


(async function(url){
    try {
        let response = await axios.get(url); // return object with exact readable json data;
        console.log(response.data[0].url);
    } catch (error) {
        console.log(error);
    }
    
})(url)
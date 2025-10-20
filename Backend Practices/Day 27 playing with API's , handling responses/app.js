let CAT_API = "https://api.thecatapi.com/v1/images/search";
// https://cataas.com/cat/orange,cute

let image = document.querySelector(".cat-image");

let generateBtn = document.querySelector(".btn-generate");

let imgPlaceholder = document.querySelector(".placeholder");

document.addEventListener("DOMContentLoaded", async () => {
    imgPlaceholder.style.display = "none";
    image.src = `${ await getRandCat(CAT_API) }`;
})

generateBtn.addEventListener("click", async () => {
    imgPlaceholder.style.display = "none";
    image.src = `${ await getRandCat(CAT_API) }`;
})



async function getRandCat(link){
    try {
        let response = await axios.get(link); // return object with exact readable json data;
        return response.data[0].url;
    } catch (error) {
        console.log(error);
    }
}




// // v2 of cat images app, implemented using another api.

// let CAT_API = "https://cataas.com/cat/orange,cute";
// // https://api.thecatapi.com/v1/images/search

// let image = document.querySelector(".cat-image");

// let generateBtn = document.querySelector(".btn-generate");

// let imgPlaceholder = document.querySelector(".placeholder");

// document.addEventListener("DOMContentLoaded", async () => {
//     imgPlaceholder.style.display = "none";
//     image.src = `${ await getRandCat(CAT_API) }`;
// })

// generateBtn.addEventListener("click", async () => {
//     imgPlaceholder.style.display = "none";
//     image.src = `${ await getRandCat(CAT_API) }`;
// })



// async function getRandCat(link){
//     try {
//         let response = await axios.get(link); // return object with exact readable json data;
//         return response.data.url;
//     } catch (error) {
//         console.log(error);
//     }
// }







// //Sending headers with request
// const URL = "https://icanhazdadjoke.com";
// (async function(url){
//     const config = { 
//         headers: {
//             accept: "text/plain"
//         }
//     }

//     // console.log(await axios.get(url)); //default Html data
//     // console.log(await axios.get(url, config)); //json format data in response

//     let res = await axios.get(url, config);
//     console.log(res.data);
// })(URL)








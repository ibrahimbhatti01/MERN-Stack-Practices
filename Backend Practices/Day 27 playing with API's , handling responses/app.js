let CAT_API = "https://api.thecatapi.com/v1/images/search";


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
// let url = 'https://catfact.ninja/fact';

// fetch(url)
//     .then((response) => {
//         console.log(response);

//         // we cannot read data directly from response, so we use a method .json() on response.

//         return response.json();
//     })
//     .then((data) => {
//         let h1 = document.querySelector("h1");
//         h1.innerText = data.fact;  

//         return fetch(url);  
//     })
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         let h2 = document.querySelector("h2");
//         h2.textContent = data.fact;
//     })
//     .catch((error) => {
//         console.log(error);
//     })



let url = 'https://catfact.ninja/fact';

async function printFact() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.fact);

    let response2 = await fetch(url);
    let data2 = await response2.json();
    console.log(data2.fact);
}

printFact();
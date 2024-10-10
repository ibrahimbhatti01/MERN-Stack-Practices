// Q no.04 Predict output:

let length = 4;

function callback() {
    console.log(this.length)
}

callback()

// const object2 = {
//     length: 5,

//     method(callback) {
//         callback();
//     }
// }

// object2.method(callback, 1, 2);
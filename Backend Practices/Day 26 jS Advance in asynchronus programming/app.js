async function greet(){
    // throw("weak connection");
    return "hello";
}

greet()
    .then((result)=>{
        console.log("call successful");
        console.log(result);//hello
    })
    .catch((error)=>{
        console.log("call unsuccessful");
        console.log(error);//weak connection
    })
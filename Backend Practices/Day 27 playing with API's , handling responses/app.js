(async function(url){
    try {
        let response = await axios.get(url); // return object with exact readable json data;
        console.log(response.data[0].url);
    } catch (error) {
        console.log(error);
    }
    
})(url)


const form = document.querySelector("#formSearch")

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.dir(form)  // help to see all attributes of form
    const searchTerm = form.elements.query.value;
    // console.log(form.elements.query.value) // gives us the value of what user types 
    const config = {params: {q: searchTerm} }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // console.log(res.data)  //give directory of above url
    // console.log(res.data[0].show);  //gives 1st data show info
    makeImages(res.data)
   form.elements.query.value = '';
}) 




//new function to create images from api https://api.tvmaze.com/singlesearch/shows?q=girls and we call this function in above form
const makeImages = (shows) => {
    for (let result of shows) {   //result represent each show in shows
        // console.log(shows)   //gives info of all show
        if (result.show.image) {
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }       
}


const form = document.querySelector("#formSearch")

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.dir(form)  // help to see all attributes of form
    const searchText = form.elements.query.value;
    // console.log(form.elements.query.value) // gives us the value of what user types 
}) 
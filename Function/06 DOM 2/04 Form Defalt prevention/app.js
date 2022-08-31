
//prevent default form submission and make it stay on same pages

const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats')

form.addEventListener('submit', function (e) {
    e.preventDefault(); //prevent the page to another page when submit
    const catName = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = catName;
    list.append(newLi);
    input.value = '';
})



//delet li 
list.addEventListener('click', function (e){
    e.target.remove(); //this removes everythinng inside list id


    // e.target.nodeName === 'LI'  && e.target.remove(); // this removes only li but not everything inside id = cats 
})
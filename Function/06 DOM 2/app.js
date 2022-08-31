const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("You are right.");
    console.log('Its working.s');
}
 
const scream = function  (){
    console.log('AHHHHHHH');
    console.log('STOP TOPCHING ME!!')
}

btn.onmouseenter = scream;


document.querySelector('h1').onclick = () => {
    alert("Hi there....."); 
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function () {
    alert('CLICKED!');
})




function twist () {
    console.log('TWIST');
}

function shout () {
    console.log("SHOUT");
}

//this doesnot callback both function rather return only one disadvantage 
// tasButton.onclick = twist;  
// tasButton.onclick = shout;




//this callback both function
const tasButton = document.querySelector('#tas');
tasButton.addEventListener('click', twist, {once : true})  //once : true runs the function only once
tasButton.addEventListener('click', shout)

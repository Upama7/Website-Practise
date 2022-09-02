const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256) 
    const g = Math.floor(Math.random() * 256) 
    const b = Math.floor(Math.random() * 256) 
    return `rgb(${r}, ${g}, ${b})`;
}


const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize //function () {
        // console.log('CLICKED!')
    //     this.style.backgroundColor = makeRandColor();    //makeRandColor; x error makeRandColor(); corret we have to pass here 
    //     this.style.color = makeRandColor();
    // }
    )
}




const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
    //this.style.backgroundColor = makeRandColor();
}




//using this.  to make a fncction colorize and using it on other as required.

function colorize () {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
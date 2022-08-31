document.querySelector('button').addEventListener('click', function (evt) {
    // alert('evt')
    console.log(evt)
})




//this gives result as keydown when we press and release the keyboard it represent pressed part 
const input = document.querySelector('input') ;
input.addEventListener('keydown', function (e) {
    //console.log('Keydown'); reult keyword
    console.log(e.key);
    console.log(e.code);
})




//this gives result as keydown when we press and release the keyboard it represent release part 
// input.addEventListener('keyup', function () {
//     console.log('Keydown');
// })


//this is when we press anyywhere it gives the result 
window.addEventListener('keydown',  function (e){
    switch(e.code) {
        case 'ArrowUp' : 
            console.log('ARROWUP!!')
            break;
        case 'ArrowDown' : 
            console.log("ARROWDOWN!!")
            break;
        case 'ArrowLeft' : 
            console.log("ARROWLEFT!!")
            break;
        case 'ArrowRight' : 
            console.log("ARROWRIGHT!!")
            break;
        default :
            console.log("IGNORED!!")
    }
})








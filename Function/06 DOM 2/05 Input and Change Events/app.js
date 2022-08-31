
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function(){
//     console.log('agagjaogsss')
// })


input.addEventListener('input', function(e){
    // console.log('')
h1.innerText = input.value;
   



    // if (input.value !== ''){
    //     h1.innerText = `Welcome, ${input.value}`;
    // } else {
    //     h1.innerText = 'Enter Your Username';
    // }
})    
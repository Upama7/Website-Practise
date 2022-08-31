// setTimeout (() =>{
//     document.body.style.backgroundColor = 'red'
//     setTimeout (() =>{
//         document.body.style.backgroundColor = 'orange'
//         setTimeout (() =>{
//             document.body.style.backgroundColor = 'yellow'
//             setTimeout (() =>{
//                 document.body.style.backgroundColor = 'green'
//                 setTimeout (() =>{
//                     document.body.style.backgroundColor = 'blue'
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)




//both gives same result
//function for newcolor delay and doNext 
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout (() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}


//defining above function and passing nested  arguments 
delayedColorChange('red', 1000, () => { //give red as backgroundcolor after 1 sec
    delayedColorChange('yellow', 1000, () =>{ //gives yellow as background color after another 1 sec
        delayedColorChange('green', 1000, () =>{
            delayedColorChange('blue', 1000, () =>{
                delayedColorChange('magenta', 1000, () =>{

                })
            })
        })
    })
});
 






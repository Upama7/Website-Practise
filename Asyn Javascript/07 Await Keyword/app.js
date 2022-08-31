// const colorChanger = (color, delay) => {
//     return new Promise ((resolve, reject)  => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;    
//             resolve ()
//         }, delay)
//     })
// }

// // colorChanger ('red', 1000) 
// //     .then(() => colorChanger('orange', 1000))
// //     .then(() => colorChanger('yellow', 1000))
// //     .then(() => colorChanger('green', 1000))
// //     .then(() => colorChanger('blue', 1000))
// //     .then(() => colorChanger('indigo', 1000))
// //     .then(() => colorChanger('violet', 1000))





// //await and async

// async function rainbow () {
//     await colorChanger('red' , 1000)
//     await colorChanger('orange' , 1000)
//     await colorChanger('yellow' , 1000)
//     await colorChanger('green' , 1000)
//     await colorChanger('blue' , 1000)
//     await colorChanger('indigo' , 1000)
//     await colorChanger('violet' , 1000)
//     return 'ALL RETURN'
// }

// // rainbow() .then(() => console.log('ENDED!!'))

// async function printRainbow() {
//     await rainbow();
//     console.log('END OF RAINBOW!')
// }


// printRainbow();
//  //all above example are for resolve 



 const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is ur fake data from ${url}`)
            }
        }, delay);
    })
}





// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay);
// }

async function makeTwoRequest () {
    try {
        let data1 = await fakeRequestPromise('/page1')
        console.log(data1)
        let data2 = await fakeRequestPromise('/page2')
        console.log(data2)
    } catch (e) {
        console.log('CAUGHT AN ERROR')
        console.log(e)
    }
    

}
 

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay);
}

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



// fakeRequestCallback('books.com/Page1', 
// function (response){
//     console.log('It worked!!');
//     console.log(response)
//     fakeRequestCallback('books.com/Page2', 
//         function (response){
//             console.log('It worked again!!');
//             console.log(response)
//             fakeRequestCallback('books.com/PAge3',
//                 function (response) {
//                     console.log('It worked again (3rd req!!');
//                     console.log(response)
//             }, 
//             function (err){
//                 console.log('Error!!! 3rd  req', err);
//             })
//         }, 
//         function (err){
//             console.log('Error 2nd req!!!', err);
//         })
// },  
// function (err) {
//         console.log('Error!!!', err);
// })






//promise resolve and reject

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then( () =>  {
//         console.log('It worked!!! (page 1)')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then (() => {
//                 console.log('It worked!!! (page 2)')
//                 fakeRequestPromise('yelp.com/api/coffee/page2')
//                     .then (() => {
//                         console.log('It worked!!! (page 3)')
//                     })
//                     .catch (() => {
//                         console.log('Ohh no error!!! (page 3)') 
//                     })
//                 })
//             .catch (() => {
//                 console.log('Ohh no error!!! (page 2)') 
//             })
//     })
//     .catch (() => {
//         console.log('Ohh no error!!! (page 1)') 
//     })





//the magic of promise
//it means how can we simply simplify nested promises in better way 
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then ((data) => {
        console.log('IT WORKED!!! (PAGE 1)')
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then ((data) => {
        console.log('IT WORKED!!! (PAGE 2)')
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then ((data) => {
        console.log('IT WORKED!!! (PAGE 3)')
        console.log(data);
    })
    .catch ((err) => {
        console.log('Oh Noo A Request Failed!!!')
        console.log(err)
    })
   
    
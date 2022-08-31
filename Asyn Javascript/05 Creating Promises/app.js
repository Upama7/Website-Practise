



const fakeRequest = (url) => {
    return new Promise ((resolve, reject) => {     //we can give any name to parmeters its just represent the resiolve and reject of a promise 
        const rand = Math.random();
        setTimeout(() => {
            if (rand > 0.7){
                resolve('Your fake data is here.');
            } reject('Error ')
        }, 1000)
    })
}

fakeRequest('/dog/1') 
    .then((data) => {
        console.log('DONE WITH REQUEST')
        console.log('Data is : ', data)
    }) 
    .catch((err) => {
        console.log('OHH NO', err)
    })




    //colorChanger

const colorChanger = (color, delay) => {
    return new Promise ((resolve, reject)  => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;    
            resolve ()
        }, delay)
    })
}

colorChanger ('red', 1000) 
    .then(() => colorChanger('orange', 1000))
    .then(() => colorChanger('yellow', 1000))
    .then(() => colorChanger('green', 1000))
    .then(() => colorChanger('blue', 1000))
    .then(() => colorChanger('indigo', 1000))
    .then(() => colorChanger('violet', 1000))



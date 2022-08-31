// async function hello () {

// }


// const sing = async () => {
//     throw 'OH NO PROBLEM'
//     return 'LA LA LA LA'
// }

// sing()
//     .then((data) => {
//         console.log('PROMISE RESOLVED WITH:', data)
//     })
//     .catch((err) => {
//         console.log('OHH NO PROMISE REJECTED')
//         console.log(err)
//     })





const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'upama') return 'Welcome'
    throw 'Invalid Password'
}


login ('ahga', 'upama') 
    .then( msg => {
        console.log('Login')
        console.log(msg)
    })
    .catch((err) => {
        console.log('ERROR!!!')
        console.log(err)
    })
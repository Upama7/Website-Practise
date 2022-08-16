
//passing  function as argument for another function
function callTwice (func) {
    func();
    func();
}

//if we pass rollDie as argument in this function we get two result
//Output 
//callTwice(rollDie);  but callTwice(rollDie()) -> callTwice(5) its different it is going to execute the function and will give us random number and it is going to pass in callTwice function
// 5
// 3


function callTenTimes (f) {
    for (let i = 0; i < 10; i++) {
        return f();
    }
}

//callTenTimes(rollDie)
//10 numbers will be return







function rollDie () {
    const roll = Math.floor(Math.random() * 6) +1;
    console.log(roll)
}


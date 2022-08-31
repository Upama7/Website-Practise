// console.log("BEFORE CONSOLE")
// console.log("its working")
// console.log("AFTER CONSOLE")

// if (3 === 2+1) {
//     console.log("Correct!")
// }



// let random = Math.random();

// if (random<0.5) {
//     console.log("YOUR NUMBER IS LESSER THAN 0.5")
// } else {
//     console.log("YOUR NUMBER IS GREATER THAN 0.5")
// }
// console.log(random);



// if (random>0.5) {
//     console.log("YOUR NUMBER IS GREATER THAN 0.5")
//     console.log(random);
// }



// const dayOfWeek = prompt("Enter a day")

// if (dayOfWeek === 'Sunday') {
//     console.log("Uhhh I hate sundays.")
// } else if (dayOfWeek === "Saturday") {
//     console.log("Yay its saturday.")
// } else if (dayOfWeek === "friday") {
//     console.log("few hours")
// } else {
//     console.log("MEH")
// }



// const age = 100;

// if (age < 5) {
//     console.log("You are a baby. You are free.")
// } else if (age < 12) {
//     console.log("You are a child. You pay $10")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20")
// } else {
//     console.log("You are senior. You pay $25")
// }


//password must 6+ character
const password = prompt("Enter a password!!")

if (password.length >= 6) {
    //no space is allowed 
    if (password.indexOf(" ") === -1) {
        console.log("No space");
    } else {
        console.log("No space allowed");
    }
    // console.log("Password is long.");
} else {
    console.log("Password is short");
}


// //no space is allowed 
// if (password.indexOf(" ") === -1) {
//     console.log("No space");
// } else {
//     console.log("No space allowed");
// }

// //AND operator

// const password = prompt("Enter a password!!!")

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("Valid Password");
// } else {
//     console.log("Invalid Password");
// }



// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free 
// OR Operator

// const age = -2001;
// if ((age >=0 && age < 5) || age >= 65) {
//     console.log("Free");
// } else if (age >= 5 && age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("Invalid Age")
// }




//NOT Operator 
// const firstName = prompt("Enter your first name") 
// if (!firstName) {
//     firstName = prompt("Try Again!!");
// }


const age = 4;
if (!(age >=0 && age < 5 || age >= 65)) {
        console.log("You are not a baby.");
}
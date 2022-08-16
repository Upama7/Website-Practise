

// //here we are not passing any inputs makeMyteryFunc() is empty
// function makeMysteryFunc () {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("CONGRATULATION, I M A GOOD NEWS")
//             console.log("YOU HAVE WIN A MILLION DOLLAR")
//         } 
//     } else {
//         return function () {
//             alert("YOU HAVE BEEN INFECTED BY A VIRUS!!!")
//             alert("STOP TRYING TO CLOSE THE WINDOW!!!")
//             alert("STOP TRYING TO CLOSE THE WINDOW!!!")
//             alert("STOP TRYING TO CLOSE THE WINDOW!!!")
//             alert("STOP TRYING TO CLOSE THE WINDOW!!!")
//         }
//     }
// }




//function with inputs
//it like a factory of function for min and max
function isBetweenFunc (min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}



isChild = isBetweenFunc(0, 10);
isAdult = isBetweenFunc(11, 20);
isSenior = isBetweenFunc(21, 50);


//assigning condition manually 
// function isBetween (num) {
//     return num >= 10 && num <= 50;
// }




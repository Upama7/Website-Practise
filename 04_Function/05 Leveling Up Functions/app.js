// let totalEggs = 0 
// function collectEggs () {
//     totalEggs = 6
// } 

// console.log(totalEggs)
// collectEggs();
// console.log(totalEggs)


// // result 
// // 0 at first total eggs is count 
// // 6 then when the function is pass it count and pass the result 





// // function helpMe () {
// //     let msg = 'I m on fire!';   
// //     msg;  //I m on fire!    //msg is scoped to the helpMe function 
// // }

// // msg; //NOT DEFINED!





// let bird = 'Scarlet Macaw';
// function birdWatch (){
//     let bird = 'Great Blue Heron'  //if this line is absent then bird takes value from nearest same variable 
//     console.log(bird);  //result Great Blue Heron 

// }

// console.log(bird);   //result Scarlet Macaw







// Block Scope
// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;    //here PI and msg are scoped to radius
//     let msg = 'HIi!'
// }

// console.log(radius);   //8
// console.log(PI);   //NOT DEFINED















// Lexical Scope
function bankRobbery () {
    const heroes = ['SpiderMan', 'Wolverine', 'Panther']
    function cryForHelp(){
        function inner() {
            for (let hero of heroes) {
            console.log(`PLease help Us, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}











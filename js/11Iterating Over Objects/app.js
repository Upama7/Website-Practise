const testScores = {
    keenan: 80,
    damon:67,
    kim: 89,
    shawn: 91,
    vonnie: 60
}


// //for ... in method for string iteration
// for (let person in testScores) {
//     console.log(`${person} sored ${testScores[person]}`)
// }







//next correct method 

//to print out scores 


// let total = 0;
// //Object.key --> object name
// //Object.values --> gives score
// //Object.entries(variable or const) --> gives both name and score 
// for (let score of Object.values(testScores)) {
//     console.log(score)   
// }



// //to know the total 
// let total = 0;
// for (let score of Object.values(testScores)) {
//     total += score; 
// }






//to know the avg
let total = 0;
let name = Object.keys(testScores) //name
let scores = Object.values(testScores);
for (let score of scores) {
    total += score; 
}
console.log(total / scores.length)
console.log(name) //name



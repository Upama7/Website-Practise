//function to pass two arguments
function greet (firstName, lastName) {
    console.log(`Hi there, ${firstName} ${lastName[0]}.`) //0 represent the index of first letter of last name and choose that letter only 
}





//function to repeat something 
function repeat (str, numTimes){
    let result = '';
    for (i = 0; i < numTimes; i++) {
        result += str
    }
    console.log(result)
}
    




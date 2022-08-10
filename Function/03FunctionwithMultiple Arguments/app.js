//function to pass two arguments
function greet (firstName, lastName) {
    console.log(`Hi there, ${firstName} ${lastName[0]}.`) //0 represent the index of first letter of last name and choose that letter only 
}

//result firstname = upama lastname = nirdev it gives Hi there, upama n since 0 select only first letter for lastname 





//function to repeat something 
function repeat (str, numTimes){
    let result = '';  // result is empty so it can be used to all string till numtimes
    for (i = 0; i < numTimes; i++) {  //numTimes give length
        result += str  //result is empty but str is added till condition is true
    }
    console.log(result)
}

//result str= % numTimes = 5 it gives %%%%%
    




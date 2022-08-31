
function add (x , y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;   
    }
    return x + y;  //console.log(x+y) gives undefined 
}

//there are two return but return run only one time / it can return only one value 



// add(add(1,2),5);


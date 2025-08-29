 const greet= async()=>{ //async modifies function and not variables
    return "hello varad"; 
}

greet().then(function(value){
    console.log(value);
}
);


//async: makes function return a promise
//await: makes a function, wait for a promise

 const greet= async()=>{ //async modifies function and not variables
    return "hello varad"; 
}

greet().then(function(value){
    console.log(value);
}
);

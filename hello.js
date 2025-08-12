let x=99;
if (x>=99){
    console.log("hello world ");
}
else{
    console.log("hello world ");
}

// loop in js
for(let i=12; i < 20 ; i++){
    console.log("hello world");
}

const prompt = require('prompt-sync')();
var choice= prompt("enter your input here: ");
switch( choice){
    case "hello":
        console.log(" hello there buddy");
        break;
    
    case "world":
        console.log("welcome to the world of java script.")
        break;
    
    case "sweet":
        console.log("chocolates are sweet");
        break;
    
    default:
        console.log("this is the default case");
        break;

    }
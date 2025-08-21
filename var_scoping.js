
/*
let → used for variables that can change their value. Block scoped.
const → used for variables that should not be reassigned. Block scoped.
var → old way (before ES6). Function scoped. Avoid it because it causes confusing bugs. */

let a=10;
a=19;
console.log(a);

const b=12;
//b=11; this will throw a assignment to const var error 
console.log(b);

let c=12;
c=1;
console.log(c)


//scope of let, const, var
{
  let x = 10;
  const y = 20;
  console.log(x, y); // 10, 20
  //let and const are block scoped 
}
// console.log(x, y); // hence you cannot use them here

function printme(){
    if(true){
        var num1=12;
        const num3=12;
        let num2=23;
    }
    //since let and const are block scoped 
    //console.log(num2,num3) // this throws a ReferenceError: num2 is not defined 
    console.log(num1);
}

printme();
//console.log(num1); // this will throw a reference error as well
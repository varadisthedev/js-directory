// why (()=>{})() is an actual thing in js?

(()=>{console.log("hello there, this is an Immediately Invoked Function Expression (IIFE)! with an arrow function")})();
// IIFE, are makes an function, execute right after after it is delcared. without any explicit call 
// the end () of the line 3 is the IIFE part. 
//core part of the line is the arrow function ()=>{} which contains the console.log message
// this arrow function is then wrapped in another parenthesis (), which has the job of converting the arrow function to a expression, non hoisted 
// ternay in javascript
let marks = 20;
const decision= (marks>15)? "pass" : "fail";
console.log(decision); 

//nested ternary 
let day=3;
const greetingoftheday= (day==1)? "monday" :
(day==2)? "tuesday" :
(day==3)? "Wednesday":
(day==4)?"thursday":"someotherday";
console.log(`good morning , today is: ${greetingoftheday}`);

//terany in functions 
function GradeChecker(marks){
    return (marks>=90)? "A":(marks>80)?"B":(marks>60)?"C":(marks>40)?"P":"failed.";
}
console.log(`the grade of your student is ${GradeChecker(90)}`)
console.log(`the grade of your student is ${GradeChecker(40)}`)
console.log(`the grade of your student is ${GradeChecker(10)}`)
console.log(`the grade of your student is ${GradeChecker(70)}`)

//ternay with function calls
function welcomeGuest(){
    return "hello there guest, welcome!";
}

function byeGuest(){
    return "okay then, goodbye guest";
}
let guest="leaving";
console.log((guest==="leaving")?byeGuest():welcomeGuest()); //used strict equality here


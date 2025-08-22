let hello = () => {
  return "Hello World!";
} 

let greet = () => "Hello World!"; 

console.log(hello());
console.log(greet());

const user_profile={
    name:"Varad",
    age:19,
    address:"nagpur, india "
};

console.log(user_profile.age)

//no parameter
const add = () => console.log("greetings!");
//single para
const square =(a)=>a**2;
//multi para 
const SimpleInterest=(p,r,t)=>(p*r*t)/100;



//calling the functions 
add()
console.log(square(4))
console.log("simple interst is: ",SimpleInterest(1000,2,4))



const user={
  name:"varad",
  age:19,
  likes:"chess",
  myfunction(){
    console.log("hello there, this is a normal function");
  }
  // new es6 shorthand to declare normal fucntions 
};

user.myfunction();
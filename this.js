// use of this
console.log(this); // will 

userdata={
    name:"varad",
    age:19,
    introduce(){
        console.log(`hello there, im ${user.name} and im ${user.age}`);    
    }
}
console.log(userdata.introduce())
// objects are very important in react
// destructuing a object 

const name="varad";
const age=19;
const person={
    name,
    age,
    ismarried: false,
};

//const name =person.name 
//const age=person.age 
//const ismarried= person.ismarried

// the above code can be done in a single line 

const{name,age,ismarried}=person;


//spread op is commonly used to re-use pre existing code
const person2={...person,name:"check"}

const names=["varad","varad jr","jesicca"];
const names2=[...names, "joe"];


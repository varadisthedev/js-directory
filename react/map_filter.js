//////.map() function 

let names=["varad","devarshi","yash"];
//if we want to alter each ele individually:
names.map((name)=>{ 
    return name + "1";
});
//use case in react 
names.map((name)=>{
    return <h1>{name}</h1>
})


/////.filter() function 
let names=["varad","devarshi","yash","varad","varad"];
names.filter((name)=>{
    return name !== "varad"// to keep ppl whos name is not varad
})
/////.reduce() function , not much used in react

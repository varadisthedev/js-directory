
// ternary can reduce the amount of lines of code you need to write to acheive a desired  outpuut 
let age= 10 ;
let name = age>10 ?  "varad jr ":"not varad";
console.log(name);

// this is used quite a lot inreact 
const component = ()=>{
    return age>10 ? <div> varad</div> :<div>varad jr</div>
}

// fetching the elements via tha DOM (Document Object Model)



//updating the paragraph usign a button
const p=document.getElementById("para-core")
const button_var=document.getElementById("button-core")

button_var.addEventListener("click",()=>{p.textContent="you did it."})

//changing the color of a div usign a button 
const bgcolor=document.getElementById("container")
const bgbutton=document.getElementById("container-button")
const changeColor=()=>{ // declaring the fucntion after assignment makes hoisting issues go away
    bgcolor.style.backgroundColor="pink"
}
bgbutton.addEventListener("click",changeColor)

//dynamically updating text from input box
const display=document.getElementById("namedisplay")
const input=document.getElementById("nameinput")

const changeinput=()=>{
    display.textContent=input.value
}   
input.addEventListener("input",changeinput)

//adding itesm to the list (core of TODO)
const list=document.getElementById("list")
const taskInput=document.getElementById("taskInput")
const button=document.getElementById("taskbutton")

const adder=()=>{
    const item=document.createElement("li")
    item.textContent = taskInput.value;
    list.appendChild(item)
    //making it so that list item deletes when tapped on them 
    item.addEventListener("click",function(){
        item.remove();
    })
    
    taskInput.value=""
}
//event delegation to check the list items
list.addEventListener("click",(e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});


button.addEventListener("click",adder)




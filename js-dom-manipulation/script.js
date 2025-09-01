// const body = document.body
// //using append
// body.append("hello world","bye")

// // how to append element 
// const div=document.createElement('div')



// //adding text
// div.textContent="hello world 2"
// body.append(div)

// const div=document.querySelector('div')
// console.log(div.textContent)
// console.log(div.innerText)

const body = document.body 
const div= document.createElement("div")
div.innerHTML="<strong>this is a strong text<strong/>"
body.append(div)

const strong= document.createElement('strong')
strong.innerText="safer way to do the same thing"
body.append(strong)

const paragraph = document.createElement('p')
paragraph.textContent="this is a text, and you nailed it buddy yay!"
body.append(paragraph)
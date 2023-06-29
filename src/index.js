 document.addEventListener("DOMContentLoaded", () => {

  //   // your code here

//   const inputField = document.getElementById("new-task-description");
//   const formElement = document.querySelector("form");
//   formElement.addEventListener('submit', (e) => {
//   let newtask =inputField.value

//     e.preventDefault();
//     if (newtask.length===0){
//     alert('Task cannot be empty')
//     }else{
//       handleToDo(newtask);
//     }
//     formElement.reset()
//   });
// });


// function css(element, style) {
//   for (const property in style)
//       element.style[property] = style[property];
// }

// function handleToDo (newtask) {
//   let listItem = document.createElement("li");
//   let btn = document.createElement('button')
 
//   css(btn, {
//     'background-color': 'yellow',
//     'color': 'red',
//      'background' :'red',
//   'color' :'#ffffff',
//   'padding' : '6px',
// 'margin' : '4px',
// 'font-size' :'12px',
// });

//   btn.addEventListener('click',handleDelete)
//   btn.textContent='X Remove'
//   listItem.innerText = `${newtask}`;
//   listItem.appendChild(btn)
//   document.querySelector("#tasks").appendChild(listItem);
// }

// function handleDelete(e){
// e.target.parentNode.remove()

// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
// const submitForm= document.querySelector("#new-task-description")
// const form =document.getElementById("create-task-form")
// let listTasks = document.getElementById("tasks")
// let inputTask= submitForm.value 


// form.addEventListener("submit",handleForm) // event listener to handle the submit
// form.reset()

// function handleForm(e){
//   e.preventDefault() //prevents any default behaviour with the form
//   let listItem= document.createElement("li")
//   listItem.textContent =`${inputTask}`
//   listTasks.appendChild(listItem)
//   submitForm.value =""
// }

// })

// document.querySelector("button").addEventListener("click",foo)

// function foo(){
//   console.log("hey")
// }
// setTimeout(()=>{
//   console.log("one"),3000 //asynchronous code 
// })
// console.log("two")
// console.log("three")

// fetch("http://localhost:3000")
// .then(response => response.json())
// // console.log("after fetch")
// .then(data=> console.log(data))
// dom manipulation review
//dom manipulation 
// function renderOneAnimal(animal){
//   //build an animal
//   let card =document.createElement("li")
//   card.className="card"
//   card.innerHTML=`
//   <img src ="${animal.imageUrl}"/>
//   <div class="content">
//   </div>
//   <h4>${animal.name}</h4>
//   <p></p>
  
//   `
// }



//function initialiaze(){
  //load and render animals to the DOM

  // animalData.forEach(animal => {
  //   renderOneAnimal(animal)
  // });
//   getAllAnimals()
// }
// initialiaze()


// function getAllAnimals(){
//   fetch("http://localhost:3000/comments")
//   .then(resp => resp.json())
//   .then(humanData => humanData.forEach(human => {
//     rende
//   });)
//   console.log("before fetch")
// }

const submitForm= document.querySelector("#new-task-description")
const form =document.getElementById("create-task-form")
let listTasks = document.getElementById("tasks")



form.addEventListener("submit",handleForm) // event listener to handle the submit
form.reset()

function handleForm(e){
  let inputTask= submitForm.value 
  e.preventDefault() //prevents any default behaviour with the form
  let listItem= document.createElement("li")
  listItem.textContent =`${inputTask}`
  listTasks.appendChild(listItem)
  submitForm.value =""
}

})
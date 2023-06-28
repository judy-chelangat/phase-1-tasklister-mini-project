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
const submitForm= document.querySelector("#new-task-description")
const form =document.getElementById("create-task-form")
let listTasks = document.getElementById("tasks")
let inputTask= submitForm.value 


form.addEventListener("submit",handleForm) // event listener to handle the submit
form.reset()

function handleForm(e){
  e.preventDefault() //prevents any default behaviour with the form
  let listItem= document.createElement("li")
  listItem.textContent =`${inputTask}`
  listTasks.appendChild(listItem)
  submitForm.value =""
}

})


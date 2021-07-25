// document.addEventListener("DOMContentLoaded", () => {
//   console.log(document.querySelector('form'))
//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     buildToDo(e.target.new_todo.value)
//     form.reset()
//   })
// })

// function buildToDo(todo) {
//   let p = document.createElement('p')
//   let btn = document.createElement('button')
//   btn.addEventListener('click', handleDelete)
//   btn.textContent = 'x'
//   p.textContent = `${todo} `
//   p.appendChild(btn)
//   document.querySelector('todo_container').appendChild('p')
// }
// function handleDelete(e) {
//   e.target.parentNode.remove()
// }
// --------------------------------------------------------------------------------

                //Working Code

// const form = document.querySelector('#create-task-form')
// let tasks = document.querySelector('#tasks')
// const submitForm = document.querySelector('#new-task-description')

// document.addEventListener("DOMContentLoaded", () => {
  
//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     let listElement = document.createElement('li')
//     listElement.textContent += submitForm.value
//     tasks.appendChild(listElement) 
//     })
    
//     form.reset()
//   })

//-----------------------------------------------------------------

                //Experimental Code

// const form = document.querySelector('#create-task-form')
// let tasks = document.querySelector('#tasks')
// const submitForm = document.querySelector('#new-task-description')

// document.addEventListener("DOMContentLoaded", () => {
//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     buildList(e.target.value)
//     form.reset()
//   })
// })

// function handleDelete(e) {
//   e.target.parentNode.remove()
// }

// function buildList() { 
//     let listElement = document.createElement('li')
//     let btn = document.createElement('button')
//     btn.addEventListener('click', handleDelete)
//     btn.textContent = 'Delete'
//     listElement.textContent += submitForm.value + " "
//     listElement.appendChild(btn)
//     tasks.appendChild(listElement) 
// }


// Video Notes--------------------------------------------------------------

const main = document.querySelector('#main-content')
const taskForm = document.querySelector('#create-task-form')
const taskList = document.querySelector('#tasks')

taskForm.addEventListener('submit', function(e) {
  e.preventDefault()
  // have the user input
  const newTask = document.querySelector('#new-task-description').value
  // put it on the document
  taskList.innerHTML += `
    <li> ${newTask} 
      <button data-action='Delete'> Delete </button>
    </li>`


  // const taskItem = document.createElement('li')
  // taskItem.innerText = newTask
  // taskList.appendChild(taskItem)

  taskForm.reset()
})

// taskList.addEventListener('click', function(e) {
//   console.log(e.target)
//   if (e.target.dataset.acton === 'Delete') {
//     e.target.parentElement.remove()
//   }
// })

taskList.addEventListener('click', function(e) {
  e.target.parentNode.remove()
})
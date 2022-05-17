// As a user, I should be able to:
// 1. type a task into the input field
// 2. click some form of a submit button
// 3. see the task string that I provided appear in the DOM after the submit button has been activated.

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener('submit', (event) => {
    event.preventDefault()
    let task = document.createElement('task')
    task.textContent = event.target["new-task-description"].value
    document.querySelector('#tasks').append(task)
  })
});

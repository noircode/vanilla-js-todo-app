document.addEventListener('DOMContentLoaded', function() {
  const submitForm = document.getElementById('form');
  submitForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo();
  })
})

function addTodo() {
  const textTodo = document.getElementById('title').value;
  const timestamp = document.getElementById('date').value;

  const generateID = generateId();
  const todoObject = generateTodoObject(generateID, textTodo, timestamp);
  todos.push(todoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
}
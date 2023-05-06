'use strict';

/* This function gets the task from input */
const get_todos = function () {
  /*This creates an array of task that are inputed */
  let todos = [];
  // This pulls the task that was saved in the web browser memory
  let todos_str = localStorage.getItem('todo');
  //If the input is not null then JSON.parse will
  //communicate with the web broser to make the task a javascript object
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
};

// This function adds the inputed task to the get_todos function array
const add = function () {
  //This takes the inputed task and creates a variable of it
  const task = document.getElementById('task').value;

  var todos = get_todos();
  //This adds a new task the end of the array

  todos.push(task);
  //This converts the task input to a JSON string
  localStorage.setItem('todo', JSON.stringify(todos));
  document.getElementById('task').value = '';
  show();

  return false;
};

// This function keeps the tasks permanetly displayed on the screen
const show = function () {
  // This sets the task that was retrieved as a variable
  let todos = get_todos();

  //This sets up each task as an unordered list
  let html = '<ul>';
  for (let i = 0; i < todos.length; i++) {
    //This also displays the task as a list and creates the button with the 'x'
    html +=
      '<li>' +
      todos[i] +
      '<button class="remove" id="' +
      i +
      '">x</button></li>';
  }
  html += '</ul>';

  document.getElementById('todos').innerHTML = html;
};

const remove = function (id) {
  let todos = get_todos();

  let index = parseInt(id); // Convert id to a number
  todos.splice(index, 1); // Remove the element at the specified index

  localStorage.setItem('todo', JSON.stringify(todos)); // Update the localStorage

  show();

  return false;
};

//This displays the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
document.getElementById('todos').addEventListener('click', function (event) {
  if (event.target.classList.contains('remove')) {
    remove(event.target.id);
  }
});
//This will keep the inputs displayed permanently on the screen
show();

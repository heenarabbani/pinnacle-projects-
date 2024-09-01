const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const clearTasksBtn = document.getElementById('clear-tasks');
const editModeBtn = document.getElementById('edit-mode');

addTaskBtn.addEventListener('click', addTask);
clearTasksBtn.addEventListener('click', clearTasks);
editModeBtn.addEventListener('click', toggleEditMode);

function addTask() {
 const task = taskInput.value.trim();
 if (task) {
  const taskListItem = document.createElement('li');
  taskListItem.textContent = task;
  taskList.appendChild(taskListItem);
  taskInput.value = '';
 }
}

function clearTasks() {
 taskList.innerHTML = '';
}

function toggleEditMode() {
 taskList.classList.toggle('edit-mode');
}

taskList.addEventListener('click', toggleTaskCompleted);

function toggleTaskCompleted(e) {
 if (e.target.tagName === 'LI') {
  e.target.classList.toggle('completed');
 }
}

taskList.addEventListener('click', editTask);

function editTask(e) {
 if (e.target.tagName === 'LI') {
  const taskText = e.target.querySelector('.task-text');
  const editBtn = e.target.querySelector('.edit-btn');
  const deleteBtn = e.target.querySelector('.delete-btn');

  taskText.contentEditable = true;
  taskText.focus();

  editBtn.addEventListener('click', saveTaskChanges);
  deleteBtn.addEventListener('click', deleteTask);
 }
}

function saveTaskChanges(e) {
 const taskText = e.target.previousSibling;
 const task = taskText.textContent.trim();

 if (task) {
  taskText.contentEditable = false;
 } else {
  alert('Please enter a task');
 }
}

function deleteTask(e) {
 const taskListItem = e.target.parentNode;
 taskList.removeChild(taskListItem);
}


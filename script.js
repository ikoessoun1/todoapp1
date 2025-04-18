const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const taskValue = taskInput.value.trim(); // Get the value of the input field and trim whitespace

  if (taskValue) { // Check if the input is not empty
    const taskItem = document.createElement('li');
    taskItem.textContent = taskValue;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => taskItem.remove();
    taskItem.appendChild(deleteButton);
    document.getElementById('task-list').appendChild(taskItem);
    console.log(`Task added: ${taskValue}`); // Log the task value to the console
    taskInput.value = ''; // Clear the input field after adding the task 
  } else { // If the input is empty, show an alert
    alert('Please enter a task.'); // Alert the user to enter a task
  } 
}
addTaskButton.addEventListener('click', handleSubmit);
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') { // Check if the Enter key was pressed
    handleSubmit(event); // Call the handleSubmit function
  }
});


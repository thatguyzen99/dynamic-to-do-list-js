// Ensure the script runs only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();  // Retrieve and trim the input value
        if (taskText === "") {  // Check if the input is empty
            alert('Please enter a task.');
            return;  // Exit the function if input is empty
        }

        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;  // Set the text content to the input value

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';  // Set button text to 'Remove'
        removeButton.className = 'remove-btn';  // Add a class name to the button
        // Assign a click event to the remove button to remove the corresponding task
        removeButton.onclick = function() {
            taskList.removeChild(li);  // Remove the list item from the task list
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(li);
        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);  // Call addTask function when button is clicked
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {  // Check if the 'Enter' key is pressed
            addTask();  // Call addTask function
        }
    });
});

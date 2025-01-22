// Ensure the script runs only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to load tasks from Local Storage
    function loadTasks() {
        tasks.forEach(taskText => {
            const li = createTaskElement(taskText);
            taskList.appendChild(li);
        });
    }

    // Function to create a new task element
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = function() {
            taskList.removeChild(li);
            tasks = tasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };

        li.appendChild(removeButton);
        return li;
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        const li = createTaskElement(taskText);
        taskList.appendChild(li);

        if (save) {
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', function() {
        addTask(taskInput.value.trim());
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim());
        }
    });

    // Load tasks when the page loads
    loadTasks();
});

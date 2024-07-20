document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from local storage
    loadTasks();

    // Function to add task
    function addTask(taskText, save = true) {
        if (!taskText) {
            alert("Please write a task to add");
            return;
        }

        const task = document.createElement("li");
        task.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener('click', function () {
            taskList.removeChild(task);
            removeTaskFromStorage(taskText);
        });

        task.appendChild(removeBtn);
        taskList.appendChild(task);

        if (save) {
            saveTaskToStorage(taskText);
        }

        taskInput.value = '';
    }

    // Event listener for adding task
    addButton.addEventListener('click', () => {
        addTask(taskInput.value.trim());
    });

    // Event listener for pressing 'Enter' to add task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim());
        }
    });

    // Function to load tasks from local storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to save task to local storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove task from local storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
});

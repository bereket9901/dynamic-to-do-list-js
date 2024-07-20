document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value.trim();

        if (!taskText) {
            alert("please write a task to add");
            return;
        }
        if (taskText) {
            const task = document.createElement("li");
            task.textContent = taskText;
            const removeBtn = document.createElement("button");
            removeBtn.classList.add('remove-btn');
            removeBtn.textContent = "Remove";
            removeBtn.addEventListener('click', function () {
                task.remove();
            })
            task.appendChild(removeBtn);
            taskList.appendChild(task);
            taskInput.value = '';
        }
    }
    addButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', (event) => {
        if (event.key == 'Enter') {
            addTask();
        }
    })
});
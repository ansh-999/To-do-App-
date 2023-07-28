// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `<span>${taskText}</span><button onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to remove a task from the list
function removeTask(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}

// Event listener to add task when Enter key is pressed
document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
})

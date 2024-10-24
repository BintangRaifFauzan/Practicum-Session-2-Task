document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteButton = document.createElement("span");
        deleteButton.textContent = "delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => li.remove());

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }
});

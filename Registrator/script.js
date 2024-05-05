function addTask() {
    const img = document.querySelector('.img')
    const taskInput = document.querySelector(".task");
    const taskList = document.querySelector(".tasklist");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });
    deleteButton.style.textAlign = 'center'
    deleteButton.style.background = "none"
    
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
}

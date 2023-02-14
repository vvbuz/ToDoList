const editTaskBtn = '<div class="task-btn edit-task-btn" onclick="editTask(this.parentElement)">edit</div>';
const removeTaskBtn = '<div class="task-btn remove-task-btn" onclick="removeTask(this.parentElement)">delete</div>';

function getNewTask() {
    if (document.getElementById('new-task-text').value === '') {
        alert('Fill the task text field');
    } else {
        document.getElementById('task-list').appendChild(document.createElement("li"));
        document.getElementById('task-list').lastElementChild.innerHTML = '<div class="task">' + document.getElementById('new-task-text').value + editTaskBtn + removeTaskBtn + '</div>';
        document.getElementById('new-task-text').value = '';
    }
}

function removeTask(taskToDelete) {
    taskToDelete.classList.add('completed-task');
    setTimeout(() => {
        taskToDelete.parentElement.remove();
    }, 800);
}

function editTask(taskToEdit) {
    const editField = '<input type="text" value="' + taskToEdit.innerText.slice(0, -11) + '">';
    const saveEditBtn = '<button type="button" onclick="saveEditedText(this.parentElement)" style="margin-left: 5px;">Save</button>';
    taskToEdit.parentElement.innerHTML = '<div class="edit-task">' + editField + saveEditBtn; + '</div>';
}

function saveEditedText (saveBtn) {
    const currentTask = saveBtn.parentElement;
    newTaskText = currentTask.querySelector('input').value;
    currentTask.innerHTML = '<div class="task">' + newTaskText + editTaskBtn + removeTaskBtn + '</div>';
}
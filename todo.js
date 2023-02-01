function getNewTask() {
    if (document.getElementById('new-task-text').value === '') {
        alert('Fill the task text field');
    } else {
        document.getElementById('task-list').appendChild(document.createElement("li"));
        document.getElementById('task-list').lastElementChild.innerText = document.getElementById('new-task-text').value;
        document.getElementById('task-list').lastElementChild.setAttribute('onclick','removeTask(this)');
        document.getElementById('task-list').lastElementChild.style.cursor = 'pointer';
        document.getElementById('new-task-text').value = '';
    }
}

function removeTask(taskToDelete) {
    taskToDelete.style.textDecoration = 'line-through';
    setTimeout(() => {
        taskToDelete.remove();
    }, 800);
}
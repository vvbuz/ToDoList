function divTask(taskText) {
    const newDivTask = document.createElement('div');
    newDivTask.innerText = taskText;
    newDivTask.classList.add('task');
    return newDivTask;
}
function editBtn() {
    const btn = document.createElement('div');
    btn.innerText = 'edit';
    btn.classList.add('task-btn');
    btn.classList.add('edit-task-btn');
    btn.setAttribute('onclick', 'editTask(this.parentElement);');
    return btn;
}
function removeBtn() {
    const btn = document.createElement('div');
    btn.innerText = 'delete';
    btn.classList.add('task-btn');
    btn.classList.add('remove-task-btn');
    btn.setAttribute('onclick', 'removeTask(this.parentElement);');
    return btn;
}

function getNewTask() {
    if (document.getElementById('new-task-text').value === '') {
        alert('Fill the task text field');
    } else {
        document.getElementById('task-list').appendChild(document.createElement("li"));
        document.getElementById('task-list').lastElementChild.appendChild(divTask(document.getElementById('new-task-text').value));
        document.getElementById('task-list').lastElementChild.lastElementChild.appendChild(editBtn());
        document.getElementById('task-list').lastElementChild.lastElementChild.appendChild(removeBtn());
        document.getElementById('new-task-text').value = '';
    }
}

function removeTask(taskToDelete) {
    taskToDelete.classList.add('completed-task');
    setTimeout(() => {
        taskToDelete.parentElement.remove();
    }, 800);
}

function editField(lastText) {
    const field = document.createElement('input');
    field.setAttribute('type','text');
    field.setAttribute('value', lastText);
    return field;
}

function saveEditBtn() {
    const btn = document.createElement('button');
    btn.setAttribute('type','button');
    btn.setAttribute('onclick','saveEditedText(this.parentElement);');
    btn.style.marginLeft = '5px';
    btn.innerText = 'Save';
    return btn;
}

function editTask(taskToEdit) {
    lastTaskText = taskToEdit.innerText.slice(0, -11);
    currentTask = taskToEdit.parentElement;
    currentTask.innerHTML = '';
    currentTask.appendChild(document.createElement('div'));
    currentTask.lastElementChild.classList.add('edit-task');
    currentTask.lastElementChild.appendChild(editField(lastTaskText));
    currentTask.lastElementChild.appendChild(saveEditBtn());
}

function saveEditedText (saveBtn) {
    const currentTask = saveBtn.parentElement;
    newTaskText = currentTask.querySelector('input').value;
    document.querySelector('.edit-task').remove();
    currentTask.appendChild(divTask(newTaskText));
    currentTask.lastElementChild.appendChild(editBtn());
    currentTask.lastElementChild.appendChild(removeBtn());
}
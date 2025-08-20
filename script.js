function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        taskInput.focus();
        taskInput.style.borderColor = '#ea4335';
        setTimeout(() => {
            taskInput.style.borderColor = '#1a73e8';
        }, 2000);
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    // Task text span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Complete button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '✔'; // Green checkmark icon
    completeButton.onclick = () => {
        taskSpan.classList.toggle('completed');
    };

    // Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = () => {
        try {
            listItem.remove();
        } catch (error) {
            console.error('Error removing task:', error);
        }
    };

    // Append everything
    listItem.appendChild(completeButton);
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);

    taskInput.value = ''; // Clear input field
}

// Add Enter key support
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
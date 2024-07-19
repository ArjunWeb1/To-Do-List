document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const filterTasks = document.getElementById('filterTasks');

    // Add task
    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskAction);
    filterTasks.addEventListener('change', filterTaskList);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <button class="complete-btn">&#10003;</button>
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    function handleTaskAction(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        } else if (e.target.classList.contains('complete-btn')) {
            e.target.parentElement.classList.toggle('completed');
            e.target.classList.toggle('completed');
        }
    }

    function filterTaskList() {
        const filterValue = filterTasks.value;
        const tasks = taskList.querySelectorAll('.task-item');
        tasks.forEach(task => {
            switch (filterValue) {
                case 'all':
                    task.style.display = 'flex';
                    break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                    break;
                case 'pending':
                    task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
                    break;
            }
        });
    }
});

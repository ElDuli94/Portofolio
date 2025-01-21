document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.navi-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(listItem);
            newTaskInput.value = '';

            listItem.querySelector('.delete-btn').addEventListener('click', () => {
                taskList.removeChild(listItem);
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.navi-item');
    const profilAvdyl = document.querySelector('.profilAvdyl');
    const todoContainer = document.querySelector('.todo-container');

    function updateVisibility(target) {
        profilAvdyl.style.display = target === 'profilAvdyl' ? 'block' : 'none';
        todoContainer.style.display = target === 'todo-container' ? 'block' : 'none';
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            updateVisibility(item.getAttribute('data-target'));
        });
    });

    // Initial state
    updateVisibility('profilAvdyl');
});

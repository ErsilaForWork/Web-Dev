document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("todo-input");

    const addTaskButton = document.getElementById("add-task-button");

    const taskList = document.getElementById("task-list");

    const addTask = (text, completed = false) => {
        const taskText = text || taskInput.value.trim();
        
        if(!taskText) {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
        <input type = "checkbox" class="checkbox"></input>
        <span>${taskText}</span>
        <button class = "delete-btn">
            <img src = "images/logo.svg">
        </button>
        `;
        
        if(completed) {
            li.classList.add('completed');
        }

        const checkbox = li.querySelector('.checkbox');

        checkbox.addEventListener('change', () => {
            const isChecked = checkbox.checked;
            li.classList.toggle('completed', isChecked);
        });

        li.querySelector(".delete-btn")
        .addEventListener('click', () => {
            li.remove();
        });
        
        taskList.appendChild(li);
        taskInput.value = "";
    }

    addTaskButton.addEventListener('click',() => addTask())
    taskInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            addTask();
        }
    })
});
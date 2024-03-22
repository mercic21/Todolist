// script.js
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    
    if (todoInput.value.trim() !== '') {
        const todoText = todoInput.value;
        
        const li = document.createElement('li');
        li.textContent = todoText;
        
        const deleteButton = document.createElement('span');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
        
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        
        todoInput.value = '';
    } else {
        alert('Please enter a valid task!');
    }
}

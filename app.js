//Selector
document.querySelector("#addBtn").addEventListener("click", addBtnClickHandler);

//Event Handler
function addBtnClickHandler(e){
    e.preventDefault();

    let input = document.querySelector("#todoText");
    if(input.value != ''){
        addTodo(input.value);
    }
    input.value = '';
}

function deleteContentClickHandler(e) {
    e.preventDefault();

    this.parentElement.remove();
}

//Helper
function addTodo(todo){
    let todoList = document.querySelector(".todo-list");

    let todoContent = document.createElement("div");
    todoContent.className = 'col-md-12 todo-content align-items-center justify-content-between';
    todoContent.innerHTML = '<span>' + todo + '</span>';

    let todoContentDeleteButton = document.createElement("button");
    todoContentDeleteButton.className = 'btn btn-delete';
    todoContentDeleteButton.innerHTML = '<i class="bi bi-trash"></i>'; 
    todoContentDeleteButton.onclick = deleteContentClickHandler;  
    
    todoContent.appendChild(todoContentDeleteButton);
    todoList.appendChild(todoContent);
}
const btnAdd = document.getElementById("add-task");
const task = document.getElementById("todo-val");
const categorySel = document.getElementById("category");
const todoList = document.getElementById("todo-list");

window.addEventListener("load", function() {
    checkEmpty();
    removeTaskFromList();
});

btnAdd.addEventListener("click", addTask);

function addTask() {
    if(task.value != "") {
        var todoListItem = document.createElement("li");
        todoListItem.setAttribute("class", "todo-item");
        // todoListItem.innerHTMLtml = "<p>Test</p>";
        // Todo description
        var todoDescription = document.createElement("span");  
        todoDescription.setAttribute("class", "todo-description");

        var todoDescriptionText = document.createTextNode(task.value);
        todoDescription.appendChild(todoDescriptionText);
        
        //Todo action button
        var todoAction = document.createElement("span");  
        todoAction.setAttribute("class", "todo-action");

        var todoBtn = document.createElement("button");
        todoBtn.setAttribute("class", "btn btn-sm btn-secondary btn-remove");
        var todoBtnText = document.createTextNode("Remove");

        todoBtn.appendChild(todoBtnText);
        todoAction.appendChild(todoBtn);

        //Check category
        var category = "";

        switch (categorySel.value) {
            case 'important':
                category = "important";
                break;
            case 'urgent':
                category = "urgent";
                break;
            case 'later':
                category = "later";
                    break;
            default:
                category = "";
        }

        // Add todo description and button to list item
        todoListItem.appendChild(todoDescription);
        todoListItem.appendChild(todoAction);

        // Add class for specific category
        if(category != "") 
            todoListItem.classList.add(category);

        // List item with an id of todo-empty
        var listTodoEmpty = document.getElementById("todo-empty");

        // Remove  list item with an id of todo-empty
        if(listTodoEmpty)
            todoList.innerHTML = "";

        todoList.appendChild(todoListItem);

        //Remove an item
        remove(todoBtn);

        //Reset task input field
        task.value = "";
    }
}


function remove(object) {
    object.addEventListener("click", function() {
        var confirm_res = confirm("Do you want to remove this task?");
        
        if(confirm_res)
            this.closest('li').remove();

        checkEmpty();
    })
}

function checkEmpty() {
    var todoItem = document.getElementsByClassName("todo-item");

    if(todoItem.length == 0) {

        todoList.innerHTML = "";

        var listTodoEmpty = document.createElement("li");
        listTodoEmpty.setAttribute("id", "todo-empty");
        
        var listTodoEmptyDescription = document.createTextNode("Task will be placed here.");

        listTodoEmpty.appendChild(listTodoEmptyDescription);
        todoList.appendChild(listTodoEmpty);
    } 

}

function removeTaskFromList() {
    var todoItems = document.getElementsByClassName("btn-remove");

    // Bind event for all of the button with a class name btn-remove
    for (let i=0; i< todoItems.length; i++) {
        remove(todoItems[i]);
    }
}




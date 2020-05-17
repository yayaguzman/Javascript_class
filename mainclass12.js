
//DOM
let showMeTodoList = document.getElementById("todoList") //List ID in the html
let addTask = document.getElementById("addItemInput") //text from the input
let todo = ["E.g. Clean the flat :("];

for (let i = 0; i < todo.length; i++) {
    let createItem = document.createElement("li");  //create each element of the list
    createItem.textContent = todo[i]; //prints
    showMeTodoList.appendChild(createItem); //this means add todo as a child of listElement 

    function newItemToList() {
        let addTodoItem = addTask.value;
        let printThisInListLast = document.createElement("li")
        printThisInListLast.textContent = addTodoItem;
        showMeTodoList.appendChild(printThisInListLast);

        printThisInListLast.onclick = function mark() { //this is called closure variables that point to a function
            if (printThisInListLast.style.textDecoration === "line-through") {
                printThisInListLast.style.textDecoration = "none";
            }
            else {
                printThisInListLast.style.textDecoration = "line-through";
            }
        }
        
        document.getElementById("addItemInput").value = ""; // This clears input field after submit
    }

    createItem.onclick = function() { //this is called closure variables that point to a function
        if (createItem.style.textDecoration === "line-through") {
            createItem.style.textDecoration = "none";
        }
        else {
            createItem.style.textDecoration = "line-through";
        }
    }


    function clickAllDone() { //This marks all items like done
        let items = showMeTodoList.children;
        for (i = 0; i < items.length; i++) {
            items[i].style.textDecoration = "line-through";
        }
    }

}


/*
<input type = "text" id= "addItem" placeholder="What do you need to do?">
  <button onclick="AddItemToList()"> Add </button>
   <ol id ="todoList"></ol>
*/























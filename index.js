console.clear();


// -------- INITIALISING VARIABLES  -------- //

let listIndex = 0;      // Stores the index of lists created


// -------- FACTORY FUNCTIONS  -------- //


containerLog = [];
function containerFactory(projectName, colour, todo) {
    return {
        projectName: projectName,
        colour: colour,
        todo: todo,
    }
}

todoLog = [];
function todoFactory(itemName, subItems, dueDate, status) {
    return {
        itemName: itemName,
        subItems: subItems,
        dueDate: dueDate,
        status: status,
    }
}

// -------- FUNCTIONS  -------- //


    // Create new list

newContainer = document.getElementById('new-container');
newContainer.addEventListener('click', function() {
    newList = containerFactory('placeholder', 'orange', []);
    cc = todoFactory('tester', '7 of 11', 'Mon, 17 Aug', false);
    newList.todo.push(cc);
    createList('placeholder', 'orange');
    containerLog.push(newList);
});


let i = 1;
function createList(projectName, colour) {
    divContainer = document.createElement('div');
    divContainer.id = 'project-template-container';
    
    stackLogo = document.createElement('span');
    stackLogo.className = 'material-symbols-outlined';
    stackLogo.innerHTML = 'menu';
    stackLogo.style['color'] = colour;
    stackLogo.id = 'stack-logo'+listIndex;

    list = document.createElement('input');
    list.id = 'item'+listIndex;
    list.className = 'project-template';
    list.type = 'text';
    list.name = projectName;
    list.value = projectName+listIndex;

    // Append new elements to container
    document.getElementById('project-list-container').appendChild(divContainer);
    divContainer.appendChild(stackLogo);
    divContainer.appendChild(list);

    // Select the newly created list
    list.focus();               // Clicks on the new list
    list.select();              // Highlights the new list
    listIndex = listIndex + 1;

    // Update object if list name changes
    list.addEventListener("change", listChange.bind(this, list, listIndex));
    function listChange(list,listIndex) {
        console.log(list.value);
        containerLog[listIndex-1].projectName = list.value;
    }

    // Wiping content per tab change
    divContainer.addEventListener("click", switchTab.bind(this, listIndex));
    function switchTab(listIndex) {
        console.log('tab switching...');
        obj = containerLog[listIndex-1];
        document.getElementById('project').innerHTML = obj.projectName;
        document.getElementById('project').style['color'] = obj.colour;
        // Clearing todo items on DOM
        document.querySelectorAll('#todo-card').forEach(e => e.remove());
        // Updating the DOM with the todo items from the respective list clicked on
        for (i=0; i<(obj.todo.length); i++) {
            todoCont = document.createElement('div');
            todoCont.id = 'todo-card';
            todoCont.className = 'cards';

            checkBox = document.createElement('div');
            checkBox.id = 'todo-checkbox';
            checkBox.className = 'checkbox';

            todoTitle = document.createElement('div');
            todoTitle.id = 'todo-title';
            todoTitle.className = 'titles';
            todoTitle.innerHTML = obj.todo[i].itemName;

            todoSub = document.createElement('div');
            todoSub.id = 'todo-subcontainer';
            todoSub.className = 'subcontainer';

            todoSubItem = document.createElement('div');
            todoSubItem.id = 'todo-subitem';
            todoSubItem.innerHTML = obj.todo[i].subItems;

            todoDue = document.createElement('div');
            todoDue.id = 'todo-due';
            todoDue.innerHTML = obj.todo[i].dueDate;

            document.getElementById('todo').appendChild(todoCont);
            todoCont.appendChild(checkBox);
            todoCont.appendChild(todoTitle);
            todoCont.appendChild(todoSub);
            todoSub.appendChild(todoSubItem);
            todoSub.appendChild(todoDue);

            checkBox.addEventListener('click', checkItem.bind(this, obj, i, todoCont));
            function checkItem(obj, i, todoCont) {
                obj.todo[i].status = true;
                document.getElementById('completed').appendChild(todoCont);
                console.log('appended'+obj.todo[i]);
            }

        }
    }

}




    // Collapse Completed/Incomplete tasks

// Controls incomplete tasks
let hiddenTodo = false;
toCompId = document.getElementById('to-complete-id');
toCompId.addEventListener('click', () => collapseTodo());
function collapseTodo() {
    if (hiddenTodo==false) {
        document.getElementById('todo-card').style.display = 'none';
        document.getElementById('todo-id-logo').innerHTML = 'navigate_next';
        hiddenTodo = true; 
        return
    }
    if (hiddenTodo==true) {
        document.getElementById('todo-card').style.display = '';
        document.getElementById('todo-id-logo').innerHTML = 'expand_more';
        hiddenTodo = false;
        return
    }
}
// Controls completed tasks
let hiddenComp = false;
compId = document.getElementById('completed-id');
compId.addEventListener('click', () => collapseComp());
function collapseComp() {
    if (hiddenComp==false) {
        document.getElementById('comp-card').style.display = 'none';
        document.getElementById('completed-id-logo').innerHTML = 'navigate_next';
        hiddenComp = true; 
        return
    }
    if (hiddenComp==true) {
        document.getElementById('comp-card').style.display = '';
        document.getElementById('completed-id-logo').innerHTML = 'expand_more';
        hiddenComp = false;
        return
    }
}

    // Check off items from list

checkbox = document.getElementById('todo-checkbox');
checkbox.addEventListener('click', () => checkboxClicked());

function checkboxClicked() {
    console.log('a checkbox was clicked');
    // LOGIC TO CHANGE 'status' of relevant todo item
}

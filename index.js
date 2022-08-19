console.clear();


// -------- INITIALISING VARIABLES  -------- //

let listIndex = 0;      // Stores the index of lists created


// -------- FACTORY FUNCTIONS  -------- //


containerLog = [];
function containerFactory(projectName, colour) {
    return {
        projectName: projectName,
        colour: colour,
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
    newList = containerFactory('placeholder', 'orange');
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

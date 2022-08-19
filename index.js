console.clear();

console.log('test console log');

checkbox = document.getElementById('todo-checkbox');
checkbox.addEventListener('click', () => checkboxClicked());

function checkboxClicked() {
    console.log('a checkbox was clicked');
}


listArr = []
let listIndex = 1;      // Stores the index of lists created

function listFactory(projectName, colour) { // Creates "new list" objects
    return {
        projectName: projectName,
        colour: colour,
    }

}

newContainer = document.getElementById('new-container');
newContainer.addEventListener('click', () => newContainerClicked());

function newContainerClicked() {
    newList = listFactory('test12', 'orange');
    createList('test12', 'orange');
    listArr.push(newList);
}

console.log('----------');
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
    list.id = 'project-template';
    list.type = 'text';
    list.name = 'project-template';
    list.value = 'Untitled-list '+listIndex;

    // Append new elements to container
    document.getElementById('project-list-container').appendChild(divContainer);
    divContainer.appendChild(stackLogo);
    divContainer.appendChild(list);

    // Select the newly created list
    list.focus();               // Clicks on the new list
    list.select();              // Highlights the new list
    listIndex = listIndex + 1;

    console.log('created '+listIndex);
}



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
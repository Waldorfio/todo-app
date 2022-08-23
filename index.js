console.clear();

// -------- INITIALISING VARIABLES  -------- //

let j = 1;              // Index to store number of lists created

// Create an audio effect
const audio = new Audio();
audio.src = "completed.mp3";
audio.preload = 'auto'; // Preload it by initialising it here, to call later (efficient)

// -------- FACTORY FUNCTIONS  -------- //

let containerLog = [];
function containerFactory(projectName, colour, todo, index) {
    return {
        projectName: projectName,
        colour: colour,
        todo: todo,
        index: index,
    }
}

let todoLog = [];
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
    newList = containerFactory('placeholder', 'orange', [], j);
    cc = todoFactory('tester', '7 of 11', 'Mon, 17 Aug', false);
    newList.todo.push(cc);
    createList('placeholder', 'orange', j);
    containerLog.push(newList);
    j = j + 1;
});

let i = 1;
function createList(projectName, colour, j) {
    divContainer = document.createElement('div');
    divContainer.id = 'project-template-container';

    stackLogo = document.createElement('span');
    stackLogo.className = 'material-symbols-outlined';
    stackLogo.innerHTML = 'menu';
    stackLogo.style['color'] = colour;
    stackLogo.id = 'stack-logo'+j;

    list = document.createElement('input');
    list.id = 'item'+j;
    list.className = 'project-template';
    list.type = 'text';
    list.name = projectName;
    list.value = projectName+j;

    // Append new elements to container
    document.getElementById('project-list-container').appendChild(divContainer);
    divContainer.appendChild(stackLogo);
    divContainer.appendChild(list);

    // Select the newly created list
    list.focus();               // Clicks on the new list
    list.select();              // Highlights the new list

    // Update the project name on RHS (coloured)
    obj = containerLog[j-1];
    document.getElementById('project').innerHTML = projectName+j;
    document.getElementById('project').style['color'] = colour;
    document.getElementById('project').value = j;

    // Listens to changes in the input text, to make changes across DOM and object
    list.addEventListener("input", listChange.bind(this, list, j));
    // Listens for when the container list is clicked on, to refresh DOM
    divContainer.addEventListener("click", updateDom.bind(this, j, list));

    createDropdown(stackLogo);
}

function createDropdown(stackLogo) {
    // Append to HTML DOM
    dropContainer = document.createElement('div');
    dropContainer.className = 'list-dropdown-container';
    stackLogo.appendChild(dropContainer);

    renameList = document.createElement('div');
    renameList.className = 'rename-list';
    renameList.innerHTML = 'Rename List';
    dropContainer.appendChild(renameList);

    deleteList = document.createElement('div');
    deleteList.className = 'delete-list';
    deleteList.innerHTML = 'Delete List';
    dropContainer.appendChild(deleteList);

    dropContainer.style.visibility = 'hidden';

    // Create the Javascript functionality
    stackLogo.addEventListener('click', listDropdown.bind(this,stackLogo,dropContainer));
    function listDropdown(stackLogo, dropContainer, e) {
        dropContainer.style.visibility = '';                // Unhide the dropdown
        // checkOutsideClick();
        if (e.target.className == renameList.className) {
            console.log('renamed.');
            dropContainer.style.visibility = 'hidden';      // Rehide the dropdown
            dropContainer.parentNode.parentNode.lastChild.select();
        }
        if (e.target.className == deleteList.className) {
            console.log('deleted.');
            dropContainer.style.visibility = 'hidden';      // Rehide the dropdown
            dropContainer.parentNode.parentNode.innerHTML = '';
        }
        if (e.target.className!=renameList.className &&
            e.target.className!=deleteList.className &&
            e.target.className!=stackLogo.className) {
            console.log('outside click');
            dropContainer.style.visibility = 'hidden';      // Rehide the dropdown
        }
    }
}

// Function to update the list name if it is change, in DOM and object
function listChange(list,j) {
    containerLog[j-1].projectName = list.value;
    document.getElementById('project').innerHTML = containerLog[j-1].projectName;
}

function updateDom(j, list) {
    obj = containerLog[j-1];
    // Try updating list value (i.e. project name on LHS container), if clicked on. Otherwise ignore.
    try {
        obj.projectName = list.value;
    } catch (error) {
        console.log('Already updated project name.')
    }
    // Update the project name and colour
    document.getElementById('project').innerHTML = obj.projectName;
    document.getElementById('project').style['color'] = obj.colour;
    document.getElementById('project').value = j;
    // Clearing todo items on DOM
    document.querySelectorAll('.cards').forEach(e => e.remove());
    // Updating the DOM with the todo items from the respective list clicked on
    for (i=0; i<(obj.todo.length); i++) {
        cardCont = document.createElement('div');
        cardCont.className = 'cards';

        checkBox = document.createElement('div');
        checkBox.className = 'checkbox';

        cardTitle = document.createElement('div');
        cardTitle.className = 'card-title';
        cardTitle.innerHTML = obj.todo[i].itemName;

        cardSub = document.createElement('div');
        cardSub.className = 'card-subcontainer';

        cardSubItem = document.createElement('div');
        cardSubItem.className = 'subitems';
        cardSubItem.innerHTML = obj.todo[i].subItems;

        cardDue = document.createElement('div');
        cardDue.className = 'due-date';
        cardDue.innerHTML = obj.todo[i].dueDate;

        if (obj.todo[i].status==false) {        // Append to 'to complete' list
            document.getElementById('todo').appendChild(cardCont);
        }
        if (obj.todo[i].status==true) {         // Append to 'completed' list
            document.getElementById('completed').appendChild(cardCont);
        }
        cardCont.appendChild(checkBox);
        cardCont.appendChild(cardTitle);
        cardCont.appendChild(cardSub);
        cardSub.appendChild(cardSubItem);
        cardSub.appendChild(cardDue);

        // Checkbox ticking (REFACTOR ME LATER-----------------)
        checkBox.addEventListener('click', checkItem.bind(this, obj, i, cardCont));
        function checkItem(obj, i, cardCont) {
            obj.todo[i].status = true;
            document.getElementById('completed').appendChild(cardCont);
            audio.currentTime = 0.08;
            audio.play();
        }
    }
}

// Update object if enter text in "Add a task" box
addTaskId = document.getElementById('add-task');
addTaskId.addEventListener("keyup", function(e) {
    listIndex = document.getElementById('project').value - 1;
    if (e.key === 'Enter') {
        cc = todoFactory(addTaskId.value, '7 of 11', 'Mon, 17 Aug', false);
        containerLog[listIndex].todo.push(cc);
        addTaskId.value = '';           // Clear the input box
        updateDom(listIndex+1);
    }
})

    // COLLAPSING ITEMS

// Controls incomplete tasks -------- CAN REFACTOR
let hiddenTodo = false;
toCompId = document.getElementById('to-complete-id');
toCompId.addEventListener('click', () => collapseTodo());
function collapseTodo() {
    if (hiddenTodo==false) {
        for (let cards of document.querySelectorAll('#todo .cards')) cards.style.visibility = 'hidden';
        document.getElementById('todo-id-logo').innerHTML = 'navigate_next';
        hiddenTodo = true; 
        return
    }
    if (hiddenTodo==true) {
        for (let cards of document.querySelectorAll('#todo .cards')) cards.style.visibility = '';
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
        for (let cards of document.querySelectorAll('#completed .cards')) cards.style.visibility = 'hidden';
        document.getElementById('completed-id-logo').innerHTML = 'navigate_next';
        hiddenComp = true; 
        return
    }
    if (hiddenComp==true) {
        for (let cards of document.querySelectorAll('#completed .cards')) cards.style.visibility = '';
        document.getElementById('completed-id-logo').innerHTML = 'expand_more';
        hiddenComp = false;
        return
    }
}
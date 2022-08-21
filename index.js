console.clear();


// -------- INITIALISING VARIABLES  -------- //

let listIndex = 0;      // Stores the index of lists created

var audio = new Audio();
audio.src = "completed.mp3";
audio.preload = 'auto';



// -------- FACTORY FUNCTIONS  -------- //


containerLog = [];
function containerFactory(projectName, colour, todo, index) {
    return {
        projectName: projectName,
        colour: colour,
        todo: todo,
        index: index,
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
j = 1;


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




    // Update the project name on RHS (coloured)
    console.log(containerLog)
    obj = containerLog[listIndex-1];
    document.getElementById('project').innerHTML = projectName+listIndex;
    document.getElementById('project').style['color'] = colour;
    document.getElementById('project').value = j;
    console.log('the value: '+document.getElementById('project').value)



    
    // Update object if list name changes
    function updateListName() {
        list.addEventListener("change", listChange.bind(this, list, listIndex));
        function listChange(list,listIndex) {
            containerLog[listIndex-1].projectName = list.value;
        }
    }
    updateListName();

    // Wiping content per tab change
    divContainer.addEventListener("click", switchTab.bind(this, listIndex, j));
    function switchTab(listIndex, j) {
        obj = containerLog[listIndex-1];
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

            checkBox.addEventListener('click', checkItem.bind(this, obj, i, cardCont));
            function checkItem(obj, i, cardCont) {
                obj.todo[i].status = true;
                document.getElementById('completed').appendChild(cardCont);
                audio.currentTime = 0.08;
                audio.play();
                console.log('appended'+obj.todo[i]);
            }
        }
    }

    function updateDom(listIndex) {
        obj = containerLog[listIndex-1];
        // Update the project name and colour
        document.getElementById('project').innerHTML = obj.projectName;
        document.getElementById('project').style['color'] = obj.colour;
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
                console.log('appended'+obj.todo[i]);
            }
        }
    }


}


// Update object if task name
document.getElementById('project').innerHTML;

addTaskId = document.getElementById('add-task');
addTaskId.addEventListener("click", newTaskAdd.bind(this, addTaskId, listIndex));
function newTaskAdd(addTaskId, listIndex) {
    console.log('clicked the input text');
    document.addEventListener("keypress", function(event) {
        if (event.key == 'Enter') {
            console.log('clicked the ENTER key.');
            cc = todoFactory(addTaskId.value, '7 of 11', 'Mon, 17 Aug', false);
            containerLog[listIndex].todo.push(cc);
            addTaskId.value = '';           // Clear the input box
            // console.log('containerLog[0]: '+containerLog[0]);
            // console.log('containerLog[1]: '+containerLog[1]);
            // console.log('containerLog[2]: '+containerLog[2]);
            updateDom(listIndex);
        }
    });
}


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

console.clear();

console.log('test console log');

checkbox = document.getElementById('todo-checkbox');
checkbox.addEventListener('click', () => checkboxClicked());

function checkboxClicked() {
    console.log('a checkbox was clicked');
}



listArr = []

function listFactory(projectName, colour) { // Creates "new list" objects
    return {
        projectName: projectName,
        colour: colour,
    }

}

newContainer = document.getElementById('new-container');
newContainer.addEventListener('click', () => newContainerClicked());

function newContainerClicked() {
    newList = listFactory('test12','red');
    createList('test12','red');
    listArr.push(newList);
}

console.log('----------');

function createList(projectName, colour) {
    list = document.createElement('div');
    list.id = 'project-template';
    list.innerHTML = projectName;
    document.getElementById('project-list-container').appendChild(list);
}
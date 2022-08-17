console.clear();

console.log('test console log');

checkbox = document.getElementById('todo-checkbox');
checkbox.addEventListener('click', () => checkboxClicked());

function checkboxClicked() {
    console.log('a checkbox was clicked');
}

console.log('----------');
console.clear();

console.log('test console log');

checkbox = document.getElementById('todo-checkbox');
checkbox.addEventListener('click', () => checkboxHover());

function checkboxHover() {
    if (checkbox.innerHTML=='') {checkbox.innerHTML='✓'; return};
    if (checkbox.innerHTML=='✓') {checkbox.innerHTML=''; return};
}

console.log('----------');
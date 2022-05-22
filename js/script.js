const list = document.getElementById('list');
var add = document.getElementById('add').addEventListener("click", function(e){
    const inputText = document.getElementById('textInput');
    if(inputText.value != ""){
        addInput(inputText.value);
        inputText.value = "";
    }
})

function addInput(description){
    const newTask = document.createElement('div');
    const task = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    task.setAttribute('type', 'checkbox');
    task.setAttribute('name', description);
    task.setAttribute('id', description);

    taskLabel.setAttribute('for', description)
    taskLabel.appendChild(taskDescriptionNode)

    newTask.classList.add('list-item');
    newTask.appendChild(task)
    newTask.appendChild(taskLabel)
    
    list.appendChild(newTask);
}
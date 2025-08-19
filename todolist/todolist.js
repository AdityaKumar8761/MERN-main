const todolist = [];

render();

function render(){

    let todolistHTML = ``

    for(let i = 0;  i < todolist.length ; i++){
        const todoObj = todolist[i];
        const name = todoObj.name;
        const dueDate = todoObj.dueDate;
        const html = `
        <div class="d">
            <P class="p">${name}</p>
            <p class="p">${dueDate}</p> 
            <button class="b" onclick = "todolist.splice(${i},1) ; render()"  >
                Delete
            </button> 
            </div>`
        todolistHTML += html;
    }
    document.querySelector('.js-todo-list')
        .innerHTML = todolistHTML
}

function Addtodo(){
    
    a =document.querySelector('.todoname');
    b =document.querySelector('.js-dueDate');


    todolist.push({
        name: a.value,
        dueDate: b.value
    })


    render();
}


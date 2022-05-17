let addTaskBtn = document.querySelector(".add-task");
let taskInput = document.querySelector("input.task-title");
let taskWrapper = document.querySelector(".tasks .list-group");
let deleteBtn=document.querySelector(".delete")
let itemList=document.querySelector(".list-group-item")

addTaskBtn.onclick = () => {
    if (taskInput.value.trim() !== "") {
        let newTaskElem = "<li class='list-group-item'>" + taskInput.value + "</li><div class='actions col-md-4'><button type='button' class='edit btn btn-success  w-25 add-task'>Edit</button>                <button type='button' class='delete btn btn-success  w-25 add-task'>Delete</button>            </div>"
        taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML ;
        taskInput.value = "";
    }
    else {
        alert("Can't add an empty task!");
    }
}


deleteBtn.addEventListener("click",()=>{
    itemList.value = "";
    
})
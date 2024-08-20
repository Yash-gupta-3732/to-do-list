let date = document.querySelector(".date");
let task_deadline = document.querySelector(".task-deadline");
let add = document.querySelector(".add");
let body_left = document.querySelector(".todo-body-left");
let arrow_btn = document.querySelector(".arrow-btn");
let tasks = document.querySelector(".tasks").querySelector(".listcontainer")
let field = document.getElementById("field");
let deadline_time = document.getElementById("deadline-time");
let task = document.getElementById("task");
let listcontainer = document.querySelector(".listcontainer")
let task_count = document.querySelector("#task-count");
let delete_btn = document.querySelector("#deleted");
let paragraph = document.createElement("p");
let div = document.createElement("div");
let input = document.createElement("input")
paragraph.id = "check-deco";
div.className = "task-deadline";

const currentDate = new Date();
const options = { year: 'numeric', month: 'short', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
date.innerHTML = formattedDate;
add.addEventListener("click", () => {
    body_left.classList.remove("display-hide")
})
arrow_btn.addEventListener("click", () => {
    body_left.classList.add("display-hide")
});
function Addtask() {
    if (task.value === "" || deadline_time.value === "" || field.value === "") {
        alert("This field cannot be empty!")
    }
    else {
        tasks.innerHTML = tasks.innerHTML + `<li> <div class="task-card">
          <div class="checked"><input type="checkbox"></div>
                    <div class="my-task">
                         <p id="check-deco" >${task.value}</p> 
                      <p id="field-paragraph">${field.value}</p> 
                    </div>
                    ${div.innerHTML = deadline_time.value}
                    <span id="deleted"><svg data-del="del" class="delete" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></span>
                </div>
                <hr class="line-break-2" ></li>`

    }
    deadline_time.value = "";
    task.value = "";
    field.value = "";
    let list = listcontainer.children;
    task_count.innerHTML = list.length;
    savedata();
    appendData();
}
function savedata() {
    localStorage.setItem("Taskdata", listcontainer.innerHTML);
    localStorage.setItem("Task-count", task_count.innerHTML);
}
function appendData() {
    listcontainer.innerHTML = localStorage.getItem("Taskdata");
    task_count.innerHTML = localStorage.getItem("Task-count");
}
appendData();

console.log(listcontainer.children)
let arr = Array.from(listcontainer.children);

arr.forEach((e) => {
    e.addEventListener("click", (e) => {

        if (e.target.tagName == "path" || e.target.tagName == "svg") {
            e.currentTarget.remove();
            console.log(arr)
            savedata();
            appendData();
        }
    })
})
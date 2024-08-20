function Addtask() {
    if (task.value === "" || deadline_time.value === "" || field.value === "") {
        alert("This field cannot be empty!");
    }
    else {
        tasks.innerHTML = tasks.innerHTML + `<li> <div class="task-card">
                    <div class="checkbox"><input type="checkbox"></div>
                    <div class="my-task">
                        <p>${task.value}</p>
                      <p id="field-para" >${field.value}</p> 
                    </div>
                    <div class="task-deadline">${deadline_time.value}</div>
                    <div id="delete"><img src="delete.svg" alt="img"></div>
                </div>
                <hr class="line-break-2" ></li>`;
    }
    deadline_time.value = "";
    task.value = "";
    field.value = "";
    let list = listcontainer.children;
    task_count.innerHTML = list.length;
    savedata();
}

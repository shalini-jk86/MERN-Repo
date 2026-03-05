document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.className = "list-group-item";

  const span = document.createElement("span");
  span.textContent = taskText;

  // Toggle completed
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn btn-sm btn-warning me-2";
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-sm btn-danger";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  const btnGroup = document.createElement("div");
  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
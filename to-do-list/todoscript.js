function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <span onclick="deleteTask(this)" style="cursor:pointer; color:red;">✖</span>
  `;
  li.onclick = () => li.classList.toggle("completed");

  taskList.appendChild(li);
  input.value = "";
}

function deleteTask(span) {
  span.parentElement.remove();
}

const inputElem = document.querySelector("#taskInput");
const createElem = document.querySelector("#addBtn");
const taskListElem = document.querySelector("#list");

const createActionsHTML = () => {
  const editSVG = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 21l3-1 11-11 2 2L8 22 3 21z"
            stroke="white"
            stroke-width="0.9"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.8"
          ></path>
        </svg>`;

  const deleteSVG = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 6h18M8 6v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6M10 6V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2"
            stroke="white"
            stroke-width="0.96"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>`;

  return { editSVG, deleteSVG };
};

createElem.addEventListener("click", () => {
  const value = inputElem.value.trim();

  if (!value) return alert("Значение не должно быть пустым!");

  const { editSVG, deleteSVG } = createActionsHTML();

  const task = document.createElement("div");
  task.setAttribute("class", "task");
  task.setAttribute("data-done", "false");
  taskListElem.append(task);

  const checkboxBtn = document.createElement("button");
  checkboxBtn.setAttribute("class", "checkbox");
  task.append(checkboxBtn);

  const taskStatus = document.createElement("div");
  taskStatus.setAttribute("class", "task-status");
  checkboxBtn.append(taskStatus);

  const taskName = document.createElement("div");
  taskName.setAttribute("class", "text");
  task.append(taskName);
  taskName.innerText = value;

  const actions = document.createElement("div");
  actions.setAttribute("class", "actions");
  task.append(actions);

  const editBtn = document.createElement("button");
  editBtn.setAttribute("class", "icon-btn");
  editBtn.innerHTML = editSVG;
  actions.append(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "icon-btn delete");
  deleteBtn.innerHTML = deleteSVG;
  actions.append(deleteBtn);

  inputElem.value = "";

  checkboxBtn.addEventListener("click", () => {
    const isDone = task.getAttribute("data-done") === "true";

    if (isDone) {
      task.setAttribute("data-done", "false");
      taskStatus.style.backgroundColor = "";
      taskName.style.textDecoration = "";
    } else {
      task.setAttribute("data-done", "true");
      taskStatus.style.backgroundColor = "#5cb85c";
      taskName.style.textDecoration = "line-through";
    }
  });

  deleteBtn.addEventListener("click", () => {
    task.remove();
  });

  const handleEdit = () => {
    const currentText = taskName.innerText;
    const newText = prompt("Отредактируйте задачу:", currentText);

    if (newText !== null) {
      const trimmedText = newText.trim();
      if (trimmedText) {
        taskName.innerText = trimmedText;
      } else {
        alert("Значение не должно быть пустым!");
      }
    }
  };

  editBtn.addEventListener("click", handleEdit);

  taskName.addEventListener("dblclick", handleEdit);
});

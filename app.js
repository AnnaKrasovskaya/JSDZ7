const form = document.querySelector(".todo-form");
const { todoTask, todoDate, todoCategory } = form.elements;
const tasks = [];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    todoTask.value === "" &&
    todoDate.value === "" &&
    todoCategory.value === ""
  ) {
    alert("Поля не заполнены");
    return;
  }
  tasks.push({
    name: todoTask.value,
    days: todoDate.value,
    category: todoCategory.value,
  });
  event.target.reset();
  renderTasks(tasks);
});

function renderTasks(tasks) {
  const list = document.querySelector(".todo-List");
  list.innerHTML = "";
  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.classList.add("task");
    listItem.innerHTML = `<span class = "name">${task.name}</span>
        <span class = "date">Количество дней на задачу:${task.days} </span>
        <span class = "category">Категория: ${task.category} </span>`;
    list.append(listItem);
  });
}

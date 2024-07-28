let addTask = document.querySelector("button");
let todo = document.getElementById("todo");

addTask.addEventListener("click", () => {
  let newTaskElement = document.createElement("div");
  newTaskElement.setAttribute("class", "task-item");
  newTaskElement.setAttribute("draggable", true);
  let taskname = document.createElement("div");
  taskname.setAttribute("class", "task-name");
  taskname.innerText = "New Task";
  taskname.setAttribute("contenteditable", true);
  taskname.setAttribute("draggable", true);
  newTaskElement.append(taskname);

  taskname.addEventListener("blur", (e) => {
    if (taskname.innerText.trim() === "") {
      console.log(newTaskElement);
      newTaskElement.remove();
    }
  });

  let dropdown = document.createElement("select");
  dropdown.innerHTML = `
  <option value="todo"> TODO </option>
    <option value="inprogress"> Progress </option>
    <option value="done"> Done </option>
  `;
  newTaskElement.append(dropdown);

  //   dropdown.addEventListener("change", () => {
  //     let taskValue = dropdown.value;
  //     let selectedCol = document.getElementById(taskValue);
  //     selectedCol.append(newTaskElement);
  //   });

  todo.append(newTaskElement);
});

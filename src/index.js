// Importando clasess
import "./styles.css";
import { Task } from "./task";
import { TaskUi } from "./taskUi";

// Obteniendo elementos del DOM
document.getElementById("form-data").addEventListener("click", e => {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const color = document.getElementById("color").value;
  const date = document.getElementById("date").value;

  // Creando instancias de las clases task y uitask
  const tasks = new Task(name, description, color, date);
  const uiTask = new TaskUi();

  //Guardando información dentro del DOM
  uiTask.createTask(tasks);
  uiTask.showTask(tasks);
  uiTask.clearForm();

  // Función que nos permitira eliminar un elemento dentro del DOM
  const deleteElement = document.getElementById("ui-task");
  deleteElement.addEventListener("click", event => {
    const uiTask = new TaskUi();
    uiTask.deleteTask(event.target);

    event.preventDefault();
  });

  e.preventDefault();
});

export class TaskUi {
  createTask(task) {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const color = document.getElementById("color").value;
    const date = document.getElementById("date").value;

    if (task === null) {
      this.taskElements.push(task);
      this.messageAlert("Se guardo correctamente la tarea", "succcess");
    } else {
      this.taskElements = [];
      this.messageAlert("No se pudo guardar la tarea", "warning");
    }
  }

  showTask(addTask) {
    const uiTaskList = document.getElementById("ui-task");
    const element = document.createElement("div");

    element.innerHTML = `
        <div class="card border-primary mb-3" style="max-width: 40rem;">
          <div class="card-header">
            <h2 class="text-center">Tasks</h2>
          </div>
          <div class="card-body">
            <h4 class="card-title">${addTask.name}</h4>
            <p class="card-text">${addTask.description}</p>
            <p><strong>${addTask.color}</strong></p>
            <p>${addTask.date}</p>

            <button name="delete" class="btn btn-danger">Delete</button>
          </div>
        </div>
    `;

    uiTaskList.appendChild(element);
  }

  deleteTask(element) {
    const uiTaskList = document.getElementById("ui-task");

    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.messageAlert("Se elimino correctamente la tarea", "success");
    }
  }

  clearForm() {
    const name = (document.getElementById("name").value = "");
    const description = (document.getElementById("description").value = "");
    const color = (document.getElementById("color").value = "");
    const date = (document.getElementById("date").value = "");
  }

  messageAlert(msg, cssAlert) {
    //Creando un elemento div para mostrar una alerta en el DOM
    const div = document.createElement("div");
    // Al div le estamos agregando un className que sera el color de la laerta
    div.className = `alert alert-${cssAlert} mt-3`;

    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector(".container");
    const messageAlert = document.getElementById("message-alert");
    container.insertBefore(div, messageAlert);

    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

// Creando clase tareas que sera exportada al archivo principal index.js

export class Task {
  constructor(name, description, color, date) {
    this.name = name;
    this.description = description;
    this.color = color;
    this.date = date;

    this.taskElements = [];
  }
}

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: String,
}, {timestamps: true});

// Compilamos el modelo al schema:
// El primer argumento es el nombre en singular de la colección a la que pertenece el modelo.
// Mongoose busca automáticamente la versión en plural, en minúsculas, del nombre del modelo.
// Por lo tanto, el modelo "User" corresponde a la colección de users de la base de datos. 

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
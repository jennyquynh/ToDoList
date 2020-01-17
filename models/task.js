const mongoose = require('mongoose');


const TaskSchema = mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    isDone: {
        type: Boolean,
        require: true
    }
});

const Task = module.exports = mongoose.model('Task', TaskSchema);
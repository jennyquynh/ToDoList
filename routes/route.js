const express = require('express');
const router = express.Router();

const Task = require('../models/task');


//retrieving task
router.get('/tasks', (req, res, next) => {
    Task.find((err, tasks) => {
        res.json(tasks);
    })
});


//add task
router.post('/task', (req, res, next) => {
    let newTask = new Task ({
        task: req.body.task,
        isDone: req.body.isDone
    });

    newTask.save((err, task) => {
        if(err)
        {
            res.json({msg: 'Failed to add task.'});
        }
        else {
            res.json({msg: 'Task added successfully'});
        }
    })
});


//delete task
router.delete('/todo/:id', (req, res, next) => {
    Task.remove({_id: req.params.id}, (err, result) => {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })
});


module.exports = router;
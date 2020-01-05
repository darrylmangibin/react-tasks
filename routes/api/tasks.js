const express = require('express');
const router = express.Router();

const Task = require('../../models/Task');

// TEST
router.get('/test', (req, res) => {
  res.send('test')
})

// GET
router.get('/', (req, res) => {
  Task.find().then(tasks => {
    res.status(200).json(tasks)
  }).catch(err => {
    res.status(400).json(err)
  })
})

// POST
router.post('/', (req, res) => {
  const { title, completed } = req.body;
  const error = {};
  if(title.length <= 0 || title === '') {
    error.title = 'Please add a task'
  }
  if(Object.keys(error).length > 0) {
    return res.status(400).json(error)
  }
  Task.findOne({ title }).then(task => {
    if(task) {
      error.title = 'Task already exist';
      return res.status(400).json(error)
    }
    const newTask = new Task({
      title,completed
    })
    newTask.save().then(task => {
      if(!task) {
        return res.status(400).json({ success: false });
      }
      res.status(200).json(task)
    }).catch(err => {
      res.status(400).json(err)
    })
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Task.findByIdAndDelete(id).then(task => {
    console.log(task)
    if(!task) return res.status(400).json({ success: false });
    res.status(200).json(task)
  }).catch(err => {
    res.status(400).json(err)
  })
})

// PUT
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const newData = {
    completed: req.body.completed
  }
  Task.findByIdAndUpdate(id, newData).then(task => {
    if(!task) {
      return res.status(400).json({ success: false })
    }
    Task.findById(task._id).then(task => {
      res.status(200).json(task)
    })
  }).catch(err => {
    res.status(400).json(err)
  })
})

module.exports = router;
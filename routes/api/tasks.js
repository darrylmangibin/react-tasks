const express = require('express');
const router = express.Router();

const Task = require('../../models/Task');

// TEST
router.get('/test', (req, res) => {
  res.send('test')
})

module.exports = router;
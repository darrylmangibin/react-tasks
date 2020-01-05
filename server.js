const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');

const app = express();

app.options('*', cors());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB configuration
const db = config.get('mongoURI');
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected')
}).catch(() => {
  console.log('Connection failed')
})

// ROUTES
app.use('/api/tasks', require('./routes/api/tasks'));

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})
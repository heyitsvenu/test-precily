const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const boxOneRouter = require('./routes/boxOne');
const boxTwoRouter = require('./routes/boxTwo');
const path = require('path');

// Middleware
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.json());

app.use('/api/info', boxOneRouter);
app.use('/api/info', boxTwoRouter);

// Port Number
const port = process.env.PORT || 5000;

// Server listen
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

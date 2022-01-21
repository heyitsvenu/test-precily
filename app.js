const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const boxOneRouter = require('./routes/boxOne');
const boxTwoRouter = require('./routes/boxTwo');
const path = require('path');
const fs = require('fs');

// Middleware
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.json());

let count = 0;

app.use('/api/info', (req, res, next) => {
  res.on('finish', () => {
    count++;
    fs.writeFileSync('./misc/count.txt', `${count}`);
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${count}`);
  });
  next();
});

app.use('/api/info', boxOneRouter);
app.use('/api/info', boxTwoRouter);

app.get('/api/stats', (req, res) => {
  const count = fs.readFileSync('./misc/count.txt', 'utf-8');
  res.status(200).json({ count });
});

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

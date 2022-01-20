const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const boxOneRouter = require('./routes/boxOne');
const boxTwoRouter = require('./routes/boxTwo');
const path = require('path');

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.use('/api/info', boxOneRouter);
app.use('/api/info', boxTwoRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

import express from 'express';
import multiplicator from './index';
const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  console.log('Home Page Loaded');
  res.send('This is a Home Page');
});

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.get('/multiply', (_req, res) => {
  console.log("express = " + multiplicator(5, 4, 'Multiplied 5 and 4, the result is:'));
  res.send("express = " + multiplicator(5, 4, 'Multiplied 5 and 4, the result is:'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
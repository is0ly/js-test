import express from 'express';
import sum from './model.js';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  const result = sum(5, 3);
  res.send(`${result}`);
});

app.listen(PORT, () => {
  console.log(`Example app listen on port: ${PORT}`);
});

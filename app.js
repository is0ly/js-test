import express from 'express';
import { sum, reverseSring } from './models.js';

const app = express();
app.use(express.json());
const PORT = 3000;

app.post('/sum', (req, res) => {
  const { numbers } = req.body;
  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: 'Missing numbers field' });
  }
  const result = sum(numbers);
  res.json({ result });
  return '';
});

app.post('/reverse', (req, res) => {
  const { string } = req.body;
  if (!string) {
    return res.status(400).json({ error: 'Missing string field' });
  }
  const reversedString = reverseSring(string);
  res.json({ reversedString });
  return '';
});

app.listen(PORT, () => {
  console.log(`Example app listen on port: ${PORT}`);
});

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(5000, () => {
  console.log('Test server running on port 5000');
});
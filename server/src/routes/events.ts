import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get events endpoint - coming soon' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get single event endpoint - coming soon' });
});

export default router;
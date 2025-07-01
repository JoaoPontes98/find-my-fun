import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get recommendations endpoint - coming soon' });
});

export default router;
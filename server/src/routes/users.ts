import express from 'express';
const router = express.Router();

router.get('/profile', (req, res) => {
  res.json({ message: 'User profile endpoint - coming soon' });
});

router.put('/preferences', (req, res) => {
  res.json({ message: 'Update user preferences endpoint - coming soon' });
});

export default router;

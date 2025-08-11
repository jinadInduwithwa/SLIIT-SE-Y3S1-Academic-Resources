import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
  res.json({ message: `Hello ${req.user.username}, you're accessing a protected route.` });
});

export default router;

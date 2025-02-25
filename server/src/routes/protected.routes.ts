import { Router } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';

const router = Router();

// Protected routes that require authentication
router.get('/profile', (req: AuthRequest, res) => {
  res.json({
    message: 'Protected route accessed successfully',
    user: req.user
  });
});

router.post('/update-profile', (req: AuthRequest, res) => {
  const { name, email } = req.body;
  // TODO: Implement actual profile update logic
  res.json({
    message: 'Profile updated successfully',
    updates: { name, email }
  });
});

export default router;

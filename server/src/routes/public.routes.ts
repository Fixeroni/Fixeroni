import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserCredentials } from '../types/auth.types';
import { verifyGoogleToken, verifyFacebookToken, verifyAppleToken, verifyArtisanGoogleToken } from '../controllers/social-auth.controller';
import prisma from '../lib/prisma';
import { TokenService } from '../services/token.service';
import { authLimiter } from '../middleware/rate-limit.middleware';

const router = Router();

// Health check route
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Sign up route
router.post('/signup', authLimiter, async (req, res) => {
  try {
    const { fixeroni_tag, email, first_name, password } = req.body as UserCredentials;

    if (!fixeroni_tag || !email || !first_name || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { fixeroni_tag },
          { email }
        ]
      }
    });

    if (existingUser) {
      return res.status(400).json({ 
        message: 'User already exists with this fixeroni_tag or email' 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        fixeroni_tag,
        email,
        first_name,
        password: hashedPassword,
        provider: 'local'
      }
    });

    // Generate tokens
    const tokens = await TokenService.generateAuthTokens(newUser.id);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      message: 'User created successfully',
      ...tokens,
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

// Sign in route
router.post('/signin', authLimiter, async (req, res) => {
  try {
    const { fixeroni_tag, password } = req.body as UserCredentials;

    if (!fixeroni_tag || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { fixeroni_tag }
    });

    if (!user || !user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate tokens
    const tokens = await TokenService.generateAuthTokens(user.id);

    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: 'Authentication successful',
      ...tokens,
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json({ message: 'Error during sign in' });
  }
});

// Refresh token route
router.post('/refresh-token', async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ message: 'Refresh token is required' });
    }

    const tokens = await TokenService.refreshToken(refreshToken);
    res.json(tokens);
  } catch (error) {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
});

// Logout route
router.post('/logout', async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (refreshToken) {
      await TokenService.revokeToken(refreshToken);
    }

    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ message: 'Error during logout' });
  }
});

// Social authentication routes
router.post('/auth/google/verify', authLimiter, verifyGoogleToken);
router.post('/auth/facebook/verify', authLimiter, verifyFacebookToken);
router.post('/auth/apple/verify', authLimiter, verifyAppleToken);

// Artisan signup route
router.post('/artisan/signup', authLimiter, async (req, res) => {
  try {
    const { 
      fixeroni_tag, 
      email, 
      password,
      yearsOfExperience,
      category,
      linkToPortfolio,
      address,
      categoryOfService,
      governmentIdLink,
      profilePicture
    } = req.body;

    // Validate required fields
    if (!fixeroni_tag || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if artisan already exists
    const existingArtisan = await prisma.artisan.findFirst({
      where: {
        OR: [
          { fixeroni_tag },
          { email }
        ]
      }
    });

    if (existingArtisan) {
      return res.status(400).json({ 
        message: 'Artisan already exists with this fixeroni_tag or email' 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new artisan
    const newArtisan = await prisma.artisan.create({
      data: {
        fixeroni_tag,
        email,
        password: hashedPassword,
        yearsOfExperience: yearsOfExperience || 0,
        category: category || 'uncategorized',
        linkToPortfolio: linkToPortfolio || '',
        address: address || '',
        categoryOfService: categoryOfService || 'uncategorized',
        governmentIdLink: governmentIdLink || '',
        profilePicture: profilePicture || '',
        accountType: 'artisan',
        provider: 'local'
      }
    });

    // Generate tokens
    const tokens = await TokenService.generateAuthTokens(newArtisan.id);

    // Remove password from response
    const { password: _, ...artisanWithoutPassword } = newArtisan;

    res.status(201).json({
      message: 'Artisan created successfully',
      ...tokens,
      artisan: artisanWithoutPassword
    });
  } catch (error) {
    console.error('Artisan signup error:', error);
    res.status(500).json({ message: 'Error creating artisan' });
  }
});

// Artisan signin route
router.post('/artisan/signin', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Find artisan
    const artisan = await prisma.artisan.findUnique({
      where: { email }
    });

    if (!artisan || !artisan.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, artisan.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate tokens
    const tokens = await TokenService.generateAuthTokens(artisan.id);

    const { password: _, ...artisanWithoutPassword } = artisan;

    res.json({
      message: 'Authentication successful',
      ...tokens,
      artisan: artisanWithoutPassword
    });
  } catch (error) {
    console.error('Artisan signin error:', error);
    res.status(500).json({ message: 'Error during sign in' });
  }
});

// Add artisan Google auth route
router.post('/artisan/auth/google/verify', authLimiter, verifyArtisanGoogleToken);

export default router;

import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserCredentials } from '../types/auth.types';
import { verifyGoogleToken, verifyFacebookToken, verifyAppleToken, verifyArtisanGoogleToken } from '../controllers/social-auth.controller';
import prisma from '../lib/prisma';
import { TokenService } from '../services/token.service';
import { authLimiter } from '../middleware/rate-limit.middleware';
import multer from 'multer';
import { authMiddleware } from '../middleware/auth.middleware';
import { AuthRequest } from '../types/auth.types';
import { generateOTP, sendVerificationEmail } from '../services/email.service';
//import { sendVerificationEmail } from '../services/email.service';

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only specific file types
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/msword' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .pdf, .doc and .docx files are allowed!'));
    }
  }
});

// Add multer config for government ID and profile picture
const verificationUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'governmentId') {
      // Accept only image and PDF files for government ID
      if (
        file.mimetype === 'application/pdf' ||
        file.mimetype.startsWith('image/')
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only PDF and image files are allowed for government ID'));
      }
    } else if (file.fieldname === 'profilePicture') {
      // Accept only image files for profile picture
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only image files are allowed for profile picture'));
      }
    }
  }
});

// Health check route
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Sign up route
// router.post('/signup', authLimiter, async (req, res) => {
//   try {
//     const { fixeroniTag, email, first_name, password } = req.body as UserCredentials;

//     if (!fixeroniTag || !email || !first_name || !password) {
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ message: 'Invalid email format' });
//     }

//     // Check if user already exists
//     const existingUser = await prisma.user.findFirst({
//       where: {
//         OR: [
//           { fixeroniTag },
//           { email }
//         ]
//       }
//     });

//     if (existingUser) {
//       return res.status(400).json({ 
//         message: 'User already exists with this fixeroniTag or email' 
//       });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = await prisma.user.create({
//       data: {
//         fixeroniTag,
//         email,
//         first_name,
//         password: hashedPassword,
//         provider: 'local'
//       }
//     });

//     // Generate tokens
//     const tokens = await TokenService.generateAuthTokens(newUser.id);

//     // Remove password from response
//     const { password: _, ...userWithoutPassword } = newUser;

//     res.status(201).json({
//       message: 'User created successfully',
//       ...tokens,
//       user: userWithoutPassword
//     });
//   } catch (error) {
//     console.error('Signup error:', error);
//     res.status(500).json({ message: 'Error creating user' });
//   }
// });

// // Sign in route
// router.post('/signin', authLimiter, async (req, res) => {
//   try {
//     const { fixeroniTag, password } = req.body as UserCredentials;

//     if (!fixeroniTag || !password) {
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     // Find user
//     const user = await prisma.user.findUnique({
//       where: { fixeroniTag }
//     });

//     if (!user || !user.password) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Generate tokens
//     const tokens = await TokenService.generateAuthTokens(user.id);

//     const { password: _, ...userWithoutPassword } = user;

//     res.json({
//       message: 'Authentication successful',
//       ...tokens,
//       user: userWithoutPassword
//     });
//   } catch (error) {
//     console.error('Signin error:', error);
//     res.status(500).json({ message: 'Error during sign in' });
//   }
// });

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
      fixeroniTag, 
      email, 
      password,
      firstName
    } = req.body;

    // Validate required fields
    if (!fixeroniTag || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if artisan already exists
    const existingArtisan = await prisma.artisan.findFirst({
      where: {
        OR: [
          { fixeroniTag },
          { email }
        ]
      }
    });

    if (existingArtisan) {
      // Delete them TODO: Remove this in production
      await prisma.artisan.delete({
        where: {
          id: existingArtisan.id
        }
      });

      return res.status(400).json({ 
        message: 'Artisan already exists with this fixeroniTag or email' 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new artisan
    const newArtisan = await prisma.artisan.create({
      data: {
        fixeroniTag,
        email,
        password: hashedPassword,
        firstName,
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
      artisan: artisanWithoutPassword,
    });
  } catch (error) {
    console.error('Artisan signin error:', error);
    res.status(500).json({ message: 'Error during sign in' });
  }
});

// Apply multer middleware directly to the route
router.post(
  '/artisan/update/personal-details', 
  authLimiter, 
  upload.single('workPortfolio'),
  async (req, res) => {
    try {
      console.log('Request body:', req.body);
      
      const serviceCategory = req.body.serviceCategory;
      const yearsOfExperience = req.body.yearsOfExperience;
      const workPortfolio = req.file; // This contains the uploaded file
      const artisanId = req.body.artisanId;

      console.log('Parsed values:', {
        serviceCategory,
        yearsOfExperience,
        workPortfolio,
        artisanId
      });

      if(!serviceCategory || !yearsOfExperience || !artisanId) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const yearsOfExperienceInt = parseInt(yearsOfExperience);
      if (isNaN(yearsOfExperienceInt)) {
        return res.status(400).json({ message: 'Years of experience must be a number' });
      }

      const artisan = await prisma.artisan.findUnique({
        where: { id: artisanId }
      });

      if(!artisan) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      // Prepare the update data
      const updateData: any = {
        serviceCategory,
        yearsOfExperience: yearsOfExperienceInt,
      };

      // Add work portfolio fields if a file was uploaded
      if (workPortfolio) {
        // TODO: In production, upload file to cloud storage (S3, etc)
        // For now, we'll store some metadata about the file
        updateData.workPortfolio = `uploads/${workPortfolio.filename}`;  // Replace with actual upload URL
        updateData.workPortfolioName = workPortfolio.originalname;
        updateData.workPortfolioSize = workPortfolio.size;
        updateData.workPortfolioType = workPortfolio.mimetype;
      }

      // Update artisan
      const updatedArtisan = await prisma.artisan.update({
        where: { id: artisanId },
        data: updateData
      });

      res.json({
        message: 'Personal details updated successfully',
        artisan: updatedArtisan
      });
      
    } catch (error) {
      console.error('Artisan update personal details error:', error);
      res.status(500).json({ message: 'Error updating personal details' });
    }
  }
);

// Add artisan Google auth route
router.post('/artisan/auth/google/verify', authLimiter, verifyArtisanGoogleToken);

// Add the verification and security route
router.post(
  '/artisan/update/verification',
  authLimiter,
  authMiddleware,
  verificationUpload.fields([
    { name: 'governmentId', maxCount: 1 },
    { name: 'profilePicture', maxCount: 1 }
  ]),
  async (req: AuthRequest, res) => {
    try {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      const governmentId = files?.governmentId?.[0];
      const profilePicture = files?.profilePicture?.[0];

      if (!governmentId || !profilePicture) {
        return res.status(400).json({ 
          message: 'Both government ID and profile picture are required' 
        });
      }

      // Get artisan ID from auth middleware
      const artisanId = req.user?.id;
      
      if (!artisanId) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      // TODO: In production, upload files to cloud storage
      // For now, store metadata
      const updatedArtisan = await prisma.artisan.update({
        where: { id: artisanId },
        data: {
          governmentIdLink: `uploads/${governmentId.filename}`,
          profilePicture: `uploads/${profilePicture.filename}`,
          // Add metadata fields if needed
        }
      });

      res.json({
        message: 'Verification documents uploaded successfully',
        artisan: updatedArtisan
      });

    } catch (error) {
      console.error('Verification update error:', error);
      res.status(500).json({ 
        message: 'Error updating verification documents' 
      });
    }
  }
);

// Generate and send OTP
router.post('/artisan/send-verification', async (req: AuthRequest, res) => {
  try {
    const artisanId = req.user?.id;
    if (!artisanId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Get artisan
    const artisan = await prisma.artisan.findUnique({
      where: { id: artisanId }
    });

    if (!artisan) {
      return res.status(404).json({ message: 'Artisan not found' });
    }

    // Generate 6-digit OTP
    const otp = generateOTP();
    
    // Save OTP to database with 5-minute expiration
    await prisma.verificationCode.create({
      data: {
        code: otp,
        email: artisan.email,
        artisanId: artisan.id,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      }
    });

    // Send OTP via email
    await sendVerificationEmail(artisan.email);

    res.json({ message: 'Verification code sent successfully' });

  } catch (error) {
    console.error('Send verification error:', error);
    res.status(500).json({ message: 'Error sending verification code' });
  }
});

// Verify OTP
router.post('/artisan/verify-otp', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const { otp } = req.body;
    const artisanId = req.user?.id;

    if (!artisanId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Find valid OTP
    const verificationCode = await prisma.verificationCode.findFirst({
      where: {
        artisanId,
        code: otp,
        used: false,
        expiresAt: {
          gt: new Date()
        }
      }
    });

    if (!verificationCode) {
      return res.status(400).json({ message: 'Invalid or expired verification code' });
    }

    // Mark OTP as used
    await prisma.verificationCode.update({
      where: { id: verificationCode.id },
      data: { used: true }
    });

    // Mark artisan as verified
    await prisma.artisan.update({
      where: { id: artisanId },
      data: { isVerified: true }
    });

    res.json({ message: 'Verification successful' });

  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({ message: 'Error verifying code' });
  }
});

export default router;

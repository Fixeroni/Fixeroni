import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import prisma from '../lib/prisma';
import { AuthProvider } from '../types/auth.types';
import { TokenService } from '../services/token.service';
import { AppleAuthService } from '../services/apple-auth.service';
import { Prisma,$Enums } from '@prisma/client';

const googleClient = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID
});

export const verifyGoogleToken = async (req: Request, res: Response) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({ message: 'Google token is required' });
    }

    // Verify the Google token
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    
    if (!payload) {
      return res.status(400).json({ message: 'no token' });
    }

    // Check if user exists
   // let user = await prisma.user.findFirst({
    let user = await prisma.artisan.findFirst({
   
      where: {
        AND: [
         // { provider: 'google' as AuthProvider },
         { provider: $Enums.AuthProvider.google  },
         { providerId: payload.sub }
        ]
      }
    });

    if (!user) {
      // Create new user
      // user = await prisma.user.create({
        user = await prisma.artisan.create({
        data: {
          //fixeroni_tag: `google_${payload.sub}`,
          fixeroniTag:`google_${payload.sub}`,
          // email : payload.email,
          email : payload.email ?? "",
          //name: payload.name,
          firstName :payload.name  ,
          //picture: payload.picture,
          profilePicture :payload.picture,
          provider: 'google',
          providerId: payload.sub,
          accountType: "artisan" 
          // accountType added sir
        }
      });
    }

    // Generate tokens
    const tokens = await TokenService.generateAuthTokens(user.id);
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      ...tokens,
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Google verification error:', error);
    res.status(500).json({ message: 'Error verifying Google token' });
  }
};

export const verifyFacebookToken = async (req: Request, res: Response) => {
  try {
    const { accessToken } = req.body;

    if (!accessToken) {
      return res.status(400).json({ message: 'Facebook access token is required' });
    }

    // Verify the token with Facebook
    const response = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${accessToken}`);
    const data = await response.json();

    if (data.error) {
      return res.status(400).json({ message: 'Invalid Facebook token' });
    }

    // Check if user exists
    let user = await prisma.artisan.findFirst({
      where: {
        AND: [
          //{ provider: 'facebook' as AuthProvider },
          //{ provider: $Enums.AuthProvider.faceboo}
          { providerId: data.id }
        ]
      }
    });

    if (!user) {
      // Create new user
     // user = await prisma.user.create({
      user = await prisma.artisan.create({
        data: {
          //fixeroni_tag: `fb_${data.id}`,
          fixeroniTag  :`fb_${data.id}`,
          email: data.email,
          name: data.name,
          picture: data.picture?.data?.url,
          //provider: 'facebook',
          providerId: data.id
        }
      });
    }

    // Generate tokens
    const tokens = await TokenService.generateAuthTokens(user.id);
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      ...tokens,
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Facebook verification error:', error);
    res.status(500).json({ message: 'Error verifying Facebook token' });
  }
};

export const verifyAppleToken = async (req: Request, res: Response) => {
  try {
    const { identityToken, user: appleUser } = req.body;

    if (!identityToken) {
      return res.status(400).json({ message: 'Apple identity token is required' });
    }

    // Verify Apple token
    const appleData = await AppleAuthService.validateToken(identityToken);

    // Check if user exists
    let user = await prisma.user.findFirst({
      where: {
        AND: [
          { provider: 'apple' as AuthProvider },
          { providerId: appleData.id }
        ]
      }
    });

    if (!user) {
      // For Apple Sign In, name only comes in the first sign in
      const name = appleUser?.name 
        ? `${appleUser.name.firstName} ${appleUser.name.lastName}`.trim()
        : null;

      // Create new user
      user = await prisma.user.create({
        data: {
          fixeroni_tag: `apple_${appleData.id}`,
          email: appleData.email,
          name: name,
          provider: 'apple',
          providerId: appleData.id
        }
      });
    }

    // Generate tokens
    const tokens = await TokenService.generateAuthTokens(user.id);
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      ...tokens,
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Apple verification error:', error);
    res.status(500).json({ message: 'Error verifying Apple token' });
  }
};

export const verifyArtisanGoogleToken = async (req: Request, res: Response) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({ message: 'Google token is required' });
    }

    // Verify the Google token
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    
    if (!payload) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    // Check if artisan exists
    let artisan = await prisma.artisan.findFirst({
      where: {
        AND: [
          { provider: 'google' as AuthProvider },
          { providerId: payload.sub }
        ]
      }
    });

    if (!artisan) {
      // Create new artisan with required fields
      artisan = await prisma.artisan.create({
        data: {
          fixeroni_tag: `artisan_${payload.sub}`,
          email: payload.email!,
          provider: 'google',
          providerId: payload.sub,
          // Set default values for required fields
          yearsOfExperience: 0,
          category: 'uncategorized',
          linkToPortfolio: '',
          address: '',
          categoryOfService: 'uncategorized',
          governmentIdLink: '',
          profilePicture: payload.picture || '',
          accountType: 'artisan'
        }
      });
    }

    // Generate tokens
    const tokens = await TokenService.generateAuthTokens(artisan.id);
    const { password: _, ...artisanWithoutPassword } = artisan;

    res.json({
      ...tokens,
      artisan: artisanWithoutPassword
    });
  } catch (error) {
    console.error('Google verification error:', error);
    res.status(500).json({ message: 'Error verifying Google token' });
  }
};

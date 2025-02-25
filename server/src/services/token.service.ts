import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../lib/prisma';

export class TokenService {
  private static readonly ACCESS_TOKEN_EXPIRY = '15m';
  private static readonly REFRESH_TOKEN_EXPIRY = '7d';

  static async generateAuthTokens(userId: string) {
    const accessToken = jwt.sign(
      { id: userId },
      process.env.JWT_SECRET || process.env.SECRET_KEY || "",
      { expiresIn: this.ACCESS_TOKEN_EXPIRY }
    );

    const refreshToken = uuidv4();
    const hashedRefreshToken = await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
      }
    });

    return {
      accessToken,
      refreshToken,
      expiresIn: this.ACCESS_TOKEN_EXPIRY
    };
  }

  static async refreshToken(refreshToken: string) {
    const token = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
      include: { user: true }
    });

    if (!token || token.revokedAt || token.expiresAt < new Date()) {
      throw new Error('Invalid refresh token');
    }

    // Generate new tokens
    const newTokens = await this.generateAuthTokens(token.userId);

    // Revoke the old refresh token
    await prisma.refreshToken.update({
      where: { id: token.id },
      data: { revokedAt: new Date() }
    });

    return newTokens;
  }

  static async revokeToken(refreshToken: string) {
    await prisma.refreshToken.update({
      where: { token: refreshToken },
      data: { revokedAt: new Date() }
    });
  }

  static async revokeAllUserTokens(userId: string) {
    await prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() }
    });
  }
}

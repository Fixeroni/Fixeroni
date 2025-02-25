import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

const client = jwksClient({
  jwksUri: 'https://appleid.apple.com/auth/keys'
});

export class AppleAuthService {
  private static getKey(header: jwt.JwtHeader, callback: jwt.SigningKeyCallback) {
    client.getSigningKey(header.kid!, (err, key) => {
      const signingKey = key?.getPublicKey();
      callback(err, signingKey);
    });
  }

  static async verifyToken(identityToken: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(
        identityToken,
        this.getKey.bind(this),
        {
          algorithms: ['RS256'],
          issuer: 'https://appleid.apple.com',
          audience: process.env.APPLE_CLIENT_ID
        },
        (err, decoded) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(decoded as jwt.JwtPayload);
        }
      );
    });
  }

  static async validateToken(identityToken: string) {
    try {
      const payload = await this.verifyToken(identityToken);
      
      if (!payload.sub) {
        throw new Error('Invalid token payload');
      }

      return {
        id: payload.sub,
        email: payload.email,
        // Apple doesn't provide name in the token, it comes separately in the first sign in
        name: null
      };
    } catch (error) {
      throw new Error('Invalid Apple token');
    }
  }
}

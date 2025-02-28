import { User as PrismaUser } from '@prisma/client';

export type AuthProvider = 'local' | 'google' | 'facebook' | 'apple';

export type UserCredentials = {
  fixeroniTag: string;
  email: string;
  firstName: string;
  password: string;
};

export type User = PrismaUser;

export interface AuthResponse {
  token: string;
  user: Omit<User, 'password'>;
}

export interface GoogleTokenPayload {
  credential: string;
}

export interface FacebookTokenPayload {
  accessToken: string;
}

export interface AppleTokenPayload {
  identityToken: string;
}

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

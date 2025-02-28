import { create } from 'zustand';

type AuthStore = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  googleLogin: (credential: string) => Promise<void>;
  register: (data: {
    email: string;
    password: string;
    firstName: string;
    fixeroniTag: string;
  }) => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  
  login: async (credentials) => {
    set({ isLoading: true });
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) throw new Error('Login failed');
      
      const data = await response.json();
      // Handle successful login (store tokens, etc)
      
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  googleLogin: async (credential) => {
    set({ isLoading: true });
    try {
      const response = await fetch('http://localhost:3000/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential }),
      });

      if (!response.ok) throw new Error('Google login failed');
      
      const data = await response.json();
      // Handle successful login
      
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (data) => {
    set({ isLoading: true });
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Registration failed');
      
      const responseData = await response.json();
      // Handle successful registration
      
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
})); 
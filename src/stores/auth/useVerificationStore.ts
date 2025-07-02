// store/useOtpStore.ts
import { create } from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

interface OtpState {
  loading: boolean;
  error: string | null;
  otpSent: boolean;
  otpVerified: boolean;
  timer: number;
  sendOtp: (email: string) => Promise<void>;
  verifyOtp: (email: string, otp: string) => Promise<void>;
  startTimer: () => void;
  decrementTimer: () => void;
  resetOtp: () => void;
}

let intervalId: NodeJS.Timeout | null = null;


export const useOtpStore = create<OtpState>((set, get) => ({
  loading: false,
  error: null,
  otpSent: false,
  otpVerified: false,
  timer: 30,

  sendOtp: async (email) => {
    set({ loading: true, error: null });

    try {
      await axios.post(
        'https://fixeronibackendtest.onrender.com/api/auth/send-verification-otp',
        { email }
      );

      toast.success('OTP sent!');
      set({ otpSent: true });
      get().startTimer(); // Start countdown
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to send OTP';
      toast.error(message);
      set({ error: message });
    } finally {
      set({ loading: false });
    }
  },

  verifyOtp: async (email, otp) => {
    set({ loading: true });

    try {
      await axios.post('https://fixeronibackendtest.onrender.com/api/auth/verify-otp', {
        email,
        otp,
      });

      toast.success('OTP verified!');
      set({ otpVerified: true });
    } catch (err: any) {
      const message = err.response?.data?.message || 'OTP verification failed';
      toast.error(message);
      set({ error: message });
    } finally {
      set({ loading: false });
    }
  },

 startTimer: () => {
  if (intervalId) clearInterval(intervalId);
  set({ timer: 600 }); // ✅ 10 minutes

  intervalId = setInterval(() => {
    const current = get().timer;
    if (current > 0) {
      set({ timer: current - 1 });
    } else {
      clearInterval(intervalId!);
      intervalId = null;
    }
  }, 1000);
},



  decrementTimer: () => {
    set((state) => ({ timer: Math.max(0, state.timer - 1) }));
  },

  resetOtp: () => {
    set({ otpSent: false, otpVerified: false, error: null, timer: 0 });
  },
}));

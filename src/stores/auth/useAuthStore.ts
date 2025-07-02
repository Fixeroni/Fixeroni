import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";
import { useLoginStore } from "./useLoginStore";


interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  fixeroniTag: string;
  userType: string;
}

interface AuthState {
    email: string;
  loading: boolean;
  error: string | null;
  signupSuccess: boolean;
  signup: (data: SignupData) => Promise<void>;
  setEmail: (email: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
   email: '',
  loading: false,
  error: null,
  signupSuccess: false,

  setEmail: (email) => set({ email }),

  signup: async (data) => {
  set({ loading: true, error: null, signupSuccess: false });

  try {
    const res = await axios.post(
      "https://fixeronibackendtest.onrender.com/api/auth/signup",
      data
    );

    if (res.status === 201 || res.status === 200) {
      toast.success("Signup successful!");

      // Store the email used for signup
      set({ signupSuccess: true, email: data.email });

      // Show success and move to OTP verification screen
      setTimeout(() => {
        useLoginStore.getState().setContent("Login/RegCode");
      }, 1000);
    } else {
      throw new Error(res.data?.message || "Signup failed");
    }
  } catch (err: any) {
    const message = err.response?.data?.message || err.message || "Something went wrong";
    console.error("Signup error:", message);
    toast.error(message);
    set({ error: message });
  } finally {
    set({ loading: false });
  }
},




}));

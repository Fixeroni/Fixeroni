import { create } from 'zustand';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  fixeroniTag: string;
  userType: string;
}

interface FormStore {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  resetFormData: () => void;
}

export const useRegisterFormStore = create<FormStore>((set) => ({
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    fixeroniTag: '',
    userType: '',
  },
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  resetFormData: () =>
    set({
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        fixeroniTag: '',
        userType: '',
      },
    }),
}));

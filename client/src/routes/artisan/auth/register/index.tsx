import { createFileRoute, Link } from "@tanstack/react-router";
import AuthLayout from "../../../../components/shared/AuthLayout";
import AuthHoverCard from "../../../../components/shared/AuthHoverCard";
import features from "../../../../data/features";
import Feature from "../../../../components/auth/register/Feature";
import type { Feature as FeatureType } from "../../../../types";
import Switch from "../../../../components/auth/login/Switch";
import RegisterContent from "../../../../components/auth/RegisterContent";
import LoginContent from "../../../../components/auth/LoginContent";
import { fields } from "../../../../data/register";
import Input from "../../../../components/auth/Input";
import { Upload, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";
import { useVerificationStore } from "../../../../stores/auth/useVerificationStore";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSteps } from "../../../../stores/auth/useSteps";
import axios from "axios";
import { urls } from "../../../../utils/urls";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSession } from "../../../../stores/useSessionStore";

export const Route = createFileRoute("/artisan/auth/register/")({
  component: RouteComponent,
});

// Define validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  firstName: Yup.string()
    .required('First name is required'),
  fixeroniTag: Yup.string()
    .required('Fixeroni tag is required'),
  agreed: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
});

function Register() {
  const { incrementStep } = useSteps();

  const login = useSession(state => state.login);
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      fixeroniTag: '',
      agreed: false
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        const res = await axios.post(`${urls.backend}/api/artisan/signup`, {
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
          firstName: values.firstName,
          fixeroniTag: values.fixeroniTag
        });
        
        // Store the tokens
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        
        // Update session with user data
        login({ artisan: res.data.artisan, expiresAt: res.data.expiresAt });
        incrementStep();
      } catch (error: any) {
        // Handle error
        setStatus(error.response?.data?.message || 'Registration failed');
        console.error('Registration error:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
      <article className="flex flex-col gap-4">
        {fields.map(
          (
            field: {
              name: string;
              placeholder: string;
              type: string;
              required: boolean;
            },
            index: number,
          ) => (
            <div key={index}>
              <Input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field.name as keyof typeof formik.values]}
                required={field.required}
              />
              {formik.touched[field.name as keyof typeof formik.touched] && 
               formik.errors[field.name as keyof typeof formik.errors] && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors[field.name as keyof typeof formik.errors]}
                </div>
              )}
            </div>
          ),
        )}
      </article>

      <article className="flex gap-4 items-center">
        <input
          type="checkbox"
          name="agreed"
          className="md:w-6 md:h-6"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.agreed}
        />
        <p className="text-[#535353]">
          By signing up, you agree to Fixeroni's <br />{" "}
          <Link
            className="underline text-primary"
            to="/artisan/auth/forgot-password"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            className="underline text-primary"
            to="/artisan/auth/forgot-password"
          >
            Privacy Policy
          </Link>
        </p>
      </article>

      {formik.status && (
        <p className="text-red-500 text-sm text-center">{formik.status}</p>
      )}

      <button
        type="submit"
        disabled={formik.isSubmitting || !formik.isValid}
        className={`font-semibold text-white bg-primary shadow-sm hover:shadow-md transition duration-300 p-2 rounded-lg md:min-w-[400px] md:max-w-[400px] ${
          (formik.isSubmitting || !formik.isValid) ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'
        }`}
      >
        {formik.isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="animate-spin" size={20} />
            Registering...
          </div>
        ) : (
          'Register'
        )}
      </button>
    </form>
  );
}

function PersonalDetails() {
  const { incrementStep } = useSteps();
  const [workPortfolio, setWorkPortfolio] = useState<File | null>(null);

  // Get the artisan from the session
  const artisan = useSession(state => state.session?.artisan);

  // Define validation schema
  const validationSchema = Yup.object({
    serviceCategory: Yup.string()
      .required('Please select a service category'),
    yearsOfExperience: Yup.number()
      .required('Please select years of experience')
      .min(1, 'Must have at least 1 year of experience'),
    workPortfolio: Yup.mixed()
      .test('fileSize', 'File too large', (value) => {
        if (!value) return true;
        return value.size <= 5000000; // 5MB
      })
  });

  const formik = useFormik({
    initialValues: {
      serviceCategory: '',
      yearsOfExperience: '',
      workPortfolio: null
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        const formData = new FormData();
        
        // Append text fields
        formData.append('serviceCategory', values.serviceCategory);
        formData.append('yearsOfExperience', values.yearsOfExperience);
        formData.append('artisanId', artisan?.id || '');

        // Append file if it exists
        if (workPortfolio) {
          formData.append('workPortfolio', workPortfolio);
        }

        const token = localStorage.getItem('accessToken');

        const response = await axios.post(
          `${urls.backend}/api/artisan/update/personal-details`, 
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`
            }
          }
        );

        console.log('Personal details updated:', response.data);
        incrementStep();
        
      } catch (error: any) {
        if (error.response?.status === 401) {
          setStatus('Session expired. Please login again.');
        } else {
          setStatus(error.response?.data?.message || 'Failed to update personal details');
        }
        console.error('Error:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleWorkPortfolio = (open = true) => {
    if (open) {
      document.getElementById("workPortfolio")?.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        formik.setFieldError('workPortfolio', 'Only PDF and Word documents are allowed');
        return;
      }
      
      // Check file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        formik.setFieldError('workPortfolio', 'File size must be less than 5MB');
        return;
      }

      setWorkPortfolio(file);
      formik.setFieldValue('workPortfolio', file);
    }
  };

  return (
    <article className="flex flex-col gap-8 items-center">
      <h2 className="text-2xl font-medium">Personal Details</h2>

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <div>
          <select
            name="serviceCategory"
            value={formik.values.serviceCategory}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`bg-white rounded-xl px-4 py-2 md:max-w-[400px] md:min-w-[400px] ${
              formik.touched.serviceCategory && formik.errors.serviceCategory 
                ? 'border-red-500' 
                : ''
            }`}
          >
            <option value="" disabled>
              Category of Service
            </option>
            <option value="plumber">Plumber</option>
            <option value="electrician">Electrician</option>
            <option value="mechanic">Mechanic</option>
            <option value="gardener">Gardener</option>
            <option value="cleaner">Cleaner</option>
          </select>
          {formik.touched.serviceCategory && formik.errors.serviceCategory && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.serviceCategory}
            </div>
          )}
        </div>

        <div>
          <select
            name="yearsOfExperience"
            value={formik.values.yearsOfExperience}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`bg-white rounded-xl px-4 py-2 md:max-w-[400px] md:min-w-[400px] ${
              formik.touched.yearsOfExperience && formik.errors.yearsOfExperience 
                ? 'border-red-500' 
                : ''
            }`}
          >
            <option value="" disabled>
              Years of Experience
            </option>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1} year{i !== 0 ? "s" : ""}
              </option>
            ))}
          </select>
          {formik.touched.yearsOfExperience && formik.errors.yearsOfExperience && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.yearsOfExperience}
            </div>
          )}
        </div>

        <div>
          {workPortfolio ? (
            <article className="flex gap-4 items-center">
              <Upload className="text-primary" size={24} />
              <p>{workPortfolio.name}</p>
            </article>
          ) : (
            <article className="px-4 py-2 bg-white text-[#535353] rounded-xl flex gap-2 items-center justify-between">
              Work Portfolio
              <Upload
                onClick={() => handleWorkPortfolio(true)}
                size={20}
                className="text-primary cursor-pointer"
              />
            </article>
          )}
          {formik.touched.workPortfolio && formik.errors.workPortfolio && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.workPortfolio}
            </div>
          )}
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          name="workPortfolio"
          id="workPortfolio"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />

        {formik.status && (
          <div className="text-red-500 text-sm text-center">
            {formik.status}
          </div>
        )}

        <button
          type="submit"
          disabled={formik.isSubmitting || !formik.isValid}
          className={`font-semibold text-white bg-primary p-2 rounded-lg md:min-w-[400px] md:max-w-[400px] ${
            formik.isSubmitting || !formik.isValid 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:cursor-pointer'
          }`}
        >
          {formik.isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin" size={20} />
              Submitting...
            </div>
          ) : (
            'Next'
          )}
        </button>
      </form>
    </article>
  );
}

function VerificationAndSecurity() {
  const { incrementStep } = useSteps();
  const artisan = useSession(state => state.session?.artisan);

  // Define validation schema
  const validationSchema = Yup.object({
    governmentId: Yup.mixed()
      .required('Government ID is required')
      .test('fileSize', 'File too large', (value) => {
        if (!value) return true;
        return value.size <= 5000000; // 5MB
      })
      .test('fileType', 'Invalid file type', (value) => {
        if (!value) return true;
        return (
          value.type === 'application/pdf' ||
          value.type.startsWith('image/')
        );
      }),
    profilePicture: Yup.mixed()
      .required('Profile picture is required')
      .test('fileSize', 'File too large', (value) => {
        if (!value) return true;
        return value.size <= 5000000; // 5MB
      })
      .test('fileType', 'Invalid file type', (value) => {
        if (!value) return true;
        return value.type.startsWith('image/');
      })
  });

  const formik = useFormik({
    initialValues: {
      governmentId: null,
      profilePicture: null
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        const formData = new FormData();
        
        if (values.governmentId) {
          formData.append('governmentId', values.governmentId);
        }
        
        if (values.profilePicture) {
          formData.append('profilePicture', values.profilePicture);
        }

        const token = localStorage.getItem('accessToken');

        const response = await axios.post(
          `${urls.backend}/api/artisan/update/verification`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`
            }
          }
        );

        console.log('Verification documents updated:', response.data);
        incrementStep();

      } catch (error: any) {
        if (error.response?.status === 401) {
          setStatus('Session expired. Please login again.');
        } else {
          setStatus(error.response?.data?.message || 'Failed to upload verification documents');
        }
        console.error('Error:', error);
      } finally {
        setSubmitting(false);
      }
    }
  });

  const handleGovernmentId = () => {
    document.getElementById("governmentId")?.click();
  };

  const handleProfilePicture = () => {
    document.getElementById("profilePicture")?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fieldName = event.target.name;
      formik.setFieldValue(fieldName, file);
    }
  };

  return (
    <article className="flex flex-col gap-8 items-center">
      <h2 className="text-2xl font-medium">Verification and Security</h2>

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        {/* ... existing UI code ... */}
        
        <input
          type="file"
          name="governmentId"
          id="governmentId"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*,.pdf"
        />

        <input
          type="file"
          name="profilePicture"
          id="profilePicture"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />

        {formik.status && (
          <div className="text-red-500 text-sm text-center">
            {formik.status}
          </div>
        )}

        <button
          type="submit"
          disabled={formik.isSubmitting || !formik.isValid}
          className={`font-semibold text-white bg-primary p-2 rounded-lg md:min-w-[400px] md:max-w-[400px] ${
            formik.isSubmitting || !formik.isValid 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:cursor-pointer'
          }`}
        >
          {formik.isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin" size={20} />
              Submitting...
            </div>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </article>
  );
}

function VerificationConfirmation() {
  return (
    <article className="flex flex-col gap-8">
      <article className="flex gap-4 items-center justify-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <input
            className="w-[75px] h-[75px] border border-primary focus:outline-none text-2xl font-bold flex flex-col justify-center items-center"
            name={`code-${index}`}
            type="text"
            maxLength={1}
          />
        ))}
      </article>

      <article className="flex flex-col w-full justify-center items-center">
        <CountdownCircleTimer
          isPlaying
          duration={300} // 60 seconds
          colors={["#0F9067", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[40, 20, 10, 0]} // Change color as time progresses
          size={120} // Adjust size
          strokeWidth={4} // Adjust thickness
        >
          {({ remainingTime }) => (
            <div className="font-semibold text-primary flex flex-col gap-2 justify-center items-center text-xl">
              <span className="text-sm text-gray-500">Remaining</span>

              {remainingTime}

              <span className="text-sm text-gray-500">seconds</span>
            </div>
          )}
        </CountdownCircleTimer>
      </article>
    </article>
  );
}

function VerificationContent() {
  return (
    <article className="flex flex-col gap-4 text-center justify-center items-center">
      <h2 className="text-2xl font-semibold">Enter Verification code</h2>

      <p className="text-[#535353] text-lg">
        We sent a verification code to{" "}
        <span className="font-bold text-black">me#gmail.com</span>
      </p>
    </article>
  );
}

function RouteComponent() {
  const showVerification = useVerificationStore(state => state.showVerification);

  // Track the current step
  const step = useSteps(state => state.step);

  const steps = [
    {
      id: 1,
      component: <Register />
    },
    {
      id: 2,
      component: <PersonalDetails />
    },
    {
      id: 3,
      component: <VerificationAndSecurity />
    },
    {
      id: 2,
      component: <VerificationConfirmation />
    }
  ]

  return (
    <AuthLayout>
      <AuthHoverCard>
        {/* Fixeroni icon */}
        <img src="/images/branding/logo.png" className="w-40" />

        {/* Section text */}
        {showVerification ? (
          <VerificationContent />
        ) : (
          <article className="flex flex-col gap-2 justify-center items-center text-center">
            <h2 className="text-2xl font-medium">Welcome to Fixeroni</h2>
            <p className="text-gray-secondary text-md">
              Let us get things running smoothly and <br /> keep the world in
              working order.
            </p>
          </article>
        )}

        {/* Login / Register switch */}
          <Switch
            login={<LoginContent />}
            register={steps[step].component}
          />
      </AuthHoverCard>
    </AuthLayout>
  );
}
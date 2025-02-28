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
import { Upload } from "lucide-react";
import { useState, FormEvent } from "react";
import { useVerificationStore } from "../../../../stores/auth/useVerificationStore";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSteps } from "../../../../stores/auth/useSteps";
import axios from "axios";
import { urls } from "../../../../utils/urls";
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
        
        // Handle successful registration
        console.log('Registration successful:', res.data);
        
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
        {formik.isSubmitting ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}

function PersonalDetails() {
  const [workPortfolio, setWorkPortfolio] = useState<File | null>(null);

  const handleWorkPortfolio = (open = true) => {
    if (open) {
      document.getElementById("work_portfolio")?.click();
    }

    console.log(workPortfolio);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setWorkPortfolio(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);

    if (workPortfolio) {
      formData.append("work_portfolio", workPortfolio);
    }

    // Submit form data (e.g., to an API)
    fetch("/upload-endpoint", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <article className="flex flex-col gap-8 items-center">
      <h2 className="text-2xl font-medium">Personal Details</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <select
          name="service_category"
          className="bg-white rounded-xl px-4 py-2 md:max-w-[400px] md:min-w-[400px]"
        >
          <option value="" disabled selected>
            Category of Service
          </option>
          <option value="plumber">Plumber</option>
          <option value="electrician">Electrician</option>
          <option value="mechanic">Mechanic</option>
          <option value="gardener">Gardener</option>
          <option value="cleaner">Cleaner</option>
        </select>

        <select
          name="years_of_experience"
          className="bg-white rounded-xl px-4 py-2 md:max-w-[400px] md:min-w-[400px]"
        >
          <option value="" disabled selected>
            Years of Experience
          </option>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} year{i !== 0 ? "s" : ""}
            </option>
          ))}
        </select>

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

        {/* Hidden File Input */}
        <input
          type="file"
          name="work_portfolio"
          id="work_portfolio"
          className="hidden"
          onChange={handleFileChange}
        />

        <button
          type="submit"
          className="font-semibold text-white bg-primary p-2 rounded-lg md:min-w-[400px] md:max-w-[400px]"
        >
          Next
        </button>
      </form>
    </article>
  );
}

function VerificationAndSecurity() {
  // Track the governmentId and profilePicture
  const [governmentId, setGovernmentId] = useState<File | null>(null);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  // Hand the upload of the governmentId
  const handleGovernmentId = (open = true) => {
    if (open) {
      document.getElementById("governmentId")?.click();
    }
  };

  const handleProfilePicture = (open = true) => {
    if (open) {
      document.getElementById("profilePicture")?.click();
    }
  };

  return (
    <article className="flex flex-col gap-8 items-center">
      <h2 className="text-2xl font-medium">Verification and Security</h2>

      <form action="" className="flex flex-col gap-4">
        {governmentId ? (
          <article className="flex gap-4 items-center">
            <Upload className="text-primary" size={24} />
            <p>{governmentId.name}</p>
          </article>
        ) : (
          <article className="px-4 py-2 bg-white text-[#535353] rounded-xl flex gap-2 items-center justify-between">
            Government Id
            <Upload
              onClick={() => handleGovernmentId(true)}
              size={20}
              className="text-primary cursor-pointer"
            />
          </article>
        )}

        {/* Hidden File Input */}
        <input
          type="file"
          name="governmentId"
          id="governmentId"
          className="hidden"
          onChange={() => handleGovernmentId(false)}
        />

        {profilePicture ? (
          <article className="flex gap-4 items-center">
            <Upload className="text-primary" size={24} />
            <p>{profilePicture.name}</p>
          </article>
        ) : (
          <article className="px-4 py-2 bg-white text-[#535353] rounded-xl flex gap-2 items-center justify-between">
            Profile Picture
            <Upload
              onClick={() => handleProfilePicture(true)}
              size={20}
              className="text-primary cursor-pointer"
            />
          </article>
        )}

        {/* Hidden File Input */}
        <input
          type="file"
          name="profilePicture"
          id="profilePicture"
          className="hidden"
          onChange={() => handleProfilePicture(false)}
        />

        <button
          type="submit"
          className="font-semibold text-white bg-primary p-2 rounded-lg md:min-w-[400px] md:max-w-[400px]"
        >
          Submit
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

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
import { useState } from "react";

export const Route = createFileRoute("/artisan/auth/register/")({
  component: RouteComponent,
});

function Register() {
  return (
    <article className="flex flex-col gap-8">
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
            <Input
              name={field.name}
              key={index}
              placeholder={field.placeholder}
            />
          ),
        )}
      </article>

      <article className="flex gap-4 items-center">
        <input type="checkbox" name="agreed" className="md:w-6 md:h-6" />

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

      <button
        className="font-semibold text-white bg-primary shadow-sm hover:shadow-md transition duration-300 p-2 hover:cursor-pointer rounded-lg md:min-w-[400px] md:max-w-[400px]"
        type="submit"
      >
        Register
      </button>
    </article>
  );
}

function PersonalDetails() {
  const [workPortfolio, setWorkPortfolio] = useState<File | null>(null);

  const handleWorkPortfolio = (open = true) => {
    if (open) {
      document.getElementById("work_portfolio")?.click();
    }

    console.log(workPortfolio)
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

function RouteComponent() {
  return (
    <AuthLayout>
      <AuthHoverCard>
        {/* Fixeroni icon */}
        <img src="/images/branding/logo.png" className="w-40" />

        {/* Section text */}
        <article className="flex flex-col gap-2 justify-center items-center text-center">
          <h2 className="text-2xl font-medium">Welcome to Fixeroni</h2>
          <p className="text-gray-secondary text-md">
            Let us get things running smoothly and <br /> keep the world in
            working order.
          </p>
        </article>

        {/* Login / Register switch */}
        <Switch login={<LoginContent />} register={<PersonalDetails />} />
      </AuthHoverCard>
    </AuthLayout>
  );
}

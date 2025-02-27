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
  return (
    <article className="flex flex-col gap-8 items-center">
      <h2 className="text-2xl font-medium">Personal Details</h2>

      <form action="" className="flex flex-col gap-4">
        <select
          name="service_category"
          title="Category of Service"
          className="bg-white rounded-xl px-4 py-2 placeholder:text-sm text-[#616161] md:max-w-[400px] md:min-w-[400px] flex gap-2 items-center focus:outline-none"
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
          title="Years of Experience"
          className="bg-white rounded-xl px-4 py-2 placeholder:text-sm text-[#616161] md:max-w-[400px] md:min-w-[400px] flex gap-2 items-center focus:outline-none"
        >
          <option value="" disabled selected>
            Years of Experience
          </option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="4">4 years</option>
          <option value="5">5 years</option>
          <option value="6">6 years</option>
          <option value="7">7 years</option>
          <option value="8">8 years</option>
          <option value="9">9 years</option>
          <option value="10">10+</option>
        </select>

        <article className="px-4 py-2 bg-white text-[#535353] rounded-xl flex gap-2 items-center justify-between">
          Work Portfolio

          <Upload size={20} className="text-primary" />
        </article>

        <button
          className="font-semibold text-white bg-primary shadow-sm hover:shadow-md transition duration-300 p-2 hover:cursor-pointer rounded-lg md:min-w-[400px] md:max-w-[400px]"
          type="submit"
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

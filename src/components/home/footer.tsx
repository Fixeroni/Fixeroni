import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
// import { FooterLogo } from "@/public/assets";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-8 md:py-12 px-4 md:px-20">
      <div className="container mx-auto">
        <div className="md:hidden mb-8">
          <img
            src="/assets/images/Frame 72.png"
            alt="Fixeroni Logo" 
             className="w-28"  
          />
          <p className="text-sm mt-2 max-w-xs" >
            Connecting you with trusted professionals for all your service needs
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          <div className="hidden md:block space-y-4">
            <img
              src="/assets/images/Frame 72.pn"
              alt="Fixeroni Logo"
               className="w-full object-cover"             
            />
            <p className="text-[12px] max-w-xs">
              Connecting you with trusted <br /> professionals for all your
              service <br />
              needs
            </p>

            <div className="space-y-2">
              <p className="text-[12px] font-medium">Follow Us</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[12px] hover:text-gray-300">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[12px] hover:text-gray-300">
                  Carpentry
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[12px] hover:text-gray-300">
                  HVAC
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[12px] hover:text-gray-300">
                  Electrical
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[12px] hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[12px] hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[12px] hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[12px] hover:text-gray-300">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[12px] hover:text-gray-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[12px] hover:text-gray-300">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[12px] hover:text-gray-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[12px] hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social icons for mobile */}
        <div className="md:hidden mt-8">
          <p className="text-sm font-medium mb-2">Follow Us</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-gray-300">
              <Facebook size={22} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Twitter size={22} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Instagram size={22} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Linkedin size={22} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs">
          © 2024 Fixeroni. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

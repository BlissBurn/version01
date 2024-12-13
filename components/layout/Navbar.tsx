"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState
import { navigationLinks } from "@/lib/constants/navigation";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <Image
              src="/WhatsApp%20Image%202024-12-13%20at%2015.00.47_7b4eba48.jpg"
              alt="BlissBurn Logo"
              width={100}
              height={50}
            />
          </Link>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={() => setSidebarOpen(true)} // Open sidebar
            className="md:hidden text-secondary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex">
          {/* Sidebar Panel */}
          <div className="w-64 h-full bg-white shadow-lg p-6 animate-slide-in">
            {/* Close Button */}
            <button
              onClick={() => setSidebarOpen(false)} // Close sidebar
              className="mb-6 focus:outline-none text-secondary hover:text-primary"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <nav className="space-y-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-lg text-secondary hover:text-primary font-medium transition-colors"
                  onClick={() => setSidebarOpen(false)} // Close sidebar after clicking
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Overlay (Click to Close) */}
          <div
            className="flex-1"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </nav>
  );
}

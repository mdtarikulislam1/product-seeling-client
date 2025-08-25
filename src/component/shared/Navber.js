"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Login from "../login/login";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { data: session } = useSession();
  // nav items list
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/products" },
    { name: "AddProduct", path: "/addProduct" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo */}
          <div className="flex-shrink-0 w-12 h-12">
            <Link href="/">
              <img src="https://i.postimg.cc/ZKdw0M9m/business-retail-sales-computer-icons-logo-png-favpng-r-M5-E7-Zv092f2-QRytdabf8-Udby-removebg-preview.png"></img>
            </Link>
          </div>

          {/* Center - Nav Links (Desktop) */}
          <div className="hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right - Login Button */}
          <div className="hidden md:flex">
            <Login />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 z-40 flex flex-col w-full px-4 pb-4 space-y-3 bg-white shadow-lg md:hidden top-16">
          <Login />
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-gray-700 hover:text-blue-600"
            >
              <span
                className={`${
                  pathname === link.path
                    ? "border-b-2 border-blue-600 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

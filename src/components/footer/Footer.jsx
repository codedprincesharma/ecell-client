"use client";

import { Mail, Phone, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">E-Cell</h2>
          <p className="text-gray-400">
            Empowering entrepreneurs to innovate and lead the future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/event" className="hover:text-blue-500 transition">
                Event
              </Link>
            </li>
            <li>
              <Link href="/idea" className="hover:text-blue-500 transition">
                Idea
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail size={16} /> ecellhaldia@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> Head: +91 6201885752
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> Co-Head: +91 9122180280
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <Link href="#" className="hover:text-blue-500 transition">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-blue-500 transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-blue-500 transition">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © 2025 E-Cell. All rights reserved. Made with ❤️ by E-Cell Team
      </div>
    </footer>
  );
}

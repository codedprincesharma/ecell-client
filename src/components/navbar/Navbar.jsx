"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  // { name: "Founder", href: "/founder" },
  { name: "Member", href: "/member" },
  { name: "Idea", href: "/idea" },
  { name: "Event", href: "/event" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef();

  // GSAP fade-in for navbar on mount
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed w-full top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-blue-600"
        >
          E-cell HIT Haldia
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -3, color: "#2563EB" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={link.href}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden flex flex-col gap-4 bg-white px-6 py-4 font-medium text-gray-700"
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ x: 5, color: "#2563EB" }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setOpen(false)}
            >
              <Link href={link.href}>{link.name}</Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}

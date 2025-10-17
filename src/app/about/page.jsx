"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.img
          src="/ecell-team.jpg"
          alt="E-Cell Team"
          className="rounded-lg shadow-lg w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">About E-Cell</h2>
          <p className="text-gray-700 mb-4">
            E-Cell HIT Haldia is a platform for innovative minds to come together, learn, and transform ideas into successful ventures. We provide mentorship, resources, and a strong community of entrepreneurs.
          </p>
          <p className="text-gray-700">
            Join us to gain the skills, network, and support needed to bring your entrepreneurial vision to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

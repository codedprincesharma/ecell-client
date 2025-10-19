"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [classRollNo, setClassRollNo] = useState("");
  const [whatsappNo, setWhatsappNo] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          fullName: { firstName, lastName },
          department,
          classRollNo,
          whatsappNo,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful! Redirecting to login...");
        router.push("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    // Replace with your backend Google OAuth endpoint
    window.location.href = "http://localhost:8080/api/v1/auth/google";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {/* Manual Registration Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Select Department</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Computer Science & Engineering">Computer Science & Engineering</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics & Communication Engineering">Electronics & Communication Engineering</option>
            <option value="Artificial Intelligence and Machine Learning">Artificial Intelligence and Machine Learning</option>
            <option value="Data Science Engineering">Data Science Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="Food Technology">Food Technology</option>
            <option value="Applied Electronics & Instrumentation Engineering">Applied Electronics & Instrumentation Engineering</option>
          </select>

          <input
            type="text"
            placeholder="Class Roll No"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={classRollNo}
            onChange={(e) => setClassRollNo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="WhatsApp Number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={whatsappNo}
            onChange={(e) => setWhatsappNo(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Register with Google */}
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleGoogleRegister}
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Register with Google
        </button>

        {/* Link to Login */}
        <div className="text-center mt-4">
          <button
            onClick={() => router.push("/login")}
            className="text-blue-600 hover:underline font-medium"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
}

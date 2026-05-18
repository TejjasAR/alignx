import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {

    setLoading(true);

    try {

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          name,
          email,
          password,
          role
        }
      );

      alert("Signup Successful");

      window.location.href = "/";

    } catch (error) {

      console.log(error);

      alert("Signup Failed");

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] relative overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-yellow-500/5 rounded-full blur-3xl" />

      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      {/* SIGNUP CARD */}

      <div className="relative z-10 bg-[#111111]/90 backdrop-blur-xl border border-white/10 p-10 rounded-[32px] shadow-[0_0_60px_rgba(0,0,0,0.6)] w-[450px]">

        {/* BRAND */}

        <h1 className="text-5xl font-bold mb-2 text-white tracking-tight">

          Align
          <span className="text-[#EAB308]">
            X
          </span>

        </h1>

        <p className="text-gray-400 mb-8 text-sm">

          Enterprise Performance Management Platform

        </p>

        {/* INPUTS */}

        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-[#1A1A1A] border border-white/10 text-white placeholder:text-gray-500 p-4 rounded-2xl mb-4 outline-none focus:border-[#EAB308] transition"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#1A1A1A] border border-white/10 text-white placeholder:text-gray-500 p-4 rounded-2xl mb-4 outline-none focus:border-[#EAB308] transition"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-[#1A1A1A] border border-white/10 text-white placeholder:text-gray-500 p-4 rounded-2xl mb-4 outline-none focus:border-[#EAB308] transition"
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="w-full bg-[#1A1A1A] border border-white/10 text-white p-4 rounded-2xl mb-6 outline-none focus:border-[#EAB308] transition"
          onChange={(e) => setRole(e.target.value)}
        >

          <option value="">
            Select Role
          </option>

          <option value="employee">
            Employee
          </option>

          <option value="manager">
            Manager
          </option>

          <option value="admin">
            Admin
          </option>

        </select>

        {/* BUTTON */}

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-[#EAB308] text-black p-4 rounded-2xl font-semibold hover:bg-[#FACC15] transition disabled:opacity-60"
        >

          {
            loading
              ? "Creating Account..."
              : "Create Account"
          }

        </button>

        {/* FOOTER */}

        <p className="mt-6 text-center text-gray-500 text-sm">

          Already have an account?

          <Link
            to="/"
            className="text-[#EAB308] ml-2 font-medium"
          >
            Sign In
          </Link>

        </p>

      </div>

    </div>

  );
}

export default Signup;
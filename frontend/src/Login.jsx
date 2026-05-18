import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    setLoading(true);

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "role",
        res.data.user.role
      );

      window.location.href =
        `/${res.data.user.role}`;

    } catch (error) {

      console.log(error);

      alert("Invalid Credentials");

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center relative overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-yellow-400/10 rounded-full blur-3xl" />

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

      {/* LOGIN CARD */}

      <div className="relative z-10 w-[430px] bg-[#111111]/90 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-[0_0_60px_rgba(0,0,0,0.6)]">

        {/* BRAND */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold tracking-tight text-white">

            align
            <span className="text-[#EAB308]">
              X
            </span>

          </h1>

          <p className="text-gray-400 mt-3 text-sm leading-6">

            Enterprise performance management
            platform for modern teams.

          </p>

        </div>

        {/* FORM */}

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#1A1A1A] border border-white/10 text-white placeholder:text-gray-500 p-4 rounded-2xl outline-none focus:border-[#EAB308] transition"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#1A1A1A] border border-white/10 text-white placeholder:text-gray-500 p-4 rounded-2xl outline-none focus:border-[#EAB308] transition"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#EAB308] hover:bg-[#FACC15] transition text-black p-4 rounded-2xl font-semibold tracking-wide disabled:opacity-60"
          >

            {
              loading
              ? "Signing In..."
              : "Sign In"
            }

          </button>

        </div>

        {/* FOOTER */}

        <div className="mt-8 text-center">

          <p className="text-gray-500 text-sm">

            Don’t have an account?

            <Link
              to="/signup"
              className="text-[#EAB308] ml-1 font-medium"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;
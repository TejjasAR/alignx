import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Sidebar() {

  const role = localStorage.getItem("role");

  const logout = () => {

    localStorage.clear();

    window.location.href = "/";

  };

  return (

    <div className="w-72 min-h-screen bg-[#0F0F0F] border-r border-white/10 text-white px-8 py-10 flex flex-col justify-between">

      {/* LOGO */}

      <div>

        <div className="flex items-center gap-3 mb-14">

        <img
          src={logo}
          alt="alignX Logo"
          className="w-11 h-11 object-contain"
        />

        <h1 className="text-4xl font-bold tracking-tight text-white">

          align
          <span className="text-[#EAB308]">
            X
          </span>

        </h1>

      </div>

        {/* NAVIGATION */}

        <div className="flex flex-col gap-4">

          {
            role === "admin" && (

              <Link
                to="/admin"
                className="bg-[#181818] hover:bg-[#222222] transition px-5 py-4 rounded-2xl text-gray-200 font-medium border border-white/5"
              >
                Admin Dashboard
              </Link>

            )
          }

          {
            role === "manager" && (

              <Link
                to="/manager"
                className="bg-[#181818] hover:bg-[#222222] transition px-5 py-4 rounded-2xl text-gray-200 font-medium border border-white/5"
              >
                Manager Dashboard
              </Link>

            )
          }

          {
            role === "employee" && (

              <Link
                to="/employee"
                className="bg-[#181818] hover:bg-[#222222] transition px-5 py-4 rounded-2xl text-gray-200 font-medium border border-white/5"
              >
                Employee Dashboard
              </Link>

            )
          }

        </div>

      </div>

      {/* LOGOUT */}

      <button
        onClick={logout}
        className="w-full bg-[#EAB308] hover:bg-[#FACC15] transition text-black py-4 rounded-2xl font-semibold mt-10"
      >
        Logout
      </button>

    </div>

  );
}

export default Sidebar;
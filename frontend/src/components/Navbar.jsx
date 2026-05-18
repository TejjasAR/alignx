function Navbar() {

  const role = localStorage.getItem("role");

  return (

    <div className="bg-[#111111] border border-white/10 shadow-lg px-8 py-5 rounded-3xl mb-8 flex justify-between items-center">

      <div>

        <h1 className="text-3xl font-bold tracking-tight text-white">

          Welcome Back

        </h1>

        <p className="text-gray-400 capitalize mt-1">

          Logged in as {role}

        </p>

      </div>

      <div className="text-right">

        <p className="font-semibold text-[#EAB308] text-lg">

          alignX Performance Portal

        </p>

        <p className="text-gray-500 mt-1">

          {new Date().toLocaleDateString()}

        </p>

      </div>

    </div>

  );
}

export default Navbar;
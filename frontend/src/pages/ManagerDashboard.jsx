import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function ManagerDashboard() {

  const [goals, setGoals] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {

    fetchGoals();

  }, []);

  const fetchGoals = async () => {

    try {

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/goals`
      );

      setGoals(
        Array.isArray(res.data)
          ? res.data
          : []
      );

    } catch (error) {

      console.log(error);

      setGoals([]);

    }

  };

  const approveGoal = async (id) => {

    setLoadingId(id);

    try {

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/goals/approve/${id}`
      );

      alert("Goal Approved");

      fetchGoals();

      setLoadingId(null);

    } catch (error) {

      console.log(error);

      setLoadingId(null);

    }

  };

  return (

    <div className="flex bg-[#0A0A0A] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-[#0A0A0A] p-10">

        <Navbar />

        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold tracking-tight text-white mb-2">

            Manager Dashboard

          </h1>

          <p className="text-gray-400 mb-10">

            Review employee goals and approve performance objectives

          </p>

          {
            Array.isArray(goals) &&
            goals.map((goal) => (

              <div
                key={goal._id}
                className="bg-[#111111] border border-white/10 p-8 rounded-3xl mb-6 shadow-lg"
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h2 className="text-3xl font-bold text-white">

                      {goal.title}

                    </h2>

                    <p className="text-gray-400 mt-3">

                      {goal.description}

                    </p>

                  </div>

                  <div>

                    {
                      goal.approved ? (

                        <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-semibold">

                          Approved

                        </span>

                      ) : (

                        <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-xl text-sm font-semibold">

                          Pending

                        </span>

                      )
                    }

                  </div>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

                  <div className="bg-[#1A1A1A] border border-white/5 p-4 rounded-2xl">

                    <p className="text-gray-500 text-sm">

                      Employee

                    </p>

                    <p className="text-white mt-1 font-medium break-words">

                      {goal.employeeEmail}

                    </p>

                  </div>

                  <div className="bg-[#1A1A1A] border border-white/5 p-4 rounded-2xl">

                    <p className="text-gray-500 text-sm">

                      Target

                    </p>

                    <p className="text-white mt-1 font-medium">

                      {goal.target}

                    </p>

                  </div>

                  <div className="bg-[#1A1A1A] border border-white/5 p-4 rounded-2xl">

                    <p className="text-gray-500 text-sm">

                      Weightage

                    </p>

                    <p className="text-[#EAB308] mt-1 font-semibold">

                      {goal.weightage}%

                    </p>

                  </div>

                  <div className="bg-[#1A1A1A] border border-white/5 p-4 rounded-2xl">

                    <p className="text-gray-500 text-sm">

                      UOM

                    </p>

                    <p className="text-white mt-1 font-medium">

                      {goal.uom}

                    </p>

                  </div>

                </div>

                <div className="mt-6 bg-[#1A1A1A] border border-white/5 p-5 rounded-2xl">

                  <div className="flex justify-between mb-3">

                    <p className="text-gray-400 text-sm">

                      Achievement Progress

                    </p>

                    <p className="text-[#EAB308] font-semibold text-sm">

                      {goal.achievement || 0}%

                    </p>

                  </div>

                  <div className="w-full h-3 bg-[#222222] rounded-full overflow-hidden">

                    <div
                      className="h-full bg-[#EAB308] rounded-full transition-all duration-500"
                      style={{
                        width: `${goal.achievement || 0}%`
                      }}
                    />

                  </div>

                </div>

                {
                  !goal.approved && (

                    <button
                      onClick={() => approveGoal(goal._id)}
                      disabled={loadingId === goal._id}
                      className="mt-6 bg-[#EAB308] hover:bg-[#FACC15] transition text-black px-6 py-3 rounded-2xl font-semibold disabled:opacity-60"
                    >

                      {
                        loadingId === goal._id
                          ? "Approving..."
                          : "Approve Goal"
                      }

                    </button>

                  )
                }

              </div>

            ))
          }

        </div>

      </div>

    </div>

  );
}

export default ManagerDashboard;
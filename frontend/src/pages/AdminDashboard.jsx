import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

function AdminDashboard() {

  const [goals, setGoals] = useState([]);

  useEffect(() => {

    fetchGoals();

  }, []);

  const fetchGoals = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/goals"
      );

      setGoals(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  const approvedGoals = goals.filter(
    (goal) => goal.approved
  ).length;

  const pendingGoals =
    goals.length - approvedGoals;

  const completedGoals = goals.filter(
    (goal) => goal.status === "Completed"
  ).length;

  const data = [
    {
      name: "Approved",
      value: approvedGoals
    },
    {
      name: "Pending",
      value: pendingGoals
    },
    {
      name: "Completed",
      value: completedGoals
    }
  ];

  const COLORS = [
    "#EAB308",
    "#52525B",
    "#FFFFFF"
  ];

  return (

    <div className="flex bg-[#0A0A0A] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-[#0A0A0A] p-10">

        <Navbar />

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}

          <div className="mb-10">

            <h1 className="text-5xl font-bold tracking-tight text-white">

              Admin Dashboard

            </h1>

            <p className="text-gray-400 mt-3 text-sm">

              Monitor enterprise performance and approvals

            </p>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            {/* TOTAL */}

            <div className="bg-[#111111] border border-white/10 p-8 rounded-3xl shadow-lg">

              <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider">

                Total Goals

              </h2>

              <p className="text-5xl font-bold mt-5 text-white">

                {goals.length}

              </p>

            </div>

            {/* APPROVED */}

            <div className="bg-[#111111] border border-white/10 p-8 rounded-3xl shadow-lg">

              <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider">

                Approved Goals

              </h2>

              <p className="text-5xl font-bold mt-5 text-[#EAB308]">

                {approvedGoals}

              </p>

            </div>

            {/* PENDING */}

            <div className="bg-[#111111] border border-white/10 p-8 rounded-3xl shadow-lg">

              <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider">

                Pending Goals

              </h2>

              <p className="text-5xl font-bold mt-5 text-gray-300">

                {pendingGoals}

              </p>

            </div>

          </div>

          {/* CHART */}

          <div className="bg-[#111111] border border-white/10 p-10 rounded-3xl shadow-lg flex justify-center">

            <PieChart width={450} height={450}>

              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                dataKey="value"
                label
              >

                {
                  data.map((entry, index) => (

                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />

                  ))
                }

              </Pie>

              <Tooltip
                contentStyle={{
                  backgroundColor: "#111111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  color: "white"
                }}
              />

              <Legend />

            </PieChart>

          </div>

        </div>

      </div>

    </div>

  );
}

export default AdminDashboard;
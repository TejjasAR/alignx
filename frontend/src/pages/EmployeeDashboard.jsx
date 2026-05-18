import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function EmployeeDashboard() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState("");
  const [weightage, setWeightage] = useState("");
  const [uom, setUom] = useState("");

  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const createGoal = async () => {

    if (goals.length >= 8) {

      alert("Maximum 8 goals allowed");

      return;

    }

    const totalWeightage =
      goals.reduce(
        (sum, goal) =>
          sum + Number(goal.weightage),
        0
      ) + Number(weightage);

    if (totalWeightage > 100) {

      alert("Total weightage cannot exceed 100%");

      return;

    }

    if (weightage < 10) {

      alert("Minimum weightage is 10%");

      return;

    }

    if (weightage > 100) {

      alert("Weightage cannot exceed 100%");

      return;

    }

    if (target < 0) {

      alert("Target cannot be negative");

      return;

    }

    setLoading(true);

    try {

      await axios.post(
        "http://localhost:5000/api/goals/create",
        {
          employeeEmail: "employee@test.com",
          title,
          description,
          target,
          weightage,
          uom
        }
      );

      alert("Goal Created Successfully");

      fetchGoals();

      setTitle("");
      setDescription("");
      setTarget("");
      setWeightage("");
      setUom("");

      setLoading(false);

    } catch (error) {

      console.log(error);

      alert("Error Creating Goal");

      setLoading(false);

    }

  };

  const updateGoal = async (id) => {

    const achievement = prompt(
      "Enter Achievement"
    );

    const status = prompt(
      "Enter Status: Not Started / On Track / Completed"
    );

    try {

      await axios.put(
        `http://localhost:5000/api/goals/update/${id}`,
        {
          achievement,
          status
        }
      );

      alert("Goal Updated");

      fetchGoals();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="flex bg-[#0A0A0A] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-[#0A0A0A] p-10">

        <Navbar />

        <div className="max-w-5xl mx-auto">

          {/* FORM */}

          <div className="bg-[#111111] border border-white/10 p-8 rounded-3xl shadow-lg">

            <h1 className="text-5xl font-bold tracking-tight text-white mb-2">

              Employee Dashboard

            </h1>

            <p className="text-gray-400 mb-8">

              Create and manage your performance goals

            </p>

            <input
              type="text"
              placeholder="Goal Title"
              value={title}
              className="w-full bg-[#1A1A1A] border border-white/10 p-4 rounded-2xl mb-4 text-white placeholder:text-gray-500 outline-none focus:border-[#EAB308]"
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Goal Description"
              value={description}
              className="w-full bg-[#1A1A1A] border border-white/10 p-4 rounded-2xl mb-4 text-white placeholder:text-gray-500 outline-none focus:border-[#EAB308]"
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="number"
              placeholder="Target"
              value={target}
              className="w-full bg-[#1A1A1A] border border-white/10 p-4 rounded-2xl mb-4 text-white placeholder:text-gray-500 outline-none focus:border-[#EAB308]"
              onChange={(e) => setTarget(e.target.value)}
            />

            <input
              type="number"
              placeholder="Weightage"
              value={weightage}
              className="w-full bg-[#1A1A1A] border border-white/10 p-4 rounded-2xl mb-4 text-white placeholder:text-gray-500 outline-none focus:border-[#EAB308]"
              onChange={(e) => setWeightage(e.target.value)}
            />

            <select
              value={uom}
              className="w-full bg-[#1A1A1A] border border-white/10 p-4 rounded-2xl mb-6 text-white outline-none focus:border-[#EAB308]"
              onChange={(e) => setUom(e.target.value)}
            >

              <option value="">
                Select UOM
              </option>

              <option>
                Numeric
              </option>

              <option>
                Percentage
              </option>

              <option>
                Timeline
              </option>

              <option>
                Zero Based
              </option>

            </select>

            <button
              onClick={createGoal}
              disabled={loading}
              className="w-full bg-[#EAB308] hover:bg-[#FACC15] transition text-black p-4 rounded-2xl font-semibold disabled:opacity-60"
            >

              {
                loading
                ? "Creating Goal..."
                : "Create Goal"
              }

            </button>

          </div>

          {/* GOALS */}

          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-6">

              Created Goals

            </h2>

            {
              goals.map((goal) => (

                <div
                  key={goal._id}
                  className="bg-[#111111] border border-white/10 p-6 rounded-3xl mb-5"
                >

                  <h3 className="text-2xl font-bold text-white">

                    {goal.title}

                  </h3>

                  <p className="text-gray-400 mt-2">

                    {goal.description}

                  </p>

                  <div className="mt-5 space-y-2 text-gray-300">

                    <p>
                      Target: {goal.target}
                    </p>

                    <p>
                      Weightage: {goal.weightage}%
                    </p>

                    <p>
                      UOM: {goal.uom}
                    </p>

                    {/* PROGRESS */}

                    <div className="mt-5">

                      <div className="flex justify-between mb-2">

                        <p className="text-sm text-gray-400">

                          Progress

                        </p>

                        <p className="text-sm text-[#EAB308] font-semibold">

                          {goal.achievement || 0}%

                        </p>

                      </div>

                      <div className="w-full h-3 bg-[#1F1F1F] rounded-full overflow-hidden">

                        <div
                          className="h-full bg-[#EAB308] rounded-full transition-all duration-500"
                          style={{
                            width: `${goal.achievement || 0}%`
                          }}
                        />

                      </div>

                    </div>

                    <p className="text-[#EAB308] font-semibold mt-4">

                      Status: {goal.status}

                    </p>

                  </div>

                  <button
                    onClick={() => updateGoal(goal._id)}
                    className="mt-5 bg-[#EAB308] hover:bg-[#FACC15] transition text-black px-5 py-3 rounded-2xl font-semibold"
                  >
                    Update Progress
                  </button>

                </div>

              ))
            }

          </div>

        </div>

      </div>

    </div>

  );
}

export default EmployeeDashboard;
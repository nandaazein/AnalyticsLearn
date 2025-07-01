// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "../../components/admin/Layout";
// import {
//   Users,
//   CheckCircle,
//   BarChart3,
//   TrendingUp,
//   TrendingDown,
// } from "lucide-react";
// import axios from "axios";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [classes, setClasses] = useState([]);
//   const [selectedClass, setSelectedClass] = useState("Semua kelas");
//   const [dashboardData, setDashboardData] = useState({
//     totalStudents: 0,
//     completedStudents: 0,
//     averageScores: {
//       kuis1: 0,
//       kuis2: 0,
//       kuis3: 0,
//       kuis4: 0,
//       evaluasi: 0,
//     },
//     highestScores: {
//       kuis1: { student: "N/A", score: 0 },
//       kuis2: { student: "N/A", score: 0 },
//       kuis3: { student: "N/A", score: 0 },
//       kuis4: { student: "N/A", score: 0 },
//       evaluasi: { student: "N/A", score: 0 },
//     },
//     lowestScores: {
//       kuis1: { student: "N/A", score: 0 },
//       kuis2: { student: "N/A", score: 0 },
//       kuis3: { student: "N/A", score: 0 },
//       kuis4: { student: "N/A", score: 0 },
//       evaluasi: { student: "N/A", score: 0 },
//     },
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (!user || user.role !== "teacher") {
//       navigate("/login-guru");
//     }

//     // Fetch classes
//     const fetchClasses = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_ENDPOINT}/api/students/classes`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         console.log("Classes fetched:", response.data);
//         setClasses(["Semua kelas", ...response.data]);
//       } catch (error) {
//         console.error("Error fetching classes:", error);
//         setError("Gagal memuat daftar kelas. Silakan coba lagi.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClasses();
//   }, [navigate]);

//   useEffect(() => {
//     // Fetch dashboard data based on selected class
//     const fetchDashboardData = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_ENDPOINT}/api/students/dashboard`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//             params: {
//               class: selectedClass === "Semua kelas" ? "" : selectedClass,
//             },
//           }
//         );
//         console.log("Dashboard data fetched:", response.data);
//         setDashboardData(response.data);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//         setError("Gagal memuat data dashboard. Silakan coba lagi.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, [selectedClass]);

//   const handleClassChange = (event) => {
//     setSelectedClass(event.target.value);
//   };

//   return (
//     <Layout>
//       <section className="px-6 py-8 mt-8 mb-8 bg-white rounded-lg shadow">
//         <h2 className="text-3xl font-bold text-[#255F38] mb-6 text-center">
//           📊 Dashboard Guru
//         </h2>

//         {/* Error Message */}
//         {error && (
//           <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
//             {error}
//           </div>
//         )}

//         {/* Loading State */}
//         {loading && (
//           <div className="mb-4 text-center text-gray-600">Memuat data...</div>
//         )}

//         {/* Filter Kelas */}
//         <div className="flex justify-center mb-8">
//           <select
//             value={selectedClass}
//             onChange={handleClassChange}
//             className="w-64 p-3 bg-white border rounded-lg shadow-sm"
//             disabled={loading}
//           >
//             {classes.map((cls) => (
//               <option key={cls} value={cls}>
//                 {cls}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Statistik Utama */}
//         <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
//           <StatCard
//             icon={<Users className="text-green-600" />}
//             title="Jumlah Siswa"
//             value={`${dashboardData.totalStudents} Siswa`}
//           />
//           <StatCard
//             icon={<CheckCircle className="text-green-600" />}
//             title="Progres Belajar Selesai"
//             value={`${dashboardData.completedStudents} Siswa Selesai`}
//           />
//           <StatCard
//             icon={<BarChart3 className="text-green-600" />}
//             title="Rata-rata Nilai"
//             value={<ScoreList scores={dashboardData.averageScores} />}
//           />
//         </div>

//         {/* Nilai Tertinggi & Terendah */}
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//           <StatCard
//             icon={<TrendingUp className="text-green-600" />}
//             title="Nilai Tertinggi"
//             value={<ScoreDetailList data={dashboardData.highestScores} />}
//           />
//           <StatCard
//             icon={<TrendingDown className="text-red-600" />}
//             title="Nilai Terendah"
//             value={<ScoreDetailList data={dashboardData.lowestScores} />}
//           />
//         </div>
//       </section>
//     </Layout>
//   );
// };

// const StatCard = ({ icon, title, value }) => (
//   <div className="p-6 border border-gray-200 shadow-sm bg-gray-50 rounded-xl">
//     <div className="flex items-center mb-3 space-x-3">
//       <div className="p-2 bg-green-100 rounded-full">{icon}</div>
//       <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//     </div>
//     <div className="text-sm text-gray-700">
//       {typeof value === "string" ? (
//         <p className="text-xl font-medium">{value}</p>
//       ) : (
//         value
//       )}
//     </div>
//   </div>
// );

// const ScoreList = ({ scores }) => (
//   <ul className="space-y-1 text-sm">
//     {Object.entries(scores).map(([key, val]) => (
//       <li key={key}>
//         {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
//         <span className="font-semibold">{val}</span>
//       </li>
//     ))}
//   </ul>
// );

// const ScoreDetailList = ({ data }) => (
//   <ul className="space-y-1 text-sm">
//     {Object.entries(data).map(([key, val]) => (
//       <li key={key}>
//         {key.charAt(0).toUpperCase() + key.slice(1)}: {val.student} ({val.score}
//         )
//       </li>
//     ))}
//   </ul>
// );

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/admin/Layout";
import {
  Users,
  CheckCircle,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Key as KeyIcon,
} from "lucide-react";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("Semua kelas");
  const [dashboardData, setDashboardData] = useState({
    totalStudents: 0,
    completedStudents: 0,
    averageScores: {
      kuis1: 0,
      kuis2: 0,
      kuis3: 0,
      kuis4: 0,
      evaluasi: 0,
    },
    highestScores: {
      kuis1: { student: "N/A", score: 0 },
      kuis2: { student: "N/A", score: 0 },
      kuis3: { student: "N/A", score: 0 },
      kuis4: { student: "N/A", score: 0 },
      evaluasi: { student: "N/A", score: 0 },
    },
    lowestScores: {
      kuis1: { student: "N/A", score: 0 },
      kuis2: { student: "N/A", score: 0 },
      kuis3: { student: "N/A", score: 0 },
      kuis4: { student: "N/A", score: 0 },
      evaluasi: { student: "N/A", score: 0 },
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Token statis untuk ditampilkan
  const token = "123";

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "teacher") {
      navigate("/login-guru");
    }

    // Fetch classes
    const fetchClasses = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/api/students/classes`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Classes fetched:", response.data);
        setClasses(["Semua kelas", ...response.data]);
      } catch (error) {
        console.error("Error fetching classes:", error);
        setError("Gagal memuat daftar kelas. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, [navigate]);

  useEffect(() => {
    // Fetch dashboard data based on selected class
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/api/students/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            params: {
              class: selectedClass === "Semua kelas" ? "" : selectedClass,
            },
          }
        );
        console.log("Dashboard data fetched:", response.data);
        setDashboardData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setError("Gagal memuat data dashboard. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [selectedClass]);

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  // Waktu saat ini
  const currentTime = new Date().toLocaleString("id-ID", {
    timeZone: "Asia/Makassar",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Layout>
      <section className="px-6 py-8 mt-8 mb-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-[#255F38] mb-6 text-center">
          📊 Dashboard Guru
        </h2>


        {/* Error Message */}
        {error && (
          <div className="p-4 mb-6 text-red-700 bg-red-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="mb-6 text-center text-gray-600 flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-4a4 4 0 01-4 4c-1.104 0-2-.896-2-2H6v5.291z"
              ></path>
            </svg>
            Memuat data...
          </div>
        )}

        {/* Filter Kelas dan Token */}
        <div className="flex items-center mb-8 space-x-4 flex-wrap">
          <div className="w-full sm:w-auto">
            <select
              value={selectedClass}
              onChange={handleClassChange}
              className="w-64 p-3 bg-white border border-green-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 disabled:bg-gray-200 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>
          <div className="p-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm flex items-center w-full sm:w-auto">
            <KeyIcon className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Token:</span>
            <span className="ml-2 text-lg font-semibold text-green-600">{token}</span>
          </div>
        </div>

        {/* Statistik Utama */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<Users className="text-green-600" />}
            title="Jumlah Siswa"
            value={`${dashboardData.totalStudents} Siswa`}
          />
          <StatCard
            icon={<CheckCircle className="text-green-600" />}
            title="Progres Belajar Selesai"
            value={`${dashboardData.completedStudents} Siswa Selesai`}
          />
          <StatCard
            icon={<BarChart3 className="text-green-600" />}
            title="Rata-rata Nilai"
            value={<ScoreList scores={dashboardData.averageScores} />}
          />
        </div>

        {/* Nilai Tertinggi & Terendah */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <StatCard
            icon={<TrendingUp className="text-green-600" />}
            title="Nilai Tertinggi"
            value={<ScoreDetailList data={dashboardData.highestScores} />}
          />
          <StatCard
            icon={<TrendingDown className="text-red-600" />}
            title="Nilai Terendah"
            value={<ScoreDetailList data={dashboardData.lowestScores} />}
          />
        </div>
      </section>
    </Layout>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="p-6 border border-gray-200 shadow-md bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-3 space-x-3">
      <div className="p-2 bg-green-100 rounded-full">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="text-sm text-gray-700">
      {typeof value === "string" ? (
        <p className="text-xl font-medium">{value}</p>
      ) : (
        value
      )}
    </div>
  </div>
);

const ScoreList = ({ scores }) => (
  <ul className="space-y-1 text-sm">
    {Object.entries(scores).map(([key, val]) => (
      <li key={key}>
        {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
        <span className="font-semibold">{val.toFixed(2)}</span>
      </li>
    ))}
  </ul>
);

const ScoreDetailList = ({ data }) => (
  <ul className="space-y-1 text-sm">
    {Object.entries(data).map(([key, val]) => (
      <li key={key}>
        {key.charAt(0).toUpperCase() + key.slice(1)}: {val.student} ({val.score.toFixed(2)})
      </li>
    ))}
  </ul>
);

export default Dashboard;
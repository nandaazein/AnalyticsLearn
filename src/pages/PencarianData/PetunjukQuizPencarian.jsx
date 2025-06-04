// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Layout from "../../components/Layout";
// // import axios from "axios";

// // export default function Pendahuluan() {
// //   const [history, setHistory] = useState([]);
// //   const [error, setError] = useState("");
// //   const [isLoading, setIsLoading] = useState(true);
// //   const navigate = useNavigate();

// //   // Fetch quiz attempt history for Kuis 1 only
// //   useEffect(() => {
// //     const fetchQuizHistory = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         const user = JSON.parse(localStorage.getItem("user"));

// //         // Periksa token dan user
// //         if (!token || !user || !user.nis) {
// //           setError("Silakan login kembali.");
// //           navigate("/login");
// //           return;
// //         }

// //         // Log untuk debugging
// //         console.log("API Endpoint:", import.meta.env.VITE_API_ENDPOINT);
// //         console.log("NIS:", user.nis);
// //         console.log("Token:", token);

// //         // Fetch quiz attempts for the current student
// //         const response = await axios.get(
// //           `${import.meta.env.VITE_API_ENDPOINT}/api/students/quiz-attempts/${
// //             user.nis
// //           }`,
// //           {
// //             headers: { Authorization: `Bearer ${token}` },
// //           }
// //         );

// //         const attempts = response.data;

// //         // Log untuk debugging
// //         console.log("Quiz attempts:", attempts);

// //         // Filter for Kuis 1 attempts and construct history array
// //         const historyData = attempts
// //           .filter((attempt) => attempt.quizNumber === 1)
// //           .map((attempt) => ({
// //             date: attempt.attemptTime,
// //             percentage: `${attempt.score}%`,
// //             status: attempt.score >= attempt.kkm ? "Lulus" : "Tidak Lulus",
// //           }));

// //         // Sort by date (newest first)
// //         historyData.sort((a, b) => new Date(b.date) - new Date(a.date));

// //         setHistory(historyData);
// //         setError("");
// //       } catch (err) {
// //         console.error("Error fetching quiz history:", err);
// //         setError(
// //           err.response?.data?.message ||
// //             "Gagal memuat riwayat kuis. Pastikan Anda sudah login."
// //         );
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchQuizHistory();
// //   }, [navigate]);

// //   // Helper function to format timestamp
// //   const formatDate = (dateString) => {
// //     if (!dateString) return "-";
// //     const date = new Date(dateString);
// //     if (isNaN(date.getTime())) return "-"; // Handle invalid dates
// //     return date.toLocaleString("id-ID", {
// //       day: "2-digit",
// //       month: "long",
// //       year: "numeric",
// //       hour: "2-digit",
// //       minute: "2-digit",
// //       timeZone: "Asia/Makassar", // WITA timezone
// //     });
// //   };

// //   return (
// //     <Layout>
// //       <div className="flex items-start justify-center flex-1 p-6 bg-gray-100">
// //         <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
// //           <h1 className="text-2xl font-bold text-[#255f38] mb-2">
// //             KUIS 1 - PENCARIAN DATA
// //           </h1>
// //           <div className="p-6 text-left bg-gray-100 rounded-lg">
// //             <p className="mb-4 text-gray-600">
// //               Latihan ini bertujuan untuk menguji pengetahuan Anda tentang
// //               materi Pencarian Data dengan ketentuan sebagai berikut:
// //             </p>
// //             <ul className="ml-6 space-y-2 text-gray-600 list-disc list-outside">
// //               <li>
// //                 Terdapat 10 soal pilihan ganda pada kuis ini. Untuk memulai,
// //                 tekan tombol "MULAI".
// //               </li>
// //               <li>Waktu pengerjaan kuis selama 20 menit.</li>
// //               <li>
// //                 Jika nilai belum mencapai KKM, maka kuis akan diulang. Namun
// //                 jika nilai sudah mencapai atau melebihi KKM, peserta didik tidak
// //                 perlu mengerjakan kuis lagi.
// //               </li>
// //               <li>Jika semua soal selesai, klik tombol "Selesai".</li>
// //             </ul>
// //           </div>
// //           <div className="flex justify-center gap-4 mt-6">
// //             <button
// //               onClick={() => (window.location.href = "/kuis-pencarian")}
// //               className="bg-[#255f38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer transition duration-300"
// //             >
// //               Mulai
// //             </button>
// //           </div>

// //           {/* History Table for Kuis 1 */}
// //           <div className="max-w-4xl mx-auto mt-8 bg-white rounded-md shadow-md">
// //             <div className="px-4 py-2 border-b border-gray-300">
// //               <h2 className="font-semibold text-gray-900">Riwayat Kuis 1</h2>
// //             </div>
// //             {error && <p className="px-4 py-2 text-sm text-red-500">{error}</p>}
// //             {isLoading ? (
// //               <p className="px-4 py-2 text-sm text-gray-600">
// //                 Memuat riwayat...
// //               </p>
// //             ) : history.length === 0 ? (
// //               <p className="px-4 py-2 text-sm text-gray-600">
// //                 Belum ada riwayat pengerjaan Kuis 1.
// //               </p>
// //             ) : (
// //               <table className="w-full text-left text-gray-900">
// //                 <thead>
// //                   <tr className="border-b border-gray-300">
// //                     <th className="px-4 py-3 font-semibold">Tanggal</th>
// //                     <th className="px-4 py-3 font-semibold">Persentase</th>
// //                     <th className="px-4 py-3 font-semibold">Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {history.map((attempt, index) => (
// //                     <tr key={index} className="border-b border-gray-200">
// //                       <td className="px-4 py-3 text-sm">
// //                         {formatDate(attempt.date)}
// //                       </td>
// //                       <td className="px-4 py-3 text-sm text-center">
// //                         {attempt.percentage}
// //                       </td>
// //                       <td className="px-4 py-3 text-sm">
// //                         <span
// //                           className={`inline-block text-xs font-semibold px-2 py-1 rounded ${
// //                             attempt.status === "Lulus"
// //                               ? "bg-green-200 text-green-800"
// //                               : "bg-red-200 text-red-700"
// //                           }`}
// //                         >
// //                           {attempt.status}
// //                         </span>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import Layout from "../../components/Layout";
// import axios from "axios";

// export default function Pendahuluan() {
//   const [history, setHistory] = useState([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch quiz attempt history for Kuis 1 only
//   useEffect(() => {
//     const fetchQuizHistory = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           throw new Error("Silakan login kembali.");
//         }

//         const user = JSON.parse(localStorage.getItem("user"));
//         if (!user || !user.nis) {
//           throw new Error("Data pengguna tidak ditemukan.");
//         }

//         // Fetch quiz attempts for the current student
//         const response = await axios.get(
//           `http://localhost:5000/api/students/quiz-attempts/${user.nis}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         const attempts = response.data;
//         // Filter for Kuis 1 only
//         const historyData = attempts
//           .filter((attempt) => attempt.quizNumber === 1)
//           .map((attempt) => ({
//             date: attempt.attemptTime,
//             percentage: `${attempt.score.toFixed(2)}%`,
//             status: attempt.score >= attempt.kkm ? "Lulus" : "Tidak Lulus",
//           }));

//         // Sort by date (newest first)
//         historyData.sort((a, b) => new Date(b.date) - new Date(a.date));

//         setHistory(historyData);
//         setError("");
//       } catch (err) {
//         console.error("Error fetching quiz history:", err);
//         setError(
//           err.response?.data?.message ||
//             "Gagal memuat riwayat kuis. Pastikan Anda sudah login."
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchQuizHistory();
//   }, []);

//   return (
//     <Layout>
//       <div className="flex items-start justify-center flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
//         <div className="w-full max-w-full sm:max-w-4xl p-4 sm:p-8 bg-white rounded-lg shadow-lg">
//           <h1 className="text-xl sm:text-2xl font-bold text-[#255f38] mb-2">
//             KUIS 1 - PENCARIAN DATA
//           </h1>
//           <div className="p-4 sm:p-6 text-left bg-gray-100 rounded-lg">
//             <p className="mb-4 text-sm sm:text-base text-gray-600">
//               Latihan ini bertujuan untuk menguji pengetahuan Anda tentang
//               materi Pencarian Data dengan ketentuan sebagai berikut:
//             </p>
//             <ul className="ml-4 sm:ml-6 space-y-2 text-sm sm:text-base text-gray-600 list-disc list-outside">
//               <li>
//                 Terdapat 10 soal pilihan ganda pada kuis ini. Untuk memulai,
//                 tekan tombol "MULAI".
//               </li>
//               <li>Waktu pengerjaan kuis selama 20 menit.</li>
//               <li>
//                 Jika nilai belum mencapai KKM, maka kuis akan diulang. Namun
//                 jika nilai sudah mencapai atau melebihi KKM, peserta didik tidak
//                 perlu mengerjakan kuis lagi.
//               </li>
//               <li>Jika semua soal selesai, klik tombol "Selesai".</li>
//             </ul>
//           </div>
//           <div className="flex justify-center gap-4 mt-4 sm:mt-6">
//             <button
//               onClick={() => (window.location.href = "/kuis-pencarian")}
//               className="bg-[#255f38] text-white px-4 sm:px-5 py-2 text-sm sm:text-base rounded-lg hover:bg-[#1E4D2E] cursor-pointer transition duration-300"
//             >
//               Mulai
//             </button>
//           </div>

//           {/* History Table for Kuis 1 */}
//           <div className="w-full max-w-full sm:max-w-4xl mx-auto mt-6 sm:mt-8 bg-white rounded-md shadow-md">
//             <div className="px-4 py-2 border-b border-gray-300">
//               <h2 className="font-semibold text-base sm:text-lg text-gray-900">Riwayat Kuis 1</h2>
//             </div>
//             {error && <p className="px-4 py-2 text-xs sm:text-sm text-red-500">{error}</p>}
//             {isLoading ? (
//               <p className="px-4 py-2 text-xs sm:text-sm text-gray-600">
//                 Memuat riwayat...
//               </p>
//             ) : history.length === 0 ? (
//               <p className="px-4 py-2 text-xs sm:text-sm text-gray-600">
//                 Belum ada riwayat pengerjaan Kuis 1.
//               </p>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left text-gray-900">
//                   <thead>
//                     <tr className="border-b border-gray-300">
//                       <th className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold">Tanggal</th>
//                       <th className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-center">Persentase</th>
//                       <th className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {history.map((attempt, index) => (
//                       <tr key={index} className="border-b border-gray-200">
//                         <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
//                           {new Date(attempt.date).toLocaleString("id-ID", {
//                             day: "2-digit",
//                             month: "long",
//                             year: "numeric",
//                             hour: "2-digit",
//                             minute: "2-digit",
//                           })}
//                         </td>
//                         <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-center">
//                           {attempt.percentage}
//                         </td>
//                         <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
//                           <span
//                             className={`inline-block text-xs font-semibold px-2 py-1 rounded ${
//                               attempt.status === "Lulus"
//                                 ? "bg-green-200 text-green-800"
//                                 : "bg-red-200 text-red-700"
//                             }`}
//                           >
//                             {attempt.status}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import axios from "axios";

export default function Pendahuluan() {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch quiz attempt history for Kuis 1 only
  useEffect(() => {
    const fetchQuizHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));

        // Periksa token dan user
        if (!token || !user || !user.nis) {
          setError("Silakan login kembali.");
          navigate("/login");
          return;
        }

        // Log untuk debugging
        console.log("API Endpoint:", import.meta.env.VITE_API_ENDPOINT);
        console.log("NIS:", user.nis);
        console.log("Token:", token);

        // Fetch quiz attempts for the current student
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/api/students/quiz-attempts/${
            user.nis
          }`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const attempts = response.data;

        // Log untuk debugging
        console.log("Quiz attempts:", attempts);

        // Filter for Kuis 1 attempts and construct history array
        const historyData = attempts
          .filter((attempt) => attempt.quizNumber === 1)
          .map((attempt) => ({
            date: attempt.attemptTime,
            percentage: `${attempt.score}%`,
            status: attempt.score >= attempt.kkm ? "Lulus" : "Tidak Lulus",
          }));

        // Sort by date (newest first)
        historyData.sort((a, b) => new Date(b.date) - new Date(a.date));

        setHistory(historyData);
        setError("");
      } catch (err) {
        console.error("Error fetching quiz history:", err);
        setError(
          err.response?.data?.message ||
            "Gagal memuat riwayat kuis. Pastikan Anda sudah login."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuizHistory();
  }, [navigate]);

  // Helper function to format timestamp
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "-"; // Handle invalid dates
    return date.toLocaleString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Makassar", // WITA timezone
    });
  };

  return (
    <Layout>
      <div className="flex items-start justify-center flex-1 p-6 bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-[#255f38] mb-2">
            KUIS 1 - PENCARIAN DATA
          </h1>
          <div className="p-6 text-left bg-gray-100 rounded-lg">
            <p className="mb-4 text-gray-600">
              Latihan ini bertujuan untuk menguji pengetahuan Anda tentang
              materi Pencarian Data dengan ketentuan sebagai berikut:
            </p>
            <ul className="ml-6 space-y-2 text-gray-600 list-disc list-outside">
              <li>
                Terdapat 10 soal pilihan ganda pada kuis ini. Untuk memulai,
                tekan tombol "MULAI".
              </li>
              <li>Waktu pengerjaan kuis selama 20 menit.</li>
              <li>
                Jika nilai belum mencapai KKM, maka kuis akan diulang. Namun
                jika nilai sudah mencapai atau melebihi KKM, peserta didik tidak
                perlu mengerjakan kuis lagi.
              </li>
              <li>Jika semua soal selesai, klik tombol "Selesai".</li>
            </ul>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => (window.location.href = "/kuis-pencarian")}
              className="bg-[#255f38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer transition duration-300"
            >
              Mulai
            </button>
          </div>

          {/* History Table for Kuis 1 */}
          <div className="max-w-4xl mx-auto mt-8 bg-white rounded-md shadow-md">
            <div className="px-4 py-2 border-b border-gray-300">
              <h2 className="font-semibold text-gray-900">Riwayat Kuis 1</h2>
            </div>
            {error && <p className="px-4 py-2 text-sm text-red-500">{error}</p>}
            {isLoading ? (
              <p className="px-4 py-2 text-sm text-gray-600">
                Memuat riwayat...
              </p>
            ) : history.length === 0 ? (
              <p className="px-4 py-2 text-sm text-gray-600">
                Belum ada riwayat pengerjaan Kuis 1.
              </p>
            ) : (
              <table className="w-full text-left text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 font-semibold">Tanggal</th>
                    <th className="px-4 py-3 font-semibold">Persentase</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((attempt, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-4 py-3 text-sm">
                        {formatDate(attempt.date)}
                      </td>
                      <td className="px-4 py-3 text-sm text-center">
                        {attempt.percentage}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span
                          className={`inline-block text-xs font-semibold px-2 py-1 rounded ${
                            attempt.status === "Lulus"
                              ? "bg-green-200 text-green-800"
                              : "bg-red-200 text-red-700"
                          }`}
                        >
                          {attempt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
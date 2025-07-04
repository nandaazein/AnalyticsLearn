// import { useState, useEffect } from "react";
// import Layout from "../../components/Layout";
// import axios from "axios";
// import Swal from "sweetalert2";

// export default function ChartLesson() {
//   useEffect(() => {
//     if (
//       !document.querySelector(
//         'link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]'
//       )
//     ) {
//       const link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
//       document.head.appendChild(link);
//     }

//     if (
//       !document.querySelector(
//         'script[src="https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js"]'
//       )
//     ) {
//       const script = document.createElement("script");
//       script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
//       script.async = true;
//       script.onload = () => {
//         if (
//           window.ej &&
//           window.ej.spreadsheet &&
//           !document.querySelector("#spreadsheet .e-spreadsheet")
//         ) {
//           const borderStyle = {
//             border: "1px solid #ccc",
//             textAlign: "center",
//           };

//           new window.ej.spreadsheet.Spreadsheet({
//             sheets: [
//               {
//                 name: "Data Ekstrakurikuler",
//                 columns: [{ width: 60 }, { width: 200 }, { width: 160 }],
//                 rows: [
//                   {
//                     cells: [
//                       {
//                         value: "Nomor",
//                         style: {
//                           ...borderStyle,
//                           fontWeight: "bold",
//                           color: "white",
//                           backgroundColor: "darkgreen",
//                         },
//                       },
//                       {
//                         value: "Nama Ekstrakurikuler",
//                         style: {
//                           ...borderStyle,
//                           fontWeight: "bold",
//                           color: "white",
//                           backgroundColor: "darkgreen",
//                         },
//                       },
//                       {
//                         value: "Jumlah Anggota",
//                         style: {
//                           ...borderStyle,
//                           fontWeight: "bold",
//                           color: "white",
//                           backgroundColor: "darkgreen",
//                         },
//                       },
//                     ],
//                   },
//                   ...[
//                     ["1", "Pramuka", "45"],
//                     ["2", "Paskibra", "30"],
//                     ["3", "Futsal", "38"],
//                     ["4", "PMR", "25"],
//                     ["5", "Bahasa Inggris Club", "20"],
//                     ["6", "Karya Ilmiah Remaja", "15"],
//                   ].map(([no, nama, jumlah]) => ({
//                     cells: [
//                       { value: no, style: borderStyle },
//                       { value: nama, style: borderStyle },
//                       { value: jumlah, style: borderStyle },
//                     ],
//                   })),
//                 ],
//               },
//             ],
//           }).appendTo("#spreadsheet");
//         }
//       };
//       document.body.appendChild(script);
//     }
//   }, []);

//   const correctAnswers = {
//     decomposition: "jumlah anggota",
//     pattern: "pramuka",
//     abstraction: "nomor",
//     algorithm: [
//       "kolom",
//       "batang",
//       "bar",
//       "column",
//       "bar chart",
//       "column chart",
//     ],
//   };

//   const [answers, setAnswers] = useState({
//     decomposition: "",
//     pattern: "",
//     abstraction: "",
//     algorithm: "",
//   });

//   const handleChange = (field, value) => {
//     setAnswers((prev) => ({ ...prev, [field]: value }));
//   };

//   const submitLatihan = async () => {
//     const allAnswered = Object.values(answers).every(
//       (answer) => answer.trim() !== ""
//     );

//     if (!allAnswered) {
//       Swal.fire({
//         title: "Belum Selesai",
//         text: "Anda belum menyelesaikan semua soal yang ada.",
//         icon: "warning",
//         confirmButtonText: "OK",
//         confirmButtonColor: "#255F38",
//       });
//       return;
//     }

//     try {
//       let correctCount = 0;
//       Object.keys(correctAnswers).forEach((field) => {
//         let isCorrect = false;
//         if (Array.isArray(correctAnswers[field])) {
//           isCorrect = correctAnswers[field].some(
//             (answer) =>
//               answers[field].trim().toLowerCase() ===
//               answer.trim().toLowerCase()
//           );
//         } else {
//           isCorrect =
//             answers[field].trim().toLowerCase() ===
//             correctAnswers[field].trim().toLowerCase();
//         }
//         if (isCorrect) correctCount++;
//       });
//       const score = (correctCount / 4) * 100;

//       const token = localStorage.getItem("token");
//       const user = localStorage.getItem("user");
//       if (!token || !user) {
//         Swal.fire({
//           title: "Autentikasi Gagal",
//           text: "Token atau data pengguna tidak ditemukan. Silakan login kembali.",
//           icon: "error",
//           confirmButtonText: "OK",
//           confirmButtonColor: "#255F38",
//         });
//         return;
//       }
//       const nis = JSON.parse(user).nis;
//       if (!nis) {
//         Swal.fire({
//           title: "Kesalahan",
//           text: "NIS tidak ditemukan dalam data pengguna.",
//           icon: "error",
//           confirmButtonText: "OK",
//           confirmButtonColor: "#255F38",
//         });
//         return;
//       }

//       await axios.post(
//         `${import.meta.env.VITE_API_ENDPOINT}/api/students/scores/${nis}`,
//         {
//           latihan2: score,
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       Swal.fire({
//         title: "Berhasil",
//         text: "Sudah selesai mengerjakan Mari Berlatih!",
//         icon: "success",
//         confirmButtonText: "OK",
//         confirmButtonColor: "#255F38",
//       }).then(() => {
//         window.location.href = "/rangkuman-visualisasi";
//       });
//     } catch (error) {
//       console.error("Error saat mengirim latihan:", error);
//       if (error.response) {
//         Swal.fire({
//           title: "Kesalahan",
//           text: `Gagal mengirim skor: ${
//             error.response.data.message || error.response.statusText
//           }`,
//           icon: "error",
//           confirmButtonText: "OK",
//           confirmButtonColor: "#255F38",
//         });
//       } else if (error.request) {
//         Swal.fire({
//           title: "Kesalahan",
//           text: "Tidak ada respons dari server. Periksa koneksi atau server.",
//           icon: "error",
//           confirmButtonText: "OK",
//           confirmButtonColor: "#255F38",
//         });
//       } else {
//         Swal.fire({
//           title: "Kesalahan",
//           text: `Terjadi kesalahan: ${error.message}`,
//           icon: "error",
//           confirmButtonText: "OK",
//           confirmButtonColor: "#255F38",
//         });
//       }
//     }
//   };

//   return (
//     <Layout>
//       <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
//         MARI BERLATIH VISUALISASI DATA
//       </div>

//       {/* Petunjuk Umum */}
//       <section className="p-4 mb-6 bg-green-100 rounded shadow-md">
//         <h3 className="text-lg font-semibold text-[#255F38] mb-2">
//           Petunjuk Umum
//         </h3>
//         <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside md:text-base">
//           <li>Bacalah studi kasus berikut dengan saksama.</li>
//           <li>
//             Jawab setiap pertanyaan pada bagian yang yang telah disediakan.
//           </li>
//           <li>
//             Setelah selesai menjawab semua pertanyaan, klik tombol{" "}
//             <em>“Selesai Latihan”</em> untuk mengumpulkan jawabanmu.
//           </li>
//         </ol>
//       </section>

//       {/* Studi Kasus */}
//       <section className="p-6 mb-6 bg-white rounded shadow-lg">
//         <h3 className="mb-3 text-lg font-semibold text-green-700">
//           Studi Kasus: Berlatih Visualisasi Data
//         </h3>
//         <p className="px-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
//           Sebagai pengurus OSIS, kamu diminta membuat laporan untuk kepala
//           sekolah mengenai minat siswa terhadap kegiatan ekstrakurikuler. Data
//           jumlah anggota tiap ekstrakurikuler sudah dicatat dalam bentuk tabel,
//           namun sulit dipahami jika hanya dilihat begitu saja. Untuk mempermudah
//           analisis dan presentasi, kamu akan menyajikan data ini dalam bentuk
//           grafik yang lebih mudah dibaca.
//         </p>
//         <div className="flex justify-center w-full px-4 mt-5">
//           <div
//             id="spreadsheet"
//             className="w-full max-w-full md:max-w-screen-md"
//             style={{ height: "600px" }}
//           ></div>
//         </div>
//       </section>

//       {/* Soal Latihan */}
//       <section className="mb-6">
//         {[
//           {
//             key: "decomposition",
//             title: "1. Memecah Masalah (Dekomposisi)",
//             question:
//               "Data utama apa yang diperlukan untuk membuat grafik perbandingan jumlah anggota ekstrakurikuler?",
//             points: [
//               "Identifikasi elemen penting dari data yang akan digunakan untuk membuat grafik.",
//               "Fokus pada angka atau informasi yang akan divisualisasikan.",
//             ],
//           },
//           {
//             key: "pattern",
//             title: "2. Mencari Pola (Pengenalan Pola)",
//             question:
//               "Ekstrakurikuler apa yang memiliki anggota paling banyak?",
//             points: [
//               "Bandingkan jumlah anggota pada setiap ekstrakurikuler.",
//               "Cari nilai tertinggi dari data yang tersedia.",
//             ],
//           },
//           {
//             key: "abstraction",
//             title: "3. Mengabaikan yang Tidak Penting (Abstraksi)",
//             question:
//               "Kolom atau informasi apa yang tidak diperlukan dalam grafik perbandingan jumlah anggota ekstrakurikuler?",
//             points: [
//               "Tentukan informasi yang tidak relevan untuk tujuan visualisasi perbandingan.",
//               "Fokus hanya pada data yang mendukung tujuan grafik.",
//             ],
//           },
//           {
//             key: "algorithm",
//             title: "4. Membuat Langkah-langkah (Algoritma)",
//             question:
//               "Jenis grafik apa yang paling cocok untuk membandingkan jumlah anggota ekstrakurikuler?",
//             points: [
//               "Pilih jenis grafik yang sesuai untuk membandingkan data antar kategori.",
//               "Pastikan grafik yang dipilih memudahkan pembaca untuk melihat perbandingan dengan jelas.",
//             ],
//           },
//         ].map(({ key, title, question, points }) => (
//           <div key={key} className="p-6 mb-6 bg-white rounded shadow-lg">
//             <h4 className="mb-3 font-semibold text-green-700 text-md">
//               {title}
//             </h4>
//             <p className="leading-relaxed text-gray-700">
//               <strong>Pertanyaan:</strong> {question}
//             </p>
//             <ul className="mt-1 ml-6 text-sm text-gray-700 list-disc md:text-base">
//               {points.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>
//             <p className="mt-3 leading-relaxed text-gray-700">
//               <strong>Jawaban Anda:</strong>
//             </p>
//             <input
//               className="w-full p-2 mt-2 border rounded"
//               placeholder="Tulis jawabanmu di sini"
//               value={answers[key]}
//               onChange={(e) => handleChange(key, e.target.value)}
//             />
//           </div>
//         ))}
//       </section>

//       {/* Tombol Selesai */}
//       <div className="flex justify-center mt-8">
//         <button
//           onClick={submitLatihan}
//           className="px-5 py-2 text-base text-white transition duration-300 bg-green-800 rounded-lg shadow-md cursor-pointer hover:bg-green-700"
//         >
//           Selesai Latihan
//         </button>
//       </div>
//     </Layout>
//   );
// }

import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import Swal from "sweetalert2";

export default function ChartLesson() {
  useEffect(() => {
    if (
      !document.querySelector(
        'link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]'
      )
    ) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
      document.head.appendChild(link);
    }

    if (
      !document.querySelector(
        'script[src="https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
      script.async = true;
      script.onload = () => {
        if (
          window.ej &&
          window.ej.spreadsheet &&
          !document.querySelector("#spreadsheet .e-spreadsheet")
        ) {
          const borderStyle = {
            border: "1px solid #ccc",
            textAlign: "center",
          };

          new window.ej.spreadsheet.Spreadsheet({
            sheets: [
              {
                name: "Data Ekstrakurikuler",
                columns: [{ width: 60 }, { width: 200 }, { width: 160 }],
                rows: [
                  {
                    cells: [
                      {
                        value: "Nomor",
                        style: {
                          ...borderStyle,
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                        },
                      },
                      {
                        value: "Nama Ekstrakurikuler",
                        style: {
                          ...borderStyle,
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                        },
                      },
                      {
                        value: "Jumlah Anggota",
                        style: {
                          ...borderStyle,
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                        },
                      },
                    ],
                  },
                  ...[
                    ["1", "Pramuka", "45"],
                    ["2", "Paskibra", "30"],
                    ["3", "Futsal", "38"],
                    ["4", "PMR", "25"],
                    ["5", "Bahasa Inggris Club", "20"],
                    ["6", "Karya Ilmiah Remaja", "15"],
                  ].map(([no, nama, jumlah]) => ({
                    cells: [
                      { value: no, style: borderStyle },
                      { value: nama, style: borderStyle },
                      { value: jumlah, style: borderStyle },
                    ],
                  })),
                ],
              },
            ],
          }).appendTo("#spreadsheet");
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  const correctAnswers = {
    decomposition: "jumlah anggota",
    pattern: "pramuka",
    abstraction: "nomor",
    algorithm: [
      "kolom",
      "batang",
      "bar",
      "column",
      "bar chart",
      "column chart",
    ],
  };

  const [answers, setAnswers] = useState({
    decomposition: "",
    pattern: "",
    abstraction: "",
    algorithm: "",
  });

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const submitLatihan = async () => {
    const allAnswered = Object.values(answers).every(
      (answer) => answer.trim() !== ""
    );

    if (!allAnswered) {
      Swal.fire({
        title: "Belum Selesai",
        text: "Anda belum menyelesaikan semua soal yang ada.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      });
      return;
    }

    try {
      let correctCount = 0;
      Object.keys(correctAnswers).forEach((field) => {
        let isCorrect = false;
        if (Array.isArray(correctAnswers[field])) {
          isCorrect = correctAnswers[field].some(
            (answer) =>
              answers[field].trim().toLowerCase() ===
              answer.trim().toLowerCase()
          );
        } else {
          isCorrect =
            answers[field].trim().toLowerCase() ===
            correctAnswers[field].trim().toLowerCase();
        }
        if (isCorrect) correctCount++;
      });
      const score = (correctCount / 4) * 100;

      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      if (!token || !user) {
        Swal.fire({
          title: "Autentikasi Gagal",
          text: "Token atau data pengguna tidak ditemukan. Silakan login kembali.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
        return;
      }
      const nis = JSON.parse(user).nis;
      if (!nis) {
        Swal.fire({
          title: "Kesalahan",
          text: "NIS tidak ditemukan dalam data pengguna.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
        return;
      }

      await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/students/scores/${nis}`,
        {
          latihan2: score,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      Swal.fire({
        title: "Berhasil",
        text: "Sudah selesai mengerjakan Mari Berlatih!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      }).then(() => {
        window.location.href = "/rangkuman-visualisasi";
      });
    } catch (error) {
      console.error("Error saat mengirim latihan:", error);
      if (error.response) {
        Swal.fire({
          title: "Kesalahan",
          text: `Gagal mengirim skor: ${
            error.response.data.message || error.response.statusText
          }`,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
      } else if (error.request) {
        Swal.fire({
          title: "Kesalahan",
          text: "Tidak ada respons dari server. Periksa koneksi atau server.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
      } else {
        Swal.fire({
          title: "Kesalahan",
          text: `Terjadi kesalahan: ${error.message}`,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
      }
    }
  };

  return (
    <Layout>
      <div className="border-4 border-[#255F38] p-4 rounded-lg">
        <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
          MARI BERLATIH VISUALISASI DATA
        </div>

        {/* Petunjuk Umum */}
        <section className="p-4 mb-6 bg-green-100 rounded shadow-md">
          <h3 className="text-lg font-semibold text-[#255F38] mb-2">
            Petunjuk Umum
          </h3>
          <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside md:text-base">
            <li>Bacalah studi kasus berikut dengan saksama.</li>
            <li>
              Jawab setiap pertanyaan pada bagian yang yang telah disediakan.
            </li>
            <li>
              Setelah selesai menjawab semua pertanyaan, klik tombol{" "}
              <em>“Selesai Latihan”</em> untuk mengumpulkan jawabanmu.
            </li>
          </ol>
        </section>

        {/* Studi Kasus */}
        <section className="p-6 mb-6 bg-white border border-gray-300 rounded shadow-lg">
          <h3 className="mb-3 text-lg font-semibold text-green-700">
            Studi Kasus: Berlatih Visualisasi Data
          </h3>
          <p className="px-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
            Sebagai pengurus OSIS, kamu diminta membuat laporan untuk kepala
            sekolah mengenai minat siswa terhadap kegiatan ekstrakurikuler. Data
            jumlah anggota tiap ekstrakurikuler sudah dicatat dalam bentuk
            tabel, namun sulit dipahami jika hanya dilihat begitu saja. Untuk
            mempermudah analisis dan presentasi, kamu akan menyajikan data ini
            dalam bentuk grafik yang lebih mudah dibaca.
          </p>
          <div className="flex justify-center w-full px-4 mt-5">
            <div
              id="spreadsheet"
              className="w-full max-w-full md:max-w-screen-md"
              style={{ height: "600px" }}
            ></div>
          </div>
        </section>

        {/* Soal Latihan */}
        <section className="mb-6">
          {[
            {
              key: "decomposition",
              title: "1. Memecah Masalah (Dekomposisi)",
              question:
                "Data utama apa yang diperlukan untuk membuat grafik perbandingan jumlah anggota ekstrakurikuler?",
              points: [
                "Identifikasi elemen penting dari data yang akan digunakan untuk membuat grafik.",
                "Fokus pada angka atau informasi yang akan divisualisasikan.",
              ],
            },
            {
              key: "pattern",
              title: "2. Mencari Pola (Pengenalan Pola)",
              question:
                "Ekstrakurikuler apa yang memiliki anggota paling banyak?",
              points: [
                "Bandingkan jumlah anggota pada setiap ekstrakurikuler.",
                "Cari nilai tertinggi dari data yang tersedia.",
              ],
            },
            {
              key: "abstraction",
              title: "3. Mengabaikan yang Tidak Penting (Abstraksi)",
              question:
                "Kolom atau informasi apa yang tidak diperlukan dalam grafik perbandingan jumlah anggota ekstrakurikuler?",
              points: [
                "Tentukan informasi yang tidak relevan untuk tujuan visualisasi perbandingan.",
                "Fokus hanya pada data yang mendukung tujuan grafik.",
              ],
            },
            {
              key: "algorithm",
              title: "4. Membuat Langkah-langkah (Algoritma)",
              question:
                "Jenis grafik apa yang paling cocok untuk membandingkan jumlah anggota ekstrakurikuler?",
              points: [
                "Pilih jenis grafik yang sesuai untuk membandingkan data antar kategori.",
                "Pastikan grafik yang dipilih memudahkan pembaca untuk melihat perbandingan dengan jelas.",
              ],
            },
          ].map(({ key, title, question, points }) => (
            <div
              key={key}
              className="relative p-5 mt-12 space-y-4 bg-white border-gray-300"
            >

              <h4 className="mb-3 font-semibold text-green-700 text-md">
                {title}
              </h4>
              <p className="leading-relaxed text-gray-700">
                <strong>Pertanyaan:</strong> {question}
              </p>
              <ul className="mt-1 ml-6 text-sm text-gray-700 list-disc md:text-base">
                {points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <p className="mt-3 leading-relaxed text-gray-700">
                <strong>Jawaban Anda:</strong>
              </p>
              <input
                className="w-full p-2 mt-2 border rounded"
                placeholder="Tulis jawabanmu di sini"
                value={answers[key]}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          ))}
        </section>

        {/* Tombol Selesai */}
        <div className="flex justify-center mt-8 border border-gray-300">
          <button
            onClick={submitLatihan}
            className="px-5 py-2 text-base text-white transition duration-300 bg-green-800 rounded-lg shadow-md cursor-pointer hover:bg-green-700"
          >
            Selesai Latihan
          </button>
        </div>
      </div>
    </Layout>
  );
}

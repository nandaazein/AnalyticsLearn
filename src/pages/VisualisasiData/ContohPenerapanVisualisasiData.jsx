// import Layout from "../../components/Layout";
// import { useEffect, useState } from "react";
// import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

// const ContohPenerapanVisualisasiData = () => {
//   // State untuk input siswa
//   const [inputs, setInputs] = useState({
//     dekomposisi: [""],
//     pengenalanPola: ["", ""],
//     abstraksi: [""],
//   });

//   // Jawaban benar untuk validasi
//   const correctAnswers = {
//     dekomposisi: ["Tabel"],
//     pengenalanPola: ["Naik", "Line Chart"],
//     abstraksi: ["Jumlah Ulangan"],
//   };

//   // Handler untuk input siswa
//   const handleInputChange = (category, index, value) => {
//     setInputs((prev) => ({
//       ...prev,
//       [category]: prev[category].map((item, i) =>
//         i === index ? value : item
//       ),
//     }));
//   };

//   // State untuk langkah algoritma
//   const [algorithmStep, setAlgorithmStep] = useState(0);

//   const algorithmSteps = [
//     "Siapkan data dalam tabel: Masukkan data Bulan, Nilai Rata-rata Ulangan, dan Jumlah Ulangan di spreadsheet.",
//     "Pilih data untuk chart: Sorot kolom Bulan (A2:A6) dan Nilai Rata-rata Ulangan (B2:B6).",
//     "Masukkan grafik: Klik menu 'Insert Chart', lalu pilih Diagram Garis (Line Chart).",
//     "Sesuaikan grafik: Pastikan sumbu X menunjukkan Bulan dan sumbu Y menunjukkan Nilai Rata-rata.",
//     "Analisis hasil: Amati pola grafik untuk melihat tren kenaikan atau penurunan nilai.",
//   ];

//   // Handler untuk tombol langkah selanjutnya
//   const handleNextStep = (currentStep, setStep, totalSteps) => {
//     if (currentStep < totalSteps - 1) {
//       setStep(currentStep + 1);
//     } else {
//       setStep(0); // Reset ke langkah awal
//     }
//   };

//   // Handler untuk tombol langkah sebelumnya
//   const handlePreviousStep = (currentStep, setStep) => {
//     if (currentStep > 0) {
//       setStep(currentStep - 1);
//     }
//   };

//   useEffect(() => {
//     // Tambah stylesheet jika belum ada
//     if (!document.querySelector('link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]')) {
//       const link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
//       document.head.appendChild(link);
//     }

//     // Tambah script jika belum ada
//     if (!document.querySelector('script[src="https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js"]')) {
//       const script = document.createElement("script");
//       script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
//       script.async = true;
//       script.onload = () => {
//         if (window.ej && window.ej.spreadsheet && !document.querySelector("#spreadsheet .e-spreadsheet")) {
//           new window.ej.spreadsheet.Spreadsheet({
//             sheets: [
//               {
//                 name: "Sheet1",
//                 columns: [
//                   { width: 80 },
//                   { width: 120 },
//                   { width: 220 },
//                 ],
//                 rows: [
//                   {
//                     cells: [
//                       {
//                         value: "Bulan",
//                         style: {
//                           fontWeight: "bold",
//                           color: "white",
//                           backgroundColor: "darkgreen",
//                           textAlign: "center",
//                         },
//                       },
//                       {
//                         value: "Nilai Rata-rata Ulangan",
//                         style: {
//                           fontWeight: "bold",
//                           color: "white",
//                           backgroundColor: "darkgreen",
//                           textAlign: "center",
//                         },
//                       },
//                       {
//                         value: "Jumlah Ulangan yang Dilakukan",
//                         style: {
//                           fontWeight: "bold",
//                           color: "white",
//                           backgroundColor: "darkgreen",
//                           textAlign: "center",
//                         },
//                       },
//                     ],
//                   },
//                   {
//                     cells: [
//                       { value: "Januari", style: { textAlign: "center" } },
//                       { value: 75, format: "#,##0", style: { textAlign: "center" } },
//                       { value: 3, format: "#,##0", style: { textAlign: "center" } },
//                     ],
//                   },
//                   {
//                     cells: [
//                       { value: "Februari", style: { textAlign: "center" } },
//                       { value: 80, format: "#,##0", style: { textAlign: "center" } },
//                       { value: 4, format: "#,##0", style: { textAlign: "center" } },
//                     ],
//                   },
//                   {
//                     cells: [
//                       { value: "Maret", style: { textAlign: "center" } },
//                       { value: 85, format: "#,##0", style: { textAlign: "center" } },
//                       { value: 3, format: "#,##0", style: { textAlign: "center" } },
//                     ],
//                   },
//                   {
//                     cells: [
//                       { value: "April", style: { textAlign: "center" } },
//                       { value: 78, format: "#,##0", style: { textAlign: "center" } },
//                       { value: 5, format: "#,##0", style: { textAlign: "center" } },
//                     ],
//                   },
//                   {
//                     cells: [
//                       { value: "Mei", style: { textAlign: "center" } },
//                       { value: 90, format: "#,##0", style: { textAlign: "center" } },
//                       { value: 4, format: "#,##0", style: { textAlign: "center" } },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           }).appendTo("#spreadsheet");
//         }
//       };
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <Layout>
//       {/* Header judul */}
//       <div className="flex justify-center">
//         <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg mx-4 w-full max-w-[calc(100%-2rem)]">
//           CONTOH PENERAPAN VISUALISASI DATA
//         </div>
//       </div>

//       {/* Instruksi untuk Siswa */}
//       <div className="flex justify-center mt-8">
//         <div className="bg-green-50 p-4 sm:p-6 mx-2 rounded-lg shadow-md mb-2 w-full max-w-[calc(100%-1rem)] sm:max-w-4xl">
//           <h3 className="mb-3 text-base font-semibold text-green-800 sm:text-lg">
//             Instruksi:
//           </h3>
//           <ul className="space-y-2 text-xs text-green-700 sm:text-sm md:text-base">
//             <li>1. Perhatikan tabel untuk memahami data nilai ulangan Budi.</li>
//             <li>2. Isi kotak kosong berdasarkan tabel dan petunjuk yang diberikan.</li>
//             <li>3. Klik di luar kotak atau tekan Enter untuk memeriksa jawaban.</li>
//             <li>4. Kotak akan berubah hijau jika benar, merah jika salah, atau abu-abu jika kosong.</li>
//             <li>5. Gunakan tombol "Langkah Selanjutnya" atau "Langkah Sebelumnya" untuk mempelajari algoritma.</li>
//           </ul>
//         </div>
//       </div>

//       {/* Paragraf Penjelasan */}
//       <p className="px-4 mt-6 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
//         Budi, seorang siswa SMP, ingin melihat apakah nilai ulangan harian Matematikanya meningkat atau menurun selama lima bulan terakhir (Januari hingga Mei). Dia telah mencatat nilai rata-rata ulangannya setiap bulan dalam tabel, tetapi sulit untuk melihat tren hanya dari angka-angka tersebut. Untuk memudahkan analisis, Budi ingin menampilkan data ini dalam bentuk Diagram Garis (Line Chart) menggunakan spreadsheet. Dengan grafik ini, Budi dapat dengan cepat memahami apakah dia perlu belajar lebih giat atau sudah berada di jalur yang benar.
//       </p>

//       {/* Tabel Data Nilai Ulangan */}
//       <div className="flex flex-col items-center mt-6">
//         <p className="mb-2 text-xs italic text-center text-gray-600 sm:text-sm">
//           Tabel 9. Data Nilai Ulangan Harian Budi
//         </p>
//         <div className="flex justify-center w-full overflow-x-auto">
//           <table className="w-full text-xs text-center border border-collapse border-green-800 md:w-2/3 sm:text-sm">
//             <thead>
//               <tr className="bg-[#255F38] text-white">
//                 <th className="px-4 py-2 border border-green-600">Bulan</th>
//                 <th className="px-4 py-2 border border-green-600">
//                   Nilai Rata-rata Ulangan
//                 </th>
//                 <th className="px-4 py-2 border border-green-600">
//                   Jumlah Ulangan yang Dilakukan
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["Januari", 75, 3],
//                 ["Februari", 80, 4],
//                 ["Maret", 85, 3],
//                 ["April", 78, 5],
//                 ["Mei", 90, 4],
//               ].map((row, index) => (
//                 <tr
//                   key={index}
//                   className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
//                 >
//                   {row.map((cell, i) => (
//                     <td key={i} className="px-4 py-2 border border-green-600">
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <p className="px-4 mt-6 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
//         Penyelesaian dengan{" "}
//         <span className="italic font-semibold">Computational Thinking:</span>
//       </p>

//       {/* DEKOMPOSISI */}
//       <div className="relative p-5 mt-12 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
//           <Lightbulb className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> Dekomposisi
//         </div>
//         <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm md:text-base">
//           <li className="-ml-6 list-none">
//             Sebelum membuat grafik, kita perlu membagi masalah menjadi langkah-langkah kecil:
//           </li>
//           <li>
//             Mengumpulkan data nilai rata-rata ulangan Budi per bulan dalam bentuk{" "}
//             <input
//               type="text"
//               value={inputs.dekomposisi[0]}
//               onChange={(e) => handleInputChange("dekomposisi", 0, e.target.value)}
//               onBlur={(e) => handleInputChange("dekomposisi", 0, e.target.value)}
//               className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
//                 inputs.dekomposisi[0].toLowerCase() === "tabel" && inputs.dekomposisi[0]
//                   ? "border-green-500"
//                   : inputs.dekomposisi[0]
//                   ? "border-red-500"
//                   : "border-gray-300"
//               }`}
//               placeholder="Isi jawaban"
//             />.
//           </li>
//           <li>
//             Menentukan jenis grafik yang sesuai untuk menampilkan tren perubahan nilai.
//           </li>
//           <li>
//             Menggunakan spreadsheet untuk membuat grafik otomatis dan mempermudah analisis.
//           </li>
//         </ul>
//       </div>

//       {/* Pengenalan Pola */}
//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
//           <BarChart className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> PENGENALAN POLA
//         </div>
//         <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm md:text-base">
//           <li>
//             Jika nilai Budi meningkat, garis grafik akan bergerak{" "}
//             <input
//               type="text"
//               value={inputs.pengenalanPola[0]}
//               onChange={(e) => handleInputChange("pengenalanPola", 0, e.target.value)}
//               onBlur={(e) => handleInputChange("pengenalanPola", 0, e.target.value)}
//               className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
//                 inputs.pengenalanPola[0].toLowerCase() === "naik" && inputs.pengenalanPola[0]
//                   ? "border-green-500"
//                   : inputs.pengenalanPola[0]
//                   ? "border-red-500"
//                   : "border-gray-300"
//               }`}
//               placeholder="Isi jawaban"
//             />.
//           </li>
//           <li>Jika nilai Budi menurun, garis grafik akan turun.</li>
//           <li>
//             Jika nilai Budi naik dan turun, grafik akan berbentuk bergelombang.
//           </li>
//           <li>
//             Diagram Garis (
//             <input
//               type="text"
//               value={inputs.pengenalanPola[1]}
//               onChange={(e) => handleInputChange("pengenalanPola", 1, e.target.value)}
//               onBlur={(e) => handleInputChange("pengenalanPola", 1, e.target.value)}
//               className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
//                 inputs.pengenalanPola[1].toLowerCase() === "line chart" && inputs.pengenalanPola[1]
//                   ? "border-green-500"
//                   : inputs.pengenalanPola[1]
//                   ? "border-red-500"
//                   : "border-gray-300"
//               }`}
//               placeholder="Isi jawaban"
//             />
//             ) cocok digunakan karena dapat menunjukkan pola perubahan dari waktu ke waktu.
//           </li>
//         </ul>
//       </div>

//       {/* Abstraksi */}
//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
//           <Filter className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> ABSTRAKSI
//         </div>
//         <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm md:text-base">
//           <li>
//             Fokus hanya pada dua kolom utama: Bulan dan Nilai Rata-rata Ulangan, tanpa
//             memasukkan informasi lain seperti{" "}
//             <input
//               type="text"
//               value={inputs.abstraksi[0]}
//               onChange={(e) => handleInputChange("abstraksi", 0, e.target.value)}
//               onBlur={(e) => handleInputChange("abstraksi", 0, e.target.value)}
//               className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
//                 inputs.abstraksi[0].toLowerCase() === "jumlah ulangan" && inputs.abstraksi[0]
//                   ? "border-green-500"
//                   : inputs.abstraksi[0]
//                   ? "border-red-500"
//                   : "border-gray-300"
//               }`}
//               placeholder="Isi jawaban"
//             />.
//           </li>
//           <li>
//             Gunakan grafik yang tepat agar informasi lebih mudah dipahami.
//           </li>
//         </ul>
//       </div>

//       {/* Algoritma */}
//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
//           <Code className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> ALGORITMA
//         </div>
//         <p className="px-4 mt-2 text-xs text-gray-700 sm:text-sm md:text-base">
//           Klik tombol di bawah untuk melihat langkah-langkah membuat Diagram Garis satu per satu!
//         </p>
//         <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm md:text-base">
//           <li>
//             <span className="font-semibold">Langkah {algorithmStep + 1} dari {algorithmSteps.length}</span>
//             <br />
//             {algorithmSteps[algorithmStep]}
//           </li>
//         </ul>
//         <div className="flex justify-center mt-4 space-x-2">
//           <button
//             onClick={() => handlePreviousStep(algorithmStep, setAlgorithmStep)}
//             className="px-4 py-2 text-sm text-white transition duration-300 bg-gray-500 rounded-lg cursor-pointer hover:bg-gray-600 sm:text-base"
//           >
//             Langkah Sebelumnya
//           </button>
//           <button
//             onClick={() =>
//               handleNextStep(algorithmStep, setAlgorithmStep, algorithmSteps.length)
//             }
//             className="px-4 py-2 text-sm text-white transition duration-300 bg-green-800 rounded-lg cursor-pointer hover:bg-green-700 sm:text-base"
//           >
//             {algorithmStep < algorithmSteps.length - 1 ? "Langkah Selanjutnya" : "Ulangi"}
//           </button>
//         </div>

//         <div className="flex justify-center w-full px-4 mt-6">
//           <div
//             id="spreadsheet"
//             className="w-full max-w-full md:max-w-screen-md"
//             style={{ height: "600px" }}
//           ></div>
//         </div>
//       </div>

//       {/* Kesimpulan dan Analisis */}
//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
//           <CheckCircle className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> KESIMPULAN & ANALISIS
//         </div>
//         <p className="mt-6 text-xs text-gray-600 sm:text-sm md:text-base">
//           Dengan Diagram Garis (Line Chart), Budi dapat melihat tren nilai ulangan hariannya setiap bulan dengan lebih cepat dan jelas, tanpa harus menganalisis angka secara manual.
//         </p>
//         <p className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base">
//           Analisis
//         </p>
//         <ul className="mt-4 space-y-2 text-xs text-gray-600 list-disc list-inside sm:text-sm md:text-base">
//           <li
//             className="text-justify"
//             style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
//           >
//             Dari Januari hingga Maret, nilai Budi naik dari 75 ke 85, lalu turun ke 78 di April, sebelum meningkat kembali menjadi 90 di Mei.
//           </li>
//           <li
//             className="text-justify"
//             style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
//           >
//             Secara keseluruhan, tren nilai Budi menunjukkan kenaikan, meskipun sempat menurun di April. Ini berarti Budi sudah berada di jalur yang baik, tetapi perlu menjaga konsistensi belajar.
//           </li>
//         </ul>
//       </div>

//       {/* Tombol Navigasi */}
//       <div className="flex flex-row justify-between px-4 mt-8">
//         <a
//           href="/visualisasi-data"
//           className="px-3 py-2 text-sm text-white transition duration-300 bg-gray-500 rounded-lg shadow-md cursor-pointer sm:px-5 hover:bg-gray-600 sm:text-base"
//         >
//           ← Sebelumnya
//         </a>
//         <a
//           href="/aktivitas-visualisasi"
//           className="px-3 py-2 text-sm text-white transition duration-300 bg-green-800 rounded-lg shadow-md cursor-pointer sm:px-5 hover:bg-green-700 sm:text-base"
//         >
//           Selanjutnya →
//         </a>
//       </div>
//     </Layout>
//   );
// };

// export default ContohPenerapanVisualisasiData;

import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

const ContohPenerapanVisualisasiData = () => {
  // State untuk input siswa
  const [inputs, setInputs] = useState({
    dekomposisi: [""],
    pengenalanPola: ["", ""],
    abstraksi: [""],
  });

  // Jawaban benar untuk validasi
  const correctAnswers = {
    dekomposisi: ["Tabel"],
    pengenalanPola: ["Naik", "Line Chart"],
    abstraksi: ["Jumlah Ulangan"],
  };

  // Handler untuk input siswa
  const handleInputChange = (category, index, value) => {
    setInputs((prev) => ({
      ...prev,
      [category]: prev[category].map((item, i) => (i === index ? value : item)),
    }));
  };

  // State untuk langkah algoritma
  const [algorithmStep, setAlgorithmStep] = useState(0);

  const algorithmSteps = [
    "Siapkan data dalam tabel: Masukkan data Bulan, Nilai Rata-rata Ulangan, dan Jumlah Ulangan di spreadsheet.",
    "Pilih data untuk chart: Sorot kolom Bulan (A2:A6) dan Nilai Rata-rata Ulangan (B2:B6).",
    "Masukkan grafik: Klik menu 'Insert Chart', lalu pilih Diagram Garis (Line Chart).",
    "Sesuaikan grafik: Pastikan sumbu X menunjukkan Bulan dan sumbu Y menunjukkan Nilai Rata-rata.",
    "Analisis hasil: Amati pola grafik untuk melihat tren kenaikan atau penurunan nilai.",
  ];

  // Handler untuk tombol langkah selanjutnya
  const handleNextStep = (currentStep, setStep, totalSteps) => {
    if (currentStep < totalSteps - 1) {
      setStep(currentStep + 1);
    } else {
      setStep(0); // Reset ke langkah awal
    }
  };

  // Handler untuk tombol langkah sebelumnya
  const handlePreviousStep = (currentStep, setStep) => {
    if (currentStep > 0) {
      setStep(currentStep - 1);
    }
  };

  useEffect(() => {
    // Tambah stylesheet jika belum ada
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

    // Tambah script jika belum ada
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
          new window.ej.spreadsheet.Spreadsheet({
            sheets: [
              {
                name: "Sheet1",
                columns: [{ width: 80 }, { width: 120 }, { width: 220 }],
                rows: [
                  {
                    cells: [
                      {
                        value: "Bulan",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                      {
                        value: "Nilai Rata-rata Ulangan",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                      {
                        value: "Jumlah Ulangan yang Dilakukan",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                    ],
                  },
                  {
                    cells: [
                      { value: "Januari", style: { textAlign: "center" } },
                      {
                        value: 75,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                      {
                        value: 3,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                    ],
                  },
                  {
                    cells: [
                      { value: "Februari", style: { textAlign: "center" } },
                      {
                        value: 80,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                      {
                        value: 4,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                    ],
                  },
                  {
                    cells: [
                      { value: "Maret", style: { textAlign: "center" } },
                      {
                        value: 85,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                      {
                        value: 3,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                    ],
                  },
                  {
                    cells: [
                      { value: "April", style: { textAlign: "center" } },
                      {
                        value: 78,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                      {
                        value: 5,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                    ],
                  },
                  {
                    cells: [
                      { value: "Mei", style: { textAlign: "center" } },
                      {
                        value: 90,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                      {
                        value: 4,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                    ],
                  },
                ],
              },
            ],
          }).appendTo("#spreadsheet");
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Layout>
      <div className="border-4 border-[#255F38] p-4 rounded-lg">
        {/* Header judul */}
        <div className="flex justify-center">
          <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg mx-4 w-full max-w-[calc(100%-2rem)]">
            CONTOH PENERAPAN VISUALISASI DATA
          </div>
        </div>

        {/* Instruksi untuk Siswa */}
        <div className="flex justify-center mt-8">
          <div className="bg-green-50 p-4 sm:p-6 mx-2 rounded-lg shadow-md mb-2 w-full max-w-[calc(100%-1rem)] sm:max-w-4xl border border-gray-300">
            <h3 className="mb-3 text-base font-semibold text-green-800 sm:text-lg">
              Instruksi:
            </h3>
            <ul className="space-y-2 text-xs text-green-700 sm:text-sm md:text-base">
              <li>
                1. Perhatikan tabel untuk memahami data nilai ulangan Budi.
              </li>
              <li>
                2. Isi kotak kosong berdasarkan tabel dan petunjuk yang
                diberikan.
              </li>
              <li>
                3. Klik di luar kotak atau tekan Enter untuk memeriksa jawaban.
              </li>
              <li>
                4. Kotak akan berubah hijau jika benar, merah jika salah, atau
                abu-abu jika kosong.
              </li>
              <li>
                5. Gunakan tombol "Langkah Selanjutnya" atau "Langkah
                Sebelumnya" untuk mempelajari algoritma.
              </li>
            </ul>
          </div>
        </div>

        {/* Paragraf Penjelasan */}
        <p className="px-4 mt-6 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
          Budi, seorang siswa SMP, ingin melihat apakah nilai ulangan harian
          Matematikanya meningkat atau menurun selama lima bulan terakhir
          (Januari hingga Mei). Dia telah mencatat nilai rata-rata ulangannya
          setiap bulan dalam tabel, tetapi sulit untuk melihat tren hanya dari
          angka-angka tersebut. Untuk memudahkan analisis, Budi ingin
          menampilkan data ini dalam bentuk Diagram Garis (Line Chart)
          menggunakan spreadsheet. Dengan grafik ini, Budi dapat dengan cepat
          memahami apakah dia perlu belajar lebih giat atau sudah berada di
          jalur yang benar.
        </p>

        {/* Tabel Data Nilai Ulangan */}
        <div className="flex flex-col items-center mt-6">
          <p className="mb-2 text-xs italic text-center text-gray-600 sm:text-sm">
            Tabel 9. Data Nilai Ulangan Harian Budi
          </p>
          <div className="flex justify-center w-full overflow-x-auto">
            <table className="w-full text-xs text-center border border-collapse border-green-800 md:w-2/3 sm:text-sm">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="px-4 py-2 border border-green-600">Bulan</th>
                  <th className="px-4 py-2 border border-green-600">
                    Nilai Rata-rata Ulangan
                  </th>
                  <th className="px-4 py-2 border border-green-600">
                    Jumlah Ulangan yang Dilakukan
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Januari", 75, 3],
                  ["Februari", 80, 4],
                  ["Maret", 85, 3],
                  ["April", 78, 5],
                  ["Mei", 90, 4],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
                  >
                    {row.map((cell, i) => (
                      <td key={i} className="px-4 py-2 border border-green-600">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="px-4 mt-6 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
          Penyelesaian dengan{" "}
          <span className="italic font-semibold">Computational Thinking:</span>
        </p>

        {/* DEKOMPOSISI */}
        <div className="relative p-5 mt-12 space-y-4 bg-white border-gray-300">
          <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
            {" "}
            <Lightbulb className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> Dekomposisi
          </div>
          <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm md:text-base">
            <li className="-ml-6 list-none">
              Sebelum membuat grafik, kita perlu membagi masalah menjadi
              langkah-langkah kecil:
            </li>
            <li>
              Mengumpulkan data nilai rata-rata ulangan Budi per bulan dalam
              bentuk{" "}
              <input
                type="text"
                value={inputs.dekomposisi[0]}
                onChange={(e) =>
                  handleInputChange("dekomposisi", 0, e.target.value)
                }
                onBlur={(e) =>
                  handleInputChange("dekomposisi", 0, e.target.value)
                }
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.dekomposisi[0].toLowerCase() === "tabel" &&
                  inputs.dekomposisi[0]
                    ? "border-green-500"
                    : inputs.dekomposisi[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              .
            </li>
            <li>
              Menentukan jenis grafik yang sesuai untuk menampilkan tren
              perubahan nilai.
            </li>
            <li>
              Menggunakan spreadsheet untuk membuat grafik otomatis dan
              mempermudah analisis.
            </li>
          </ul>
        </div>

        {/* Pengenalan Pola */}
        <div className="relative p-5 mt-12 space-y-4 bg-white border-gray-300">
          <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
            {" "}
            <BarChart className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> PENGENALAN POLA
          </div>
          <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm md:text-base">
            <li>
              Jika nilai Budi meningkat, garis grafik akan bergerak{" "}
              <input
                type="text"
                value={inputs.pengenalanPola[0]}
                onChange={(e) =>
                  handleInputChange("pengenalanPola", 0, e.target.value)
                }
                onBlur={(e) =>
                  handleInputChange("pengenalanPola", 0, e.target.value)
                }
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.pengenalanPola[0].toLowerCase() === "naik" &&
                  inputs.pengenalanPola[0]
                    ? "border-green-500"
                    : inputs.pengenalanPola[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              .
            </li>
            <li>Jika nilai Budi menurun, garis grafik akan turun.</li>
            <li>
              Jika nilai Budi naik dan turun, grafik akan berbentuk
              bergelombang.
            </li>
            <li>
              Diagram Garis (
              <input
                type="text"
                value={inputs.pengenalanPola[1]}
                onChange={(e) =>
                  handleInputChange("pengenalanPola", 1, e.target.value)
                }
                onBlur={(e) =>
                  handleInputChange("pengenalanPola", 1, e.target.value)
                }
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.pengenalanPola[1].toLowerCase() === "line chart" &&
                  inputs.pengenalanPola[1]
                    ? "border-green-500"
                    : inputs.pengenalanPola[1]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ) cocok digunakan karena dapat menunjukkan pola perubahan dari
              waktu ke waktu.
            </li>
          </ul>
        </div>

        {/* Abstraksi */}
        <div className="relative p-5 mt-12 space-y-4 bg-white border-gray-300">
          <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
            {" "}
            <Filter className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> ABSTRAKSI
          </div>
          <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm md:text-base">
            <li>
              Fokus hanya pada dua kolom utama: Bulan dan Nilai Rata-rata
              Ulangan, tanpa memasukkan informasi lain seperti{" "}
              <input
                type="text"
                value={inputs.abstraksi[0]}
                onChange={(e) =>
                  handleInputChange("abstraksi", 0, e.target.value)
                }
                onBlur={(e) =>
                  handleInputChange("abstraksi", 0, e.target.value)
                }
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.abstraksi[0].toLowerCase() === "jumlah ulangan" &&
                  inputs.abstraksi[0]
                    ? "border-green-500"
                    : inputs.abstraksi[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              .
            </li>
            <li>
              Gunakan grafik yang tepat agar informasi lebih mudah dipahami.
            </li>
          </ul>
        </div>

        {/* Algoritma */}
        <div className="relative p-5 mt-12 space-y-4 bg-white border-gray-300">
          <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
            {" "}
            <Code className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> ALGORITMA
          </div>
          <p className="px-4 mt-2 text-xs text-gray-700 sm:text-sm md:text-base">
            Klik tombol di bawah untuk melihat langkah-langkah membuat Diagram
            Garis satu per satu!
          </p>
          <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm md:text-base">
            <li>
              <span className="font-semibold">
                Langkah {algorithmStep + 1} dari {algorithmSteps.length}
              </span>
              <br />
              {algorithmSteps[algorithmStep]}
            </li>
          </ul>
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={() =>
                handlePreviousStep(algorithmStep, setAlgorithmStep)
              }
              className="px-4 py-2 text-sm text-white transition duration-300 bg-gray-500 rounded-lg cursor-pointer hover:bg-gray-600 sm:text-base"
            >
              Langkah Sebelumnya
            </button>
            <button
              onClick={() =>
                handleNextStep(
                  algorithmStep,
                  setAlgorithmStep,
                  algorithmSteps.length
                )
              }
              className="px-4 py-2 text-sm text-white transition duration-300 bg-green-800 rounded-lg cursor-pointer hover:bg-green-700 sm:text-base"
            >
              {algorithmStep < algorithmSteps.length - 1
                ? "Langkah Selanjutnya"
                : "Ulangi"}
            </button>
          </div>

          <div className="flex justify-center w-full px-4 mt-6">
            <div
              id="spreadsheet"
              className="w-full max-w-full md:max-w-screen-md"
              style={{ height: "600px" }}
            ></div>
          </div>
        </div>

        {/* Kesimpulan dan Analisis */}
        <div className="relative p-5 mt-12 space-y-4 bg-white border-gray-300">
          <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
            {" "}
            <CheckCircle className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> KESIMPULAN &
            ANALISIS
          </div>
          <p className="mt-6 text-xs text-gray-600 sm:text-sm md:text-base">
            Dengan Diagram Garis (Line Chart), Budi dapat melihat tren nilai
            ulangan hariannya setiap bulan dengan lebih cepat dan jelas, tanpa
            harus menganalisis angka secara manual.
          </p>
          <p className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base">
            Analisis
          </p>
          <ul className="mt-4 space-y-2 text-xs text-gray-600 list-disc list-inside sm:text-sm md:text-base">
            <li
              className="text-justify"
              style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
            >
              Dari Januari hingga Maret, nilai Budi naik dari 75 ke 85, lalu
              turun ke 78 di April, sebelum meningkat kembali menjadi 90 di Mei.
            </li>
            <li
              className="text-justify"
              style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
            >
              Secara keseluruhan, tren nilai Budi menunjukkan kenaikan, meskipun
              sempat menurun di April. Ini berarti Budi sudah berada di jalur
              yang baik, tetapi perlu menjaga konsistensi belajar.
            </li>
          </ul>
        </div>

        {/* Tombol Navigasi */}
        <div className="flex items-center justify-between px-2 py-2 mt-2 sm:px-6 sm:mt-4">
          <a
            href="/visualisasi-data"
            className="px-3 py-2 text-sm text-white transition duration-300 bg-gray-500 rounded-lg shadow-md cursor-pointer sm:px-5 hover:bg-gray-600 sm:text-base"
          >
            ← Sebelumnya
          </a>
          <a
            href="/aktivitas-visualisasi"
            className="px-3 py-2 text-sm text-white transition duration-300 bg-green-800 rounded-lg shadow-md cursor-pointer sm:px-5 hover:bg-green-700 sm:text-base"
          >
            Selanjutnya →
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default ContohPenerapanVisualisasiData;

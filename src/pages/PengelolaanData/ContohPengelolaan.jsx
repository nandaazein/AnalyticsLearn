import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

const ContohPengelolaan = () => {
  // State untuk input siswa
  const [inputs, setInputs] = useState({
    sorting: {
      dekomposisi: [""],
      pengenalanPola: [""],
      abstraksi: ["", ""],
    },
    filtering: {
      dekomposisi: [""],
      pengenalanPola: [""],
      abstraksi: ["", ""],
    },
  });

  // Jawaban benar untuk validasi
  const correctAnswers = {
    sorting: {
      dekomposisi: ["Nilai"],
      pengenalanPola: ["atas"],
      abstraksi: ["Alamat", "Nama"],
    },
    filtering: {
      dekomposisi: ["Kelas"],
      pengenalanPola: ["8A"],
      abstraksi: ["Alamat", "Kelas"],
    },
  };

  // Handler untuk input teks
  const handleInputChange = (section, category, index, value) => {
    const normalizedValue = value.trim();
    setInputs((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [category]: prev[section][category].map((item, i) =>
          i === index ? normalizedValue : item
        ),
      },
    }));
  };

  // State untuk langkah algoritma
  const [sortingStep, setSortingStep] = useState(0);
  const [filteringStep, setFilteringStep] = useState(0);

  // Langkah-langkah algoritma
  const sortingAlgorithmSteps = [
    "Blok semua data, termasuk header (Nama Siswa, Nilai, Kelas).",
    "Klik kanan pada kolom Nilai, pilih Sort.",
    'Pilih "Sort Z to A" untuk mengurutkan dari nilai tertinggi ke terendah.',
    "Periksa hasil: Data diurutkan dengan nilai tertinggi di atas.",
  ];

  const filteringAlgorithmSteps = [
    "Blok semua data, termasuk header (Nama Siswa, Nilai, Kelas).",
    "Klik kanan pada kolom Kelas, pilih Filter.",
    'Centang "8A" untuk menampilkan hanya siswa kelas 8A.',
    "Periksa hasil: Hanya data siswa kelas 8A yang ditampilkan.",
  ];

  // Handler untuk tombol langkah
  const handleNextStep = (currentStep, setStep, totalSteps) => {
    if (currentStep < totalSteps - 1) {
      setStep(currentStep + 1);
    } else {
      setStep(0);
    }
  };

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
        if (window.ej && window.ej.spreadsheet) {
          // Spreadsheet untuk Algoritma Sorting
          if (!document.querySelector("#spreadsheet3 .e-spreadsheet")) {
            new window.ej.spreadsheet.Spreadsheet({
              sheets: [
                {
                  name: "Sheet1",
                  columns: [{ width: 120 }, { width: 120 }, { width: 120 }],
                  rows: [
                    {
                      cells: [
                        {
                          value: "Nama Siswa",
                          style: {
                            fontWeight: "bold",
                            color: "white",
                            backgroundColor: "darkgreen",
                            textAlign: "center",
                          },
                        },
                        {
                          value: "Nilai",
                          style: {
                            fontWeight: "bold",
                            color: "white",
                            backgroundColor: "darkgreen",
                            textAlign: "center",
                          },
                        },
                        {
                          value: "Kelas",
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
                        { value: "Aisyah", style: { textAlign: "center" } },
                        {
                          value: 85,
                          format: "#,##0",
                          style: { textAlign: "center" },
                        },
                        { value: "8A", style: { textAlign: "center" } },
                      ],
                    },
                    {
                      cells: [
                        { value: "Budi", style: { textAlign: "center" } },
                        {
                          value: 70,
                          format: "#,##0",
                          style: { textAlign: "center" },
                        },
                        { value: "8B", style: { textAlign: "center" } },
                      ],
                    },
                    {
                      cells: [
                        { value: "Citra", style: { textAlign: "center" } },
                        {
                          value: 95,
                          format: "#,##0",
                          style: { textAlign: "center" },
                        },
                        { value: "8A", style: { textAlign: "center" } },
                      ],
                    },
                    {
                      cells: [
                        { value: "Dani", style: { textAlign: "center" } },
                        {
                          value: 60,
                          format: "#,##0",
                          style: { textAlign: "center" },
                        },
                        { value: "8B", style: { textAlign: "center" } },
                      ],
                    },
                  ],
                },
              ],
            }).appendTo("#spreadsheet3");
          }

          // Spreadsheet untuk Algoritma Filtering
          if (!document.querySelector("#spreadsheet4 .e-spreadsheet")) {
            new window.ej.spreadsheet.Spreadsheet({
              sheets: [
                {
                  name: "Sheet1",
                  columns: [{ width: 120 }, { width: 120 }, { width: 120 }],
                  rows: [
                    {
                      cells: [
                        {
                          value: "Nama Siswa",
                          style: {
                            fontWeight: "bold",
                            color: "white",
                            backgroundColor: "darkgreen",
                            textAlign: "center",
                          },
                        },
                        {
                          value: "Nilai",
                          style: {
                            fontWeight: "bold",
                            color: "white",
                            backgroundColor: "darkgreen",
                            textAlign: "center",
                          },
                        },
                        {
                          value: "Kelas",
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
                        { value: "Aisyah", style: { textAlign: "center" } },
                        {
                          value: 85,
                          format: "#,##0",
                          style: { textAlign: "center" },
                        },
                        { value: "8A", style: { textAlign: "center" } },
                      ],
                    },
                    {
                      cells: [
                        { value: "Budi", style: { textAlign: "center" } },
                        {
                          value: 70,
                          format: "#,##0",
                          style: { textAlign: "center" },
                        },
                        { value: "8B", style: { textAlign: "center" } },
                      ],
                    },
                    {
                      cells: [
                        { value: "Citra", style: { textAlign: "center" } },
                        {
                          value: 95,
                          format: "#,##0",
                          style: { textAlign: "center" },
                        },
                        { value: "8A", style: { textAlign: "center" } },
                      ],
                    },
                    {
                      cells: [
                        { value: "Dani", style: { textAlign: "center" } },
                        {
                          value: 60,
                          format: "#,##0",
                          style: { textAlign: "center" },
                        },
                        { value: "8B", style: { textAlign: "center" } },
                      ],
                    },
                  ],
                },
              ],
            }).appendTo("#spreadsheet4");
          }
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
          <div className="p-4 bg-[#255F38] text-white font-bold text-lg sm:text-xl text-center rounded-lg shadow-lg mx-4 w-full max-w-[calc(100%-2rem)]">
            CONTOH PENERAPAN SORTING DAN FILTERING DATA
          </div>
        </div>

        {/* Instruksi untuk Siswa */}
        <div className="flex justify-center mt-8">
          <div className="bg-green-50 p-4 sm:p-6 mx-2 rounded-lg shadow-md mb-8 w-full max-w-[calc(100%-1rem)] sm:max-w-4xl">
            <h3 className="text-green-800 text-base sm:text-lg font-semibold mb-3">
              Instruksi:
            </h3>
            <ul className="text-green-700 text-xs sm:text-sm md:text-base space-y-2">
              <li>1. Isi kotak kosong berdasarkan petunjuk.</li>
              <li>
                2. Klik di luar kotak atau tekan Enter untuk memeriksa jawaban.
              </li>
              <li>
                3. Kotak akan berubah hijau jika benar, merah jika salah, atau
                abu-abu jika kosong.
              </li>
              <li>
                4. Gunakan spreadsheet di bagian Algoritma untuk mencoba sorting
                dan filtering.
              </li>
              <li>
                5. Gunakan tombol "Langkah Selanjutnya" atau "Langkah
                Sebelumnya" untuk mempelajari algoritma.
              </li>
            </ul>
          </div>
        </div>

        {/* Studi Kasus: Sorting */}
        <h2 className="text-lg md:text-xl font-bold mt-10 mb-4 px-4 text-gray-800">
          Studi Kasus 1: Sorting - Mengurutkan Data Nilai Siswa
        </h2>
        <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4">
          Seorang guru ingin mengurutkan data nilai siswa untuk menentukan
          peringkat. Data berisi nama siswa, nilai, dan kelas. Guru ingin
          mengurutkan data berdasarkan nilai dari tertinggi ke terendah (Z ke A)
          untuk melihat siswa dengan nilai terbaik. Dengan sorting, guru dapat
          dengan cepat mengidentifikasi peringkat siswa.{" "}
          <strong>Penjelasan</strong>: Urutan "A ke Z" (ascending) mengurutkan
          dari nilai terkecil ke terbesar, sedangkan "Z ke A" (descending)
          mengurutkan dari nilai terbesar ke terkecil.
        </p>

        {/* Tabel: Data Siswa */}
        <div className="flex flex-col items-center mt-2">
          <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">
            Tabel. Data Nilai Siswa
          </p>
          <div className="w-full overflow-x-auto flex justify-center">
            <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-4 py-2">
                    Nama Siswa
                  </th>
                  <th className="border border-green-600 px-4 py-2">Nilai</th>
                  <th className="border border-green-600 px-4 py-2">Kelas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aisyah", 85, "8A"],
                  ["Budi", 70, "8B"],
                  ["Citra", 95, "8A"],
                  ["Dani", 60, "8B"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
                  >
                    {row.map((cell, i) => (
                      <td key={i} className="border border-green-600 px-4 py-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4 mt-6">
          Penyelesaian dengan{" "}
          <span className="font-semibold italic">Computational Thinking:</span>
        </p>

        {/* DEKOMPOSISI SORTING */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
            <Lightbulb className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> DEKOMPOSISI
            SORTING
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li className="list-none -ml-6">
              Sebelum melakukan sorting, kita perlu membagi masalah menjadi
              langkah-langkah kecil:
            </li>
            <li>Mengumpulkan data nilai siswa dalam bentuk tabel.</li>
            <li>
              Menentukan kolom yang akan diurutkan, yaitu kolom "
              <input
                type="text"
                value={inputs.sorting.dekomposisi[0]}
                onChange={(e) =>
                  handleInputChange("sorting", "dekomposisi", 0, e.target.value)
                }
                onBlur={(e) =>
                  handleInputChange("sorting", "dekomposisi", 0, e.target.value)
                }
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.sorting.dekomposisi[0].toLowerCase() === "nilai" &&
                  inputs.sorting.dekomposisi[0]
                    ? "border-green-500"
                    : inputs.sorting.dekomposisi[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ".
            </li>
            <li>
              Menggunakan fitur sorting di spreadsheet untuk mengurutkan data
              dari terbesar ke terkecil (descending, Z ke A).
            </li>
          </ul>
        </div>

        {/* PENGENALAN POLA SORTING */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
            <BarChart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> PENGENALAN POLA
            SORTING
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>
              Sorting akan mengurutkan data siswa berdasarkan kolom Nilai dari Z
              ke A (descending).
            </li>
            <li>
              Setelah sorting, nilai tertinggi akan berada di posisi "
              <input
                type="text"
                value={inputs.sorting.pengenalanPola[0]}
                onChange={(e) =>
                  handleInputChange(
                    "sorting",
                    "pengenalanPola",
                    0,
                    e.target.value
                  )
                }
                onBlur={(e) =>
                  handleInputChange(
                    "sorting",
                    "pengenalanPola",
                    0,
                    e.target.value
                  )
                }
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.sorting.pengenalanPola[0].toLowerCase() === "atas" &&
                  inputs.sorting.pengenalanPola[0]
                    ? "border-green-500"
                    : inputs.sorting.pengenalanPola[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ".
            </li>
          </ul>
        </div>

        {/* ABSTRAKSI SORTING */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
            <Filter className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ABSTRAKSI SORTING
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>Abaikan kolom yang tidak relevan</li>
            <li>
              Fokus pada kolom "
              <input
                type="text"
                value={inputs.sorting.abstraksi[1]}
                onChange={(e) =>
                  handleInputChange("sorting", "abstraksi", 1, e.target.value)
                }
                onBlur={(e) =>
                  handleInputChange("sorting", "abstraksi", 1, e.target.value)
                }
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.sorting.abstraksi[1].toLowerCase() === "nama" &&
                  inputs.sorting.abstraksi[1]
                    ? "border-green-500"
                    : inputs.sorting.abstraksi[1]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              " dan "Nilai".
            </li>
          </ul>
        </div>

        {/* ALGORITMA SORTING */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
            <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ALGORITMA SORTING
          </div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base px-4 mt-2">
            Gunakan spreadsheet di bawah dan ikuti langkah-langkah sorting satu
            per satu!
          </p>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>
              <span className="font-semibold">
                Langkah {sortingStep + 1} dari {sortingAlgorithmSteps.length}
              </span>
              <br />
              {sortingAlgorithmSteps[sortingStep]}
            </li>
          </ul>
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={() => handlePreviousStep(sortingStep, setSortingStep)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-sm sm:text-base cursor-pointer"
            >
              Langkah Sebelumnya
            </button>
            <button
              onClick={() =>
                handleNextStep(
                  sortingStep,
                  setSortingStep,
                  sortingAlgorithmSteps.length
                )
              }
              className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base cursor-pointer"
            >
              {sortingStep < sortingAlgorithmSteps.length - 1
                ? "Langkah Selanjutnya"
                : "Ulangi"}
            </button>
          </div>
          <div className="w-full flex justify-center px-4 mt-4">
            <div
              id="spreadsheet3"
              className="w-full max-w-full md:max-w-screen-md"
              style={{ height: "400px" }}
            ></div>
          </div>
        </div>

        {/* KESIMPULAN & ANALISIS SORTING */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
            <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> KESIMPULAN &
            ANALISIS SORTING
          </div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base px-4 mt-6">
            Dengan sorting, guru dapat dengan cepat mengidentifikasi siswa
            dengan nilai tertinggi tanpa memeriksa data secara manual.
          </p>
          <h4 className="text-gray-800 font-semibold px-4">Analisis</h4>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 text-xs sm:text-sm md:text-base">
            <li
              className="text-justify"
              style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
            >
              Setelah sorting (Z ke A), Citra (95), Aisyah (85), Budi (70), dan
              Dani (60) adalah peringkat siswa berdasarkan nilai.
            </li>
            <li
              className="text-justify"
              style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
            >
              Sorting dengan urutan descending (Z ke A) membuat data lebih
              terorganisir, memudahkan guru menentukan peringkat siswa.
            </li>
          </ul>
        </div>

        {/* Studi Kasus: Filtering */}
        <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
          Studi Kasus 2: Filtering - Menampilkan Data Siswa Kelas 8A
        </h2>
        <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4">
          Guru ingin menyaring data siswa untuk hanya menampilkan siswa dari
          kelas 8A guna analisis nilai kelas tersebut. Data berisi nama siswa,
          nilai, dan kelas. Dengan filtering, guru dapat dengan cepat memilih
          siswa yang relevan tanpa memeriksa setiap entri secara manual.
        </p>

        {/* Tabel: Data Siswa */}
        <div className="flex flex-col items-center mt-2">
          <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">
            Tabel. Data Nilai Siswa
          </p>
          <div className="w-full overflow-x-auto flex justify-center">
            <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-4 py-2">
                    Nama Siswa
                  </th>
                  <th className="border border-green-600 px-4 py-2">Nilai</th>
                  <th className="border border-green-600 px-4 py-2">Kelas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aisyah", 85, "8A"],
                  ["Budi", 70, "8B"],
                  ["Citra", 95, "8A"],
                  ["Dani", 60, "8B"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
                  >
                    {row.map((cell, i) => (
                      <td key={i} className="border border-green-600 px-4 py-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4 mt-6">
          Penyelesaian dengan{" "}
          <span className="font-semibold italic">Computational Thinking:</span>
        </p>

        {/* DEKOMPOSISI FILTERING */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
            <Lightbulb className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> DEKOMPOSISI
            FILTERING
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li className="list-none -ml-6">
              Sebelum melakukan filtering, kita perlu membagi masalah menjadi
              langkah-langkah kecil:
            </li>
            <li>Mengumpulkan data siswa dalam bentuk tabel.</li>
            <li>
              Menentukan kriteria penyaringan, yaitu kolom "
              <input
                type="text"
                value={inputs.filtering.dekomposisi[0]}
                onChange={(e) =>
                  handleInputChange(
                    "filtering",
                    "dekomposisi",
                    0,
                    e.target.value
                  )
                }
                onBlur={(e) =>
                  handleInputChange(
                    "filtering",
                    "dekomposisi",
                    0,
                    e.target.value
                  )
                }
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.filtering.dekomposisi[0].toLowerCase() === "kelas" &&
                  inputs.filtering.dekomposisi[0]
                    ? "border-green-500"
                    : inputs.filtering.dekomposisi[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ".
            </li>
            <li>
              Menggunakan fitur filtering di spreadsheet untuk menampilkan hanya
              siswa kelas 8A.
            </li>
          </ul>
        </div>

        {/* PENGENALAN POLA FILTERING */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
            <BarChart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> PENGENALAN POLA
            FILTERING
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>
              Filtering akan menyaring data siswa berdasarkan kolom Kelas.
            </li>
            <li>
              Setelah filtering, hanya siswa kelas "
              <input
                type="text"
                value={inputs.filtering.pengenalanPola[0]}
                onChange={(e) =>
                  handleInputChange(
                    "filtering",
                    "pengenalanPola",
                    0,
                    e.target.value
                  )
                }
                onBlur={(e) =>
                  handleInputChange(
                    "filtering",
                    "pengenalanPola",
                    0,
                    e.target.value
                  )
                }
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.filtering.pengenalanPola[0].toLowerCase() === "8a" &&
                  inputs.filtering.pengenalanPola[0]
                    ? "border-green-500"
                    : inputs.filtering.pengenalanPola[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              " yang ditampilkan.
            </li>
          </ul>
        </div>

        {/* ABSTRAKSI FILTERING */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
            <Filter className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ABSTRAKSI
            FILTERING
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>Abaikan kolom yang tidak relevan</li>
            <li>
              Fokus pada kolom "
              <input
                type="text"
                value={inputs.filtering.abstraksi[1]}
                onChange={(e) =>
                  handleInputChange("filtering", "abstraksi", 1, e.target.value)
                }
                onBlur={(e) =>
                  handleInputChange("filtering", "abstraksi", 1, e.target.value)
                }
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.filtering.abstraksi[1].toLowerCase() === "kelas" &&
                  inputs.filtering.abstraksi[1]
                    ? "border-green-500"
                    : inputs.filtering.abstraksi[1]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              " dan "Nama".
            </li>
          </ul>
        </div>

        {/* ALGORITMA FILTERING */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
            <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ALGORITMA FILTERING
          </div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base px-4 mt-2">
            Gunakan spreadsheet di bawah dan ikuti langkah-langkah filtering
            satu per satu!
          </p>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>
              <span className="font-semibold">
                Langkah {filteringStep + 1} dari{" "}
                {filteringAlgorithmSteps.length}
              </span>
              <br />
              {filteringAlgorithmSteps[filteringStep]}
            </li>
          </ul>
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={() =>
                handlePreviousStep(filteringStep, setFilteringStep)
              }
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-sm sm:text-base cursor-pointer"
            >
              Langkah Sebelumnya
            </button>
            <button
              onClick={() =>
                handleNextStep(
                  filteringStep,
                  setFilteringStep,
                  filteringAlgorithmSteps.length
                )
              }
              className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base cursor-pointer"
            >
              {filteringStep < filteringAlgorithmSteps.length - 1
                ? "Langkah Selanjutnya"
                : "Ulangi"}
            </button>
          </div>
          <div className="w-full flex justify-center px-4 mt-4">
            <div
              id="spreadsheet4"
              className="w-full max-w-full md:max-w-screen-md"
              style={{ height: "400px" }}
            ></div>
          </div>
        </div>

        {/* KESIMPULAN & ANALISIS FILTERING */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
            <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> KESIMPULAN &
            ANALISIS FILTERING
          </div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base px-4 mt-6">
            Dengan filtering, guru dapat dengan cepat mengidentifikasi siswa
            kelas 8A untuk analisis nilai tanpa memeriksa setiap entri secara
            manual.
          </p>
          <h4 className="text-gray-800 font-semibold px-4">Analisis</h4>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 text-xs sm:text-sm md:text-base">
            <li
              className="text-justify"
              style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
            >
              Setelah filtering, hanya Aisyah dan Citra ditampilkan sebagai
              siswa kelas 8A.
            </li>
            <li
              className="text-justify"
              style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
            >
              Filtering menghemat waktu guru dalam memilih siswa yang relevan
              dan memastikan fokus pada kelas yang diinginkan.
            </li>
          </ul>
        </div>

        {/* Tombol Navigasi */}
        <div className="flex flex-row justify-between mt-8 px-4">
          <a
            href="/pengelolaan-data"
            className="bg-gray-500 text-white px-3 sm:px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-sm sm:text-base shadow-md cursor-pointer"
          >
            ← Sebelumnya
          </a>
          <a
            href="/aktivitas-pengelolaan"
            className="bg-green-800 text-white px-3 sm:px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base shadow-md cursor-pointer"
          >
            Selanjutnya →
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default ContohPengelolaan;

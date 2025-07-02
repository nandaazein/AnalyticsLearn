
import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";
import { useState } from "react";

const ContohReference = () => {
  const [inputs, setInputs] = useState({
    index: {
      dekomposisi: [""],
      pengenalanPola: ["", ""],
      abstraksi: [""],
    },
    match: {
      dekomposisi: [""],
      pengenalanPola: [""],
      abstraksi: [""],
    },
    choose: {
      dekomposisi: [""],
      pengenalanPola: [""],
      abstraksi: [""],
    },
  });

  const correctAnswers = {
    index: {
      dekomposisi: ["B001"],
      pengenalanPola: ["4", "1"],
      abstraksi: ["index"],
    },
    match: {
      dekomposisi: ["4821"],
      pengenalanPola: ["identitas"],
      abstraksi: ["match"],
    },
    choose: {
      dekomposisi: ["3"],
      pengenalanPola: ["Jenis Kegiatan"],
      abstraksi: ["choose"],
    },
  };

  const handleInputChange = (section, category, index, value) => {
    setInputs((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [category]: prev[section][category].map((item, i) =>
          i === index ? value : item
        ),
      },
    }));
  };

  const [indexStep, setIndexStep] = useState(0);
  const [matchStep, setMatchStep] = useState(0);
  const [chooseStep, setChooseStep] = useState(0);

const indexAlgorithmSteps = [
  "Pilih tabel: Gunakan daftar buku yang terletak pada rentang A3:D7.",
  "Tentukan baris: Pilih baris ke-1 karena buku dengan kode B001 berada di baris pertama dalam tabel tersebut.",
  "Tentukan kolom: Pilih kolom ke-4 karena informasi stok terletak di kolom ke-4 dari tabel.",
  "Rumus berdasarkan kolom: Masukkan =INDEX(D3:D7;1) untuk mengambil baris ke-1 dari kolom D (stok B001). Ini menggunakan satu kolom sebagai referensi dan memilih data berdasarkan posisi baris.",
  "Rumus berdasarkan baris dan kolom: Masukkan =INDEX(A3:D7;1;4) untuk mengambil data pada baris ke-1 dan kolom ke-4 dari tabel (stok B001). Ini adalah bentuk umum penggunaan fungsi INDEX.",
  "Rumus berdasarkan baris: Masukkan =INDEX(3:3;4) untuk mengambil kolom ke-4 dari baris ke-3 (stok B001). Semua rumus tersebut akan menghasilkan nilai yang sama karena posisi baris dan kolom yang diambil tetap sama. Perbedaannya hanya terletak pada bentuk penulisan rentang datanya.",
];


  const matchAlgorithmSteps = [
    "Tentukan nilai: Pilih kode 4821 sebagai nilai yang dicari.",
    "Tentukan daftar: Gunakan rentang kolom A3:A7 untuk pencarian.",
    "Tulis rumus: Masukkan =MATCH(4821;A3:A7;0) untuk proses pencarian.",
    "Periksa hasil: Catat posisi nomor 1 sebagai hasil pencarian.",
  ];

  const chooseAlgorithmSteps = [
    "Tentukan nomor: Pilih nomor urut hari ke-3.",
    "Siapkan daftar: Tulis daftar 'Lukis', 'Tarian', 'Musik', 'Teater'.",
    "Tulis rumus: Masukkan =CHOOSE(3;'Lukis';'Tarian';'Musik';'Teater') untuk pemilihan.",
    "Periksa hasil: Identifikasi 'Musik' sebagai kegiatan yang dipilih.",
  ];

  const handleNextStep = (section, currentStep, setStep, totalSteps) => {
    if (currentStep < totalSteps - 1) {
      setStep(currentStep + 1);
    } else {
      setStep(0);
    }
  };

  const handlePreviousStep = (section, currentStep, setStep) => {
    if (currentStep > 0) {
      setStep(currentStep - 1);
    } else {
      setStep(3);
    }
  };

  return (
    <Layout>
      <div className="border-l-4 border-[#255F38] pl-4">
        <div className="flex justify-center">
          <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg mx-2 w-full max-w-[calc(100%-1rem)] sm:max-w-4xl">
            CONTOH PENERAPAN FUNGSI REFERENCE
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="bg-green-50 p-4 sm:p-6 mx-2 rounded-lg shadow-md mb-2 w-full max-w-[calc(100%-1rem)] sm:max-w-4xl">
            <h3 className="text-green-800 text-base sm:text-lg font-semibold mb-3">
              Instruksi:
            </h3>
            <ul className="text-green-700 text-xs sm:text-sm md:text-base space-y-2">
              <li>1. Perhatikan tabel pada setiap studi kasus untuk memahami data.</li>
              <li>2. Isi kotak kosong berdasarkan tabel dan petunjuk yang diberikan.</li>
              <li>3. Klik di luar kotak atau tekan Enter untuk memeriksa jawaban.</li>
              <li>4. Kotak akan berubah hijau jika benar, merah jika salah, atau abu-abu jika kosong.</li>
              <li>5. Gunakan tombol "Langkah Selanjutnya" atau "Langkah Sebelumnya" untuk mempelajari algoritma.</li>
            </ul>
          </div>
        </div>

        {/* Studi Kasus 1: INDEX */}
        <h2 className="text-base sm:text-lg md:text-xl font-bold mt-10 mb-4 px-2 sm:px-4 text-gray-800">
          Studi Kasus 1: INDEX
        </h2>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base text-justify leading-relaxed px-2 sm:px-4">
          Seorang siswa bertugas mengelola data perpustakaan sekolah. Daftar buku mencakup kode unik, judul, dan stok. Tugasnya adalah mencari jumlah stok buku dengan kode <span className="font-semibold">B001</span> menggunakan fungsi <span className="font-semibold">INDEX</span>.
        </p>
        <div className="flex flex-col items-center mt-2">
          <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">Tabel 5. Daftar Buku Perpustakaan</p>
          <div className="w-full overflow-x-auto flex justify-center">
            <table className="border-collapse border border-green-800 w-full sm:w-3/4 md:w-2/3 text-center text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">No</th>
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Kode Buku</th>
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Judul Buku</th>
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Stok</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [1, "B001", "Sejarah Indonesia", 10],
                  [2, "B002", "Matematika Dasar", 15],
                  [3, "B003", "Bahasa Inggris", 8],
                  [4, "B004", "Fisika Modern", 12],
                  [5, "B005", "Geografi Dunia", 7],
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                    {row.map((cell, i) => (
                      <td key={i} className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CT untuk INDEX */}
        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-12 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <Lightbulb className="mr-1 sm:mr-2 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" /> Dekomposisi
          </div>
          <ul className="text-gray-700 list-disc pl-5 sm:pl-6 ml-5 sm:ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>Tentukan tujuan pencarian: Identifikasi kode buku yang akan dicari.</li>
            <li>Kode buku yang dicari adalah "
              <input
                type="text"
                value={inputs.index.dekomposisi[0]}
                onChange={(e) => handleInputChange("index", "dekomposisi", 0, e.target.value)}
                onBlur={(e) => handleInputChange("index", "dekomposisi", 0, e.target.value)}
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.index.dekomposisi[0].toLowerCase() === "b001" && inputs.index.dekomposisi[0]
                    ? "border-green-500"
                    : inputs.index.dekomposisi[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ".
            </li>
            <li>Pilih tabel: Gunakan daftar buku yang tersedia.</li>
          </ul>
        </div>

        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-10 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <BarChart className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" /> Pengenalan Pola
          </div>
          <ul className="text-gray-700 list-disc pl-5 sm:pl-6 ml-5 sm:ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>Identifikasi pola: Setiap baris mewakili satu buku dengan detail lengkap.</li>
            <li>Tentukan posisi: Stok terletak pada kolom ke-"
              <input
                type="text"
                value={inputs.index.pengenalanPola[0]}
                onChange={(e) => handleInputChange("index", "pengenalanPola", 0, e.target.value)}
                onBlur={(e) => handleInputChange("index", "pengenalanPola", 0, e.target.value)}
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.index.pengenalanPola[0].toLowerCase() === "4" && inputs.index.pengenalanPola[0]
                    ? "border-green-500"
                    : inputs.index.pengenalanPola[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ", dan baris ke-"
              <input
                type="text"
                value={inputs.index.pengenalanPola[1]}
                onChange={(e) => handleInputChange("index", "pengenalanPola", 1, e.target.value)}
                onBlur={(e) => handleInputChange("index", "pengenalanPola", 1, e.target.value)}
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.index.pengenalanPola[1].toLowerCase() === "1" && inputs.index.pengenalanPola[1]
                    ? "border-green-500"
                    : inputs.index.pengenalanPola[1]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ".
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-10 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <Filter className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" /> Abstraksi
          </div>
          <ul className="text-gray-700 list-disc pl-5 sm:pl-6 ml-5 sm:ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>Pilih data penting: Fokus hanya pada informasi stok buku.</li>
            <li>Tentukan fungsi: Gunakan fungsi "
              <input
                type="text"
                value={inputs.index.abstraksi[0]}
                onChange={(e) => handleInputChange("index", "abstraksi", 0, e.target.value)}
                onBlur={(e) => handleInputChange("index", "abstraksi", 0, e.target.value)}
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.index.abstraksi[0].toLowerCase() === "index" && inputs.index.abstraksi[0]
                    ? "border-green-500"
                    : inputs.index.abstraksi[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ".
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-10 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <Code className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" /> Algoritma
          </div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base px-2 sm:px-4 mt-2">
            Klik tombol di bawah untuk mempelajari langkah-langkah penggunaan fungsi INDEX.
          </p>
          <ul className="text-gray-700 list-disc pl-5 sm:pl-6 ml-5 sm:ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>
              <span className="font-semibold">Langkah {indexStep + 1} dari {indexAlgorithmSteps.length}</span>
              <br />
              {indexAlgorithmSteps[indexStep]}
            </li>
          </ul>
          <div className="flex justify-center mt-4 space-x-2 sm:space-x-4">
            <button
              onClick={() => handlePreviousStep("index", indexStep, setIndexStep)}
              className="bg-gray-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base cursor-pointer"
            >
              Langkah Sebelumnya
            </button>
            <button
              onClick={() => handleNextStep("index", indexStep, setIndexStep, indexAlgorithmSteps.length)}
              className="bg-green-800 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-green-700 transition duration-300 text-xs sm:text-sm md:text-base cursor-pointer"
            >
              {indexStep < indexAlgorithmSteps.length - 1 ? "Langkah Selanjutnya" : "Ulangi"}
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <iframe
              width="80%"
              height="400"
              style={{ border: "1px solid #e7e7e7" }}
              frameBorder="0"
              scrolling="no"
              src="https://sheet.zohopublic.com/sheet/published/cbhuve6b9eaad45264a6b9414a2877d494949?mode=embed"
            ></iframe>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-10 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <CheckCircle className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" /> Kesimpulan & Analisis
          </div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-6 px-2 sm:px-4">
            Fungsi INDEX memungkinkan pengambilan data dari posisi tertentu dalam tabel berdasarkan baris dan kolom yang sudah diketahui.
          </p>
          <p className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base px-2 sm:px-4">
            Analisis:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base mt-4 space-y-2 px-2 sm:px-4">
            <li>Ideal untuk mengakses data spesifik tanpa perlu scrolling manual.</li>
            <li>Efektif pada tabel dengan banyak baris dan kolom terstruktur.</li>
          </ul>
        </div>

        {/* Studi Kasus 2: MATCH */}
        <h2 className="text-base sm:text-lg md:text-xl font-bold mt-12 mb-4 px-2 sm:px-4 text-gray-800">
          Studi Kasus 2: MATCH
        </h2>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base text-justify leading-relaxed px-2 sm:px-4">
          Seorang siswa bertugas sebagai panitia turnamen olahraga sekolah. Daftar peserta mencakup kode identitas acak, nama, dan cabang olahraga. Tugasnya adalah menentukan posisi peserta dengan kode identitas <span className="font-semibold">4821</span> menggunakan fungsi <span className="font-semibold">MATCH</span>.
        </p>
        <div className="flex flex-col items-center mt-2">
          <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">Tabel 6. Daftar Peserta Turnamen</p>
          <div className="w-full overflow-x-auto flex justify-center">
            <table className="border-collapse border border-green-800 w-full sm:w-3/4 md:w-2/3 text-center text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Kode Identitas</th>
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Nama Peserta</th>
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Cabang Olahraga</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["4821", "Andi", "Bola Basket"],
                  ["7392", "Budi", "Renang"],
                  ["1509", "Citra", "Atletik"],
                  ["9273", "Dedi", "Tenis Meja"],
                  ["3648", "Eka", "Sepak Bola"],
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                    {row.map((cell, i) => (
                      <td key={i} className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CT untuk MATCH */}
        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-12 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <Lightbulb className="mr-1 sm:mr-2 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" /> Dekomposisi
          </div>
          <ul className="text-gray-700 list-disc pl-5 sm:pl-6 ml-5 sm:ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>Tentukan tujuan pencarian: Identifikasi kode identitas yang akan dicari.</li>
            <li>Kode identitas yang dicari adalah "
              <input
                type="text"
                value={inputs.match.dekomposisi[0]}
                onChange={(e) => handleInputChange("match", "dekomposisi", 0, e.target.value)}
                onBlur={(e) => handleInputChange("match", "dekomposisi", 0, e.target.value)}
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.match.dekomposisi[0].toLowerCase() === "4821" && inputs.match.dekomposisi[0]
                    ? "border-green-500"
                    : inputs.match.dekomposisi[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ".
            </li>
            <li>Pilih daftar: Gunakan kolom kode identitas.</li>
          </ul>
        </div>

        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-10 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <BarChart className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" /> Pengenalan Pola
          </div>
          <ul className="text-gray-700 list-disc pl-5 sm:pl-6 ml-5 sm:ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>Identifikasi pola: Setiap baris mewakili satu peserta dengan kode unik.</li>
            <li>Tentukan kolom: Kode identitas terdapat pada kolom "
              <input
                type="text"
                value={inputs.match.pengenalanPola[0]}
                onChange={(e) => handleInputChange("match", "pengenalanPola", 0, e.target.value)}
                onBlur={(e) => handleInputChange("match", "pengenalanPola", 0, e.target.value)}
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.match.pengenalanPola[0] && inputs.match.pengenalanPola[0].toLowerCase() === "identitas"
                    ? "border-green-500"
                    : inputs.match.pengenalanPola[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ".
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-10 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <Filter className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" /> Abstraksi
          </div>
          <ul className="text-gray-700 list-disc pl-5 sm:pl-6 ml-5 sm:ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>Pilih data penting: Fokus hanya pada posisi kode identitas.</li>
            <li>Tentukan fungsi: Gunakan fungsi "
              <input
                type="text"
                value={inputs.match.abstraksi[0]}
                onChange={(e) => handleInputChange("match", "abstraksi", 0, e.target.value)}
                onBlur={(e) => handleInputChange("match", "abstraksi", 0, e.target.value)}
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.match.abstraksi[0].toLowerCase() === "match" && inputs.match.abstraksi[0]
                    ? "border-green-500"
                    : inputs.match.abstraksi[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ".
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-10 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <Code className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" /> Algoritma
          </div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base px-2 sm:px-4 mt-2">
            Klik tombol di bawah untuk mempelajari langkah-langkah penggunaan fungsi MATCH.
          </p>
          <ul className="text-gray-700 list-disc pl-5 sm:pl-6 ml-5 sm:ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>
              <span className="font-semibold">Langkah {matchStep + 1} dari {matchAlgorithmSteps.length}</span>
              <br />
              {matchAlgorithmSteps[matchStep]}
            </li>
          </ul>
          <div className="flex justify-center mt-4 space-x-2 sm:space-x-4">
            <button
              onClick={() => handlePreviousStep("match", matchStep, setMatchStep)}
              className="bg-gray-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base cursor-pointer"
            >
              Langkah Sebelumnya
            </button>
            <button
              onClick={() => handleNextStep("match", matchStep, setMatchStep, matchAlgorithmSteps.length)}
              className="bg-green-800 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-green-700 transition duration-300 text-xs sm:text-sm md:text-base cursor-pointer"
            >
              {matchStep < matchAlgorithmSteps.length - 1 ? "Langkah Selanjutnya" : "Ulangi"}
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <iframe
              width="80%"
              height="400"
              style={{ border: "1px solid #e7e7e7" }}
              frameBorder="0"
              scrolling="no"
              src="https://sheet.zohopublic.com/sheet/published/u4xoa5aec0a4f21f94d7bba59976b939227fe?mode=embed"
            ></iframe>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-10 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <CheckCircle className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" /> Kesimpulan & Analisis
          </div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-6 px-2 sm:px-4">
            Fungsi MATCH efektif untuk menemukan posisi data dalam daftar berdasarkan nilai yang ditentukan, seperti kode identitas acak.
          </p>
          <p className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base px-2 sm:px-4">
            Analisis:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base mt-4 space-y-2 px-2 sm:px-4">
            <li>Mengembalikan nomor posisi relatif dalam range yang ditentukan.</li>
            <li>Berguna untuk mengidentifikasi urutan data unik tanpa scrolling manual.</li>
            <li>Dapat dipadukan dengan INDEX untuk aplikasi pencarian yang lebih kompleks.</li>
          </ul>
        </div>

        {/* Studi Kasus 3: CHOOSE */}
        <h2 className="text-base sm:text-lg md:text-xl font-bold mt-12 mb-4 px-2 sm:px-4 text-gray-800">
          Studi Kasus 3: CHOOSE
        </h2>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base text-justify leading-relaxed px-2 sm:px-4">
          Seorang siswa bertugas mengelola jadwal kegiatan seni di sekolah. Daftar kegiatan mencakup nomor hari dan jenis kegiatan seni. Tugasnya adalah menentukan kegiatan pada hari ke-3 menggunakan fungsi <span className="font-semibold">CHOOSE</span>.
        </p>
        <div className="flex flex-col items-center mt-2">
          <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">Tabel 7. Jadwal Kegiatan Seni</p>
          <div className="w-full overflow-x-auto flex justify-center">
            <table className="border-collapse border border-green-800 w-full sm:w-3/4 md:w-2/3 text-center text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Nomor Hari</th>
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Kegiatan Seni</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [1, "Lukis"],
                  [2, "Tarian"],
                  [3, "Musik"],
                  [4, "Teater"],
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                    {row.map((cell, i) => (
                      <td key={i} className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CT untuk CHOOSE */}
        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-12 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <Lightbulb className="mr-1 sm:mr-2 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" /> Dekomposisi
          </div>
          <ul className="text-gray-700 list-disc pl-5 sm:pl-6 ml-5 sm:ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>Tentukan tujuan pencarian: Identifikasi nomor hari yang akan diperiksa.</li>
            <li>Nomor hari yang dicari adalah "
              <input
                type="text"
                value={inputs.choose.dekomposisi[0]}
                onChange={(e) => handleInputChange("choose", "dekomposisi", 0, e.target.value)}
                onBlur={(e) => handleInputChange("choose", "dekomposisi", 0, e.target.value)}
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.choose.dekomposisi[0].toLowerCase() === "3" && inputs.choose.dekomposisi[0]
                    ? "border-green-500"
                    : inputs.choose.dekomposisi[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ".
            </li>
            <li>Pilih daftar: Gunakan jadwal kegiatan seni.</li>
          </ul>
        </div>

        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-10 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <BarChart className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" /> Pengenalan Pola
          </div>
          <ul className="text-gray-700 list-disc pl-5 sm:pl-6 ml-5 sm:ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>Identifikasi pola: Nomor hari menentukan jenis kegiatan yang berbeda.</li>
            <li>Tentukan kolom: Hari ke-3 sesuai dengan kolom "
              <input
                type="text"
                value={inputs.choose.pengenalanPola[0]}
                onChange={(e) => handleInputChange("choose", "pengenalanPola", 0, e.target.value)}
                onBlur={(e) => handleInputChange("choose", "pengenalanPola", 0, e.target.value)}
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.choose.pengenalanPola[0].toLowerCase() === "jenis kegiatan" && inputs.choose.pengenalanPola[0]
                    ? "border-green-500"
                    : inputs.choose.pengenalanPola[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ".
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-10 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <Filter className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" /> Abstraksi
          </div>
          <ul className="text-gray-700 list-disc pl-5 sm:pl-6 ml-5 sm:ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>Pilih data penting: Fokus hanya pada kegiatan hari yang dipilih.</li>
            <li>Tentukan fungsi: Gunakan fungsi "
              <input
                type="text"
                value={inputs.choose.abstraksi[0]}
                onChange={(e) => handleInputChange("choose", "abstraksi", 0, e.target.value)}
                onBlur={(e) => handleInputChange("choose", "abstraksi", 0, e.target.value)}
                className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                  inputs.choose.abstraksi[0].toLowerCase() === "choose" && inputs.choose.abstraksi[0]
                    ? "border-green-500"
                    : inputs.choose.abstraksi[0]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Isi jawaban"
              />
              ".
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-10 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <Code className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" /> Algoritma
          </div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base px-2 sm:px-4 mt-2">
            Klik tombol di bawah untuk mempelajari langkah-langkah penggunaan fungsi CHOOSE.
          </p>
          <ul className="text-gray-700 list-disc pl-5 sm:pl-6 ml-5 sm:ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
            <li>
              <span className="font-semibold">Langkah {chooseStep + 1} dari {chooseAlgorithmSteps.length}</span>
              <br />
              {chooseAlgorithmSteps[chooseStep]}
            </li>
          </ul>
          <div className="flex justify-center mt-4 space-x-2 sm:space-x-4">
            <button
              onClick={() => handlePreviousStep("choose", chooseStep, setChooseStep)}
              className="bg-gray-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base cursor-pointer"
            >
              Langkah Sebelumnya
            </button>
            <button
              onClick={() => handleNextStep("choose", chooseStep, setChooseStep, chooseAlgorithmSteps.length)}
              className="bg-green-800 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-green-700 transition duration-300 text-xs sm:text-sm md:text-base cursor-pointer"
            >
              {chooseStep < chooseAlgorithmSteps.length - 1 ? "Langkah Selanjutnya" : "Ulangi"}
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <iframe
              width="80%"
              height="400"
              style={{ border: "1px solid #e7e7e7" }}
              frameBorder="0"
              scrolling="no"
              src="https://sheet.zohopublic.com/sheet/published/u4xoabea134672a124461a1ae7e5696634ec3?mode=embed"
            ></iframe>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 border-gray-300 space-y-4 mt-10 relative mx-2 sm:mx-4">
          <div className="absolute -top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-t-lg text-sm sm:text-base md:text-lg font-bold flex items-center shadow-lg">
            <CheckCircle className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" /> Kesimpulan & Analisis
          </div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-6 px-2 sm:px-4">
            Fungsi CHOOSE memungkinkan pemilihan nilai dari daftar berdasarkan indeks tertentu.
          </p>
          <p className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base px-2 sm:px-4">
            Analisis:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base mt-4 space-y-2 px-2 sm:px-4">
            <li>Sesuai untuk memilih dari daftar tetap berdasarkan nomor urut.</li>
            <li>Efektif untuk jadwal atau opsi berurutan lainnya.</li>
          </ul>
        </div>

        <div className="flex flex-row justify-between mt-8 px-2 sm:px-4">
          <button
            onClick={() => window.location.href = "/pencarian-lookup"}
            className="bg-gray-500 text-white px-2 sm:px-3 md:px-5 py-1 sm:py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-xs sm:text-sm md:text-base shadow-md cursor-pointer"
          >
            ← Sebelumnya
          </button>
          <button
            onClick={() => window.location.href = "/aktivitas-lookup"}
            className="bg-green-800 text-white px-2 sm:px-3 md:px-5 py-1 sm:py-2 rounded-lg hover:bg-green-700 transition duration-300 text-xs sm:text-sm md:text-base shadow-md cursor-pointer"
          >
            Selanjutnya →
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ContohReference;
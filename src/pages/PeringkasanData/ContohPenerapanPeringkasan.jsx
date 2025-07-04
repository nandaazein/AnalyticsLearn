import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";
import { useState } from "react";

const ContohPeringkasan = () => {
  // State untuk input siswa
  const [inputs, setInputs] = useState({
    sumif: {
      dekomposisi: [""],
      pengenalanPola: [""],
      abstraksi: ["", ""],
    },
    sumifs: {
      dekomposisi: ["", ""],
      pengenalanPola: [""],
      abstraksi: ["", ""],
    },
    countif: {
      dekomposisi: [""],
      pengenalanPola: [""],
      abstraksi: ["", ""],
    },
    countifs: {
      dekomposisi: ["", ""],
      pengenalanPola: [""],
      abstraksi: ["", ""],
    },
  });

  // Jawaban benar untuk validasi
  const correctAnswers = {
    sumif: {
      dekomposisi: ["Kebersihan"],
      pengenalanPola: ["10000"],
      abstraksi: ["Bulan", "SUMIF"],
    },
    sumifs: {
      dekomposisi: ["Alat Kebersihan", "Maret"],
      pengenalanPola: ["75000"],
      abstraksi: ["Jumlah", "SUMIFS"],
    },
    countif: {
      dekomposisi: ["Olahraga"],
      pengenalanPola: ["3"],
      abstraksi: ["Kelas", "COUNTIF"],
    },
    countifs: {
      dekomposisi: ["Perempuan", "8A"],
      pengenalanPola: ["2"],
      abstraksi: ["Partisipasi", "COUNTIFS"],
    },
  };

  // Handler untuk input siswa dengan normalisasi
  const handleInputChange = (section, category, index, value) => {
    // Normalisasi input: hapus spasi di awal/akhir dan pastikan string
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
  const [sumifStep, setSumifStep] = useState(0);
  const [sumifsStep, setSumifsStep] = useState(0);
  const [countifStep, setCountifStep] = useState(0);
  const [countifsStep, setCountifsStep] = useState(0);

  // Langkah-langkah algoritma
  const sumifAlgorithmSteps = [
    `Tentukan rentang data untuk kriteria: Pilih kolom "Kategori" (A2:A8).`,
    `Tentukan kriteria: "Kebersihan".`,
    `Tentukan rentang angka yang akan dijumlahkan: Pilih kolom "Jumlah" (C2:C8).`,
    `Tulis rumus: Di sel yang diinginkan, ketik =SUMIF(A2:A8;"Kebersihan";C2:C8).`,
    `Tekan Enter: Hasilnya adalah total iuran "Kebersihan" sebesar Rp10.200.`,
  ];

  const sumifsAlgorithmSteps = [
    `Tentukan rentang angka yang akan dijumlahkan: Pilih kolom "Jumlah" (C2:C8).`,
    `Tentukan rentang data pertama: Kolom 'Kategori' (A2:A8), kriteria: "Alat Kebersihan".`,
    `Tentukan rentang data kedua: Kolom 'Bulan' (B2:B8), kriteria: "Maret".`,
    `Tulis rumus: Di sel yang diinginkan, ketik =SUMIFS(C2:C8;A2:A8;"Alat Kebersihan";B2:B8;"Maret").`,
    `Tekan Enter: Hasilnya adalah total pengeluaran "Alat Kebersihan" di "Maret" sebesar Rp75.000.`,
  ];

  const countifAlgorithmSteps = [
    `Tentukan rentang data untuk kriteria: Pilih kolom "Jenis Kegiatan" (A2:A7).`,
    `Tentukan kriteria: 'Olahraga'.`,
    `Tulis rumus: Di sel yang diinginkan, ketik =COUNTIF(A2:A7;"Olahraga").`,
    `Tekan Enter: Hasilnya adalah jumlah kegiatan "Olahraga" sebanyak 3.`,
  ];

  const countifsAlgorithmSteps = [
    `Tentukan rentang data pertama: Kolom "Kelas" (B2:B7), kriteria: "8A".`,
    `Tentukan rentang data kedua: Kolom "Jenis Kelamin" (C2:C7), kriteria: "Perempuan".`,
    `Tentukan rentang data ketiga: Kolom "Partisipasi" (D2:D7), kriteria: "Ya".`,
    `Tulis rumus: Di sel yang diinginkan, ketik =COUNTIFS(B2:B7;"8A";C2:C7;"Perempuan";D2:D7;"Ya").`,
    `Tekan Enter: Hasilnya adalah jumlah siswa perempuan kelas 8A yang berpartisipasi sebanyak 2.`,
  ];

  // Handler untuk tombol langkah
  const handleNextStep = (section, currentStep, setStep, totalSteps) => {
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

  return (
    <Layout className="border border-gray-300">
<div className="border-4 border-[#255F38] p-4 rounded-lg">
        {/* Header judul */}
      <div className="flex justify-center">
        <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg mx-4 w-full max-w-[calc(100%-2rem)] border border-gray-300">
          CONTOH PENERAPAN PERINGKASAN DATA
        </div>
      </div>

      {/* Instruksi untuk Siswa */}
      <div className="flex justify-center mt-8">
        <div className="bg-green-50 p-4 sm:p-6 mx-2 rounded-lg shadow-md mb-2 w-full max-w-[calc(100%-1rem)] sm:max-w-4xl border border-gray-300">
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

      {/* Studi Kasus 1: SUMIF & SUMIFS */}
      <h2 className="text-lg md:text-xl font-bold mt-10 mb-4 px-4 text-gray-800 border border-gray-300">
        Studi Kasus 1: Menjumlahkan dengan SUMIF & SUMIFS
      </h2>
      <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4 border border-gray-300">
        Sebagai bendahara kelas, kamu mencatat iuran dan pengeluaran bulanan. Gunakan <span className="font-semibold">SUMIF</span> untuk menjumlahkan iuran berdasarkan kategori seperti "Kebersihan" di semua bulan. Gunakan <span className="font-semibold">SUMIFS</span> untuk menjumlahkan pengeluaran seperti "Alat Kebersihan" pada bulan tertentu, misalnya "Maret".
      </p>

      {/* Tabel 1: Data Iuran & Pengeluaran */}
      <div className="flex flex-col items-center mt-2 border border-gray-300">
        <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">Tabel 10. Data Iuran & Pengeluaran</p>
        <div className="w-full overflow-x-auto flex justify-center">
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Kategori</th>
                <th className="border border-green-600 px-4 py-2">Bulan</th>
                <th className="border border-green-600 px-4 py-2">Jumlah (Rp)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Kebersihan", "Januari", "Rp 5.000,00"],
                ["Kas", "Januari", "Rp 10.000,00"],
                ["Kebersihan", "Februari", "Rp 5.000,00"],
                ["Alat Kebersihan", "Januari", "Rp 30.000,00"],
                ["Alat Kebersihan", "Maret", "Rp 40.000,00"],
                ["Alat Kebersihan", "Maret", "Rp 35.000,00"],
                ["Dekorasi", "Maret", "Rp 25.000,00"],
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                  {row.map((cell, i) => (
                    <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4 mt-6 border border-gray-300">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* DEKOMPOSISI SUMIF */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> DEKOMPOSISI SUMIF
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Identifikasi data yang diringkas: Kriteria adalah "
            <input
              type="text"
              value={inputs.sumif.dekomposisi[0]}
              onChange={(e) => handleInputChange("sumif", "dekomposisi", 0, e.target.value)}
              onBlur={(e) => handleInputChange("sumif", "dekomposisi", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.sumif.dekomposisi[0].toLowerCase() === "kebersihan" && inputs.sumif.dekomposisi[0]
                  ? "border-green-500"
                  : inputs.sumif.dekomposisi[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " di kolom Kategori (A2:A8).
          </li>
          <li>Tentukan tujuan: Menjumlahkan iuran untuk kategori "Kebersihan" di semua bulan.</li>
          <li>Pilih fungsi: Gunakan SUMIF untuk menjumlahkan berdasarkan satu syarat.</li>
        </ul>
      </div>

      {/* PENGENALAN POLA SUMIF */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> PENGENALAN POLA SUMIF
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>Pola: Menjumlahkan iuran berulang untuk kategori "Kebersihan" di berbagai bulan.</li>
          <li>
            Total iuran "Kebersihan" adalah "
            <input
              type="text"
              value={inputs.sumif.pengenalanPola[0]}
              onChange={(e) => handleInputChange("sumif", "pengenalanPola", 0, e.target.value)}
              onBlur={(e) => handleInputChange("sumif", "pengenalanPola", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.sumif.pengenalanPola[0].trim() === correctAnswers.sumif.pengenalanPola[0] && inputs.sumif.pengenalanPola[0]
                  ? "border-green-500"
                  : inputs.sumif.pengenalanPola[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " rupiah.
          </li>
        </ul>
      </div>

      {/* ABSTRAKSI SUMIF */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ABSTRAKSI SUMIF
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Abaikan kolom "
            <input
              type="text"
              value={inputs.sumif.abstraksi[0]}
              onChange={(e) => handleInputChange("sumif", "abstraksi", 0, e.target.value)}
              onBlur={(e) => handleInputChange("sumif", "abstraksi", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.sumif.abstraksi[0].toLowerCase() === "bulan" && inputs.sumif.abstraksi[0]
                  ? "border-green-500"
                  : inputs.sumif.abstraksi[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            ", fokus pada kolom "Kategori" dan "Jumlah".
          </li>
          <li>
            Gunakan "
            <input
              type="text"
              value={inputs.sumif.abstraksi[1]}
              onChange={(e) => handleInputChange("sumif", "abstraksi", 1, e.target.value)}
              onBlur={(e) => handleInputChange("sumif", "abstraksi", 1, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.sumif.abstraksi[1].toLowerCase() === "sumif" && inputs.sumif.abstraksi[1]
                  ? "border-green-500"
                  : inputs.sumif.abstraksi[1]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " untuk menjumlahkan data berdasarkan satu syarat.
          </li>
        </ul>
      </div>

      {/* ALGORITMA SUMIF */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ALGORITMA SUMIF
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base px-4 mt-2">
          Klik tombol di bawah untuk melihat langkah-langkah menggunakan SUMIF satu per satu!
        </p>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            <span className="font-semibold">Langkah {sumifStep + 1} dari {sumifAlgorithmSteps.length}</span>
            <br />
            {sumifAlgorithmSteps[sumifStep]}
          </li>
        </ul>
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => handlePreviousStep(sumifStep, setSumifStep)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-sm sm:text-base cursor-pointer"
          >
            Langkah Sebelumnya
          </button>
          <button
            onClick={() =>
              handleNextStep("sumif", sumifStep, setSumifStep, sumifAlgorithmSteps.length)
            }
            className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base cursor-pointer"
          >
            {sumifStep < sumifAlgorithmSteps.length - 1 ? "Langkah Selanjutnya" : "Ulangi"}
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <iframe
            className="w-full sm:w-4/5 h-[300px] sm:h-[400px]"
            style={{ border: "1px solid #e7e7e7" }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/4yfvb13af0506b3624931b03051e9daf94597?mode=embed"
          ></iframe>
        </div>
      </div>

      {/* DEKOMPOSISI SUMIFS */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-12 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> DEKOMPOSISI SUMIFS
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Identifikasi data yang diringkas: Kriteria pertama adalah "
            <input
              type="text"
              value={inputs.sumifs.dekomposisi[0]}
              onChange={(e) => handleInputChange("sumifs", "dekomposisi", 0, e.target.value)}
              onBlur={(e) => handleInputChange("sumifs", "dekomposisi", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.sumifs.dekomposisi[0].toLowerCase() === "alat kebersihan" && inputs.sumifs.dekomposisi[0]
                  ? "border-green-500"
                  : inputs.sumifs.dekomposisi[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " di kolom Kategori (A2:A8).
          </li>
          <li>
            Identifikasi data yang diringkas: Kriteria kedua adalah "
            <input
              type="text"
              value={inputs.sumifs.dekomposisi[1]}
              onChange={(e) => handleInputChange("sumifs", "dekomposisi", 1, e.target.value)}
              onBlur={(e) => handleInputChange("sumifs", "dekomposisi", 1, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.sumifs.dekomposisi[1].toLowerCase() === "maret" && inputs.sumifs.dekomposisi[1]
                  ? "border-green-500"
                  : inputs.sumifs.dekomposisi[1]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " di kolom Bulan (B2:B8).
          </li>
          <li>Tentukan tujuan: Menjumlahkan pengeluaran "Alat Kebersihan" di bulan "Maret".</li>
          <li>Pilih fungsi: Gunakan SUMIFS untuk menjumlahkan berdasarkan beberapa syarat.</li>
        </ul>
      </div>

      {/* PENGENALAN POLA SUMIFS */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> PENGENALAN POLA SUMIFS
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>Pola: Menjumlahkan pengeluaran berulang untuk "Alat Kebersihan" di bulan "Maret".</li>
          <li>
            Total pengeluaran "Alat Kebersihan" di Maret adalah "
            <input
              type="text"
              value={inputs.sumifs.pengenalanPola[0]}
              onChange={(e) => handleInputChange("sumifs", "pengenalanPola", 0, e.target.value)}
              onBlur={(e) => handleInputChange("sumifs", "pengenalanPola", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.sumifs.pengenalanPola[0].trim() === correctAnswers.sumifs.pengenalanPola[0] && inputs.sumifs.pengenalanPola[0]
                  ? "border-green-500"
                  : inputs.sumifs.pengenalanPola[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " rupiah.
          </li>
        </ul>
      </div>

      {/* ABSTRAKSI SUMIFS */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ABSTRAKSI SUMIFS
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Fokus pada kolom "
            <input
              type="text"
              value={inputs.sumifs.abstraksi[0]}
              onChange={(e) => handleInputChange("sumifs", "abstraksi", 0, e.target.value)}
              onBlur={(e) => handleInputChange("sumifs", "abstraksi", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.sumifs.abstraksi[0].toLowerCase() === "jumlah" && inputs.sumifs.abstraksi[0]
                  ? "border-green-500"
                  : inputs.sumifs.abstraksi[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            ", "Kategori", dan "Bulan".
          </li>
          <li>
            Gunakan "
            <input
              type="text"
              value={inputs.sumifs.abstraksi[1]}
              onChange={(e) => handleInputChange("sumifs", "abstraksi", 1, e.target.value)}
              onBlur={(e) => handleInputChange("sumifs", "abstraksi", 1, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.sumifs.abstraksi[1].toLowerCase() === "sumifs" && inputs.sumifs.abstraksi[1]
                  ? "border-green-500"
                  : inputs.sumifs.abstraksi[1]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " untuk menjumlahkan data berdasarkan beberapa syarat.
          </li>
        </ul>
      </div>

      {/* ALGORITMA SUMIFS */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ALGORITMA SUMIFS
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base px-4 mt-2">
          Klik tombol di bawah untuk melihat langkah-langkah menggunakan SUMIFS satu per satu!
        </p>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            <span className="font-semibold">Langkah {sumifsStep + 1} dari {sumifsAlgorithmSteps.length}</span>
            <br />
            {sumifsAlgorithmSteps[sumifsStep]}
          </li>
        </ul>
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => handlePreviousStep(sumifsStep, setSumifsStep)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-sm sm:text-base cursor-pointer"
          >
            Langkah Sebelumnya
          </button>
          <button
            onClick={() =>
              handleNextStep("sumifs", sumifsStep, setSumifsStep, sumifsAlgorithmSteps.length)
            }
            className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base cursor-pointer"
          >
            {sumifsStep < sumifsAlgorithmSteps.length - 1 ? "Langkah Selanjutnya" : "Ulangi"}
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <iframe
            className="w-full sm:w-4/5 h-[300px] sm:h-[400px]"
            style={{ border: "1px solid #e7e7e7" }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/4yfvb13af0506b3624931b03051e9daf94597?mode=embed"
          ></iframe>
        </div>
      </div>

      {/* KESIMPULAN & ANALISIS SUMIF/SUMIFS */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> KESIMPULAN & ANALISIS
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base px-4 mt-6">
          Dengan SUMIF dan SUMIFS, bendahara kelas dapat meringkas iuran dan pengeluaran secara otomatis, lebih cepat, dan mengurangi kesalahan perhitungan manual.
        </p>
        <h4 className="text-gray-800 font-semibold px-4">Analisis</h4>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 text-xs sm:text-sm md:text-base">
          <li>Tanpa SUMIF/SUMIFS, perhitungan harus dilakukan manual, lebih lama, dan berisiko salah.</li>
          <li>Pastikan ejaan kriteria (misalnya, "Kebersihan") tepat untuk hasil akurat.</li>
          <li>Gunakan rentang data yang benar untuk menghindari error.</li>
        </ul>
      </div>

      {/* Studi Kasus 2: COUNTIF & COUNTIFS */}
      <h2 className="text-lg md:text-xl font-bold mt-10 mb-4 px-4 text-gray-800 border border-gray-300">
        Studi Kasus 2: Menghitung dengan COUNTIF & COUNTIFS
      </h2>
      <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4 border border-gray-300">
        Seorang guru mencatat data partisipasi siswa dalam kegiatan ekstrakurikuler. Gunakan fungsi <span className="font-semibold">COUNTIF</span> untuk menghitung jumlah kegiatan dengan jenis "Olahraga". Gunakan fungsi <span className="font-semibold">COUNTIFS</span> untuk menghitung jumlah siswa perempuan dari kelas 8A yang berpartisipasi dalam kegiatan ekstrakurikuler.
      </p>

      {/* Tabel 2: Data Partisipasi Ekstrakurikuler */}
      <div className="flex flex-col items-center mt-2 border border-gray-300">
        <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">Tabel 11. Data Partisipasi Ekstrakurikuler</p>
        <div className="w-full overflow-x-auto flex justify-center">
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Jenis Kegiatan</th>
                <th className="border border-green-600 px-4 py-2">Kelas</th>
                <th className="border border-green-600 px-4 py-2">Jenis Kelamin</th>
                <th className="border border-green-600 px-4 py-2">Partisipasi</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Olahraga", "8A", "Perempuan", "Ya"],
                ["Seni", "8A", "Laki-laki", "Ya"],
                ["Olahraga", "8A", "Perempuan", "Ya"],
                ["Klub Sains", "8A", "Laki-laki", "Tidak"],
                ["Olahraga", "8B", "Perempuan", "Ya"],
                ["Seni", "8A", "Perempuan", "Tidak"],
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                  {row.map((cell, i) => (
                    <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4 mt-6 border border-gray-300">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* DEKOMPOSISI COUNTIF */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-12 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> DEKOMPOSISI COUNTIF
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Identifikasi data yang diringkas: Kriteria adalah "
            <input
              type="text"
              value={inputs.countif.dekomposisi[0]}
              onChange={(e) => handleInputChange("countif", "dekomposisi", 0, e.target.value)}
              onBlur={(e) => handleInputChange("countif", "dekomposisi", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.countif.dekomposisi[0].toLowerCase() === "olahraga" && inputs.countif.dekomposisi[0]
                  ? "border-green-500"
                  : inputs.countif.dekomposisi[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " di kolom Jenis Kegiatan (A2:A7).
          </li>
          <li>Tentukan tujuan: Menghitung jumlah kegiatan dengan jenis "Olahraga".</li>
          <li>Pilih fungsi: Gunakan COUNTIF untuk menghitung berdasarkan satu syarat.</li>
        </ul>
      </div>

      {/* PENGENALAN POLA COUNTIF */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> PENGENALAN POLA COUNTIF
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>Pola: Menghitung frekuensi kegiatan berdasarkan jenis "Olahraga".</li>
          <li>
            Jumlah kegiatan "Olahraga" adalah "
            <input
              type="text"
              value={inputs.countif.pengenalanPola[0]}
              onChange={(e) => handleInputChange("countif", "pengenalanPola", 0, e.target.value)}
              onBlur={(e) => handleInputChange("countif", "pengenalanPola", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.countif.pengenalanPola[0].trim() === correctAnswers.countif.pengenalanPola[0] && inputs.countif.pengenalanPola[0]
                  ? "border-green-500"
                  : inputs.countif.pengenalanPola[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            ".
          </li>
        </ul>
      </div>

      {/* ABSTRAKSI COUNTIF */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ABSTRAKSI COUNTIF
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Abaikan kolom "
            <input
              type="text"
              value={inputs.countif.abstraksi[0]}
              onChange={(e) => handleInputChange("countif", "abstraksi", 0, e.target.value)}
              onBlur={(e) => handleInputChange("countif", "abstraksi", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.countif.abstraksi[0].toLowerCase() === "kelas" && inputs.countif.abstraksi[0]
                  ? "border-green-500"
                  : inputs.countif.abstraksi[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            ", fokus pada kolom "Jenis Kegiatan".
          </li>
          <li>
            Gunakan "
            <input
              type="text"
              value={inputs.countif.abstraksi[1]}
              onChange={(e) => handleInputChange("countif", "abstraksi", 1, e.target.value)}
              onBlur={(e) => handleInputChange("countif", "abstraksi", 1, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.countif.abstraksi[1].toLowerCase() === "countif" && inputs.countif.abstraksi[1]
                  ? "border-green-500"
                  : inputs.countif.abstraksi[1]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " untuk menghitung data berdasarkan satu syarat.
          </li>
        </ul>
      </div>

      {/* ALGORITMA COUNTIF */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ALGORITMA COUNTIF
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base px-4 mt-2">
          Klik tombol di bawah untuk melihat langkah-langkah menggunakan COUNTIF satu per satu!
        </p>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            <span className="font-semibold">Langkah {countifStep + 1} dari {countifAlgorithmSteps.length}</span>
            <br />
            {countifAlgorithmSteps[countifStep]}
          </li>
        </ul>
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => handlePreviousStep(countifStep, setCountifStep)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-sm sm:text-base cursor-pointer"
          >
            Langkah Sebelumnya
          </button>
          <button
            onClick={() =>
              handleNextStep("countif", countifStep, setCountifStep, countifAlgorithmSteps.length)
            }
            className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base cursor-pointer"
          >
            {countifStep < countifAlgorithmSteps.length - 1 ? "Langkah Selanjutnya" : "Ulangi"}
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <iframe
            className="w-full sm:w-4/5 h-[300px] sm:h-[400px]"
            style={{ border: "1px solid #e7e7e7" }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/4yfvb546e313018d74fba81dbe3f53d0a88e4?mode=embed"
          ></iframe>
        </div>
      </div>

      {/* DEKOMPOSISI COUNTIFS */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-12 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> DEKOMPOSISI COUNTIFS
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Identifikasi data yang diringkas: Kriteria pertama adalah "
            <input
              type="text"
              value={inputs.countifs.dekomposisi[0]}
              onChange={(e) => handleInputChange("countifs", "dekomposisi", 0, e.target.value)}
              onBlur={(e) => handleInputChange("countifs", "dekomposisi", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.countifs.dekomposisi[0].toLowerCase() === "perempuan" && inputs.countifs.dekomposisi[0]
                  ? "border-green-500"
                  : inputs.countifs.dekomposisi[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " di kolom Jenis Kelamin (C2:C7).
          </li>
          <li>
            Identifikasi data yang diringkas: Kriteria kedua adalah "
            <input
              type="text"
              value={inputs.countifs.dekomposisi[1]}
              onChange={(e) => handleInputChange("countifs", "dekomposisi", 1, e.target.value)}
              onBlur={(e) => handleInputChange("countifs", "dekomposisi", 1, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.countifs.dekomposisi[1].toLowerCase() === "8a" && inputs.countifs.dekomposisi[1]
                  ? "border-green-500"
                  : inputs.countifs.dekomposisi[1]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " di kolom Kelas (B2:B7).
          </li>
          <li>Tentukan tujuan: Menghitung jumlah siswa perempuan kelas 8A yang berpartisipasi.</li>
          <li>Pilih fungsi: Gunakan COUNTIFS untuk menghitung berdasarkan beberapa syarat.</li>
        </ul>
      </div>

      {/* PENGENALAN POLA COUNTIFS */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> PENGENALAN POLA COUNTIFS
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>Pola: Menghitung jumlah siswa berdasarkan kelas, jenis kelamin, dan status partisipasi.</li>
          <li>
            Jumlah siswa perempuan kelas 8A yang berpartisipasi adalah "
            <input
              type="text"
              value={inputs.countifs.pengenalanPola[0]}
              onChange={(e) => handleInputChange("countifs", "pengenalanPola", 0, e.target.value)}
              onBlur={(e) => handleInputChange("countifs", "pengenalanPola", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.countifs.pengenalanPola[0].trim() === correctAnswers.countifs.pengenalanPola[0] && inputs.countifs.pengenalanPola[0]
                  ? "border-green-500"
                  : inputs.countifs.pengenalanPola[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            ".
          </li>
        </ul>
      </div>

      {/* ABSTRAKSI COUNTIFS */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ABSTRAKSI COUNTIFS
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Fokus pada kolom "
            <input
              type="text"
              value={inputs.countifs.abstraksi[0]}
              onChange={(e) => handleInputChange("countifs", "abstraksi", 0, e.target.value)}
              onBlur={(e) => handleInputChange("countifs", "abstraksi", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.countifs.abstraksi[0].toLowerCase() === "partisipasi" && inputs.countifs.abstraksi[0]
                  ? "border-green-500"
                  : inputs.countifs.abstraksi[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            ", "Kelas", dan "Jenis Kelamin".
          </li>
          <li>
            Gunakan "
            <input
              type="text"
              value={inputs.countifs.abstraksi[1]}
              onChange={(e) => handleInputChange("countifs", "abstraksi", 1, e.target.value)}
              onBlur={(e) => handleInputChange("countifs", "abstraksi", 1, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.countifs.abstraksi[1].toLowerCase() === "countifs" && inputs.countifs.abstraksi[1]
                  ? "border-green-500"
                  : inputs.countifs.abstraksi[1]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " untuk menghitung data berdasarkan beberapa syarat.
          </li>
        </ul>
      </div>

      {/* ALGORITMA COUNTIFS */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ALGORITMA COUNTIFS
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base px-4 mt-2">
          Klik tombol di bawah untuk melihat langkah-langkah menggunakan COUNTIFS satu per satu!
        </p>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            <span className="font-semibold">Langkah {countifsStep + 1} dari {countifsAlgorithmSteps.length}</span>
            <br />
            {countifsAlgorithmSteps[countifsStep]}
          </li>
        </ul>
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => handlePreviousStep(countifsStep, setCountifsStep)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300 text-sm sm:text-base cursor-pointer"
          >
            Langkah Sebelumnya
          </button>
          <button
            onClick={() =>
              handleNextStep("countifs", countifsStep, setCountifsStep, countifsAlgorithmSteps.length)
            }
            className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base cursor-pointer"
          >
            {countifsStep < countifsAlgorithmSteps.length - 1 ? "Langkah Selanjutnya" : "Ulangi"}
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <iframe
            className="w-full sm:w-4/5 h-[300px] sm:h-[400px]"
            style={{ border: "1px solid #e7e7e7" }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/4yfvb546e313018d74fba81dbe3f53d0a88e4?mode=embed"
          ></iframe>
        </div>
      </div>

      {/* KESIMPULAN & ANALISIS COUNTIF/COUNTIFS */}
      <div className="bg-white p-5 border-gray-200 space-y-4 mt-10 relative border border-gray-300">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> KESIMPULAN & ANALISIS
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base px-4 mt-6">
          Dengan COUNTIF dan COUNTIFS, guru dapat menghitung data partisipasi siswa secara otomatis, lebih cepat, dan mengurangi kesalahan perhitungan manual.
        </p>
        <h4 className="text-gray-800 font-semibold px-4">Analisis</h4>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 text-xs sm:text-sm md:text-base">
          <li>Tanpa COUNTIF/COUNTIFS, penghitungan harus dilakukan manual, lebih lama, dan berisiko salah.</li>
          <li>Pastikan ejaan kriteria (misalnya, "Olahraga") tepat untuk hasil akurat.</li>
          <li>Gunakan rentang data yang benar untuk menghindari error.</li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex flex-row justify-between mt-8 px-4 border border-gray-300">
        <a
          href="/peringkasan-data"
          className="bg-gray-500 text-white px-3 sm:px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-sm sm:text-base shadow-md cursor-pointer"
        >
          ← Sebelumnya
        </a>
        <a
          href="/aktivitas-peringkasan"
          className="bg-green-800 text-white px-3 sm:px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base shadow-md cursor-pointer"
        >
          Selanjutnya →
        </a>
      </div>
      </div>
      
    </Layout>
  );
};

export default ContohPeringkasan;
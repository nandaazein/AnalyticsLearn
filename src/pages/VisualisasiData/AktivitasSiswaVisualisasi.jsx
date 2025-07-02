
import { useState } from "react";
import Layout from "../../components/Layout";

// nomor 1
import satuLine from "../../assets/Visualisasi/satu-line.png";
import satuBar from "../../assets/Visualisasi/satu-bar.png";
import satuPie from "../../assets/Visualisasi/satu-pie.png";

// nomor 2
import duaPie from "../../assets/Visualisasi/dua-pie.png";
import duaBar from "../../assets/Visualisasi/dua-bar.png";
import duaLine from "../../assets/Visualisasi/dua-line.png";

// nomor 3
import tigaPie from "../../assets/Visualisasi/tiga-pie.png";
import tigaBar from "../../assets/Visualisasi/tiga-bar.png";
import tigaLine from "../../assets/Visualisasi/tiga-line.png";

// nomor 4
import empatPie from "../../assets/Visualisasi/empat-pie.png";
import empatKolom from "../../assets/Visualisasi/empat-kolom.png";
import empatLine from "../../assets/Visualisasi/empat-line.png";

const AktivitasVisualisasiGambar = () => {
  const [selected, setSelected] = useState("");
  const [feedback1, setFeedback1] = useState("");
  const [feedback2, setFeedback2] = useState("");
  const [feedback3, setFeedback3] = useState("");
  const [feedback4, setFeedback4] = useState("");
  const [jawaban2, setJawaban2] = useState("");
  const [jawaban3, setJawaban3] = useState("");
  const [jawaban4, setJawaban4] = useState("");
  const [jawaban5, setJawaban5] = useState([]); // Array untuk beberapa jawaban di Soal 5
  const [isTouched1, setIsTouched1] = useState(false);
  const [isTouched2, setIsTouched2] = useState(false);
  const [isTouched3, setIsTouched3] = useState(false);
  const [isTouched4, setIsTouched4] = useState(false);
  const [isTouched5, setIsTouched5] = useState(false);

  const isCorrect = (input, correct) => input.trim().toLowerCase() === correct.toLowerCase();

  const handlePeriksa1 = () => {
    setIsTouched1(true);
    if (isCorrect(selected, "Line Chart")) {
      setFeedback1("Benar! Grafik garis tepat untuk data waktu.");
    } else {
      setFeedback1("Salah. Pikirkan grafik yang cocok untuk tren waktu.");
    }
  };

  const handlePeriksa2 = () => {
    setIsTouched2(true);
    if (isCorrect(jawaban2, "Pie Chart")) {
      setFeedback2("Benar! Pie Chart ideal untuk persentase.");
    } else {
      setFeedback2("Salah. Pertimbangkan grafik untuk proporsi data.");
    }
  };

  const handlePeriksa3 = () => {
    setIsTouched3(true);
    if (isCorrect(jawaban3, "Line Chart")) {
      setFeedback3("Benar! Grafik garis pas untuk tren waktu.");
    } else {
      setFeedback3("Salah. Cek grafik yang menunjukkan perubahan waktu.");
    }
  };

  const handlePeriksa4 = () => {
    setIsTouched4(true);
    if (isCorrect(jawaban4, "Bar Chart")) {
      setFeedback4("Benar! Bar Chart cocok untuk perbandingan.");
    } else {
      setFeedback4("Salah. Pilih grafik untuk membandingkan kategori.");
    }
  };

  const handlePeriksa5 = () => {
    setIsTouched5(true);
  };

  return (
    <Layout>
      <div className="border-l-4 border-[#255F38] pl-4">
        <div className="p-2 sm:p-4 bg-[#255F38] mb-2 sm:mb-4 text-white font-bold text-sm sm:text-lg text-center rounded-lg shadow-lg">
          AKTIVITAS VISUALISASI DATA
        </div>

        <div className="p-2 sm:p-6 bg-white border border-gray-300">
          {/* Petunjuk Umum */}
          <section className="p-2 sm:p-4 bg-green-100 rounded shadow-md mb-2 sm:mb-6">
            <h3 className="text-sm sm:text-lg font-semibold text-gray-700 mb-2">Petunjuk Umum</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 text-xs sm:text-sm md:text-base">
              <li>Halaman ini terdiri dari lima soal yang masing-masing menguji pemahaman Anda mengenai visualisasi data.</li>
              <li>Setiap soal memiliki kolom masukan untuk menjawab, tombol Periksa untuk memeriksa jawaban, dan tombol Hapus untuk mengosongkan jawaban jika ingin anda mencoba lagi.</li>
              <li>Bacalah soal dengan cermat, masukkan jawaban Anda, dan periksa hasilnya untuk mendapatkan umpan balik.</li>
            </ol>
          </section>

          {/* Soal 1 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">1.</span>
              Kamu ingin melihat perubahan jumlah penjualan produk dari waktu ke waktu selama 4 bulan terakhir. Grafik apa yang paling tepat untuk digunakan?
            </p>
            <div className="grid grid-cols-1 gap-2 sm:gap-4 px-2 sm:px-4 mb-2 sm:mb-5 md:grid-cols-3">
              <div
                className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                  selected === "Line Chart" ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setSelected("Line Chart")}
              >
                <img src={satuLine} alt="Line Chart" className="rounded-lg" />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-center text-gray-700">Line Chart</p>
              </div>
              <div
                className={`border-4 rounded-xl p-2 cursor-pointer transition-transform-all ${
                  selected === "Bar Chart" ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setSelected("Bar Chart")}
              >
                <img src={satuBar} alt="Bar Chart" className="rounded-lg" />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-center text-gray-700">Column Chart</p>
              </div>
              <div
                className={`border-4 rounded-xl p-2 cursor-pointer transition-transform-all ${
                  selected === "Pie Chart" ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setSelected("Pie Chart")}
              >
                <img src={satuPie} alt="Pie Chart" className="rounded-lg" />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-center text-gray-700">Pie Chart</p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handlePeriksa1}
                className="ml-2 px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
              >
                Periksa
              </button>
              <button
                onClick={() => {
                  setSelected("");
                  setIsTouched1(false);
                  setFeedback1("");
                }}
                className="ml-2 px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
              >
                Hapus
              </button>
            </div>
            {isTouched1 && selected && (
              <p className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                isCorrect(selected, "Line Chart") ? "bg-[#C8E6C9] text-[#1B5E20]" : "bg-[#FFEBEE] text-[#D32F2F]"
              }`}>
                {feedback1}
              </p>
            )}
          </div>

          {/* Soal 2 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">2.</span>
              Kelasmu melakukan survei tentang warna favorit. Grafik apa yang paling tepat untuk menunjukkan persentase warna favorit dari seluruh kelas?
            </p>
            <div className="grid grid-cols-1 gap-2 sm:gap-4 px-2 sm:px-4 mb-2 sm:mb-5 md:grid-cols-3">
              <div
                className={`border-4 rounded-xl p-2 cursor-pointer transition-transform-all ${
                  jawaban2 === "Pie Chart" ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setJawaban2("Pie Chart")}
              >
                <img src={duaPie} alt="Pie Chart" className="rounded-lg" />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-center text-gray-700">Pie Chart</p>
              </div>
              <div
                className={`border-4 rounded-xl p-2 cursor-pointer transition-transform-all ${
                  jawaban2 === "Bar Chart" ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setJawaban2("Bar Chart")}
              >
                <img src={duaBar} alt="Bar Chart" className="rounded-lg" />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-center text-gray-700">Bar Chart</p>
              </div>
              <div
                className={`border-4 rounded-xl p-2 cursor-pointer transition-transform-all ${
                  jawaban2 === "Line Chart" ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setJawaban2("Line Chart")}
              >
                <img src={duaLine} alt="Line Chart" className="rounded-lg" />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-center text-gray-700">Line Chart</p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handlePeriksa2}
                className="ml-2 px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
              >
                Periksa
              </button>
              <button
                onClick={() => {
                  setJawaban2("");
                  setIsTouched2(false);
                  setFeedback2("");
                }}
                className="ml-2 px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
              >
                Hapus
              </button>
            </div>
            {isTouched2 && jawaban2 && (
              <p className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                isCorrect(jawaban2, "Pie Chart") ? "bg-[#C8E6C9] text-[#1B5E20]" : "bg-[#FFEBEE] text-[#D32F2F]"
              }`}>
                {feedback2}
              </p>
            )}
          </div>

          {/* Soal 3 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">3.</span>
              Kamu ingin melihat perubahan jumlah pengunjung perpustakaan sekolah dari waktu ke waktu setiap bulan. Grafik apa yang paling cocok?
            </p>
            <div className="grid grid-cols-1 gap-2 sm:gap-4 px-2 sm:px-4 mb-2 sm:mb-5 md:grid-cols-3">
              <div
                className={`border-4 rounded-xl p-2 cursor-pointer transition-transform-all ${
                  jawaban3 === "Pie Chart" ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setJawaban3("Pie Chart")}
              >
                <img src={tigaPie} alt="Pie Chart" className="rounded-lg" />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-center text-gray-700">Pie Chart</p>
              </div>
              <div
                className={`border-4 rounded-xl p-2 cursor-pointer transition-transform-all ${
                  jawaban3 === "Bar Chart" ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setJawaban3("Bar Chart")}
              >
                <img src={tigaBar} alt="Bar Chart" className="rounded-lg" />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-center text-gray-700">Bar Chart</p>
              </div>
              <div
                className={`border-4 rounded-xl p-2 cursor-pointer transition-transform-all ${
                  jawaban3 === "Line Chart" ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setJawaban3("Line Chart")}
              >
                <img src={tigaLine} alt="Line Chart" className="rounded-lg" />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-center text-gray-700">Line Chart</p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handlePeriksa3}
                className="ml-2 px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
              >
                Periksa
              </button>
              <button
                onClick={() => {
                  setJawaban3("");
                  setIsTouched3(false);
                  setFeedback3("");
                }}
                className="ml-2 px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
              >
                Hapus
              </button>
            </div>
            {isTouched3 && jawaban3 && (
              <p className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                isCorrect(jawaban3, "Line Chart") ? "bg-[#C8E6C9] text-[#1B5E20]" : "bg-[#FFEBEE] text-[#D32F2F]"
              }`}>
                {feedback3}
              </p>
            )}
          </div>

          {/* Soal 4 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">4.</span>
              Kamu ingin melihat perbandingan nilai rata-rata siswa di pelajaran Matematika, IPA, dan Bahasa Indonesia. Grafik apa yang paling tepat?
            </p>
            <div className="grid grid-cols-1 gap-2 sm:gap-4 px-2 sm:px-4 mb-2 sm:mb-5 md:grid-cols-3">
              <div
                className={`border-4 rounded-xl p-2 cursor-pointer transition-transform-all ${
                  jawaban4 === "Pie Chart" ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setJawaban4("Pie Chart")}
              >
                <img src={empatPie} alt="Pie Chart" className="rounded-lg" />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-center text-gray-700">Pie Chart</p>
              </div>
              <div
                className={`border-4 rounded-xl p-2 cursor-pointer transition-transform-all ${
                  jawaban4 === "Bar Chart" ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setJawaban4("Bar Chart")}
              >
                <img src={empatKolom} alt="Bar Chart" className="rounded-lg" />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-center text-gray-700">Bar Chart</p>
              </div>
              <div
                className={`border-4 rounded-xl p-2 cursor-pointer transition-transform-all ${
                  jawaban4 === "Line Chart" ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setJawaban4("Line Chart")}
              >
                <img src={empatLine} alt="Line Chart" className="rounded-lg" />
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-center text-gray-700">Line Chart</p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handlePeriksa4}
                className="ml-2 px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
              >
                Periksa
              </button>
              <button
                onClick={() => {
                  setJawaban4("");
                  setIsTouched4(false);
                  setFeedback4("");
                }}
                className="ml-2 px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
              >
                Hapus
              </button>
            </div>
            {isTouched4 && jawaban4 && (
              <p className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                isCorrect(jawaban4, "Bar Chart") ? "bg-[#C8E6C9] text-[#1B5E20]" : "bg-[#FFEBEE] text-[#D32F2F]"
              }`}>
                {feedback4}
              </p>
            )}
          </div>

          {/* Soal 5 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">5.</span>
              Lengkapi tabel berikut ini dengan jenis grafik yang paling sesuai berdasarkan deskripsi kasus.
            </p>
            <table className="w-full text-xs sm:text-sm md:text-base border border-gray-400 rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-1 sm:p-2 border text-center font-bold">Kasus</th>
                  <th className="p-1 sm:p-2 border text-center font-bold">Jenis Grafik</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    kasus: "Menunjukkan persentase warna favorit siswa dari seluruh kelas",
                    jawabanBenar: "Pie Chart",
                  },
                  {
                    kasus: "Melihat perubahan jumlah penjualan produk dari waktu ke waktu selama 4 bulan",
                    jawabanBenar: "Line Chart",
                  },
                ].map((item, index) => (
                  <tr key={index} className="bg-white">
                    <td className="p-1 sm:p-2 border">{item.kasus}</td>
                    <td className="p-1 sm:p-2 border">
                      <input
                        type="text"
                        value={jawaban5[index] || ""}
                        onChange={(e) => {
                          const newJawaban = [...jawaban5];
                          newJawaban[index] = e.target.value;
                          setJawaban5(newJawaban);
                        }}
                        className="w-full p-1 sm:p-2 border-2 rounded-lg text-xs sm:text-sm"
                        placeholder="Ketik jawaban Anda..."
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-center mt-2 sm:mt-4">
              <button
                onClick={handlePeriksa5}
                className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer mr-2"
              >
                Periksa
              </button>
              <button
                onClick={() => {
                  setJawaban5([]);
                  setIsTouched5(false);
                }}
                className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
              >
                Hapus
              </button>
            </div>
            {isTouched5 && jawaban5.length > 0 && (
              <div className="mt-2 sm:mt-4">
                {jawaban5.map((jawaban, index) => (
                  <p
                    key={index}
                    className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                      isCorrect(jawaban, ["Pie Chart", "Line Chart"][index])
                        ? "bg-[#C8E6C9] text-[#1B5E20]"
                        : "bg-[#FFEBEE] text-[#D32F2F]"
                    }`}
                  >
                    {isCorrect(jawaban, ["Pie Chart", "Line Chart"][index])
                      ? index === 0
                        ? "Benar! Pie Chart tepat untuk persentase."
                        : "Benar! Grafik garis pas untuk tren waktu."
                      : index === 0
                      ? "Salah. Pikirkan grafik untuk proporsi data."
                      : "Salah. Pilih grafik untuk data waktu."}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Tombol Navigasi */}
          <div className="flex justify-between mt-4 sm:mt-8 px-2 sm:px-4 ">
            <button
              onClick={() => (window.location.href = "/contoh-penerapan-visualisasi-data")}
              className="px-3 sm:px-5 py-1 sm:py-2 text-xs sm:text-base text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 cursor-pointer"
            >
              ← Sebelumnya
            </button>
            <button
              onClick={() => (window.location.href = "/berlatih-visualisasi")}
              className="px-3 sm:px-5 py-1 sm:py-2 text-xs sm:text-base text-white transition duration-300 bg-[#255F38] rounded-lg shadow-md hover:bg-green-700 cursor-pointer"
            >
              Selanjutnya →
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AktivitasVisualisasiGambar;
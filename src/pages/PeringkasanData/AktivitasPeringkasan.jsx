import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const langkahSUMIF = [
  "Pilih range kriteria, yaitu kolom Kategori (C2:C9)",
  "Tentukan kriteria, yaitu hanya menjumlahkan transaksi dengan kategori 'Makanan'",
  "Pilih sum_range, yaitu kolom Total Penjualan (F2:F9) yang akan dijumlahkan",
  "Gunakan rumus SUMIF untuk menjumlahkan total penjualan berdasarkan kategori 'Makanan'",
];

const langkahCOUNTIFS = [
  "Pilih criteria_range1, yaitu kolom kategori (C2:C9)",
  "Tentukan criteria1, yaitu hanya menghitung transaksi dengan kategori 'Makanan'",
  "Pilih criteria_range2, yaitu kolom jumlah terjual (E2:E9)",
  "Tentukan criteria2, yaitu hanya menghitung transaksi dengan jumlah terjual lebih dari 3",
  "Gunakan rumus COUNTIFS untuk menghitung jumlah transaksi yang memenuhi kedua kriteria",
];

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const AktivitasPeringkasan = () => {
  const [jawaban1, setJawaban1] = useState("");
  const [feedback1, setFeedback1] = useState("");
  const [jawaban2, setJawaban2] = useState("");
  const [feedback2, setFeedback2] = useState("");
  const [jawaban3a, setJawaban3a] = useState("");
  const [jawaban3b, setJawaban3b] = useState("");
  const [jawaban3c, setJawaban3c] = useState("");
  const [feedback3, setFeedback3] = useState("");
  const [feedback4, setFeedback4] = useState("");
  const [feedback5, setFeedback5] = useState("");
  const [urutan4, setUrutan4] = useState([]);
  const [urutan5, setUrutan5] = useState([]);
  const [bank4, setBank4] = useState([]);
  const [bank5, setBank5] = useState([]);

  useEffect(() => {
    setBank4(shuffleArray(langkahCOUNTIFS));
    setBank5(shuffleArray(langkahSUMIF));
  }, []);

  const cekJawaban1 = () => {
    setFeedback1(
      jawaban1.trim().toLowerCase() === "susu kotak"
        ? "Benar! Produk ini memiliki penjualan tertinggi."
        : "Salah. Periksa kembali data penjualan tertinggi."
    );
  };

  const resetJawaban1 = () => {
    setJawaban1("");
    setFeedback1("");
  };

  const cekJawaban2 = () => {
    setFeedback2(
      jawaban2.trim().toUpperCase() === "COUNTIF"
        ? "Benar! Fungsi ini untuk menghitung berdasarkan kriteria."
        : "Salah. Cek fungsi untuk menghitung dengan satu kriteria."
    );
  };

  const resetJawaban2 = () => {
    setJawaban2("");
    setFeedback2("");
  };

  const cekJawaban3 = () => {
    const benar =
      jawaban3a.trim().toUpperCase() === "C2:C9" &&
      jawaban3b.trim().toLowerCase() === "'alat tulis'" &&
      jawaban3c.trim() === "4";
    setFeedback3(
      benar
        ? "Benar! Range, kriteria, dan hasil sesuai."
        : "Salah. Periksa range, kriteria, dan jumlah hasil."
    );
  };

  const resetJawaban3 = () => {
    setJawaban3a("");
    setJawaban3b("");
    setJawaban3c("");
    setFeedback3("");
  };

  const cekJawaban4 = () => {
    const benar = JSON.stringify(urutan4) === JSON.stringify(langkahCOUNTIFS);
    setFeedback4(
      benar
        ? "Benar! Urutan langkah cocok untuk COUNTIFS."
        : "Salah. Susun ulang langkah untuk dua kriteria."
    );
  };

  const resetJawaban4 = () => {
    setUrutan4([]);
    setFeedback4("");
    setBank4(shuffleArray(langkahCOUNTIFS));
  };

  const cekJawaban5 = () => {
    const benar = JSON.stringify(urutan5) === JSON.stringify(langkahSUMIF);
    setFeedback5(
      benar
        ? "Benar! Urutan langkah pas untuk SUMIF."
        : "Salah. Atur ulang langkah untuk penjumlahan."
    );
  };

  const resetJawaban5 = () => {
    setUrutan5([]);
    setFeedback5("");
    setBank5(shuffleArray(langkahSUMIF));
  };

  const handleDrag = (event, item) => {
    event.dataTransfer.setData("text/plain", item);
  };

  const handleDrop = (event, setUrutan) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    setUrutan((prev) => {
      if (!prev.includes(data)) {
        return [...prev, data];
      }
      return prev;
    });
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const renderDraggableItems = (items, urutan) => {
    return items
      .filter((item) => !urutan.includes(item))
      .map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDrag(e, item)}
          className="border border-gray-400 p-2 sm:p-3 rounded bg-white shadow-sm mb-2 cursor-move text-xs sm:text-sm md:text-base text-gray-700"
        >
          {item}
        </div>
      ));
  };

  return (
    <Layout>
      <div className="border-4 border-[#255F38] p-4 rounded-lg">
        <div className="p-2 sm:p-4 bg-[#255F38] mb-2 sm:mb-4 text-white font-bold text-sm sm:text-lg text-center rounded-lg shadow-lg">
          AKTIVITAS PERINGKASAN DATA
        </div>

        <div className="p-2 sm:p-6 bg-white">
          {/* Petunjuk Umum */}
          <section className="p-2 sm:p-4 bg-green-100 rounded shadow-md mb-2 sm:mb-6">
            <h3 className="text-sm sm:text-lg font-semibold text-[#255F38] mb-2">
              Petunjuk Umum
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 text-xs sm:text-sm md:text-base">
              <li>
                Halaman ini terdiri dari lima soal yang masing-masing menguji
                pemahaman Anda mengenai peringkasan data.
              </li>
              <li>
                Setiap soal memiliki kolom masukan untuk menjawab, tombol
                Periksa untuk memeriksa jawaban, dan tombol Hapus untuk
                mengosongkan jawaban jika ingin mencoba lagi.
              </li>
              <li>
                Bacalah soal dengan cermat, masukkan jawaban Anda, dan periksa
                hasilnya untuk mendapatkan umpan balik.
              </li>
            </ol>
          </section>
          <div className="flex justify-center px-2 sm:px-4 mb-2 sm:mb-6">
            <iframe
              width="100%"
              height="400"
              className="border border-gray-300 rounded-lg shadow-md"
              frameBorder="0"
              scrolling="no"
              src="https://sheet.zohopublic.com/sheet/published/2vh20a58be89169c94b9397a979024073156d?mode=embed"
            ></iframe>
          </div>

          {/* Soal 1 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">
                1.
              </span>
              Produk apa yang memiliki total penjualan tertinggi?
            </p>
            <div className="flex flex-col sm:flex-row items-center px-2 sm:px-4 mb-2 sm:mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="text"
                className="border p-2 rounded-lg w-full sm:max-w-md text-xs sm:text-sm md:text-base text-gray-700"
                value={jawaban1}
                onChange={(e) => setJawaban1(e.target.value)}
                placeholder="Ketik jawaban Anda..."
              />
              <div className="flex space-x-2">
                <button
                  onClick={cekJawaban1}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Periksa
                </button>
                <button
                  onClick={resetJawaban1}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Hapus
                </button>
              </div>
            </div>
            {feedback1 && (
              <p
                className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                  feedback1.startsWith("Benar")
                    ? "bg-[#C8E6C9] text-[#1B5E20]"
                    : "bg-[#FFEBEE] text-[#D32F2F]"
                }`}
              >
                {feedback1}
              </p>
            )}
          </div>

          {/* Soal 2 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">
                2.
              </span>
              Fungsi apa yang digunakan untuk menghitung jumlah data berdasarkan
              satu kriteria?
            </p>
            <div className="flex flex-col sm:flex-row items-center px-2 sm:px-4 mb-2 sm:mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="text"
                className="border p-2 rounded-lg w-full sm:max-w-md text-xs sm:text-sm md:text-base text-gray-700"
                value={jawaban2}
                onChange={(e) => setJawaban2(e.target.value)}
                placeholder="Ketik jawaban Anda..."
              />
              <div className="flex space-x-2">
                <button
                  onClick={cekJawaban2}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Periksa
                </button>
                <button
                  onClick={resetJawaban2}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Hapus
                </button>
              </div>
            </div>
            {feedback2 && (
              <p
                className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                  feedback2.startsWith("Benar")
                    ? "bg-[#C8E6C9] text-[#1B5E20]"
                    : "bg-[#FFEBEE] text-[#D32F2F]"
                }`}
              >
                {feedback2}
              </p>
            )}
          </div>

          {/* Soal 3 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">
                3.
              </span>
              Isi bagian-bagian dari fungsi COUNTIF berikut untuk menghitung
              jumlah produk kategori "Alat Tulis":
            </p>
            <div className="px-2 sm:px-4 space-y-3">
              <input
                type="text"
                placeholder="Range (misal: A2:A9)"
                className="border p-2 rounded-lg w-full sm:max-w-md text-xs sm:text-sm md:text-base text-gray-700"
                value={jawaban3a}
                onChange={(e) => setJawaban3a(e.target.value)}
              />
              <input
                type="text"
                placeholder={`Kriteria (misal: "Makanan")`}
                className="border p-2 rounded-lg w-full sm:max-w-md text-xs sm:text-sm md:text-base text-gray-700"
                value={jawaban3b}
                onChange={(e) => setJawaban3b(e.target.value)}
              />
              <input
                type="text"
                placeholder="Hasil (misal: 4)"
                className="border p-2 rounded-lg w-full sm:max-w-md text-xs sm:text-sm md:text-base text-gray-700"
                value={jawaban3c}
                onChange={(e) => setJawaban3c(e.target.value)}
              />
              <div className="flex flex-col sm:flex-row items-center px-0 mb-2 sm:mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
                <button
                  onClick={cekJawaban3}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Periksa
                </button>
                <button
                  onClick={resetJawaban3}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Hapus
                </button>
              </div>
              {feedback3 && (
                <p
                  className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                    feedback3.startsWith("Benar")
                      ? "bg-[#C8E6C9] text-[#1B5E20]"
                      : "bg-[#FFEBEE] text-[#D32F2F]"
                  }`}
                >
                  {feedback3}
                </p>
              )}
            </div>
          </div>

          {/* Soal 4 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">
                4.
              </span>
              Seret langkah-langkah berikut ke dalam urutan yang benar untuk
              menghitung jumlah transaksi kategori "Makanan" dengan jumlah
              terjual lebih dari 3:
            </p>
            <div className="px-2 sm:px-4">
              <div className="mb-2 sm:mb-4">
                {renderDraggableItems(bank4, urutan4)}
              </div>
              <div
                className="border border-gray-400 p-2 sm:p-4 rounded mb-2 sm:mb-4 min-h-[150px] bg-gray-50"
                onDrop={(e) => handleDrop(e, setUrutan4)}
                onDragOver={allowDrop}
              >
                {urutan4.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-400 p-2 sm:p-3 rounded bg-white shadow-sm mb-2 text-xs sm:text-sm md:text-base text-gray-700"
                  >
                    {index + 1}. {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center px-0 mb-2 sm:mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
                <button
                  onClick={cekJawaban4}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Periksa
                </button>
                <button
                  onClick={resetJawaban4}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Hapus
                </button>
              </div>
              {feedback4 && (
                <p
                  className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                    feedback4.startsWith("Benar")
                      ? "bg-[#C8E6C9] text-[#1B5E20]"
                      : "bg-[#FFEBEE] text-[#D32F2F]"
                  }`}
                >
                  {feedback4}
                </p>
              )}
            </div>
          </div>

          {/* Soal 5 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">
                5.
              </span>
              Susun kembali langkah-langkah berikut agar urut untuk menghitung
              total penjualan kategori "Makanan" menggunakan SUMIF:
            </p>
            <div className="px-2 sm:px-4">
              <div className="mb-2 sm:mb-4">
                {renderDraggableItems(bank5, urutan5)}
              </div>
              <div
                className="border border-gray-400 p-2 sm:p-4 rounded mb-2 sm:mb-4 min-h-[150px] bg-gray-50"
                onDrop={(e) => handleDrop(e, setUrutan5)}
                onDragOver={allowDrop}
              >
                {urutan5.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-400 p-2 sm:p-3 rounded bg-white shadow-sm mb-2 text-xs sm:text-sm md:text-base text-gray-700"
                  >
                    {index + 1}. {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center px-0 mb-2 sm:mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
                <button
                  onClick={cekJawaban5}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Periksa
                </button>
                <button
                  onClick={resetJawaban5}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Hapus
                </button>
              </div>
              {feedback5 && (
                <p
                  className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                    feedback5.startsWith("Benar")
                      ? "bg-[#C8E6C9] text-[#1B5E20]"
                      : "bg-[#FFEBEE] text-[#D32F2F]"
                  }`}
                >
                  {feedback5}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between mt-4 sm:mt-8 px-2 sm:px-4">
            <button
              onClick={() => (window.location.href = "/contoh-peringkasan")}
              className="px-3 sm:px-5 py-1 sm:py-2 text-xs sm:text-base text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 cursor-pointer"
            >
              ← Sebelumnya
            </button>
            <button
              onClick={() => (window.location.href = "/berlatih-peringkasan")}
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

export default AktivitasPeringkasan;

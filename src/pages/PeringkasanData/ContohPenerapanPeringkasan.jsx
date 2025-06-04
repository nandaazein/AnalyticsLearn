import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContohPeringkasan = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 640px) {
            .responsive-text {
              font-size: 0.85rem;
              line-height: 1.4;
            }
            .responsive-table-container {
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
              max-width: 100%;
            }
            .responsive-table {
              min-width: 100%;
              font-size: 0.8rem;
            }
            .responsive-table th, .responsive-table td {
              padding: 0.4rem;
              white-space: nowrap;
            }
            .responsive-iframe {
              width: 100%;
              height: 300px;
            }
            .responsive-button {
              padding: 0.5rem 1rem;
              font-size: 0.85rem;
              min-width: 80px;
            }
            .responsive-section {
              padding: 0.75rem;
            }
            .responsive-nav-buttons {
              justify-content: space-between;
              align-items: center;
              gap: 0.5rem;
            }
          }
        `}
      </style>

      {/* Main Header */}
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-base sm:text-lg text-center rounded-lg shadow-lg">
        CONTOH PENERAPAN PERINGKASAN DATA
      </div>

      {/* Case Study 1: SUMIF & SUMIFS */}
      <h2 className="text-base sm:text-lg md:text-xl font-bold mt-8 mb-4 px-4 text-gray-800">
        Studi Kasus 1: Menjumlahkan dengan SUMIF & SUMIFS
      </h2>
      <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4 responsive-text">
        Sebagai bendahara kelas, kamu mencatat iuran dan pengeluaran bulanan. Gunakan <span className="font-semibold">SUMIF</span> untuk menjumlahkan iuran berdasarkan kategori seperti "Kebersihan" di semua bulan. Gunakan <span className="font-semibold">SUMIFS</span> untuk menjumlahkan pengeluaran seperti "Alat Kebersihan" pada bulan tertentu, misalnya "Maret".
      </p>

      {/* Table 1: Contributions & Expenses */}
      <div className="flex flex-col items-center mt-6 responsive-table-container">
        <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">Tabel 1. Data Iuran & Pengeluaran</p>
        <table className="border-collapse border border-green-800 w-full text-center responsive-table">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Kategori</th>
              <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Bulan</th>
              <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Jumlah (Rp)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Kebersihan", "Januari", 5000],
              ["Kas", "Januari", 10000],
              ["Kebersihan", "Februari", 5200], // Adjusted to match the SUMIF result of Rp10,200
              ["Alat Kebersihan", "Januari", 30000],
              ["Alat Kebersihan", "Maret", 40000],
              ["Alat Kebersihan", "Maret", 35000],
              ["Dekorasi", "Maret", 25000],
            ].map((row, index) => (
              <tr key={row.join("-")} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-gray-300 px-2 sm:px-4 py-1 sm:p-2">
                    {i === 2 ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(cell) : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4 mt-6 responsive-text">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* Decomposition Section */}
      <div className="bg-white p-[0.8rem] sm:p-5 border-t-4 border-[#219653] space-y-4 mt-6 relative responsive-section">
        <div className="absolute -top-6 left-2 sm:left-4 bg-[#219653] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-t-lg text-base font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-4 sm:pl-6 ml-4 sm:ml-6 space-y-1 mt-4 sm:mt-6 responsive-text">
          <li>Tentukan tujuan: Menjumlahkan iuran "Kebersihan" (SUMIF) dan pengeluaran "Alat Kebersihan" di "Maret" (SUMIFS).</li>
          <li>Tentukan kriteria: "Kebersihan" untuk SUMIF, "Alat Kebersihan" dan "Maret" untuk SUMIFS.</li>
          <li>Data: Tabel dengan kolom Kategori, Bulan, dan Jumlah.</li>
        </ul>
      </div>

      {/* Pattern Recognition Section */}
      <div className="bg-white p-[0.8rem] sm:p-5 border-t-4 border-[#219653] space-y-4 mt-6 relative responsive-section">
        <div className="absolute -top-6 left-2 sm:left-4 bg-[#219653] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-t-lg text-base font-bold flex items-center shadow-lg">
          <BarChart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> Pengenalan Pola
        </div>
        <ul className="text-gray-700 list-disc pl-4 sm:pl-6 ml-4 sm:ml-6 space-y-2 mt-4 sm:mt-6 responsive-text">
          <li>Pola SUMIF: Iuran berulang untuk kategori yang sama (Kebersihan) di berbagai bulan.</li>
          <li>Pola SUMIFS: Pengeluaran berulang berdasarkan Kategori dan Bulan (Alat Kebersihan di Maret).</li>
        </ul>
      </div>

      {/* Abstraction Section */}
      <div className="bg-white p-[0.8rem] sm:p-5 border-t-4 border-[#219653] space-y-4 mt-6 relative responsive-section">
        <div className="absolute -top-6 left-2 sm:left-4 bg-[#219653] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-t-lg text-base font-bold flex items-center shadow-lg">
          <Filter className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> Abstraksi
        </div>
        <ul className="text-gray-700 list-disc pl-4 sm:pl-6 ml-2 sm:ml-6 space-y-2 mt-4 sm:mt-6 responsive-text">
          <li>SUMIF: Abaikan "Bulan", fokus pada "Kategori" dan "Jumlah".</li>
          <li>SUMIFS: Fokus pada "Kategori", "Bulan", dan "Jumlah".</li>
        </ul>
      </div>

      {/* Algorithm Section */}
      <div className="bg-white p-[0.8rem] sm:p-5 border-t-4 border-[#219653] space-y-6 mt-6 relative responsive-section">
        <div className="absolute -top-6 left-2 sm:left-4 bg-[#219653] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-t-lg text-base font-bold flex items-center shadow-lg">
          <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> Algoritma
        </div>
        <p className="text-gray-600 text-sm sm:text-base mt-4 text-justify responsive-text">
          Berikut adalah langkah-langkah umum untuk menggunakan fungsi SUMIF dan SUMIFS:
        </p>
        <p className="font-semibold text-gray-800 text-sm sm:text-base mb-2 responsive-text">Contoh Penerapan SUMIF:</p>
        <ul className="text-gray-700 list-disc pl-4 sm:pl-6 ml-2 sm:ml-6 space-y-2 responsive-text">
          <li>Pilih <strong>range</strong> untuk kolom "Kategori" (A2:A8).</li>
          <li>Tentukan <strong>kriteria</strong> sebagai: "Kebersihan".</li>
          <li>Pilih <strong>sum_range</strong> untuk kolom "Jumlah" (C2:C8).</li>
          <li>Gunakan rumus: <code className="bg-gray-100 px-2 py-1 rounded text-xs sm:text-sm">=SUMIF(A2:A8;"Kebersihan";C2:C8)</code></li>
          <li><strong>Hasil:</strong> Total iuran "Kebersihan" adalah <strong>Rp10.200</strong>.</li>
        </ul>
        <p className="font-semibold text-gray-800 text-sm sm:text-base mt-4 mb-2 responsive-text">Contoh Penerapan SUMIFS:</p>
        <ul className="text-gray-700 list-disc pl-4 sm:pl-6 ml-2 sm:ml-6 space-y-2 responsive-text">
          <li>Pilih <strong>sum_range</strong> untuk kolom "Jumlah" (C2:C8).</li>
          <li>Tentukan <strong>kriteria 1</strong> untuk kolom "Kategori" (A2:A8) sebagai: "Alat Kebersihan".</li>
          <li>Tentukan <strong>kriteria 2</strong> untuk kolom "Bulan" (B2:B8) sebagai: "Maret".</li>
          <li>Gunakan rumus: <code className="bg-gray-100 px-2 py-1 rounded text-xs sm:text-sm">=SUMIFS(C2:C8;A2:A8;"Alat Kebersihan";B2:B8;"Maret")</code></li>
          <li><strong>Hasil:</strong> Total pengeluaran "Alat Kebersihan" di bulan Maret adalah <strong>Rp75.000</strong>.</li>
        </ul>
        <div className="flex justify-center mt-4">
          <iframe
            width="100%"
            height="350"
            className="sm:w-[80%] responsive-iframe"
            style={{ border: '1px solid #e7e7e7' }}
            frameBorder="0"
            scrolling="auto"
            src="https://sheet.zohopublic.com/sheet/published/4yfvb13af0506b3624931b03051e9daf94597?mode=embed"
          ></iframe>
        </div>
      </div>

      {/* Conclusion & Analysis Section */}
      <div className="bg-white p-[0.8rem] sm:p-5 border-t-4 border-[#219653] space-y-4 mt-6 relative responsive-section">
        <div className="absolute -top-6 left-2 sm:left-4 bg-[#219653] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-t-lg text-base font-bold flex items-center shadow-lg">
          <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> Kesimpulan & Analisis
        </div>
        <p className="text-gray-600 text-sm sm:text-base mt-4 sm:mt-6 responsive-text">
          Fungsi <strong>SUMIF</strong> sangat cocok untuk menjumlahkan data berdasarkan satu kriteria (misalnya, kategori "Kebersihan"), sedangkan <strong>SUMIFS</strong> ideal untuk menjumlahkan data dengan beberapa kriteria (misalnya, kategori dan bulan tertentu). Penggunaan fungsi-fungsi ini dapat menghemat waktu dan memastikan hasil yang akurat.
        </p>
        <ul className="list-disc pl-4 sm:pl-10 text-gray-600 text-sm sm:text-base mt-4 space-y-2 responsive-text">
          <li><strong>Keunggulan:</strong> Proses perhitungan jauh lebih cepat dibandingkan dengan metode manual.</li>
          <li><strong>Catatan Penting:</strong> Pastikan ejaan kriteria (misalnya, "Maret") sesuai dengan data di tabel untuk menghindari kesalahan hasil.</li>
        </ul>
      </div>

      {/* Case Study 2: COUNTIF & COUNTIFS */}
      <h2 className="text-base sm:text-lg md:text-xl font-bold mt-8 mb-2 text-gray-800">
        Studi Kasus 2: Menghitung dengan COUNTIF & COUNTIFS
      </h2>
      <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-2 sm:p-4 responsive-text">
        Seorang guru mencatat data partisipasi siswa dalam kegiatan ekstrakurikuler. Gunakan fungsi <strong>COUNTIF</strong> untuk menghitung jumlah kegiatan dengan jenis "Olahraga". Gunakan fungsi <strong>COUNTIFS</strong> untuk menghitung jumlah siswa perempuan dari kelas 8A yang berpartisipasi dalam kegiatan ekstrakurikuler.
      </p>

      {/* Table 2: Extracurricular Participation */}
      <div className="flex flex-col items-center mt-4 responsive-table-container">
        <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">Tabel 2. Data Partisipasi Ekstrakurikuler</p>
        <div className="w-full overflow-x-auto">
          <table className="border-collapse border border-[#219653] w-full text-center text-sm sm:text-sm responsive-text">
            <thead>
              <tr className="bg-[#219653] text-white">
                <th className="border border-[#219653] px-2 sm:px-4 py-1 sm:py-2">Jenis Kegiatan</th>
                <th className="border border-[#219653] px-2 sm:px-4 py-1 sm:py-2">Kelas</th>
                <th className="border border-[#219653] px-2 sm:px-4 py-1 sm:py-2">Jenis Kelamin</th>
                <th className="border border-[#219653] px-2 sm:px-4 py-1 sm:py-2">Partisipasi</th>
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
                <tr key={index} className={index % 2 === 0 ? "bg-[#F0FFF4]" : "bg-white"}>
                  {row.map((cell, i) => (
                    <td key={i} className="border border-[#219653] px-2 sm:px-4 py-1 sm:py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-2 sm:p-4 mt-6 responsive-text">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* Decomposition Section */}
      <div className="bg-white p-[0.8rem] sm:p-5 border-t-4 border-[#219653] space-y-4 mt-6 relative responsive-section">
        <div className="absolute -top-6 left-2 sm:left-4 bg-[#219653] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-t-lg text-base font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-4 sm:pl-6 ml-2 sm:ml-6 space-y-2 mt-4 sm:mt-6 responsive-text">
          <li><strong>Tujuan:</strong> Menghitung jumlah kegiatan dengan jenis "Olahraga" menggunakan <strong>COUNTIF</strong>, serta menghitung jumlah siswa perempuan dari kelas 8A yang berpartisipasi menggunakan <strong>COUNTIFS</strong>.</li>
          <li><strong>Kriteria:</strong> Untuk <strong>COUNTIF</strong>: "Olahraga". Untuk <strong>COUNTIFS</strong>: "8A" (Kelas), "Perempuan" (Jenis Kelamin), dan "Ya" (Partisipasi).</li>
          <li><strong>Data:</strong> Tabel dengan kolom "Jenis Kegiatan", "Kelas", "Jenis Kelamin", dan "Partisipasi".</li>
        </ul>
      </div>

      {/* Pattern Recognition Section */}
      <div className="bg-white p-[0.8rem] sm:p-5 border-t-4 border-[#219653] space-y-4 mt-6 relative responsive-section">
        <div className="absolute -top-6 left-2 sm:left-4 bg-[#219653] text-white px-2 sm:px-4 py-1 sm:p-2 rounded-t-lg text-base font-bold flex items-center shadow-lg">
          <BarChart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> Pengenalan Pola
        </div>
        <ul className="text-gray-700 list-disc pl-4 sm:pl-6 ml-2 sm:ml-6 space-y-2 mt-4 sm:mt-6 responsive-text">
          <li><strong>Pola COUNTIF:</strong> Menghitung frekuensi kegiatan berdasarkan jenis kegiatan tertentu (misalnya, "Olahraga").</li>
          <li><strong>Pola COUNTIFS:</strong> Menghitung jumlah data yang memenuhi beberapa kriteria, seperti kelas, jenis kelamin, dan status partisipasi.</li>
        </ul>
      </div>

      {/* Abstraction Section */}
      <div className="bg-white p-[0.8rem] sm:p-5 border-t-4 border-[#219653] space-y-4 mt-6 relative responsive-section">
        <div className="absolute -top-6 left-2 sm:left-4 bg-[#219653] text-white px-2 sm:px-4 py-1 sm:p-2 rounded-t-lg text-base font-bold flex items-center shadow-lg">
          <Filter className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> Abstraksi
        </div>
        <ul className="text-gray-700 list-disc pl-4 sm:pl-6 ml-2 sm:ml-6 space-y-2 mt-4 sm:mt-6 responsive-text">
          <li><strong>COUNTIF:</strong> Abaikan kolom "Kelas", "Jenis Kelamin", dan "Partisipasi"; fokus hanya pada kolom "Jenis Kegiatan".</li>
          <li><strong>COUNTIFS:</strong> Fokus pada kolom "Kelas", "Jenis Kelamin", dan "Partisipasi".</li>
        </ul>
      </div>

      {/* Algorithm Section */}
      <div className="bg-white p-[0.8rem] sm:p-5 border-t-4 border-[#219653] space-y-6 mt-6 relative responsive-section">
        <div className="absolute -top-6 left-2 sm:left-4 bg-[#219653] text-white px-2 sm:px-4 py-1 sm:p-2 rounded-t-lg text-base font-bold flex items-center shadow-lg">
          <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> Algoritma
        </div>
        <p className="text-gray-600 text-sm sm:text-base mt-4 sm:mt-2 text-justify responsive-text">
          Berikut adalah langkah-langkah umum untuk menggunakan fungsi COUNTIF dan COUNTIFS:
        </p>
        <p className="font-semibold text-gray-800 text-sm sm:text-base mb-2 responsive-text">Contoh Penerapan COUNTIF:</p>
        <ul className="text-gray-700 list-disc pl-4 sm:pl-6 ml-4 sm:ml-2 space-y-2 responsive-text">
          <li>Pilih <strong>range</strong> untuk kolom "Jenis Kegiatan" (A2:A7).</li>
          <li>Tentukan <strong>kriteria</strong> sebagai: "Olahraga".</li>
          <li>Gunakan rumus: <code className="bg-gray-100 px-2 py-1 rounded text-xs sm:text-sm">=COUNTIF(A2:A7;"Olahraga")</code></li>
          <li><strong>Hasil:</strong> Jumlah kegiatan "Olahraga" adalah <strong>3</strong>.</li>
        </ul>
        <p className="font-semibold text-gray-800 mt-4 mb-2 responsive-text">Contoh Penerapan COUNTIFS:</p>
        <ul className="text-gray-700 list-disc pl-4 sm:pl-6 ml-2 sm:ml-6 space-y-2 responsive-text">
          <li>Tentukan <strong>kriteria 1</strong> untuk kolom "Kelas" (B2:B7) sebagai: "8A".</li>
          <li>Tentukan <strong>kriteria 2</strong> untuk kolom "Jenis Kelamin" (C2:C7) sebagai: "Perempuan".</li>
          <li>Tentukan <strong>kriteria 3</strong> untuk kolom "Partisipasi" (D2:D7) sebagai: "Ya".</li>
          <li>Gunakan rumus: <code className="bg-gray-100 px-2 py-1 rounded text-xs sm:text-sm">=COUNTIFS(B2:B7;"8A";C2:C7;"Perempuan";D2:D7;"Ya")</code></li>
          <li>Hasil: Jumlah siswa perempuan 8A yang berpartisipasi adalah 2.</li>
        </ul>
        <div className="flex justify-center mt-4">
          <iframe
            width="100%"
            height="400"
            className="sm:w-[80%] responsive-iframe"
            style={{ border: '1px solid #e7e7e7' }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/4yfvb546e313018d74fba81dbe3f53d0a88e4?mode=embed"
          ></iframe>
        </div>
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-4 mt-10 relative responsive-section">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center">
          <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> Kesimpulan & Analisis
        </div>
        <p className="text-gray-700 text-sm sm:text-base mt-6 responsive-text">
          COUNTIF menghitung data dengan satu kriteria, COUNTIFS untuk beberapa kriteria, membantu analisis cepat.
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base mt-4 space-y-2 responsive-text">
          <li>Mengurangi kesalahan hitung manual.</li>
          <li>Pastikan ejaan kriteria tepat untuk hasil akurat.</li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4 responsive-nav-buttons">
        <button
          onClick={() => navigate("/peringkasan-data")}
          className="bg-gray-500 text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-sm sm:text-base shadow-md cursor-pointer responsive-button"
        >
          ← Sebelumnya
        </button>
        <button
          onClick={() => navigate("//aktivitas-peringkasan")}
          className="bg-green-800 text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base shadow-md cursor-pointer responsive-button"
        >
          Selanjutnya →
        </button>
      </div>
    </Layout>
  );
};

export default ContohPeringkasan;
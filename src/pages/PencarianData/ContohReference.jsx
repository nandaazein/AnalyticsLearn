// import Layout from "../../components/Layout";
// import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

// const ContohReference = () => {
//   return (
//     <Layout>
//       {/* Header Judul */}
//       <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
//         CONTOH PENERAPAN FUNGSI REFERENCE
//       </div>

//       {/* Studi Kasus 1: INDEX */}
//       <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
//         Studi Kasus 1: INDEX 
//       </h2>

//       {/* Pengantar Masalah */}
//       <div>
//         <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
//           Kamu bekerja di perpustakaan sekolah dan bertanggung jawab atas daftar buku. Setiap buku memiliki kode unik, judul, dan stok. 
//           Seorang guru bertanya: "Berapa stok buku dengan kode <span className='font-semibold'>B001</span>?" 
//           Kamu bisa menggunakan fungsi <span className="font-semibold">INDEX</span> untuk mengambil stok berdasarkan posisi data yang sudah diketahui.
//         </p>
//       </div>

//       {/* Tabel Data */}
//       <div className="flex flex-col items-center mt-6">
//         <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 5. Daftar Buku Perpustakaan</p>
//         <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
//           <thead>
//             <tr className="bg-[#255F38] text-white">
//               <th className="border border-green-600 px-4 py-2">No</th>
//               <th className="border border-green-600 px-4 py-2">Kode Buku</th>
//               <th className="border border-green-600 px-4 py-2">Judul Buku</th>
//               <th className="border border-green-600 px-4 py-2">Stok</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               [1, "B001", "Sejarah Indonesia", 10],
//               [2, "B002", "Matematika Dasar", 15],
//               [3, "B003", "Bahasa Inggris", 8],
//               [4, "B004", "Fisika Modern", 12],
//               [5, "B005", "Geografi Dunia", 7],
//             ].map((row, index) => (
//               <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                 {row.map((cell, i) => (
//                   <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Penyelesaian CT */}
//       <div className="space-y-8 mt-10">
//         {/* Dekomposisi */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Menyiapkan tabel data berisi nomor, kode buku, judul, dan stok buku.</li>
//             <li>Menentukan tujuan: menemukan stok buku berdasarkan kode unik B001.</li>
//           </ul>
//         </div>

//         {/* Pengenalan Pola */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Setiap baris mewakili satu buku dengan informasi lengkap.</li>
//             <li>Stok buku berada di kolom ke-4, dan kode B001 ada di baris pertama dalam range stok.</li>
//           </ul>
//         </div>

//         {/* Abstraksi */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Filter className="w-5 h-5 mr-2" /> Abstraksi
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Fokus pada kolom stok dan baris yang sesuai dengan kode B001 (baris ke-1 dalam range).</li>
//             <li>Menggunakan INDEX untuk mengambil data dari posisi tertentu.</li>
//           </ul>
//         </div>

//         {/* Algoritma */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Code className="w-5 h-5 mr-2" /> Algoritma
//           </div>
//           <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-4">
//             Terdapat beberapa cara untuk menampilkan data menggunakan fungsi <code className="bg-gray-200 px-1 py-0.5 rounded">INDEX</code>, tergantung bagaimana kita memilih data berdasarkan baris, kolom, atau kombinasi keduanya.
//           </p>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-4">
//             <li><strong>1. Berdasarkan kolom saja:</strong><br />
//               Gunakan rumus 
//               <code className="bg-gray-200 px-2 py-1 rounded">=INDEX(D3:D7;1)</code> 
//               untuk mengambil stok baris ke-1 pada kolom D (stok), hasilnya 10.
//             </li>

//             <li><strong>2. Berdasarkan baris dan kolom:</strong><br />
//               Gunakan rumus 
//               <code className="bg-gray-200 px-2 py-1 rounded">=INDEX(A3:D7;1;4)</code> 
//               untuk mengambil nilai baris ke-1 kolom ke-4, yaitu stok B001 = 10.
//             </li>

//             <li><strong>3. Berdasarkan baris saja (dalam satu baris data):</strong><br />
//               Gunakan rumus 
//               <code className="bg-gray-200 px-2 py-1 rounded">=INDEX(3:3;4)</code> 
//               untuk mengambil data kolom ke-4 dari baris ke-3, yaitu stok B001 = 10.
//             </li>
//           </ul>


         
//           <div className="flex justify-center">
//             <iframe 
//               width="80%" 
//               height="400" 
//               style={{ border: '1px solid #e7e7e7' }} 
//               frameBorder="0" 
//               scrolling="no" 
//               src="https://sheet.zohopublic.com/sheet/published/cbhuve6b9eaad45264a6b9414a2877d494949?mode=embed">
//             </iframe>
//           </div>
//         </div>
//       </div>

//       {/* Kesimpulan dan Analisis */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Fungsi INDEX memungkinkan pengambilan data dari posisi tertentu dalam tabel berdasarkan baris dan kolom yang sudah diketahui.
//         </p>
//         <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
//         <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
//           <li>Ideal untuk mengakses data spesifik tanpa perlu scrolling manual.</li>
//           <li>Dapat dikombinasikan dengan MATCH untuk pencarian otomatis.</li>
//           <li>Efektif pada tabel dengan banyak baris dan kolom terstruktur.</li>
//         </ul>
//       </div>

//       {/* Studi Kasus 2: MATCH */}
//       <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
//         Studi Kasus 2: MATCH 
//       </h2>

//       {/* Pengantar Masalah */}
//       <div>
//         <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
//           Kamu adalah koordinator turnamen olahraga sekolah. Setiap peserta diberi kode identitas acak, nama, dan cabang olahraga yang diikuti. 
//           Saat menyusun jadwal, seseorang bertanya: "Peserta dengan kode identitas <span className='font-semibold'>4821</span> ada di urutan ke berapa?" 
//           Kamu bisa menggunakan fungsi <span className="font-semibold">MATCH</span> untuk menemukan posisi peserta berdasarkan kode acak tersebut.
//         </p>
//       </div>

//       {/* Tabel Data */}
//       <div className="flex flex-col items-center mt-6">
//         <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 6. Daftar Peserta Turnamen</p>
//         <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
//           <thead>
//             <tr className="bg-[#255F38] text-white">
//               <th className="border border-green-600 px-4 py-2">Kode Identitas</th>
//               <th className="border border-green-600 px-4 py-2">Nama Peserta</th>
//               <th className="border border-green-600 px-4 py-2">Cabang Olahraga</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               ["4821", "Andi", "Bola Basket"],
//               ["7392", "Budi", "Renang"],
//               ["1509", "Citra", "Atletik"],
//               ["9273", "Dedi", "Tenis Meja"],
//               ["3648", "Eka", "Sepak Bola"],
//             ].map((row, index) => (
//               <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                 {row.map((cell, i) => (
//                   <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Penyelesaian CT */}
//       <div className="space-y-8 mt-10">
//         {/* Dekomposisi */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Menyiapkan tabel data berisi kode identitas acak, nama, dan cabang olahraga peserta.</li>
//             <li>Menentukan tujuan: menemukan posisi peserta berdasarkan kode identitas 4821.</li>
//           </ul>
//         </div>

//         {/* Pengenalan Pola */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Setiap baris mewakili satu peserta dengan kode identitas acak unik.</li>
//             <li>Posisi peserta ditentukan oleh urutan kode identitas dalam kolom pertama.</li>
//           </ul>
//         </div>

//         {/* Abstraksi */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Filter className="w-5 h-5 mr-2" /> Abstraksi
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Fokus pada kolom kode identitas untuk mencari posisi kode 4821.</li>
//             <li>Menggunakan MATCH untuk mengidentifikasi posisi dalam daftar berdasarkan nilai yang cocok.</li>
//           </ul>
//         </div>

//         {/* Algoritma */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Code className="w-5 h-5 mr-2" /> Algoritma
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Tentukan nilai yang ingin dicari, yaitu kode identitas 4821.</li>
//             <li>Pilih daftar tempat mencari nilai, yaitu kolom kode identitas (A3:A7).</li>
//             <li>Tulis rumus MATCH dengan benar:
//             <code className="bg-gray-200 px-2 py-1 rounded">=MATCH(4821; A3:A7; 0)</code><br />
//               Artinya:
//               <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
//                 <li>4821 adalah kode identitas yang dicari.</li>
//                 <li>A2:A6 adalah kolom tempat pencarian dilakukan.</li>
//                 <li>0 artinya mencari kecocokan persis.</li>
//                 <li>Hasilnya: <span className="font-semibold">1</span>, karena 4821 berada di baris ke-1 dalam range.</li>
//               </ul>
//             </li>
//           </ul>
//           <div className="flex justify-center mt-4">
//             <iframe 
//               width="80%" 
//               height="400" 
//               style={{ border: '1px solid #e7e7e7' }} 
//               frameBorder="0" 
//               scrolling="no" 
//               src="https://sheet.zohopublic.com/sheet/published/u4xoa5aec0a4f21f94d7bba59976b939227fe?mode=embed">
//             </iframe>
//           </div>
//         </div>
//       </div>

//       {/* Kesimpulan dan Analisis */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Fungsi MATCH efektif untuk menemukan posisi data dalam daftar berdasarkan nilai yang ditentukan, seperti kode identitas acak.
//         </p>
//         <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
//         <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
//           <li>Mengembalikan nomor posisi relatif dalam range yang ditentukan.</li>
//           <li>Berguna untuk mengidentifikasi urutan data unik tanpa scrolling manual.</li>
//           <li>Dapat dipadukan dengan INDEX untuk aplikasi pencarian yang lebih kompleks.</li>
//         </ul>
//       </div>

//       {/* Studi Kasus 3: CHOOSE */}
//       <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
//         Studi Kasus 3: CHOOSE
//       </h2>

//       {/* Pengantar Masalah */}
//       <div>
//         <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
//           Kamu adalah anggota klub seni di sekolah. Setiap hari memiliki kegiatan seni yang berbeda berdasarkan nomor hari. 
//           Temanmu bertanya: "Jika hari ke-3, kegiatan apa yang dijadwalkan?" Kamu bisa menggunakan fungsi <span className="font-semibold">CHOOSE</span> 
//           untuk memilih kegiatan berdasarkan nomor hari.
//         </p>
//       </div>

//       {/* Tabel Data */}
//       <div className="flex flex-col items-center mt-6">
//         <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 7. Jadwal Kegiatan Seni</p>
//         <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
//           <thead>
//             <tr className="bg-[#255F38] text-white">
//               <th className="border border-green-600 px-4 py-2">Nomor Hari</th>
//               <th className="border border-green-600 px-4 py-2">Kegiatan Seni</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               [1, "Lukis"],
//               [2, "Tarian"],
//               [3, "Musik"],
//               [4, "Teater"],
//             ].map((row, index) => (
//               <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                 {row.map((cell, i) => (
//                   <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Penyelesaian CT */}
//       <div className="space-y-8 mt-10">
//         {/* Dekomposisi */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Menyiapkan daftar kegiatan seni berdasarkan nomor hari.</li>
//             <li>Menentukan tujuan: memilih kegiatan untuk hari ke-3.</li>
//           </ul>
//         </div>

//         {/* Pengenalan Pola */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Nomor hari sesuai dengan urutan kegiatan seni dalam daftar.</li>
//             <li>Hari ke-3 berhubungan dengan kegiatan di posisi ke-3.</li>
//           </ul>
//         </div>

//         {/* Abstraksi */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Filter className="w-5 h-5 mr-2" /> Abstraksi
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Fokus pada nomor hari dan daftar kegiatan seni yang tersedia.</li>
//             <li>Menggunakan CHOOSE untuk memilih berdasarkan indeks nomor hari.</li>
//           </ul>
//         </div>

//         {/* Algoritma */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Code className="w-5 h-5 mr-2" /> Algoritma
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Tentukan nomor urut (indeks) yang akan dipilih, yaitu hari ke-3.</li>
//             <li>Tulis daftar nilai yang bisa dipilih: "Lukis", "Tarian", "Musik", "Teater".</li>
//             <li>Tulis rumus CHOOSE dengan benar:
//                <code className="bg-gray-200 px-2 py-1 rounded">  =CHOOSE(3; "Lukis"; "Tarian"; "Musik"; "Teater")</code><br />
//               Artinya:
//               <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
//                 <li>Angka 3 adalah nomor hari yang dipilih.</li>
//                 <li>Setiap pilihan mewakili urutan kegiatan sesuai nomor hari.</li>
//                 <li>Hasilnya: <span className="font-semibold">Musik</span>, karena itu kegiatan di urutan ke-3.</li>
//               </ul>
//             </li>
//           </ul>
//           <div className="flex justify-center mt-4">
//             <iframe
//               width="80%"
//               height="400"
//               style={{ border: '1px solid #e7e7e7' }}
//               frameBorder="0"
//               scrolling="no"
//               src="https://sheet.zohopublic.com/sheet/published/u4xoabea134672a124461a1ae7e5696634ec3?mode=embed"
//             ></iframe>
//           </div>
//         </div>
//       </div>

//       {/* Kesimpulan dan Analisis */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Fungsi CHOOSE memungkinkan pemilihan nilai dari daftar berdasarkan indeks tertentu.
//         </p>
//         <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
//         <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
//           <li>Sesuai untuk memilih dari daftar tetap berdasarkan nomor urut.</li>
//           <li>Mempermudah pengambilan data tanpa rumus kondisional.</li>
//           <li>Efektif untuk jadwal atau opsi berurutan lainnya.</li>
//         </ul>
//       </div>

//       {/* Tombol Navigasi */}
//       <div className="flex justify-between mt-8 px-4">
//         <a href="/pencarian-lookup" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-base shadow-md">
//           ← Sebelumnya
//         </a>
//         <a href="/aktivitas-lookup" className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md">
//           Selanjutnya →
//         </a>
//       </div>
//     </Layout>
//   );
// };

// export default ContohReference;

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
      <div className="bg-white p-4 sm:p-5 border-gray-奸 space-y-4 mt-12 relative mx-2 sm:mx-4">
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
    </Layout>
  );
};

export default ContohReference;
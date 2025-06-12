// import Layout from "../../components/Layout";
// import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

// const ContohLookup = () => {
//   return (
//     <Layout>
//       {/* Header judul */}
//       <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
//         CONTOH PENERAPAN FUNGSI LOOKUP
//       </div>

//       <h2 className="px-4 mt-12 mb-4 text-lg font-bold text-gray-800 md:text-xl">
//         Studi Kasus 1: VLOOKUP
//       </h2>

//       {/* Paragraf Penjelasan VLOOKUP */}
//       <p className="px-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
//         Andi adalah seorang manajer toko yang ingin menentukan kategori diskon untuk pelanggan berdasarkan jumlah pembelian mereka menggunakan spreadsheet. Ia memiliki Tabel 1,
//         yang berisi daftar nama pelanggan dan jumlah pembelian mereka (dalam ribuan rupiah). Selain itu, ia juga memiliki Tabel 2, yang berisi rentang jumlah pembelian beserta kategori diskon yang sesuai. Andi ingin mengisi kolom <span className="font-semibold">"Kategori Diskon"</span> pada Tabel 1 secara otomatis dengan menggunakan fungsi <span className="font-semibold">VLOOKUP</span> dengan parameter <span className="font-semibold">TRUE</span> untuk pencarian perkiraan, karena tabel referensi sudah diurutkan.
//       </p>
//       <div className="flex flex-col items-center mt-2">
//         <p className="mb-2 text-sm italic text-center text-gray-600">Tabel 1. Daftar Pembelian Pelanggan</p>
//         <table className="w-full text-center border border-collapse border-green-800 md:w-2/3">
//           <thead>
//             <tr className="bg-[#255F38] text-white">
//               <th className="px-4 py-2 border border-green-600">No</th>
//               <th className="px-4 py-2 border border-green-600">Nama</th>
//               <th className="px-4 py-2 border border-green-600">Jumlah Pembelian (Rp ribu)</th>
//               <th className="px-4 py-2 border border-green-600">Kategori Diskon</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               [1, "Budi", "150.000", ""],
//               [2, "Clara", "450.000", ""],
//               [3, "Dani", "800.000", ""],
//               [4, "Eka", "300.000", ""],
//               [5, "Fira", "600.000", ""],
//               [6, "Gita", "100.000", ""],
//             ].map((row, index) => (
//               <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                 {row.map((cell, i) => (
//                   <td key={i} className="px-4 py-2 border border-green-600">{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <p className="mt-4 mb-2 text-sm italic text-center text-gray-600">Tabel 2. Daftar Kategori Diskon</p>
//         <table className="w-full text-center border border-collapse border-green-800 md:w-1/3">
//           <thead>
//             <tr className="bg-[#255F38] text-white">
//               <th className="px-4 py-2 border border-green-600">Jumlah Pembelian (Rp ribu)</th>
//               <th className="px-4 py-2 border border-green-600">Kategori Diskon</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               ["0", "Tidak Ada"],
//               ["100.000", "Bronze"],
//               ["300.000", "Silver"],
//               ["500.000", "Gold"],
//             ].map((row, index) => (
//               <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                 {row.map((cell, i) => (
//                   <td key={i} className="px-4 py-2 border border-green-600">{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <p className="px-4 mt-6 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
//         Penyelesaian dengan <span className="italic font-semibold">Computational Thinking:</span>
//       </p>

//       {/* DEKOMPOSISI VLOOKUP */}
//       <div className="relative p-5 mt-12 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
//           <Lightbulb className="w-5 h-5 mr-2" /> Dekomposisi
//         </div>
//         <ul className="pl-6 mt-6 ml-6 space-y-1 text-gray-700 list-disc">
//           <li>Andi ingin mengisi kolom "Kategori Diskon" berdasarkan jumlah pembelian pelanggan.</li>
//           <li>Ada dua tabel: <span className="font-semibold">Tabel 1</span> berisi daftar pelanggan dan jumlah pembelian mereka, sedangkan <span className="font-semibold">Tabel 2</span> berisi rentang jumlah pembelian dan kategori diskon.</li>
//           <li>Kita perlu mencocokkan jumlah pembelian di Tabel 1 dengan rentang di Tabel 2 untuk mendapatkan kategori diskon yang sesuai.</li>
//         </ul>
//       </div>

//       {/* PENGENALAN POLA VLOOKUP */}
//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
//           <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
//         </div>
//         <ul className="pl-6 mt-6 ml-6 space-y-1 text-gray-700 list-disc">
//           <li>Setiap jumlah pembelian di <span className="font-semibold">Tabel 1</span> bisa dicocokkan dengan kategori diskon di <span className="font-semibold">Tabel 2</span> berdasarkan rentang yang sesuai.</li>
//           <li>Misalnya, jika jumlah pembelian adalah <span className="font-semibold">450.000</span>, maka kategorinya adalah <span className="font-semibold">Silver</span>, karena 450.000 berada di antara 300.000 dan 500.000, dan <span className="font-semibold">VLOOKUP</span> dengan <span className="font-semibold">TRUE</span> akan memilih rentang terdekat di bawahnya (300.000).</li>
//           <li>Polanya adalah mencari rentang terdekat di bawah jumlah pembelian dan mengambil kategori diskon yang sesuai.</li>
//           <li><span className="font-semibold">Tabel 2 sudah diurutkan secara ascending</span>, sehingga kita bisa menggunakan pencarian perkiraan dengan parameter <span className="font-semibold">TRUE</span>.</li>
//         </ul>
//       </div>

//       {/* ABSTRAKSI VLOOKUP */}
//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
//           <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
//         </div>
//         <ul className="pl-6 mt-6 ml-6 space-y-1 text-gray-700 list-disc">
//           <li>Tidak perlu memperhatikan kolom <span className="font-semibold">Nama</span>, karena yang penting adalah mencocokkan <span className="font-semibold">Jumlah Pembelian</span> dengan <span className="font-semibold">Kategori Diskon</span>.</li>
//           <li>Fokus hanya pada dua kolom penting: <span className="font-semibold">Jumlah Pembelian</span> di <span className="font-semibold">Tabel 1</span> dan <span className="font-semibold">Kategori Diskon</span> di <span className="font-semibold">Tabel 2</span>.</li>
//           <li>Gunakan fungsi <span className="font-semibold">VLOOKUP</span> untuk menemukan kategori diskon yang sesuai tanpa harus mencarinya satu per satu.</li>
//           <li>Gunakan <span className="font-semibold">absolute reference ($)</span> pada tabel referensi agar referensi tetap saat rumus disalin ke sel lain.</li>
//         </ul>
//       </div>

//       {/* ALGORITMA VLOOKUP */}
//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
//           <Code className="w-5 h-5 mr-2" /> ALGORITMA
//         </div>
//         <ul className="pl-6 mt-6 ml-6 space-y-1 text-gray-700 list-disc">
//           <li>
//             <span className="font-semibold">Tentukan nilai referensi</span><br />
//             Pilih sel <span className="font-semibold">C3</span> (Jumlah Pembelian) di Tabel 1.
//           </li>
//           <li>
//             <span className="font-semibold">Pilih tabel referensi</span><br />
//             Gunakan rentang <span className="font-semibold">$F$2:$G$6</span> (Jumlah Pembelian di F2:F6, Kategori Diskon di G2:G5).
//           </li>
//           <li>
//             <span className="font-semibold">Tentukan nomor kolom</span><br />
//             Pilih <span className="font-semibold">2</span> (kolom Kategori Diskon).
//           </li>
//           <li>
//             <span className="font-semibold">Pilih metode pencarian</span><br />
//             Gunakan <span className="font-semibold">TRUE</span> untuk pencarian perkiraan.
//           </li>
//           <li>
//             <span className="font-semibold">Masukkan rumus VLOOKUP</span><br />
//             Klik sel <span className="font-semibold">D3</span>, masukkan:
//             <code className="px-2 py-1 bg-gray-200 rounded">=VLOOKUP(C3;$F$2:$G$6;2;TRUE)</code><br />
//             Tekan <span className="font-semibold">Enter</span> untuk menampilkan kategori diskon.
//           </li>
//           <li>
//             <span className="font-semibold">Terapkan ke seluruh tabel</span><br />
//             Tarik sel <span className="font-semibold">D3</span> ke bawah hingga <span className="font-semibold">D8</span> menggunakan tanda <span className="font-semibold">+</span>.
//           </li>
//         </ul>

//         <div className="flex justify-center">
//           <iframe
//             width="80%"
//             height="400"
//             style={{ border: "1px solid #e7e7e7" }}
//             frameBorder="0"
//             scrolling="no"
//             src="https://sheet.zohopublic.com/sheet/published/53s0x73b03c7cb4f842728d27be5a618794a1?mode=embed"
//           ></iframe>
//         </div>

//       </div>

//       {/* KESIMPULAN DAN ANALISIS VLOOKUP */}
//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
//           <CheckCircle className="w-5 h-5 mr-2" /> KESIMPULAN & ANALISIS
//         </div>
//         <p className="mt-6 text-sm text-gray-600 md:text-base">
//           Dengan VLOOKUP menggunakan parameter TRUE, Andi dapat menentukan kategori diskon pelanggan secara otomatis, lebih cepat, dan mengurangi kesalahan pencocokan data.
//         </p>
//         <p className="text-sm font-semibold text-gray-600 md:text-base">Analisis</p>
//         <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc list-inside md:text-base">
//           <li>Tanpa VLOOKUP, penentuan kategori diskon harus dilakukan manual, lebih lama, dan berisiko salah.</li>
//           <li>Error bisa terjadi jika tabel referensi tidak diurutkan secara ascending, karena parameter TRUE membutuhkan data yang terurut.</li>
//           <li>Gunakan absolute reference ($) agar rumus tetap bekerja saat disalin ke sel lain.</li>
//         </ul>
//       </div>

//       <h2 className="px-4 mt-12 mb-4 text-lg font-bold text-gray-800 md:text-xl">
//         Studi Kasus 2: HLOOKUP
//       </h2>

//       {/* Paragraf Penjelasan HLOOKUP */}
//       <p className="px-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
//         Budi adalah siswa SMP yang membantu panitia lomba sekolah untuk mencatat poin siswa berdasarkan hari lomba. Ia memiliki Tabel 3,
//         yang berisi daftar nama siswa dan hari lomba yang mereka ikuti. Selain itu, ia juga memiliki Tabel 4, yang berisi daftar poin
//         berdasarkan hari lomba. Budi ingin mengisi kolom <span className="font-semibold">"Poin"</span> pada Tabel 3 secara otomatis dengan menggunakan fungsi <span className="font-semibold">HLOOKUP</span> agar tidak perlu mencatat poin satu per satu secara manual.
//       </p>
//       <div className="flex flex-col items-center mt-2">
//         <p className="mb-2 text-sm italic text-center text-gray-600">Tabel 3. Daftar Peserta Lomba</p>
//         <table className="w-full text-center border border-collapse border-green-800 md:w-2/3">
//           <thead>
//             <tr className="bg-[#255F38] text-white">
//               <th className="px-4 py-2 border border-green-600">No</th>
//               <th className="px-4 py-2 border border-green-600">Nama</th>
//               <th className="px-4 py-2 border border-green-600">Hari Lomba</th>
//               <th className="px-4 py-2 border border-green-600">Poin</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               [1, "Andi", "Senin", ""],
//               [2, "Clara", "Selasa", ""],
//               [3, "Dina", "Rabu", ""],
//               [4, "Eko", "Senin", ""],
//               [5, "Fira", "Rabu", ""],
//               [6, "Gita", "Selasa", ""],
//             ].map((row, index) => (
//               <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                 {row.map((cell, i) => (
//                   <td key={i} className="px-4 py-2 border border-green-600">{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <p className="mt-4 mb-2 text-sm italic text-center text-gray-600">Tabel 4. Daftar Poin Lomba</p>
//         <table className="w-full text-center border border-collapse border-green-800 md:w-2/3">
//           <thead>
//             <tr className="bg-[#255F38] text-white">
//               <th className="px-4 py-2 border border-green-600">Hari</th>
//               <td className="px-4 py-2 text-black bg-white border border-green-600">Senin</td>
//               <td className="px-4 py-2 text-black bg-white border border-green-600">Selasa</td>
//               <td className="px-4 py-2 text-black bg-white border border-green-600">Rabu</td>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="bg-green-50">
//               <th className="border border-green-600 px-4 py-2 bg-[#255F38] text-white">Poin</th>
//               <td className="px-4 py-2 border border-green-600">50</td>
//               <td className="px-4 py-2 border border-green-600">30</td>
//               <td className="px-4 py-2 border border-green-600">20</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <p className="px-4 mt-6 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
//         Penyelesaian dengan <span className="italic font-semibold">Computational Thinking:</span>
//       </p>

//       {/* DEKOMPOSISI HLOOKUP */}
//       <div className="relative p-5 mt-12 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
//           <Lightbulb className="w-5 h-5 mr-2" /> Dekomposisi
//         </div>
//         <ul className="pl-6 mt-6 ml-6 space-y-1 text-gray-700 list-disc">
//           <li>Budi ingin mengisi kolom "Poin" berdasarkan "Hari Lomba" yang diikuti siswa.</li>
//           <li>Ada dua tabel: <span className="font-semibold">Tabel 3</span> berisi daftar siswa dan hari lomba mereka, sedangkan <span className="font-semibold">Tabel 4</span> berisi daftar poin berdasarkan hari lomba.</li>
//           <li>Kita perlu mencocokkan hari lomba di Tabel 3 dengan daftar di Tabel 4 untuk mendapatkan poin yang benar.</li>
//         </ul>
//       </div>

//       {/* PENGENALAN POLA HLOOKUP */}
//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
//           <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
//         </div>
//         <ul className="pl-6 mt-6 ml-6 space-y-1 text-gray-700 list-disc">
//           <li>Setiap hari lomba di <span className="font-semibold">Tabel 3</span> bisa dicocokkan dengan poin yang tersedia di <span className="font-semibold">Tabel 4</span>.</li>
//           <li>Misalnya, jika hari lomba adalah <span className="font-semibold">Selasa</span>, maka poinnya adalah <span className="font-semibold">30</span>, karena di <span className="font-semibold">Tabel 4</span>, hari <span className="font-semibold">Selasa</span> punya poin <span className="font-semibold">30</span>.</li>
//           <li>Polanya adalah mencari hari lomba dalam baris pertama dan mengambil poin yang sesuai di baris berikutnya.</li>
//           <li><span className="font-semibold">Tabel 4 tidak diurutkan</span>, sehingga kita harus menggunakan pencarian persis dengan parameter <span className="font-semibold">FALSE</span> untuk memastikan hari lomba cocok.</li>
//         </ul>
//       </div>

//       {/* ABSTRAKSI HLOOKUP */}
//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
//           <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
//         </div>
//         <ul className="pl-6 mt-6 ml-6 space-y-1 text-gray-700 list-disc">
//           <li>Tidak perlu memperhatikan kolom <span className="font-semibold">Nama</span>, karena yang penting adalah mencocokkan <span className="font-semibold">Hari Lomba</span> dengan <span className="font-semibold">Poin</span>.</li>
//           <li>Fokus hanya pada dua elemen penting: <span className="font-semibold">Hari Lomba</span> di <span className="font-semibold">Tabel 3</span> dan <span className="font-semibold">Poin</span> di <span className="font-semibold">Tabel 4</span>.</li>
//           <li>Gunakan fungsi <span className="font-semibold">HLOOKUP</span> untuk menemukan poin yang sesuai tanpa harus mencarinya satu per satu.</li>
//           <li>Gunakan <span className="font-semibold">absolute reference ($)</span> pada tabel referensi agar referensi tetap saat rumus disalin ke sel lain.</li>
//         </ul>
//       </div>

//       {/* ALGORITMA HLOOKUP */}
//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
//           <Code className="w-5 h-5 mr-2" /> ALGORITMA
//         </div>
//         <ul className="pl-6 mt-6 ml-6 space-y-1 text-gray-700 list-disc">
//           <li>
//             <span className="font-semibold">Tentukan nilai referensi</span><br />
//             Pilih sel <span className="font-semibold">C3</span> (Hari Lomba) di Tabel 3.
//           </li>
//           <li>
//             <span className="font-semibold">Pilih tabel referensi</span><br />
//             Gunakan rentang <span className="font-semibold">$F$2:$I$3</span> (Hari di F2:I2, Poin di F3:I3).
//           </li>
//           <li>
//             <span className="font-semibold">Tentukan nomor baris</span><br />
//             Pilih <span className="font-semibold">2</span> (baris Poin).
//           </li>
//           <li>
//             <span className="font-semibold">Pilih metode pencarian</span><br />
//             Gunakan <span className="font-semibold">FALSE</span> untuk kecocokan persis.
//           </li>
//           <li>
//             <span className="font-semibold">Masukkan rumus HLOOKUP</span><br />
//             Klik sel <span className="font-semibold">D3</span>, masukkan:
//             <code className="px-2 py-1 bg-gray-200 rounded">=HLOOKUP(C3;$F$2:$I$3;2;FALSE)</code><br />
//             Tekan <span className="font-semibold">Enter</span> untuk menampilkan poin.
//           </li>
//           <li>
//             <span className="font-semibold">Terapkan ke seluruh tabel</span><br />
//             Tarik sel <span className="font-semibold">D3</span> ke bawah hingga <span className="font-semibold">D8</span> menggunakan tanda <span className="font-semibold">+</span>.
//           </li>
//         </ul>

//         <div className="flex justify-center">
//           <iframe
//             width="80%"
//             height="400"
//             style={{ border: "1px solid #e7e7e7" }}
//             frameBorder="0"
//             scrolling="no"
//             src="https://sheet.zohopublic.com/sheet/published/9f67vf01e540b5d434a64b456d58eede7235b?mode=embed"
//           ></iframe>
//         </div>
//       </div>

//       {/* KESIMPULAN DAN ANALISIS HLOOKUP */}
//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
//           <CheckCircle className="w-5 h-5 mr-2" /> KESIMPULAN & ANALISIS
//         </div>
//         <p className="mt-6 text-sm text-gray-600 md:text-base">
//           Dengan HLOOKUP, Budi dapat mengisi poin lomba siswa secara otomatis, lebih cepat, dan mengurangi kesalahan pencocokan data.
//         </p>
//         <p className="text-sm font-semibold text-gray-600 md:text-base">Analisis</p>
//         <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc list-inside md:text-base">
//           <li>Tanpa HLOOKUP, pencocokan poin harus dilakukan manual, lebih lama, dan berisiko salah.</li>
//           <li>Error bisa terjadi jika hari lomba tidak ada dalam Tabel 4.</li>
//           <li>Gunakan absolute reference ($) agar rumus tetap bekerja saat disalin ke sel lain.</li>
//         </ul>
//       </div>

//       {/* Tombol Navigasi */}
//       <div className="flex justify-between mt-8">
//         <a
//           href="/pencarian-lookup"
//           className="px-5 py-2 text-base text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600"
//         >
//           ← Sebelumnya
//         </a>
//         <a
//           href="/pencarian-reference"
//           className="px-5 py-2 text-base text-white transition duration-300 bg-green-800 rounded-lg shadow-md hover:bg-green-700"
//         >
//           Selanjutnya →
//         </a>
//       </div>
//     </Layout>
//   );
// };

// export default ContohLookup;

import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

const ContohLookup = () => {
  return (
    <Layout>
      {/* Header judul */}
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
        CONTOH PENERAPAN FUNGSI LOOKUP
      </div>

      <h2 className="px-4 mt-12 mb-4 text-lg font-bold text-gray-800 md:text-xl">
        Studi Kasus 1: VLOOKUP
      </h2>

      {/* Paragraf Penjelasan VLOOKUP */}
      <p className="px-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
        Andi adalah seorang manajer toko yang ingin menentukan kategori diskon
        untuk pelanggan berdasarkan jumlah pembelian mereka menggunakan
        spreadsheet. Ia memiliki Tabel 1, yang berisi daftar nama pelanggan dan
        jumlah pembelian mereka (dalam ribuan rupiah). Selain itu, ia juga
        memiliki Tabel 2, yang berisi rentang jumlah pembelian beserta kategori
        diskon yang sesuai. Andi ingin mengisi kolom{" "}
        <span className="font-semibold">"Kategori Diskon"</span> pada Tabel 1
        secara otomatis dengan menggunakan fungsi{" "}
        <span className="font-semibold">VLOOKUP</span> dengan parameter{" "}
        <span className="font-semibold">TRUE</span> untuk pencarian perkiraan,
        karena tabel referensi sudah diurutkan.
      </p>
      <div className="flex flex-col items-center mt-2">
        <p className="mb-2 text-xs italic text-center text-gray-600 sm:text-sm">
          Tabel 1. Daftar Pembelian Pelanggan
        </p>
        <div className="flex justify-center w-full">
          <div className="overflow-x-auto">
            <table className="w-full mx-auto text-xs text-center border border-collapse border-green-800 md:w-5/6 sm:text-sm">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    No
                  </th>
                  <th className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    Nama
                  </th>
                  <th className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    Jumlah Pembelian (Rp ribu)
                  </th>
                  <th className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    Kategori Diskon
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [1, "Budi", "150.000", ""],
                  [2, "Clara", "450.000", ""],
                  [3, "Dani", "800.000", ""],
                  [4, "Eka", "300.000", ""],
                  [5, "Fira", "600.000", ""],
                  [6, "Gita", "100.000", ""],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
                  >
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 mb-2 text-xs italic text-center text-gray-600 sm:text-sm">
          Tabel 2. Daftar Kategori Diskon
        </p>
        <div className="flex justify-center w-full">
          <div className="overflow-x-auto">
            <table className="w-full mx-auto text-xs text-center border border-collapse border-green-800 md:w-3/5 sm:text-sm">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    Jumlah Pembelian (Rp ribu)
                  </th>
                  <th className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    Kategori Diskon
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["0", "Tidak Ada"],
                  ["100.000", "Bronze"],
                  ["300.000", "Silver"],
                  ["500.000", "Gold"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
                  >
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p className="px-4 mt-6 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
        Penyelesaian dengan{" "}
        <span className="italic font-semibold">Computational Thinking:</span>
      </p>

      {/* DEKOMPOSISI VLOOKUP */}
      <div className="relative p-5 mt-12 space-y-4 bg-white border-gray-300">
        <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
          <Lightbulb className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> Dekomposisi
        </div>
        <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm">
          <li>
            Andi ingin mengisi kolom "Kategori Diskon" berdasarkan jumlah
            pembelian pelanggan.
          </li>
          <li>
            Ada dua tabel: <span className="font-semibold">Tabel 1</span> berisi
            daftar pelanggan dan jumlah pembelian mereka, sedangkan{" "}
            <span className="font-semibold">Tabel 2</span> berisi rentang jumlah
            pembelian dan kategori diskon.
          </li>
          <li>
            Kita perlu mencocokkan jumlah pembelian di Tabel 1 dengan rentang di
            Tabel 2 untuk mendapatkan kategori diskon yang sesuai.
          </li>
        </ul>
      </div>

      {/* PENGENALAN POLA VLOOKUP */}
      <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
        <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
          <BarChart className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> PENGENALAN POLA
        </div>
        <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm">
          <li>
            Setiap jumlah pembelian di{" "}
            <span className="font-semibold">Tabel 1</span> bisa dicocokkan
            dengan kategori diskon di{" "}
            <span className="font-semibold">Tabel 2</span> berdasarkan rentang
            yang sesuai.
          </li>
          <li>
            Misalnya, jika jumlah pembelian adalah{" "}
            <span className="font-semibold">450.000</span>, maka kategorinya
            adalah <span className="font-semibold">Silver</span>, karena 450.000
            berada di antara 300.000 dan 500.000, dan{" "}
            <span className="font-semibold">VLOOKUP</span> dengan{" "}
            <span className="font-semibold">TRUE</span> akan memilih rentang
            terdekat di bawahnya (300.000).
          </li>
          <li>
            Polanya adalah mencari rentang terdekat di bawah jumlah pembelian
            dan mengambil kategori diskon yang sesuai.
          </li>
          <li>
            <span className="font-semibold">
              Tabel 2 sudah diurutkan secara ascending
            </span>
            , sehingga kita bisa menggunakan pencarian perkiraan dengan
            parameter <span className="font-semibold">TRUE</span>.
          </li>
        </ul>
      </div>

      {/* ABSTRAKSI VLOOKUP */}
      <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
        <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
          <Filter className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> ABSTRAKSI
        </div>
        <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm">
          <li>
            Tidak perlu memperhatikan kolom{" "}
            <span className="font-semibold">Nama</span>, karena yang penting
            adalah mencocokkan{" "}
            <span className="font-semibold">Jumlah Pembelian</span> dengan{" "}
            <span className="font-semibold">Kategori Diskon</span>.
          </li>
          <li>
            Fokus hanya pada dua kolom penting:{" "}
            <span className="font-semibold">Jumlah Pembelian</span> di{" "}
            <span className="font-semibold">Tabel 1</span> dan{" "}
            <span className="font-semibold">Kategori Diskon</span> di{" "}
            <span className="font-semibold">Tabel 2</span>.
          </li>
          <li>
            Gunakan fungsi <span className="font-semibold">VLOOKUP</span> untuk
            menemukan kategori diskon yang sesuai tanpa harus mencarinya satu
            per satu.
          </li>
          <li>
            Gunakan{" "}
            <span className="font-semibold">absolute reference ($)</span> pada
            tabel referensi agar referensi tetap saat rumus disalin ke sel lain.
          </li>
        </ul>
      </div>

      {/* ALGORITMA VLOOKUP */}
      <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
        <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
          <Code className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> ALGORITMA
        </div>
        <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm">
          <li>
            <span className="font-semibold">Tentukan nilai referensi</span>
            <br />
            Pilih sel <span className="font-semibold">C3</span> (Jumlah
            Pembelian) di Tabel 1.
          </li>
          <li>
            <span className="font-semibold">Pilih tabel referensi</span>
            <br />
            Gunakan rentang <span className="font-semibold">
              $F$2:$G$6
            </span>{" "}
            (Jumlah Pembelian di F2:F6, Kategori Diskon di G2:G5).
          </li>
          <li>
            <span className="font-semibold">Tentukan nomor kolom</span>
            <br />
            Pilih <span className="font-semibold">2</span> (kolom Kategori
            Diskon).
          </li>
          <li>
            <span className="font-semibold">Pilih metode pencarian</span>
            <br />
            Gunakan <span className="font-semibold">TRUE</span> untuk pencarian
            perkiraan.
          </li>
          <li>
            <span className="font-semibold">Masukkan rumus VLOOKUP</span>
            <br />
            Klik sel <span className="font-semibold">D3</span>, masukkan:
            <code className="px-2 py-1 text-xs bg-gray-200 rounded sm:text-sm">
              =VLOOKUP(C3;$F$2:$G$6;2;TRUE)
            </code>
            <br />
            Tekan <span className="font-semibold">Enter</span> untuk menampilkan
            kategori diskon.
          </li>
          <li>
            <span className="font-semibold">Terapkan ke seluruh tabel</span>
            <br />
            Tarik sel <span className="font-semibold">D3</span> ke bawah hingga{" "}
            <span className="font-semibold">D8</span> menggunakan tanda{" "}
            <span className="font-semibold">+</span>.
          </li>
        </ul>

        <div className="flex justify-center">
          <iframe
            className="w-full sm:w-4/5 h-[300px] sm:h-[400px]"
            style={{ border: "1px solid #e7e7e7" }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/53s0x73b03c7cb4f842728d27be5a618794a1?mode=embed"
          ></iframe>
        </div>
      </div>

      {/* KESIMPULAN DAN ANALISIS VLOOKUP */}
      <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
        <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
          <CheckCircle className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> KESIMPULAN &
          ANALISIS
        </div>
        <p className="mt-6 text-xs text-gray-600 sm:text-sm md:text-base">
          Dengan VLOOKUP menggunakan parameter TRUE, Andi dapat menentukan
          kategori diskon pelanggan secara otomatis, lebih cepat, dan mengurangi
          kesalahan pencocokan data.
        </p>
        <p className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base">
          Analisis
        </p>
        <ul className="mt-4 space-y-2 text-xs text-gray-600 list-disc list-inside sm:text-sm md:text-base">
          <li>
            Tanpa VLOOKUP, penentuan kategori diskon harus dilakukan manual,
            lebih lama, dan berisiko salah.
          </li>
          <li>
            Error bisa terjadi jika tabel referensi tidak diurutkan secara
            ascending, karena parameter TRUE membutuhkan data yang terurut.
          </li>
          <li>
            Gunakan absolute reference ($) agar rumus tetap bekerja saat disalin
            ke sel lain.
          </li>
        </ul>
      </div>

      <h2 className="px-4 mt-12 mb-4 text-lg font-bold text-gray-800 md:text-xl">
        Studi Kasus 2: HLOOKUP
      </h2>

      {/* Paragraf Penjelasan HLOOKUP */}
      <p className="px-4 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
        Budi adalah siswa SMP yang membantu panitia lomba sekolah untuk mencatat
        poin siswa berdasarkan hari lomba. Ia memiliki Tabel 3, yang berisi
        daftar nama siswa dan hari lomba yang mereka ikuti. Selain itu, ia juga
        memiliki Tabel 4, yang berisi daftar poin berdasarkan hari lomba. Budi
        ingin mengisi kolom <span className="font-semibold">"Poin"</span> pada
        Tabel 3 secara otomatis dengan menggunakan fungsi{" "}
        <span className="font-semibold">HLOOKUP</span> agar tidak perlu mencatat
        poin satu per satu secara manual.
      </p>
      <div className="flex flex-col items-center mt-2">
        <p className="mb-2 text-xs italic text-center text-gray-600 sm:text-sm">
          Tabel 3. Daftar Peserta Lomba
        </p>
        <div className="flex justify-center w-full">
          <div className="overflow-x-auto">
            <table className="w-full mx-auto text-xs text-center border border-collapse border-green-800 md:w-2/3 sm:text-sm">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    No
                  </th>
                  <th className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    Nama
                  </th>
                  <th className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    Hari Lomba
                  </th>
                  <th className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    Poin
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [1, "Andi", "Senin", ""],
                  [2, "Clara", "Selasa", ""],
                  [3, "Dina", "Rabu", ""],
                  [4, "Eko", "Senin", ""],
                  [5, "Fira", "Rabu", ""],
                  [6, "Gita", "Selasa", ""],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
                  >
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 mb-2 text-xs italic text-center text-gray-600 sm:text-sm">
          Tabel 4. Daftar Poin Lomba
        </p>
        <div className="flex justify-center w-full">
          <div className="overflow-x-auto">
            <table className="w-full mx-auto text-xs text-center border border-collapse border-green-800 md:w-2/3 sm:text-sm">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    Hari
                  </th>
                  <td className="px-2 py-1 text-black bg-white border border-green-600 sm:px-4 sm:py-2">
                    Senin
                  </td>
                  <td className="px-2 py-1 text-black bg-white border border-green-600 sm:px-4 sm:py-2">
                    Selasa
                  </td>
                  <td className="px-2 py-1 text-black bg-white border border-green-600 sm:px-4 sm:py-2">
                    Rabu
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white">
                    Poin
                  </th>
                  <td className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    50
                  </td>
                  <td className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    30
                  </td>
                  <td className="px-2 py-1 border border-green-600 sm:px-4 sm:py-2">
                    20
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p className="px-4 mt-6 text-sm leading-relaxed text-justify text-gray-700 sm:text-base">
        Penyelesaian dengan{" "}
        <span className="italic font-semibold">Computational Thinking:</span>
      </p>

      {/* DEKOMPOSISI HLOOKUP */}
      <div className="relative p-5 mt-12 space-y-4 bg-white border-gray-300">
        <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
          <Lightbulb className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> Dekomposisi
        </div>
        <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm">
          <li>
            Budi ingin mengisi kolom "Poin" berdasarkan "Hari Lomba" yang
            diikuti siswa.
          </li>
          <li>
            Ada dua tabel: <span className="font-semibold">Tabel 3</span> berisi
            daftar siswa dan hari lomba mereka, sedangkan{" "}
            <span className="font-semibold">Tabel 4</span> berisi daftar poin
            berdasarkan hari lomba.
          </li>
          <li>
            Kita perlu mencocokkan hari lomba di Tabel 3 dengan daftar di Tabel
            4 untuk mendapatkan poin yang benar.
          </li>
        </ul>
      </div>

      {/* PENGENALAN POLA HLOOKUP */}
      <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
        <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
          <BarChart className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> PENGENALAN POLA
        </div>
        <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm">
          <li>
            Setiap hari lomba di <span className="font-semibold">Tabel 3</span>{" "}
            bisa dicocokkan dengan poin yang tersedia di{" "}
            <span className="font-semibold">Tabel 4</span>.
          </li>
          <li>
            Misalnya, jika hari lomba adalah{" "}
            <span className="font-semibold">Selasa</span>, maka poinnya adalah{" "}
            <span className="font-semibold">30</span>, karena di{" "}
            <span className="font-semibold">Tabel 4</span>, hari{" "}
            <span className="font-semibold">Selasa</span> punya poin{" "}
            <span className="font-semibold">30</span>.
          </li>
          <li>
            Polanya adalah mencari hari lomba dalam baris pertama dan mengambil
            poin yang sesuai di baris berikutnya.
          </li>
          <li>
            <span className="font-semibold">Tabel 4 tidak diurutkan</span>,
            sehingga kita harus menggunakan pencarian persis dengan parameter{" "}
            <span className="font-semibold">FALSE</span> untuk memastikan hari
            lomba cocok.
          </li>
        </ul>
      </div>

      {/* ABSTRAKSI HLOOKUP */}
      <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
        <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
          <Filter className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> ABSTRAKSI
        </div>
        <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm">
          <li>
            Tidak perlu memperhatikan kolom{" "}
            <span className="font-semibold">Nama</span>, karena yang penting
            adalah mencocokkan <span className="font-semibold">Hari Lomba</span>{" "}
            dengan <span className="font-semibold">Poin</span>.
          </li>
          <li>
            Fokus hanya pada dua elemen penting:{" "}
            <span className="font-semibold">Hari Lomba</span> di{" "}
            <span className="font-semibold">Tabel 3</span> dan{" "}
            <span className="font-semibold">Poin</span> di{" "}
            <span className="font-semibold">Tabel 4</span>.
          </li>
          <li>
            Gunakan fungsi <span className="font-semibold">HLOOKUP</span> untuk
            menemukan poin yang sesuai tanpa harus mencarinya satu per satu.
          </li>
          <li>
            Gunakan{" "}
            <span className="font-semibold">absolute reference ($)</span> pada
            tabel referensi agar referensi tetap saat rumus disalin ke sel lain.
          </li>
        </ul>
      </div>

      {/* ALGORITMA HLOOKUP */}
      <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
        <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
          <Code className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> ALGORITMA
        </div>
        <ul className="pl-6 mt-6 ml-6 space-y-1 text-xs text-gray-700 list-disc sm:text-sm">
          <li>
            <span className="font-semibold">Tentukan nilai referensi</span>
            <br />
            Pilih sel <span className="font-semibold">C3</span> (Hari Lomba) di
            Tabel 3.
          </li>
          <li>
            <span className="font-semibold">Pilih tabel referensi</span>
            <br />
            Gunakan rentang <span className="font-semibold">
              $F$2:$I$3
            </span>{" "}
            (Hari di F2:I2, Poin di F3:I3).
          </li>
          <li>
            <span className="font-semibold">Tentukan nomor baris</span>
            <br />
            Pilih <span className="font-semibold">2</span> (baris Poin).
          </li>
          <li>
            <span className="font-semibold">Pilih metode pencarian</span>
            <br />
            Gunakan <span className="font-semibold">FALSE</span> untuk kecocokan
            persis.
          </li>
          <li>
            <span className="font-semibold">Masukkan rumus HLOOKUP</span>
            <br />
            Klik sel <span className="font-semibold">D3</span>, masukkan:
            <code className="px-2 py-1 text-xs bg-gray-200 rounded sm:text-sm">
              =HLOOKUP(C3;$F$2:$I$3;2;FALSE)
            </code>
            <br />
            Tekan <span className="font-semibold">Enter</span> untuk menampilkan
            poin.
          </li>
          <li>
            <span className="font-semibold">Terapkan ke seluruh tabel</span>
            <br />
            Tarik sel <span className="font-semibold">D3</span> ke bawah hingga{" "}
            <span className="font-semibold">D8</span> menggunakan tanda{" "}
            <span className="font-semibold">+</span>.
          </li>
        </ul>

        <div className="flex justify-center">
          <iframe
            className="w-full sm:w-4/5 h-[300px] sm:h-[400px]"
            style={{ border: "1px solid #e7e7e7" }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/9f67vf01e540b5d434a64b456d58eede7235b?mode=embed"
          ></iframe>
        </div>
      </div>

      {/* KESIMPULAN DAN ANALISIS HLOOKUP */}
      <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
        <div className="absolute flex items-center px-3 py-2 text-base font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4 sm:px-5 sm:text-lg">
          <CheckCircle className="w-4 h-4 mr-2 sm:w-5 sm:h-5" /> KESIMPULAN &
          ANALISIS
        </div>
        <p className="mt-6 text-xs text-gray-600 sm:text-sm md:text-base">
          Dengan HLOOKUP, Budi dapat mengisi poin lomba siswa secara otomatis,
          lebih cepat, dan mengurangi kesalahan pencocokan data.
        </p>
        <p className="text-xs font-semibold text-gray-600 sm:text-sm md:text-base">
          Analisis
        </p>
        <ul className="mt-4 space-y-2 text-xs text-gray-600 list-disc list-inside sm:text-sm md:text-base">
          <li>
            Tanpa HLOOKUP, pencocokan poin harus dilakukan manual, lebih lama,
            dan berisiko salah.
          </li>
          <li>Error bisa terjadi jika hari lomba tidak ada dalam Tabel 4.</li>
          <li>
            Gunakan absolute reference ($) agar rumus tetap bekerja saat disalin
            ke sel lain.
          </li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex flex-row justify-between px-4 mt-8">
        <a
          href="/pencarian-lookup"
          className="px-3 py-2 text-sm text-white transition duration-300 bg-gray-500 rounded-lg shadow-md sm:px-5 hover:bg-gray-600 sm:text-base"
        >
          ← Sebelumnya
        </a>
        <a
          href="/pencarian-reference"
          className="px-3 py-2 text-sm text-white transition duration-300 bg-green-800 rounded-lg shadow-md sm:px-5 hover:bg-green-700 sm:text-base"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default ContohLookup;

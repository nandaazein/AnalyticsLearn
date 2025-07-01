// import Layout from "../../components/Layout";
// import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

// const ContohLookup = () => {
//   return (
//     <Layout>
//       {/* Header judul */}
//       <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
//         CONTOH PENERAPAN FUNGSI LOOKUP
//       </div>

//       <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
//         Studi Kasus 1: VLOOKUP 
//       </h2>

//       {/* Paragraf Penjelasan VLOOKUP */}
//       <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4">
//         Andi adalah seorang manajer toko yang ingin menentukan kategori diskon untuk pelanggan berdasarkan jumlah pembelian mereka menggunakan spreadsheet. Ia memiliki Tabel 1, 
//         yang berisi daftar nama pelanggan dan jumlah pembelian mereka (dalam ribuan rupiah). Selain itu, ia juga memiliki Tabel 2, yang berisi rentang jumlah pembelian beserta kategori diskon yang sesuai. Andi ingin mengisi kolom <span className="font-semibold">"Kategori Diskon"</span> pada Tabel 1 secara otomatis dengan menggunakan fungsi <span className="font-semibold">VLOOKUP</span> dengan parameter <span className="font-semibold">TRUE</span> untuk pencarian perkiraan, karena tabel referensi sudah diurutkan.
//       </p>
//       <div className="flex flex-col items-center mt-2">
//         <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">Tabel 1. Daftar Pembelian Pelanggan</p>
//         <div className="w-full overflow-x-auto">
//           <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-xs sm:text-sm">
//             <thead>
//               <tr className="bg-[#255F38] text-white">
//                 <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">No</th>
//                 <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Nama</th>
//                 <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Jumlah Pembelian (Rp ribu)</th>
//                 <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Kategori Diskon</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 [1, "Budi", "150.000", ""],
//                 [2, "Clara", "450.000", ""],
//                 [3, "Dani", "800.000", ""],
//                 [4, "Eka", "300.000", ""],
//                 [5, "Fira", "600.000", ""],
//                 [6, "Gita", "100.000", ""],
//               ].map((row, index) => (
//                 <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td key={i} className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">{cell}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic mt-4">Tabel 2. Daftar Kategori Diskon</p>
//         <div className="w-full overflow-x-auto">
//           <table className="border-collapse border border-green-800 w-full md:w-1/3 text-center text-xs sm:text-sm">
//             <thead>
//               <tr className="bg-[#255F38] text-white">
//                 <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Jumlah Pembelian (Rp ribu)</th>
//                 <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Kategori Diskon</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["0", "Tidak Ada"],
//                 ["100.000", "Bronze"],
//                 ["300.000", "Silver"],
//                 ["500.000", "Gold"],
//               ].map((row, index) => (
//                 <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td key={i} className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">{cell}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4 mt-6">
//         Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
//       </p>

//       {/* DEKOMPOSISI VLOOKUP */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
//           <Lightbulb className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> Dekomposisi
//         </div>
//         <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm">
//           <li>Andi ingin mengisi kolom "Kategori Diskon" berdasarkan jumlah pembelian pelanggan.</li>
//           <li>Ada dua tabel: <span className="font-semibold">Tabel 1</span> berisi daftar pelanggan dan jumlah pembelian mereka, sedangkan <span className="font-semibold">Tabel 2</span> berisi rentang jumlah pembelian dan kategori diskon.</li>
//           <li>Kita perlu mencocokkan jumlah pembelian di Tabel 1 dengan rentang di Tabel 2 untuk mendapatkan kategori diskon yang sesuai.</li>
//         </ul>
//       </div>

//       {/* PENGENALAN POLA VLOOKUP */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
//           <BarChart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> PENGENALAN POLA
//         </div>
//         <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm">
//           <li>Setiap jumlah pembelian di <span className="font-semibold">Tabel 1</span> bisa dicocokkan dengan kategori diskon di <span className="font-semibold">Tabel 2</span> berdasarkan rentang yang sesuai.</li>
//           <li>Misalnya, jika jumlah pembelian adalah <span className="font-semibold">450.000</span>, maka kategorinya adalah <span className="font-semibold">Silver</span>, karena 450.000 berada di antara 300.000 dan 500.000, dan <span className="font-semibold">VLOOKUP</span> dengan <span className="font-semibold">TRUE</span> akan memilih rentang terdekat di bawahnya (300.000).</li>
//           <li>Polanya adalah mencari rentang terdekat di bawah jumlah pembelian dan mengambil kategori diskon yang sesuai.</li>
//           <li><span className="font-semibold">Tabel 2 sudah diurutkan secara ascending</span>, sehingga kita bisa menggunakan pencarian perkiraan dengan parameter <span className="font-semibold">TRUE</span>.</li>
//         </ul>
//       </div>

//       {/* ABSTRAKSI VLOOKUP */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
//           <Filter className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ABSTRAKSI
//         </div>
//         <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm">
//           <li>Tidak perlu memperhatikan kolom <span className="font-semibold">Nama</span>, karena yang penting adalah mencocokkan <span className="font-semibold">Jumlah Pembelian</span> dengan <span className="font-semibold">Kategori Diskon</span>.</li>
//           <li>Fokus hanya pada dua kolom penting: <span className="font-semibold">Jumlah Pembelian</span> di <span className="font-semibold">Tabel 1</span> dan <span className="font-semibold">Kategori Diskon</span> di <span className="font-semibold">Tabel 2</span>.</li>
//           <li>Gunakan fungsi <span className="font-semibold">VLOOKUP</span> untuk menemukan kategori diskon yang sesuai tanpa harus mencarinya satu per satu.</li>
//           <li>Gunakan <span className="font-semibold">absolute reference ($)</span> pada tabel referensi agar referensi tetap saat rumus disalin ke sel lain.</li>
//         </ul>
//       </div>

//       {/* ALGORITMA VLOOKUP */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
//           <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ALGORITMA
//         </div>
//         <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm">
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
//             <code className="bg-gray-200 px-2 py-1 rounded text-xs sm:text-sm">=VLOOKUP(C3;$F$2:$G$6;2;TRUE)</code><br />
//             Tekan <span className="font-semibold">Enter</span> untuk menampilkan kategori diskon.
//           </li>
//           <li>
//             <span className="font-semibold">Terapkan ke seluruh tabel</span><br />
//             Tarik sel <span className="font-semibold">D3</span> ke bawah hingga <span className="font-semibold">D8</span> menggunakan tanda <span className="font-semibold">+</span>.
//           </li>
//         </ul>

//         <div className="flex justify-center">
//           <iframe
//             className="w-full sm:w-4/5 h-[300px] sm:h-[400px]"
//             style={{ border: "1px solid #e7e7e7" }}
//             frameBorder="0"
//             scrolling="no"
//             src="https://sheet.zohopublic.com/sheet/published/53s0x73b03c7cb4f842728d27be5a618794a1?mode=embed"
//           ></iframe>
//         </div>
//       </div>

//       {/* KESIMPULAN DAN ANALISIS VLOOKUP */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
//           <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> KESIMPULAN & ANALISIS
//         </div>
//         <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-6">
//           Dengan VLOOKUP menggunakan parameter TRUE, Andi dapat menentukan kategori diskon pelanggan secara otomatis, lebih cepat, dan mengurangi kesalahan pencocokan data.
//         </p>
//         <p className="text-gray-600 text-xs sm:text-sm font-semibold md:text-base">Analisis</p>
//         <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base mt-4 space-y-2">
//           <li>Tanpa VLOOKUP, penentuan kategori diskon harus dilakukan manual, lebih lama, dan berisiko salah.</li>
//           <li>Error bisa terjadi jika tabel referensi tidak diurutkan secara ascending, karena parameter TRUE membutuhkan data yang terurut.</li>
//           <li>Gunakan absolute reference ($) agar rumus tetap bekerja saat disalin ke sel lain.</li>
//         </ul>
//       </div>

//       <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
//         Studi Kasus 2: HLOOKUP 
//       </h2>

//       {/* Paragraf Penjelasan HLOOKUP */}
//       <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4">
//         Budi adalah siswa SMP yang membantu panitia lomba sekolah untuk mencatat poin siswa berdasarkan hari lomba. Ia memiliki Tabel 3, 
//         yang berisi daftar nama siswa dan hari lomba yang mereka ikuti. Selain itu, ia juga memiliki Tabel 4, yang berisi daftar poin 
//         berdasarkan hari lomba. Budi ingin mengisi kolom <span className="font-semibold">"Poin"</span> pada Tabel 3 secara otomatis dengan menggunakan fungsi <span className="font-semibold">HLOOKUP</span> agar tidak perlu mencatat poin satu per satu secara manual.
//       </p>
//       <div className="flex flex-col items-center mt-2">
//         <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">Tabel 3. Daftar Peserta Lomba</p>
//         <div className="w-full overflow-x-auto">
//           <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-xs sm:text-sm">
//             <thead>
//               <tr className="bg-[#255F38] text-white">
//                 <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">No</th>
//                 <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Nama</th>
//                 <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Hari Lomba</th>
//                 <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Poin</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 [1, "Andi", "Senin", ""],
//                 [2, "Clara", "Selasa", ""],
//                 [3, "Dina", "Rabu", ""],
//                 [4, "Eko", "Senin", ""],
//                 [5, "Fira", "Rabu", ""],
//                 [6, "Gita", "Selasa", ""],
//               ].map((row, index) => (
//                 <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td key={i} className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">{cell}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic mt-4">Tabel 4. Daftar Poin Lomba</p>
//         <div className="w-full overflow-x-auto">
//           <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-xs sm:text-sm">
//             <thead>
//               <tr className="bg-[#255F38] text-white">
//                 <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">Hari</th>
//                 <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 text-black bg-white">Senin</td>
//                 <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 text-black bg-white">Selasa</td>
//                 <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 text-black bg-white">Rabu</td>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-green-50">
//                 <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white">Poin</th>
//                 <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">50</td>
//                 <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">30</td>
//                 <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2">20</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4 mt-6">
//         Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
//       </p>

//       {/* DEKOMPOSISI HLOOKUP */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
//           <Lightbulb className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> Dekomposisi
//         </div>
//         <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm">
//           <li>Budi ingin mengisi kolom "Poin" berdasarkan "Hari Lomba" yang diikuti siswa.</li>
//           <li>Ada dua tabel: <span className="font-semibold">Tabel 3</span> berisi daftar siswa dan hari lomba mereka, sedangkan <span className="font-semibold">Tabel 4</span> berisi daftar poin berdasarkan hari lomba.</li>
//           <li>Kita perlu mencocokkan hari lomba di Tabel 3 dengan daftar di Tabel 4 untuk mendapatkan poin yang benar.</li>
//         </ul>
//       </div>

//       {/* PENGENALAN POLA HLOOKUP */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
//           <BarChart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> PENGENALAN POLA
//         </div>
//         <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm">
//           <li>Setiap hari lomba di <span className="font-semibold">Tabel 3</span> bisa dicocokkan dengan poin yang tersedia di <span className="font-semibold">Tabel 4</span>.</li>
//           <li>Misalnya, jika hari lomba adalah <span className="font-semibold">Selasa</span>, maka poinnya adalah <span className="font-semibold">30</span>, karena di <span className="font-semibold">Tabel 4</span>, hari <span className="font-semibold">Selasa</span> punya poin <span className="font-semibold">30</span>.</li>
//           <li>Polanya adalah mencari hari lomba dalam baris pertama dan mengambil poin yang sesuai di baris berikutnya.</li>
//           <li><span className="font-semibold">Tabel 4 tidak diurutkan</span>, sehingga kita harus menggunakan pencarian persis dengan parameter <span className="font-semibold">FALSE</span> untuk memastikan hari lomba cocok.</li>
//         </ul>
//       </div>

//       {/* ABSTRAKSI HLOOKUP */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
//           <Filter className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ABSTRAKSI
//         </div>
//         <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm">
//           <li>Tidak perlu memperhatikan kolom <span className="font-semibold">Nama</span>, karena yang penting adalah mencocokkan <span className="font-semibold">Hari Lomba</span> dengan <span className="font-semibold">Poin</span>.</li>
//           <li>Fokus hanya pada dua elemen penting: <span className="font-semibold">Hari Lomba</span> di <span className="font-semibold">Tabel 3</span> dan <span className="font-semibold">Poin</span> di <span className="font-semibold">Tabel 4</span>.</li>
//           <li>Gunakan fungsi <span className="font-semibold">HLOOKUP</span> untuk menemukan poin yang sesuai tanpa harus mencarinya satu per satu.</li>
//           <li>Gunakan <span className="font-semibold">absolute reference ($)</span> pada tabel referensi agar referensi tetap saat rumus disalin ke sel lain.</li>
//         </ul>
//       </div>

//       {/* ALGORITMA HLOOKUP */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
//           <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ALGORITMA
//         </div>
//         <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm">
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
//             <code className="bg-gray-200 px-2 py-1 rounded text-xs sm:text-sm">=HLOOKUP(C3;$F$2:$I$3;2;FALSE)</code><br />
//             Tekan <span className="font-semibold">Enter</span> untuk menampilkan poin.
//           </li>
//           <li>
//             <span className="font-semibold">Terapkan ke seluruh tabel</span><br />
//             Tarik sel <span className="font-semibold">D3</span> ke bawah hingga <span className="font-semibold">D8</span> menggunakan tanda <span className="font-semibold">+</span>.
//           </li>
//         </ul>

//         <div className="flex justify-center">
//           <iframe
//             className="w-full sm:w-4/5 h-[300px] sm:h-[400px]"
//             style={{ border: "1px solid #e7e7e7" }}
//             frameBorder="0"
//             scrolling="no"
//             src="https://sheet.zohopublic.com/sheet/published/9f67vf01e540b5d434a64b456d58eede7235b?mode=embed"
//           ></iframe>
//         </div>
//       </div>

//       {/* KESIMPULAN DAN ANALISIS HLOOKUP */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
//           <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> KESIMPULAN & ANALISIS
//         </div>
//         <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-6">
//           Dengan HLOOKUP, Budi dapat mengisi poin lomba siswa secara otomatis, lebih cepat, dan mengurangi kesalahan pencocokan data.
//         </p>
//         <p className="text-gray-600 text-xs sm:text-sm font-semibold md:text-base">Analisis</p>
//         <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base mt-4 space-y-2">
//           <li>Tanpa HLOOKUP, pencocokan poin harus dilakukan manual, lebih lama, dan berisiko salah.</li>
//           <li>Error bisa terjadi jika hari lomba tidak ada dalam Tabel 4.</li>
//           <li>Gunakan absolute reference ($) agar rumus tetap bekerja saat disalin ke sel lain.</li>
//         </ul>
//       </div>

//       {/* Tombol Navigasi */}
//       <div className="flex flex-row justify-between mt-8 px-4">
//         <a
//           href="/pencarian-lookup"
//           className="bg-gray-500 text-white px-3 sm:px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-sm sm:text-base shadow-md"
//         >
//           ← Sebelumnya
//         </a>
//         <a
//           href="/pencarian-reference"
//           className="bg-green-800 text-white px-3 sm:px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base shadow-md"
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
import { useState } from "react";

const ContohLookup = () => {
  // State untuk input siswa
  const [inputs, setInputs] = useState({
    vlookup: {
      dekomposisi: [""],
      pengenalanPola: ["", ""],
      abstraksi: ["", ""],
    },
    hlookup: {
      dekomposisi: [""],
      pengenalanPola: ["", ""],
      abstraksi: ["", ""],
    },
  });

  // Jawaban benar untuk validasi
  const correctAnswers = {
    vlookup: {
      dekomposisi: ["Jumlah Pembelian"],
      pengenalanPola: ["Silver", "TRUE"],
      abstraksi: ["Nama", "VLOOKUP"],
    },
    hlookup: {
      dekomposisi: ["Kode"],
      pengenalanPola: ["2000", "FALSE"],
      abstraksi: ["Nama", "HLOOKUP"],
    },
  };

  // Handler untuk input siswa
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

  // State untuk langkah algoritma
  const [vlookupStep, setVlookupStep] = useState(0);
  const [hlookupStep, setHlookupStep] = useState(0);

  const vlookupAlgorithmSteps = [
    "Tentukan nilai referensi: Pilih sel C3 (Jumlah Pembelian) di Tabel 1 sebagai lookup_value.",
    "Pilih tabel referensi: Gunakan rentang $F$2:$G$6 di Tabel 2, dengan kolom pertama berisi Jumlah Pembelian.",
    "Tentukan nomor kolom: Gunakan 2 untuk kolom Kategori Diskon (col_index_num).",
    "Pilih metode pencarian: Gunakan TRUE karena tabel terurut, untuk pencarian nilai terdekat.",
    "Masukkan rumus: Di sel D3, ketik =VLOOKUP(C3;$F$2:$G$6;2;TRUE) dan tekan Enter.",
    "Salin rumus: Tarik sel D3 ke bawah hingga D8 untuk menerapkan ke semua baris.",
  ];

  const hlookupAlgorithmSteps = [
    "Tentukan nilai referensi: Pilih sel C2 (Kode) di Tabel 3 sebagai lookup_value.",
    "Pilih tabel referensi: Gunakan rentang $F$2:$I$3 di Tabel 4, dengan baris pertama berisi Kode.",
    "Tentukan nomor baris: Gunakan 2 untuk baris Harga (row_index_num).",
    "Pilih metode pencarian: Gunakan FALSE untuk pencarian persis, karena kode harus cocok tepat.",
    "Masukkan rumus: Di sel D2, ketik =HLOOKUP(C2;$F$2:$I$3;2;FALSE) dan tekan Enter.",
    "Salin rumus: Tarik sel D2 ke bawah hingga D4 untuk menerapkan ke semua baris.",
  ];

  // Handler untuk tombol langkah selanjutnya
  const handleNextStep = (section, currentStep, setStep, totalSteps) => {
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

  return (
    <Layout>
      {/* Header judul */}
      <div className="flex justify-center">
        <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg mx-4 w-full max-w-[calc(100%-2rem)]">
          CONTOH PENERAPAN FUNGSI LOOKUP
        </div>
      </div>

      {/* Instruksi untuk Siswa */}
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

      <h2 className="text-lg md:text-xl font-bold mt-10 mb-4 px-4 text-gray-800">
        Studi Kasus 1: VLOOKUP
      </h2>

      {/* Paragraf Penjelasan VLOOKUP */}
      <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4">
        Andi adalah seorang manajer toko yang ingin menentukan kategori diskon untuk pelanggan berdasarkan jumlah pembelian mereka menggunakan spreadsheet. Ia memiliki Tabel 1, 
        yang berisi daftar nama pelanggan dan jumlah pembelian mereka (dalam ribuan rupiah). Selain itu, ia juga memiliki Tabel 2, yang berisi rentang jumlah pembelian beserta kategori diskon yang sesuai. Andi ingin mengisi kolom <span className="font-semibold">"Kategori Diskon"</span> pada Tabel 1 secara otomatis dengan menggunakan fungsi <span className="font-semibold">VLOOKUP</span> dengan parameter <span className="font-semibold">TRUE</span> untuk pencarian perkiraan, karena tabel referensi sudah diurutkan.
      </p>
      <div className="flex flex-col items-center mt-2">
        <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">Tabel 1. Daftar Pembelian Pelanggan</p>
        <div className="w-full overflow-x-auto flex justify-center">
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">No</th>
                <th className="border border-green-600 px-4 py-2">Nama</th>
                <th className="border border-green-600 px-4 py-2">Jumlah Pembelian (Rp ribu)</th>
                <th className="border border-green-600 px-4 py-2">Kategori Diskon</th>
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
                <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                  {row.map((cell, i) => (
                    <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic mt-4">Tabel 2. Daftar Kategori Diskon</p>
        <div className="w-full overflow-x-auto flex justify-center">
          <table className="border-collapse border border-green-800 w-full md:w-1/3 text-center text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Jumlah Pembelian (Rp ribu)</th>
                <th className="border border-green-600 px-4 py-2">Kategori Diskon</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0", "Tidak Ada"],
                ["100.000", "Bronze"],
                ["300.000", "Silver"],
                ["500.000", "Gold"],
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

      <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* DEKOMPOSISI VLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> DEKOMPOSISI
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Identifikasi data yang dicari: Nilai referensi adalah "
            <input
              type="text"
              value={inputs.vlookup.dekomposisi[0]}
              onChange={(e) => handleInputChange("vlookup", "dekomposisi", 0, e.target.value)}
              onBlur={(e) => handleInputChange("vlookup", "dekomposisi", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.vlookup.dekomposisi[0].toLowerCase() === "jumlah pembelian" && inputs.vlookup.dekomposisi[0]
                  ? "border-green-500"
                  : inputs.vlookup.dekomposisi[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " di Tabel 1 (kolom C).
          </li>
          <li>
            Tentukan tabel referensi: Gunakan Tabel 2, rentang $F$2:$G$6, yang berisi jumlah pembelian dan kategori diskon.
          </li>
          <li>
            Pilih fungsi lookup: Gunakan VLOOKUP untuk mencari nilai secara vertikal dalam kolom pertama tabel referensi.
          </li>
        </ul>
      </div>

      {/* PENGENALAN POLA VLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> PENGENALAN POLA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Nilai referensi (Jumlah Pembelian) di Tabel 1 dicocokkan dengan kolom pertama Tabel 2.
          </li>
          <li>
            Misalnya, jumlah pembelian 450.000 menghasilkan kategori "
            <input
              type="text"
              value={inputs.vlookup.pengenalanPola[0]}
              onChange={(e) => handleInputChange("vlookup", "pengenalanPola", 0, e.target.value)}
              onBlur={(e) => handleInputChange("vlookup", "pengenalanPola", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.vlookup.pengenalanPola[0].toLowerCase() === "silver" && inputs.vlookup.pengenalanPola[0]
                  ? "border-green-500"
                  : inputs.vlookup.pengenalanPola[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            ", karena 450.000 berada di rentang 300.000–500.000.
          </li>
          <li>
            Tabel 2 terurut secara ascending, sehingga parameter range_lookup adalah "
            <input
              type="text"
              value={inputs.vlookup.pengenalanPola[1]}
              onChange={(e) => handleInputChange("vlookup", "pengenalanPola", 1, e.target.value)}
              onBlur={(e) => handleInputChange("vlookup", "pengenalanPola", 1, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.vlookup.pengenalanPola[1].toLowerCase() === "true" && inputs.vlookup.pengenalanPola[1]
                  ? "border-green-500"
                  : inputs.vlookup.pengenalanPola[1]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " untuk pencarian nilai terdekat.
          </li>
        </ul>
      </div>

      {/* ABSTRAKSI VLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ABSTRAKSI
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Abaikan kolom "
            <input
              type="text"
              value={inputs.vlookup.abstraksi[0]}
              onChange={(e) => handleInputChange("vlookup", "abstraksi", 0, e.target.value)}
              onBlur={(e) => handleInputChange("vlookup", "abstraksi", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.vlookup.abstraksi[0].toLowerCase() === "nama" && inputs.vlookup.abstraksi[0]
                  ? "border-green-500"
                  : inputs.vlookup.abstraksi[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " di Tabel 1, karena tidak diperlukan untuk pencarian.
          </li>
          <li>
            Fokus pada kolom Jumlah Pembelian (Tabel 1) dan Kategori Diskon (Tabel 2, kolom ke-2).
          </li>
          <li>
            Gunakan fungsi "
            <input
              type="text"
              value={inputs.vlookup.abstraksi[1]}
              onChange={(e) => handleInputChange("vlookup", "abstraksi", 1, e.target.value)}
              onBlur={(e) => handleInputChange("vlookup", "abstraksi", 1, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.vlookup.abstraksi[1].toLowerCase() === "vlookup" && inputs.vlookup.abstraksi[1]
                  ? "border-green-500"
                  : inputs.vlookup.abstraksi[1]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " untuk pencarian otomatis.
          </li>
          <li>
            Gunakan absolute reference ($F$2:$G$6) untuk menjaga referensi tabel tetap saat rumus disalin.
          </li>
        </ul>
      </div>

      {/* ALGORITMA VLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ALGORITMA
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base px-4 mt-2">
          Klik tombol di bawah untuk melihat langkah-langkah menggunakan VLOOKUP satu per satu!
        </p>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            <span className="font-semibold">Langkah {vlookupStep + 1} dari {vlookupAlgorithmSteps.length}</span>
            <br />
            {vlookupAlgorithmSteps[vlookupStep]}
          </li>
        </ul>
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => handlePreviousStep(vlookupStep, setVlookupStep)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-sm sm:text-base cursor-pointer"
          >
            Langkah Sebelumnya
          </button>
          <button
            onClick={() =>
              handleNextStep("vlookup", vlookupStep, setVlookupStep, vlookupAlgorithmSteps.length)
            }
            className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base cursor-pointer"
          >
            {vlookupStep < vlookupAlgorithmSteps.length - 1 ? "Langkah Selanjutnya" : "Ulangi"}
          </button>
        </div>

        <div className="flex justify-center mt-6">
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
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> KESIMPULAN & ANALISIS
        </div>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-6">
          Dengan VLOOKUP menggunakan parameter TRUE, Andi dapat menentukan kategori diskon pelanggan secara otomatis, lebih cepat, dan mengurangi kesalahan pencocokan data.
        </p>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base font-semibold">Analisis</p>
        <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base mt-4 space-y-2">
          <li>Tanpa VLOOKUP, penentuan kategori diskon harus dilakukan manual, lebih lama, dan berisiko salah.</li>
          <li>Error bisa terjadi jika tabel referensi tidak diurutkan secara ascending, karena parameter TRUE membutuhkan data yang terurut.</li>
          <li>Gunakan absolute reference ($) agar rumus tetap bekerja saat disalin ke sel lain.</li>
        </ul>
      </div>

      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 2: HLOOKUP
      </h2>

      {/* Paragraf Penjelasan HLOOKUP */}
      <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4">
        Budi adalah pegawai toko yang mencatat harga barang berdasarkan kode barang. Ia memiliki Tabel 3, 
        yang berisi daftar nama barang dan kode barang. Selain itu, ia memiliki Tabel 4, yang berisi daftar harga 
        berdasarkan kode barang. Budi ingin mengisi kolom <span className="font-semibold">"Harga"</span> pada Tabel 3 secara otomatis dengan menggunakan fungsi <span className="font-semibold">HLOOKUP</span> dengan parameter <span className="font-semibold">FALSE</span> untuk pencarian persis, karena kode barang harus cocok secara tepat.
      </p>
      <div className="flex flex-col items-center mt-2">
        <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic">Tabel 3. Daftar Barang</p>
        <div className="w-full overflow-x-auto flex justify-center">
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">No</th>
                <th className="border border-green-600 px-4 py-2">Nama</th>
                <th className="border border-green-600 px-4 py-2">Kode</th>
                <th className="border border-green-600 px-4 py-2">Harga</th>
              </tr>
            </thead>
            <tbody>
              {[
                [1, "Buku", "C001", "5000"],
                [2, "Pensil", "C002", ""],
                [3, "Pen", "C003", "3000"],
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

        <p className="text-gray-600 text-xs sm:text-sm text-center mb-2 italic mt-4">Tabel 4. Daftar Harga Barang</p>
        <div className="w-full overflow-x-auto flex justify-center">
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Kode</th>
                <td className="border border-green-600 px-4 py-2 text-black bg-white">C001</td>
                <td className="border border-green-600 px-4 py-2 text-black bg-white">C002</td>
                <td className="border border-green-600 px-4 py-2 text-black bg-white">C003</td>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <th className="border border-green-600 px-4 py-2 bg-[#255F38] text-white">Harga</th>
                <td className="border border-green-600 px-4 py-2">5000</td>
                <td className="border border-green-600 px-4 py-2">2000</td>
                <td className="border border-green-600 px-4 py-2">3000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* DEKOMPOSISI HLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Identifikasi data yang dicari: Nilai referensi adalah "
            <input
              type="text"
              value={inputs.hlookup.dekomposisi[0]}
              onChange={(e) => handleInputChange("hlookup", "dekomposisi", 0, e.target.value)}
              onBlur={(e) => handleInputChange("hlookup", "dekomposisi", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.hlookup.dekomposisi[0].toLowerCase() === "kode" && inputs.hlookup.dekomposisi[0]
                  ? "border-green-500"
                  : inputs.hlookup.dekomposisi[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " di Tabel 3 (kolom C).
          </li>
          <li>
            Tentukan tabel referensi: Gunakan Tabel 4, rentang $F$2:$I$3, yang berisi kode barang dan harga.
          </li>
          <li>
            Pilih fungsi lookup: Gunakan HLOOKUP untuk mencari nilai secara horizontal dalam baris pertama tabel referensi.
          </li>
        </ul>
      </div>

      {/* PENGENALAN POLA HLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> PENGENALAN POLA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Nilai referensi (Kode) di Tabel 3 dicocokkan dengan baris pertama Tabel 4.
          </li>
          <li>
            Misalnya, kode C002 menghasilkan harga "
            <input
              type="text"
              value={inputs.hlookup.pengenalanPola[0]}
              onChange={(e) => handleInputChange("hlookup", "pengenalanPola", 0, e.target.value)}
              onBlur={(e) => handleInputChange("hlookup", "pengenalanPola", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.hlookup.pengenalanPola[0].toLowerCase() === "2000" && inputs.hlookup.pengenalanPola[0]
                  ? "border-green-500"
                  : inputs.hlookup.pengenalanPola[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            ", sesuai dengan Tabel 4.
          </li>
          <li>
            Tabel 4 tidak terurut, sehingga parameter range_lookup adalah "
            <input
              type="text"
              value={inputs.hlookup.pengenalanPola[1]}
              onChange={(e) => handleInputChange("hlookup", "pengenalanPola", 1, e.target.value)}
              onBlur={(e) => handleInputChange("hlookup", "pengenalanPola", 1, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.hlookup.pengenalanPola[1].toLowerCase() === "false" && inputs.hlookup.pengenalanPola[1]
                  ? "border-green-500"
                  : inputs.hlookup.pengenalanPola[1]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " untuk pencarian persis.
          </li>
        </ul>
      </div>

      {/* ABSTRAKSI HLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ABSTRAKSI
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            Abaikan kolom "
            <input
              type="text"
              value={inputs.hlookup.abstraksi[0]}
              onChange={(e) => handleInputChange("hlookup", "abstraksi", 0, e.target.value)}
              onBlur={(e) => handleInputChange("hlookup", "abstraksi", 0, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.hlookup.abstraksi[0].toLowerCase() === "nama" && inputs.hlookup.abstraksi[0]
                  ? "border-green-500"
                  : inputs.hlookup.abstraksi[0]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " di Tabel 3, karena tidak diperlukan untuk pencarian.
          </li>
          <li>
            Fokus pada baris Kode (Tabel 4, baris 1) dan Harga (baris 2).
          </li>
          <li>
            Gunakan fungsi "
            <input
              type="text"
              value={inputs.hlookup.abstraksi[1]}
              onChange={(e) => handleInputChange("hlookup", "abstraksi", 1, e.target.value)}
              onBlur={(e) => handleInputChange("hlookup", "abstraksi", 1, e.target.value)}
              className={`border-2 rounded px-1 mx-1 text-xs sm:text-sm md:text-base ${
                inputs.hlookup.abstraksi[1].toLowerCase() === "hlookup" && inputs.hlookup.abstraksi[1]
                  ? "border-green-500"
                  : inputs.hlookup.abstraksi[1]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Isi jawaban"
            />
            " untuk pencarian otomatis.
          </li>
          <li>
            Gunakan absolute reference ($F$2:$I$3) untuk menjaga referensi tabel tetap saat rumus disalin.
          </li>
        </ul>
      </div>

      {/* ALGORITMA HLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> ALGORITMA
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base px-4 mt-2">
          Klik tombol di bawah untuk melihat langkah-langkah menggunakan HLOOKUP satu per satu!
        </p>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6 text-xs sm:text-sm md:text-base">
          <li>
            <span className="font-semibold">Langkah {hlookupStep + 1} dari {hlookupAlgorithmSteps.length}</span>
            <br />
            {hlookupAlgorithmSteps[hlookupStep]}
          </li>
        </ul>
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => handlePreviousStep(hlookupStep, setHlookupStep)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-sm sm:text-base cursor-pointer"
          >
            Langkah Sebelumnya
          </button>
          <button
            onClick={() =>
              handleNextStep("hlookup", hlookupStep, setHlookupStep, hlookupAlgorithmSteps.length)
            }
            className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base cursor-pointer"
          >
            {hlookupStep < hlookupAlgorithmSteps.length - 1 ? "Langkah Selanjutnya" : "Ulangi"}
          </button>
        </div>

        <div className="flex justify-center mt-6">
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
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-3 sm:px-5 py-2 rounded-t-lg text-base sm:text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> KESIMPULAN & ANALISIS
        </div>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-6">
          Dengan HLOOKUP menggunakan parameter FALSE, Budi dapat mengisi harga barang secara otomatis, lebih cepat, dan mengurangi kesalahan pencocokan data.
        </p>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base font-semibold">Analisis</p>
        <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base mt-4 space-y-2">
          <li>Tanpa HLOOKUP, pencocokan harga harus dilakukan manual, lebih lama, dan berisiko salah.</li>
          <li>Error bisa terjadi jika kode barang tidak ada dalam Tabel 4.</li>
          <li>Gunakan absolute reference ($) agar rumus tetap bekerja saat disalin ke sel lain.</li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex flex-row justify-between mt-8 px-4">
        <a
          href="/pencarian-lookup"
          className="bg-gray-500 text-white px-3 sm:px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-sm sm:text-base shadow-md cursor-pointer"
        >
          ← Sebelumnya
        </a>
        <a
          href="/pencarian-reference"
          className="bg-green-800 text-white px-3 sm:px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base shadow-md cursor-pointer"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default ContohLookup;
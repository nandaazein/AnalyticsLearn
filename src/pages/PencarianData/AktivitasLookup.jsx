// import { useState } from "react";
// import Layout from "../../components/Layout";

// const AktivitasPencarian = () => {
//   const [selectedFormula, setSelectedFormula] = useState(null);
//   const [formulaFeedback, setFormulaFeedback] = useState("");
//   const [stepOrder, setStepOrder] = useState("");
//   const [stepFeedback, setStepFeedback] = useState("");
//   const [indexFormula, setIndexFormula] = useState("");
//   const [matchFormula, setMatchFormula] = useState("");
//   const [chooseFormula, setChooseFormula] = useState("");
//   const [indexFeedback, setIndexFeedback] = useState("");
//   const [matchFeedback, setMatchFeedback] = useState("");
//   const [chooseFeedback, setChooseFeedback] = useState("");
//   const [isIndexCorrect, setIsIndexCorrect] = useState(null);
//   const [isMatchCorrect, setIsMatchCorrect] = useState(null);
//   const [isChooseCorrect, setIsChooseCorrect] = useState(null);

//   const correctFormula = "=VLOOKUP(B3;$E$2:$G$6;3;TRUE)";
//   const correctOrder = "4,1,3,2";
//   const correctIndex = "=INDEX(A2:D3;2;3)";
//   const correctMatch = "=MATCH(92;C2:C3;0)";
//   const correctChoose = "=CHOOSE(2;\"Ali\";\"Siti\";\"Budi\")";

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setSelectedFormula(e.dataTransfer.getData("text/plain"));
//     setFormulaFeedback("");
//   };

//   const checkFormula = () => {
//     const isCorrect = selectedFormula === correctFormula;
//     setFormulaFeedback(
//       isCorrect
//         ? "Jawaban benar! Formula ini mengecek status kelulusan berdasarkan nilai dengan pencarian lookup yang tepat."
//         : "Jawaban salah. Periksa fungsi lookup, range tabel, kolom hasil, dan tipe pencarian."
//     );
//   };

//   const checkStepOrder = () => {
//     const trimmedOrder = stepOrder.trim();
//     const isValid = /^\d(,\d)*$/.test(trimmedOrder);
//     if (!isValid) {
//       setStepFeedback("⚠️ Format tidak valid! Gunakan angka dan koma saja.");
//       return;
//     }
//     const isCorrect = trimmedOrder === correctOrder;
//     setStepFeedback(
//       isCorrect
//         ? "Jawaban benar! Urutan ini mencerminkan langkah logis penggunaan fungsi Lookup."
//         : "Jawaban salah. Pertimbangkan urutan logis langkah-langkah fungsi Lookup."
//     );
//   };

//   const clearInputsAndFeedback = (setInput, setFeedback, setCorrect) => {
//     setInput("");
//     setFeedback("");
//     setCorrect(null);
//   };

//   const checkIndex = () => {
//     const trimmed = indexFormula.trim().toLowerCase();
//     const isCorrect = trimmed === correctIndex.toLowerCase();
//     setIsIndexCorrect(isCorrect);
//     setIndexFeedback(
//       isCorrect
//         ? "Jawaban benar! Nilai 85 diambil dari baris ke-2, kolom ke-3 (Bahasa Inggris)."
//         : "❌ Jawaban salah. Pastikan range, baris, dan kolom pada fungsi INDEX sudah tepat."
//     );
//     if (isCorrect) {
//       setIndexFormula("85");
//     }
//   };

//   const checkMatch = () => {
//     const trimmed = matchFormula.trim().toLowerCase();
//     const isCorrect = trimmed === correctMatch.toLowerCase();
//     setIsMatchCorrect(isCorrect);
//     setMatchFeedback(
//       isCorrect
//         ? "Jawaban benar! Nilai 92 ada di posisi ke-2 dalam kolom Matematika."
//         : "Jawaban salah. Cek nilai yang dicari, range, dan tipe pencarian pada fungsi MATCH."
//     );
//   };

//   const checkChoose = () => {
//     const trimmed = chooseFormula.trim().toLowerCase();
//     const isCorrect = trimmed === correctChoose.toLowerCase();
//     setIsChooseCorrect(isCorrect);
//     setChooseFeedback(
//       isCorrect
//         ? "Jawaban benar! Pilihan ke-2 adalah Siti dari daftar."
//         : "Jawaban salah. Periksa indeks dan daftar nilai pada fungsi CHOOSE."
//     );
//   };

//   const formulas = [
//     "=HLOOKUP(B3;$E$2:$G$6;2;FALSE)",
//     "=HLOOKUP(B3;$E$2:$G$6;3;TRUE)",
//     "=VLOOKUP(B3;$E$2:$G$6;2;FALSE)",
//     "=VLOOKUP(B3;$E$2:$G$6;3;TRUE)",
//   ];

//   return (
//     <Layout>
//       <div className="p-2 sm:p-4 bg-[#255F38] mb-2 sm:mb-4 text-white font-bold text-sm sm:text-lg text-center rounded-lg shadow-lg">
//         AKTIVITAS PENCARIAN DATA
//       </div>

//       <div className="p-2 sm:p-6 bg-white">
//         {/* Petunjuk Umum */}
//         <section className="p-2 sm:p-4 bg-green-100 rounded shadow-md mb-2 sm:mb-6">
//           <h3 className="text-sm sm:text-lg font-semibold text-[#255F38] mb-2">Petunjuk Umum</h3>
//           <ol className="list-decimal list-inside text-gray-700 space-y-1 text-xs sm:text-sm md:text-base">
//             <li>Halaman ini terdiri dari lima soal yang masing-masing menguji pemahaman Anda tentang fungsi pencarian data.</li>
//             <li>Setiap soal memiliki kolom masukan untuk menjawab, tombol Periksa untuk memeriksa jawaban, dan tombol Hapus untuk mengosongkan jawaban jika ingin mencoba lagi.</li>
//             <li>Bacalah soal dengan cermat, masukkan jawaban Anda, dan periksa hasilnya untuk mendapatkan umpan balik.</li>
//           </ol>
//         </section>

//         {/* Soal 1 */}
//         <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
//           <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700 flex items-center">
//             <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">1.</span>
//             Seret dan jatuhkan formula HLOOKUP yang tepat ke dalam kotak di bawah ini untuk mencari status kelulusan siswa Ani berdasarkan nilainya (85), lalu seret rumus tersebut ke bawah untuk secara otomatis mengisi status kelulusan siswa lainnya sesuai dengan nilai mereka menggunakan data dari Tabel 2.
//           </p>
//           <iframe
//             width="100%"
//             height="400 sm:400"
//             className="border border-gray-300 mb-2 sm:mb-4 rounded-lg w-full"
//             src="https://sheet.zohopublic.com/sheet/published/190uf9b625cb387f54e89be6b3df5fe95c4d7?mode=embed"
//           />
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 px-2 sm:px-4">
//             {formulas.map((f, i) => (
//               <div
//                 key={i}
//                 draggable
//                 onDragStart={(e) => e.dataTransfer.setData("text/plain", f)}
//                 className="p-2 bg-green-100 border border-green-500 rounded-lg text-center cursor-pointer text-xs sm:text-sm"
//               >
//                 {f}
//               </div>
//             ))}
//           </div>
//           <div
//             onDrop={handleDrop}
//             onDragOver={(e) => e.preventDefault()}
//             className="w-full sm:w-80 h-12 sm:h-16 mx-auto mt-2 sm:mt-4 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg text-xs sm:text-sm"
//           >
//             {selectedFormula || <span className="text-gray-400">Drop formula di sini</span>}
//           </div>
//           <div className="text-center mt-2 sm:mt-2">
//             <button
//               onClick={checkFormula}
//               className="ml-2 px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
//             >
//               Periksa
//             </button>
//             <button
//               onClick={() => clearInputsAndFeedback(setSelectedFormula, setFormulaFeedback, setIsIndexCorrect)}
//               className="ml-2 px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
//             >
//               Hapus
//             </button>
//             {formulaFeedback && (
//               <p className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
//                 formulaFeedback.includes("benar")
//                   ? "bg-[#C8E6C9] text-[#1B5E20]"
//                   : "bg-[#FFEBEE] text-[#D32F2F]"
//               }`}>
//                 {formulaFeedback}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Soal 2 */}
//         <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
//           <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700 flex items-center">
//             <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">2.</span>
//             Urutkan langkah-langkah penggunaan fungsi Lookup berikut ini:
//           </p>
//           <div className="overflow-x-auto px-2 sm:px-4 mb-2 sm:mb-2">
//             <table className="w-full border border-gray-400 text-xs sm:text-sm text-gray-800 mt-2 rounded-lg">
//               <thead>
//                 <tr className="bg-gray-200 text-black">
//                   <th className="border p-1 sm:p-2 w-8"></th>
//                   <th className="border p-1 sm:p-2 text-center font-bold">A</th>
//                   <th className="border p-1 sm:p-2 text-center font-bold">B</th>
//                 </tr>
//                 <tr className="bg-[#255F38] text-white">
//                   <th className="border p-1 sm:p-2 text-center font-bold bg-gray-200 text-black">1</th>
//                   <th className="border p-1 sm:p-2 text-center font-bold">No</th>
//                   <th className="border p-1 sm:p-2">Langkah</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="bg-white">
//                   <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">2</td>
//                   <td className="border p-1 sm:p-2 text-center">1</td>
//                   <td className="border p-1 sm:p-2">Tentukan tabel referensi (table array).</td>
//                 </tr>
//                 <tr className="bg-white">
//                   <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">3</td>
//                   <td className="border p-1 sm:p-2 text-center">2</td>
//                   <td className="border p-1 sm:p-2">Tentukan tipe pencarian: tepat (FALSE) atau mendekati (TRUE).</td>
//                 </tr>
//                 <tr className="bg-white">
//                   <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">4</td>
//                   <td className="border p-1 sm:p-2 text-center">3</td>
//                   <td className="border p-1 sm:p-2">Tentukan kolom hasil pencarian.</td>
//                 </tr>
//                 <tr className="bg-white">
//                   <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">5</td>
//                   <td className="border p-1 sm:p-2 text-center">4</td>
//                   <td className="border p-1 sm:p-2">Tentukan nilai yang ingin dicari (lookup value).</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="flex flex-col sm:flex-row items-center px-2 sm:px-4 mb-2 sm:mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
//             <input
//               type="text"
//               value={stepOrder}
//               onChange={(e) => setStepOrder(e.target.value)}
//               className="border p-2 w-full sm:w-40 rounded-lg text-center text-xs sm:text-sm"
//               placeholder="Contoh: 1,2,3,4"
//             />
//             <div className="flex space-x-2">
//               <button
//                 onClick={checkStepOrder}
//                 className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
//               >
//                 Periksa
//               </button>
//               <button
//                 onClick={() => clearInputsAndFeedback(setStepOrder, setStepFeedback, setIsIndexCorrect)}
//                 className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
//               >
//                 Hapus
//               </button>
//             </div>
//           </div>
//           {stepFeedback && (
//             <p className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
//               stepFeedback.includes("benar")
//                 ? "bg-[#C8E6C9] text-[#1B5E20]"
//                 : "bg-[#FFEBEE] text-[#D32F2F]"
//               }`}>
//               {stepFeedback}
//             </p>
//           )}
//         </div>

//         {/* Soal 3 */}
//         <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
//           <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700 flex items-center">
//             <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">3.</span>
//             Tuliskan fungsi INDEX untuk menampilkan nilai dari baris ke-2 dan kolom ke-3 dari tabel berikut:
//           </p>
//           <div className="overflow-x-auto px-2 sm:px-4 mt-2 mb-2 sm:mb-4">
//             <table className="w-full border text-xs sm:text-sm border-gray-400 text-gray-800 rounded-lg">
//               <thead>
//                 <tr className="bg-gray-200 text-black">
//                   <th className="border p-1 sm:p-2 w-8"></th>
//                   <th className="border p-1 sm:p-2 text-center font-bold">A</th>
//                   <th className="border p-1 sm:p-2 text-center font-bold">B</th>
//                   <th className="border p-1 sm:p-2 text-center font-bold">C</th>
//                   <th className="border p-1 sm:p-2 text-center font-bold">D</th>
//                 </tr>
//                 <tr className="bg-[#255F38] text-white">
//                   <th className="border p-1 sm:p-2 text-center font-bold bg-gray-200 text-black">1</th>
//                   <th className="border p-1 sm:p-2 text-center font-bold">No</th>
//                   <th className="border p-1 sm:p-2">Nama</th>
//                   <th className="border p-1 sm:p-2">Matematika</th>
//                   <th className="border p-1 sm:p-2">Bahasa Inggris</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="bg-white">
//                   <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">2</td>
//                   <td className="border p-1 sm:p-2 text-center">1</td>
//                   <td className="border p-1 sm:p-2">Ali</td>
//                   <td className="border p-1 sm:p-2">90</td>
//                   <td className="border p-1 sm:p-2">88</td>
//                 </tr>
//                 <tr className="bg-white">
//                   <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">3</td>
//                   <td className="border p-1 sm:p-2 text-center">2</td>
//                   <td className="border p-1 sm:p-2">Siti</td>
//                   <td className="border p-1 sm:p-2">92</td>
//                   <td className="border p-1 sm:p-2">{isIndexCorrect ? "85" : ""}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="flex flex-col sm:flex-row items-center px-2 sm:px-4 mb-2 sm:mb-2 space-y-2 sm:space-y-0 sm:space-x-2">
//             <input
//               type="text"
//               value={indexFormula}
//               onChange={(e) => setIndexFormula(e.target.value)}
//               className="border p-2 rounded-lg w-full sm:max-w-md text-xs sm:text-sm"
//               placeholder="Misal: =INDEX(...)"
//             />
//             <div className="flex space-x-2">
//               <button
//                 onClick={checkIndex}
//                 className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
//               >
//                 Periksa
//               </button>
//               <button
//                 onClick={() => clearInputsAndFeedback(setIndexFormula, setIndexFeedback, setIsIndexCorrect)}
//                 className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
//               >
//                 Hapus
//               </button>
//             </div>
//           </div>
//           {indexFeedback && (
//             <p className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
//               indexFeedback.includes("benar")
//                 ? "bg-[#C8E6C9] text-[#1B5E20]"
//                 : "bg-[#FFEBEE] text-[#D32F2F]"
//               }`}>
//               {indexFeedback}
//             </p>
//           )}
//         </div>

//         {/* Soal 4 */}
//         <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
//           <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700 flex items-center">
//             <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">4.</span>
//             Tuliskan fungsi MATCH untuk menemukan posisi nilai 92 pada kolom Matematika berikut:
//           </p>
//           <div className="overflow-x-auto px-2 sm:px-4 mt-2 mb-2 sm:mb-4">
//             <table className="w-full border text-xs sm:text-sm border-gray-400 text-gray-800 rounded-lg">
//               <thead>
//                 <tr className="bg-gray-200 text-black">
//                   <th className="border p-1 sm:p-2 w-8"></th>
//                   <th className="border p-1 sm:p-2 text-center font-bold">A</th>
//                   <th className="border p-1 sm:p-2 text-center font-bold">B</th>
//                   <th className="border p-1 sm:p-2 text-center font-bold">C</th>
//                 </tr>
//                 <tr className="bg-[#255F38] text-white">
//                   <th className="border p-1 sm:p-2 text-center font-bold bg-gray-200 text-black">1</th>
//                   <th className="border p-1 sm:p-2 text-center font-bold">No</th>
//                   <th className="border p-1 sm:p-2">Nama</th>
//                   <th className="border p-1 sm:p-2">Matematika</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="bg-white">
//                   <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">2</td>
//                   <td className="border p-1 sm:p-2 text-center">2</td>
//                   <td className="border p-1 sm:p-2">Ali</td>
//                   <td className="border p-1 sm:p-2">90</td>
//                 </tr>
//                 <tr className="bg-white">
//                   <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">3</td>
//                   <td className="border p-1 sm:p-2 text-center">3</td>
//                   <td className="border p-1 sm:p-2">Siti</td>
//                   <td className="border p-1 sm:p-2">{isMatchCorrect ? "92 ✅ Posisi: 2" : "92"}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="flex flex-col sm:flex-row items-center px-2 sm:px-4 mb-2 sm:mb-2 space-y-2 sm:space-y-0 sm:space-x-2">
//             <input
//               type="text"
//               value={matchFormula}
//               onChange={(e) => setMatchFormula(e.target.value)}
//               className="border p-2 rounded-lg w-full sm:max-w-md text-xs sm:text-sm"
//               placeholder="Misal: =MATCH(...)"
//             />
//             <div className="flex space-x-2">
//               <button
//                 onClick={checkMatch}
//                 className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
//               >
//                 Periksa
//               </button>
//               <button
//                 onClick={() => clearInputsAndFeedback(setMatchFormula, setMatchFeedback, setIsMatchCorrect)}
//                 className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
//               >
//                 Hapus
//               </button>
//             </div>
//           </div>
//           {matchFeedback && (
//             <p className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
//               matchFeedback.includes("benar")
//                 ? "bg-[#C8E6C9] text-[#1B5E20]"
//                 : "bg-[#FFEBEE] text-[#D32F2F]"
//               }`}>
//               {matchFeedback}
//             </p>
//           )}
//         </div>

//         {/* Soal 5 */}
//         <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
//           <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700 flex items-center">
//             <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">5.</span>
//             Tuliskan fungsi CHOOSE untuk memilih siswa ke-2 dari daftar berikut: Ali, Siti, Budi.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center px-2 sm:px-4 mb-2 sm:mb-2 space-y-2 sm:space-y-0 sm:space-x-2">
//             <input
//               type="text"
//               value={chooseFormula}
//               onChange={(e) => setChooseFormula(e.target.value)}
//               className="border p-2 rounded-lg w-full sm:max-w-md text-xs sm:text-sm"
//               placeholder="Misal: =CHOOSE(...)"
//             />
//             <div className="flex space-x-2">
//               <button
//                 onClick={checkChoose}
//                 className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
//               >
//                 Periksa
//               </button>
//               <button
//                 onClick={() => clearInputsAndFeedback(setChooseFormula, setChooseFeedback, setIsChooseCorrect)}
//                 className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
//               >
//                 Hapus
//               </button>
//             </div>
//           </div>
//           {chooseFeedback && (
//             <p className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
//               chooseFeedback.includes("benar")
//                 ? "bg-[#C8E6C9] text-[#1B5E20]"
//                 : "bg-[#FFEBEE] text-[#D32F2F]"
//               }`}>
//               {chooseFeedback}
//             </p>
//           )}
//         </div>

//         {/* Tombol Navigasi */}
//         <div className="flex justify-between mt-4 sm:mt-8 px-2 sm:px-4">
//           <button
//             onClick={() => (window.location.href = "/contoh-reference")}
//             className="px-3 sm:px-5 py-1 sm:py-2 text-xs sm:text-base text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 cursor-pointer"
//           >
//             ← Sebelumnya
//           </button>
//           <button
//             onClick={() => (window.location.href = "/berlatih-lookup")}
//             className="px-3 sm:px-5 py-1 sm:py-2 text-xs sm:text-base text-white transition duration-300 bg-[#255F38] rounded-lg shadow-md hover:bg-green-700 cursor-pointer"
//           >
//             Selanjutnya →
//           </button>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AktivitasPencarian;

import { useState } from "react";
import Layout from "../../components/Layout";

const AktivitasPencarian = () => {
  const [selectedFormula, setSelectedFormula] = useState(null);
  const [formulaFeedback, setFormulaFeedback] = useState("");
  const [stepOrder, setStepOrder] = useState("");
  const [stepFeedback, setStepFeedback] = useState("");
  const [indexFormula, setIndexFormula] = useState("");
  const [matchFormula, setMatchFormula] = useState("");
  const [chooseFormula, setChooseFormula] = useState("");
  const [indexFeedback, setIndexFeedback] = useState("");
  const [matchFeedback, setMatchFeedback] = useState("");
  const [chooseFeedback, setChooseFeedback] = useState("");
  const [isIndexCorrect, setIsIndexCorrect] = useState(null);
  const [isMatchCorrect, setIsMatchCorrect] = useState(null);
  const [isChooseCorrect, setIsChooseCorrect] = useState(null);

  const correctFormula = "=VLOOKUP(B3;$E$2:$G$6;3;TRUE)";
  const correctOrder = "4,1,3,2";
  const correctIndex = "=INDEX(A2:D3;2;3)";
  const correctMatch = "=MATCH(92;C2:C3;0)";
  const correctChoose = '=CHOOSE(2;"Ali";"Siti";"Budi")';

  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedFormula(e.dataTransfer.getData("text/plain"));
    setFormulaFeedback("");
  };

  const checkFormula = () => {
    const isCorrect = selectedFormula === correctFormula;
    setFormulaFeedback(
      isCorrect
        ? "Jawaban benar! Formula ini mengecek status kelulusan berdasarkan nilai dengan pencarian lookup yang tepat."
        : "Jawaban salah. Periksa fungsi lookup, range tabel, kolom hasil, dan tipe pencarian."
    );
  };

  const checkStepOrder = () => {
    const trimmedOrder = stepOrder.trim();
    const isValid = /^\d(,\d)*$/.test(trimmedOrder);
    if (!isValid) {
      setStepFeedback("⚠️ Format tidak valid! Gunakan angka dan koma saja.");
      return;
    }
    const isCorrect = trimmedOrder === correctOrder;
    setStepFeedback(
      isCorrect
        ? "Jawaban benar! Urutan ini mencerminkan langkah logis penggunaan fungsi Lookup."
        : "Jawaban salah. Pertimbangkan urutan logis langkah-langkah fungsi Lookup."
    );
  };

  const clearInputsAndFeedback = (setInput, setFeedback, setCorrect) => {
    setInput("");
    setFeedback("");
    setCorrect(null);
  };

  const checkIndex = () => {
    const trimmed = indexFormula.trim().toLowerCase();
    const isCorrect = trimmed === correctIndex.toLowerCase();
    setIsIndexCorrect(isCorrect);
    setIndexFeedback(
      isCorrect
        ? "Jawaban benar! Nilai 85 diambil dari baris ke-2, kolom ke-3 (Bahasa Inggris)."
        : "❌ Jawaban salah. Pastikan range, baris, dan kolom pada fungsi INDEX sudah tepat."
    );
    if (isCorrect) {
      setIndexFormula("85");
    }
  };

  const checkMatch = () => {
    const trimmed = matchFormula.trim().toLowerCase();
    const isCorrect = trimmed === correctMatch.toLowerCase();
    setIsMatchCorrect(isCorrect);
    setMatchFeedback(
      isCorrect
        ? "Jawaban benar! Nilai 92 ada di posisi ke-2 dalam kolom Matematika."
        : "Jawaban salah. Cek nilai yang dicari, range, dan tipe pencarian pada fungsi MATCH."
    );
  };

  const checkChoose = () => {
    const trimmed = chooseFormula.trim().toLowerCase();
    const isCorrect = trimmed === correctChoose.toLowerCase();
    setIsChooseCorrect(isCorrect);
    setChooseFeedback(
      isCorrect
        ? "Jawaban benar! Pilihan ke-2 adalah Siti dari daftar."
        : "Jawaban salah. Periksa indeks dan daftar nilai pada fungsi CHOOSE."
    );
  };

  const formulas = [
    "=HLOOKUP(B3;$E$2:$G$6;2;FALSE)",
    "=HLOOKUP(B3;$E$2:$G$6;3;TRUE)",
    "=VLOOKUP(B3;$E$2:$G$6;2;FALSE)",
    "=VLOOKUP(B3;$E$2:$G$6;3;TRUE)",
  ];

  return (
    <Layout>
      <div className="border-4 border-[#255F38] p-4 rounded-lg">
        <div className="p-2 sm:p-4 bg-[#255F38] mb-2 sm:mb-4 text-white font-bold text-sm sm:text-lg text-center rounded-lg shadow-lg">
          AKTIVITAS PENCARIAN DATA
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
                pemahaman Anda tentang fungsi pencarian data.
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

          {/* Soal 1 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">
                1.
              </span>
              Seret dan jatuhkan formula HLOOKUP yang tepat ke dalam kotak di
              bawah ini untuk mencari status kelulusan siswa Ani berdasarkan
              nilainya (85), lalu seret rumus tersebut ke bawah untuk secara
              otomatis mengisi status kelulusan siswa lainnya sesuai dengan
              nilai mereka menggunakan data dari Tabel 2.
            </p>
            <iframe
              width="100%"
              height="400 sm:400"
              className="border border-gray-300 mb-2 sm:mb-4 rounded-lg w-full"
              src="https://sheet.zohopublic.com/sheet/published/190uf9b625cb387f54e89be6b3df5fe95c4d7?mode=embed"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 px-2 sm:px-4">
              {formulas.map((f, i) => (
                <div
                  key={i}
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData("text/plain", f)}
                  className="p-2 bg-green-100 border border-green-500 rounded-lg text-center cursor-pointer text-xs sm:text-sm"
                >
                  {f}
                </div>
              ))}
            </div>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="w-full sm:w-80 h-12 sm:h-16 mx-auto mt-2 sm:mt-4 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg text-xs sm:text-sm"
            >
              {selectedFormula || (
                <span className="text-gray-400">Drop formula di sini</span>
              )}
            </div>
            <div className="text-center mt-2 sm:mt-2">
              <button
                onClick={checkFormula}
                className="ml-2 px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
              >
                Periksa
              </button>
              <button
                onClick={() =>
                  clearInputsAndFeedback(
                    setSelectedFormula,
                    setFormulaFeedback,
                    setIsIndexCorrect
                  )
                }
                className="ml-2 px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
              >
                Hapus
              </button>
              {formulaFeedback && (
                <p
                  className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                    formulaFeedback.includes("benar")
                      ? "bg-[#C8E6C9] text-[#1B5E20]"
                      : "bg-[#FFEBEE] text-[#D32F2F]"
                  }`}
                >
                  {formulaFeedback}
                </p>
              )}
            </div>
          </div>

          {/* Soal 2 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">
                2.
              </span>
              Urutkan langkah-langkah penggunaan fungsi Lookup berikut ini:
            </p>
            <div className="overflow-x-auto px-2 sm:px-4 mb-2 sm:mb-2">
              <table className="w-full border border-gray-400 text-xs sm:text-sm text-gray-800 mt-2 rounded-lg">
                <thead>
                  <tr className="bg-gray-200 text-black">
                    <th className="border p-1 sm:p-2 w-8"></th>
                    <th className="border p-1 sm:p-2 text-center font-bold">
                      A
                    </th>
                    <th className="border p-1 sm:p-2 text-center font-bold">
                      B
                    </th>
                  </tr>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border p-1 sm:p-2 text-center font-bold bg-gray-200 text-black">
                      1
                    </th>
                    <th className="border p-1 sm:p-2 text-center font-bold">
                      No
                    </th>
                    <th className="border p-1 sm:p-2">Langkah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">
                      2
                    </td>
                    <td className="border p-1 sm:p-2 text-center">1</td>
                    <td className="border p-1 sm:p-2">
                      Tentukan tabel referensi (table array).
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">
                      3
                    </td>
                    <td className="border p-1 sm:p-2 text-center">2</td>
                    <td className="border p-1 sm:p-2">
                      Tentukan tipe pencarian: tepat (FALSE) atau mendekati
                      (TRUE).
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">
                      4
                    </td>
                    <td className="border p-1 sm:p-2 text-center">3</td>
                    <td className="border p-1 sm:p-2">
                      Tentukan kolom hasil pencarian.
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">
                      5
                    </td>
                    <td className="border p-1 sm:p-2 text-center">4</td>
                    <td className="border p-1 sm:p-2">
                      Tentukan nilai yang ingin dicari (lookup value).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row items-center px-2 sm:px-4 mb-2 sm:mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="text"
                value={stepOrder}
                onChange={(e) => setStepOrder(e.target.value)}
                className="border p-2 w-full sm:w-40 rounded-lg text-center text-xs sm:text-sm"
                placeholder="Contoh: 1,2,3,4"
              />
              <div className="flex space-x-2">
                <button
                  onClick={checkStepOrder}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Periksa
                </button>
                <button
                  onClick={() =>
                    clearInputsAndFeedback(
                      setStepOrder,
                      setStepFeedback,
                      setIsIndexCorrect
                    )
                  }
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Hapus
                </button>
              </div>
            </div>
            {stepFeedback && (
              <p
                className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                  stepFeedback.includes("benar")
                    ? "bg-[#C8E6C9] text-[#1B5E20]"
                    : "bg-[#FFEBEE] text-[#D32F2F]"
                }`}
              >
                {stepFeedback}
              </p>
            )}
          </div>

          {/* Soal 3 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">
                3.
              </span>
              Tuliskan fungsi INDEX untuk menampilkan nilai dari baris ke-2 dan
              kolom ke-3 dari tabel berikut:
            </p>
            <div className="overflow-x-auto px-2 sm:px-4 mt-2 mb-2 sm:mb-4">
              <table className="w-full border text-xs sm:text-sm border-gray-400 text-gray-800 rounded-lg">
                <thead>
                  <tr className="bg-gray-200 text-black">
                    <th className="border p-1 sm:p-2 w-8"></th>
                    <th className="border p-1 sm:p-2 text-center font-bold">
                      A
                    </th>
                    <th className="border p-1 sm:p-2 text-center font-bold">
                      B
                    </th>
                    <th className="border p-1 sm:p-2 text-center font-bold">
                      C
                    </th>
                    <th className="border p-1 sm:p-2 text-center font-bold">
                      D
                    </th>
                  </tr>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border p-1 sm:p-2 text-center font-bold bg-gray-200 text-black">
                      1
                    </th>
                    <th className="border p-1 sm:p-2 text-center font-bold">
                      No
                    </th>
                    <th className="border p-1 sm:p-2">Nama</th>
                    <th className="border p-1 sm:p-2">Matematika</th>
                    <th className="border p-1 sm:p-2">Bahasa Inggris</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">
                      2
                    </td>
                    <td className="border p-1 sm:p-2 text-center">1</td>
                    <td className="border p-1 sm:p-2">Ali</td>
                    <td className="border p-1 sm:p-2">90</td>
                    <td className="border p-1 sm:p-2">88</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">
                      3
                    </td>
                    <td className="border p-1 sm:p-2 text-center">2</td>
                    <td className="border p-1 sm:p-2">Siti</td>
                    <td className="border p-1 sm:p-2">92</td>
                    <td className="border p-1 sm:p-2">
                      {isIndexCorrect ? "85" : ""}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row items-center px-2 sm:px-4 mb-2 sm:mb-2 space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="text"
                value={indexFormula}
                onChange={(e) => setIndexFormula(e.target.value)}
                className="border p-2 rounded-lg w-full sm:max-w-md text-xs sm:text-sm"
                placeholder="Misal: =INDEX(...)"
              />
              <div className="flex space-x-2">
                <button
                  onClick={checkIndex}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Periksa
                </button>
                <button
                  onClick={() =>
                    clearInputsAndFeedback(
                      setIndexFormula,
                      setIndexFeedback,
                      setIsIndexCorrect
                    )
                  }
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Hapus
                </button>
              </div>
            </div>
            {indexFeedback && (
              <p
                className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                  indexFeedback.includes("benar")
                    ? "bg-[#C8E6C9] text-[#1B5E20]"
                    : "bg-[#FFEBEE] text-[#D32F2F]"
                }`}
              >
                {indexFeedback}
              </p>
            )}
          </div>

          {/* Soal 4 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">
                4.
              </span>
              Tuliskan fungsi MATCH untuk menemukan posisi nilai 92 pada kolom
              Matematika berikut:
            </p>
            <div className="overflow-x-auto px-2 sm:px-4 mt-2 mb-2 sm:mb-4">
              <table className="w-full border text-xs sm:text-sm border-gray-400 text-gray-800 rounded-lg">
                <thead>
                  <tr className="bg-gray-200 text-black">
                    <th className="border p-1 sm:p-2 w-8"></th>
                    <th className="border p-1 sm:p-2 text-center font-bold">
                      A
                    </th>
                    <th className="border p-1 sm:p-2 text-center font-bold">
                      B
                    </th>
                    <th className="border p-1 sm:p-2 text-center font-bold">
                      C
                    </th>
                  </tr>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border p-1 sm:p-2 text-center font-bold bg-gray-200 text-black">
                      1
                    </th>
                    <th className="border p-1 sm:p-2 text-center font-bold">
                      No
                    </th>
                    <th className="border p-1 sm:p-2">Nama</th>
                    <th className="border p-1 sm:p-2">Matematika</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">
                      2
                    </td>
                    <td className="border p-1 sm:p-2 text-center">2</td>
                    <td className="border p-1 sm:p-2">Ali</td>
                    <td className="border p-1 sm:p-2">90</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-1 sm:p-2 text-center bg-gray-200 font-bold text-black">
                      3
                    </td>
                    <td className="border p-1 sm:p-2 text-center">3</td>
                    <td className="border p-1 sm:p-2">Siti</td>
                    <td className="border p-1 sm:p-2">
                      {isMatchCorrect ? "92 ✅ Posisi: 2" : "92"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row items-center px-2 sm:px-4 mb-2 sm:mb-2 space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="text"
                value={matchFormula}
                onChange={(e) => setMatchFormula(e.target.value)}
                className="border p-2 rounded-lg w-full sm:max-w-md text-xs sm:text-sm"
                placeholder="Misal: =MATCH(...)"
              />
              <div className="flex space-x-2">
                <button
                  onClick={checkMatch}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Periksa
                </button>
                <button
                  onClick={() =>
                    clearInputsAndFeedback(
                      setMatchFormula,
                      setMatchFeedback,
                      setIsMatchCorrect
                    )
                  }
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Hapus
                </button>
              </div>
            </div>
            {matchFeedback && (
              <p
                className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                  matchFeedback.includes("benar")
                    ? "bg-[#C8E6C9] text-[#1B5E20]"
                    : "bg-[#FFEBEE] text-[#D32F2F]"
                }`}
              >
                {matchFeedback}
              </p>
            )}
          </div>

          {/* Soal 5 */}
          <div className="p-2 sm:p-6 mb-2 sm:mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
            <p className="px-2 sm:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700 flex items-center">
              <span className="text-sm sm:text-lg font-bold text-green-700 mr-2">
                5.
              </span>
              Tuliskan fungsi CHOOSE untuk memilih siswa ke-2 dari daftar
              berikut: Ali, Siti, Budi.
            </p>
            <div className="flex flex-col sm:flex-row items-center px-2 sm:px-4 mb-2 sm:mb-2 space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="text"
                value={chooseFormula}
                onChange={(e) => setChooseFormula(e.target.value)}
                className="border p-2 rounded-lg w-full sm:max-w-md text-xs sm:text-sm"
                placeholder="Misal: =CHOOSE(...)"
              />
              <div className="flex space-x-2">
                <button
                  onClick={checkChoose}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Periksa
                </button>
                <button
                  onClick={() =>
                    clearInputsAndFeedback(
                      setChooseFormula,
                      setChooseFeedback,
                      setIsChooseCorrect
                    )
                  }
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-xs sm:text-base cursor-pointer"
                >
                  Hapus
                </button>
              </div>
            </div>
            {chooseFeedback && (
              <p
                className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                  chooseFeedback.includes("benar")
                    ? "bg-[#C8E6C9] text-[#1B5E20]"
                    : "bg-[#FFEBEE] text-[#D32F2F]"
                }`}
              >
                {chooseFeedback}
              </p>
            )}
          </div>

          {/* Tombol Navigasi */}
          <div className="flex justify-between mt-4 sm:mt-8 px-2 sm:px-4">
            <button
              onClick={() => (window.location.href = "/contoh-reference")}
              className="px-3 sm:px-5 py-1 sm:py-2 text-xs sm:text-base text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 cursor-pointer"
            >
              ← Sebelumnya
            </button>
            <button
              onClick={() => (window.location.href = "/berlatih-lookup")}
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

export default AktivitasPencarian;

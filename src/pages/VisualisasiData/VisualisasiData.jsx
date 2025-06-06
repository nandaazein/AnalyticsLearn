// import { useState } from "react";
// import Layout from "../../components/Layout";
// import SimpleChart from "../../components/SimpleChart";

// export default function VisualisasiData() {
//   // State untuk Aktivitas Dekomposisi
//   const [dekomposisiAnswers, setDekomposisiAnswers] = useState({
//     step1: false,
//     step2: false,
//     step3: false,
//     step4: false,
//   });
//   const [dekomposisiFeedback, setDekomposisiFeedback] = useState("");
//   const [dekomposisiAnswered, setDekomposisiAnswered] = useState(false);

//   const handleDekomposisiChange = (step) => {
//     setDekomposisiAnswers((prev) => ({ ...prev, [step]: !prev[step] }));
//   };

//   const checkDekomposisiAnswers = () => {
//     const correctAnswers = { step1: true, step2: true, step3: true, step4: false };
//     const isCorrect =
//       dekomposisiAnswers.step1 === correctAnswers.step1 &&
//       dekomposisiAnswers.step2 === correctAnswers.step2 &&
//       dekomposisiAnswers.step3 === correctAnswers.step3 &&
//       dekomposisiAnswers.step4 === correctAnswers.step4;
//     setDekomposisiFeedback(
//       isCorrect
//         ? "Benar! Langkah-langkah yang tepat adalah menentukan tujuan, mengumpulkan data, dan memilih jenis chart."
//         : "Jawaban salah, ayo coba lagi."
//     );
//     setDekomposisiAnswered(true);
//   };

//   const resetDekomposisiAnswers = () => {
//     setDekomposisiAnswers({ step1: false, step2: false, step3: false, step4: false });
//     setDekomposisiFeedback("");
//     setDekomposisiAnswered(false);
//   };

//   // State untuk Aktivitas Pengenalan Pola
//   const [polaAnswer, setPolaAnswer] = useState("");
//   const [polaFeedback, setPolaFeedback] = useState("");
//   const [polaAnswered, setPolaAnswered] = useState(false);

//   const handlePolaChange = (value) => {
//     setPolaAnswer(value);
//   };

//   const checkPolaAnswer = () => {
//     const correctAnswer = "Line Chart";
//     setPolaFeedback(
//       polaAnswer === correctAnswer
//         ? "Benar! Line Chart cocok untuk menunjukkan perubahan kehadiran siswa seiring waktu."
//         : "Jawaban salah, ayo coba lagi."
//     );
//     setPolaAnswered(true);
//   };

//   const resetPolaAnswer = () => {
//     setPolaAnswer("");
//     setPolaFeedback("");
//     setPolaAnswered(false);
//   };

//   // State untuk Aktivitas Abstraksi
//   const [abstraksiAnswer, setAbstraksiAnswer] = useState("");
//   const [abstraksiFeedback, setAbstraksiFeedback] = useState("");
//   const [abstraksiAnswered, setAbstraksiAnswered] = useState(false);

//   const handleAbstraksiChange = (value) => {
//     setAbstraksiAnswer(value);
//   };

//   const checkAbstraksiAnswers = () => {
//     const correctAnswer = "Jumlah siswa di setiap ekstrakurikuler";
//     setAbstraksiFeedback(
//       abstraksiAnswer === correctAnswer
//         ? "Benar! Hanya jumlah siswa di setiap ekstrakurikuler yang relevan untuk Pie Chart."
//         : "Jawaban salah, ayo coba lagi."
//     );
//     setAbstraksiAnswered(true);
//   };

//   const resetAbstraksiAnswers = () => {
//     setAbstraksiAnswer("");
//     setAbstraksiFeedback("");
//     setAbstraksiAnswered(false);
//   };

//   // State untuk Kuis Pemahaman
//   const [currentQuestion, setCurrentQuestion] = useState(1);
//   const [answers, setAnswers] = useState({
//     1: "",
//     2: "",
//     3: "",
//     4: "",
//     5: "",
//   });
//   const [feedback, setFeedback] = useState({
//     1: "",
//     2: "",
//     3: "",
//     4: "",
//     5: "",
//   });
//   const [isAnswered, setIsAnswered] = useState({
//     1: false,
//     2: false,
//     3: false,
//     4: false,
//     5: false,
//   });

//  const questions = [
//   {
//     question: "Manfaat utama visualisasi data adalah....",
//     options: [
//       "A. Membantu melihat pola dengan cepat",
//       "B. Membuat data lebih rumit",
//       "C. Mengurangi jumlah data",
//       "D. Menghapus data yang salah",
//     ],
//     correctAnswer: "A. Membantu melihat pola dengan cepat",
//     explanation: "Visualisasi data membantu kita melihat pola dan tren dengan cepat melalui chart atau tabel.",
//   },
//   {
//     question: "Proses memecah masalah besar menjadi langkah-langkah kecil disebut....",
//     options: [
//       "A. Dekomposisi",
//       "B. Abstraksi",
//       "C. Pengenalan Pola",
//       "D. Algoritma",
//     ],
//     correctAnswer: "A. Dekomposisi",
//     explanation: "Dekomposisi adalah proses memecah masalah besar menjadi langkah-langkah kecil untuk memudahkan pemahaman dan penyelesaian.",
//   },
//   {
//     question: "Jenis chart yang digunakan untuk menunjukkan persentase pengeluaran adalah....",
//     options: [
//       "A. Pie Chart",
//       "B. Line Chart",
//       "C. Bar Chart",
//       "D. Area Chart",
//     ],
//     correctAnswer: "A. Pie Chart",
//     explanation: "Pie Chart cocok untuk menunjukkan persentase, seperti pembagian pengeluaran dalam kategori tertentu.",
//   },
//   {
//     question: "Proses memilih data relevan untuk chart disebut....",
//     options: [
//       "A. Abstraksi",
//       "B. Dekomposisi",
//       "C. Pengenalan Pola",
//       "D. Algoritma",
//     ],
//     correctAnswer: "A. Abstraksi",
//     explanation: "Abstraksi adalah proses memilih data yang relevan dan mengabaikan informasi yang tidak perlu untuk membuat chart yang jelas.",
//   },
//   {
//     question: "Langkah awal dalam membuat chart di spreadsheet adalah....",
//     options: [
//       "A. Siapkan data dalam tabel",
//       "B. Pilih jenis chart",
//       "C. Hitung rata-rata data",
//       "D. Simpan chart",
//     ],
//     correctAnswer: "A. Siapkan data dalam tabel",
//     explanation: "Langkah pertama dalam membuat chart adalah menyiapkan data dalam tabel yang rapi untuk memastikan chart akurat.",
//   },
// ];

//   const handleAnswerChange = (option) => {
//     setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
//     const currentCorrect = questions[currentQuestion - 1].correctAnswer;
//     if (option === currentCorrect) {
//       setFeedback((prev) => ({
//         ...prev,
//         [currentQuestion]: `Benar! ${currentCorrect}. ${questions[currentQuestion - 1].explanation}`,
//       }));
//     } else {
//       setFeedback((prev) => ({
//         ...prev,
//         [currentQuestion]: "Jawaban salah, ayo coba lagi.",
//       }));
//     }
//     setIsAnswered((prev) => ({ ...prev, [currentQuestion]: true }));
//   };

//   const resetQuizAnswer = () => {
//     setAnswers((prev) => ({ ...prev, [currentQuestion]: "" }));
//     setFeedback((prev) => ({ ...prev, [currentQuestion]: "" }));
//     setIsAnswered((prev) => ({ ...prev, [currentQuestion]: false }));
//   };

//   const goToPrevious = () => {
//     if (currentQuestion > 1) {
//       setCurrentQuestion(currentQuestion - 1);
//       setFeedback((prev) => ({ ...prev, [currentQuestion - 1]: "" }));
//       if (isAnswered[currentQuestion - 1]) {
//         alert("Soal ini telah dijawab. Silakan lanjut ke soal berikutnya atau hapus jawaban untuk memilih ulang.");
//       }
//     }
//   };

//   const goToNext = () => {
//     if (!isAnswered[currentQuestion]) {
//       alert("Silakan jawab soal ini terlebih dahulu.");
//       return;
//     }
//     if (currentQuestion < 5) {
//       setCurrentQuestion(currentQuestion + 1);
//       setFeedback((prev) => ({ ...prev, [currentQuestion + 1]: "" }));
//     } else if (
//       currentQuestion === 5 &&
//       isAnswered[1] &&
//       isAnswered[2] &&
//       isAnswered[3] &&
//       isAnswered[4] &&
//       isAnswered[5] &&
//       feedback[currentQuestion].includes("Benar")
//     ) {
//       alert("Kamu sudah selesai mengerjakan semua soal, kerja bagus!");
//     }
//   };

//   return (
//     <Layout>
//       <div className="p-2 sm:p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
//         B. VISUALISASI DATA
//       </div>

//       <section className="bg-green-100 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6 mb-2 sm:mb-6">
//         <h2 className="font-bold text-[#255F38] text-lg">Tujuan Pembelajaran:</h2>
//         <ol className="list-decimal list-inside space-y-1 sm:space-y-2 mt-2 sm:mt-4 text-gray-700">
//           <li className="text-sm md:text-base">
//             Peserta didik mampu menyajikan informasi dalam bentuk visualisasi data.
//           </li>
//           <li className="text-sm md:text-base">
//             Peserta didik mampu menerapkan pendekatan Computational Thinking dalam menyelesaikan permasalahan yang berkaitan dengan visualisasi data.
//           </li>
//         </ol>
//       </section>

//       <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-4">
//         <strong>Visualisasi data</strong> adalah cara menyajikan informasi dalam bentuk <strong>chart, tabel, atau grafik</strong> agar mudah dipahami. Dibandingkan membaca angka atau teks panjang, chart membantu kita melihat <strong>pola</strong> dan <strong>tren</strong> dengan cepat. Kita sering menggunakan <strong>spreadsheet</strong> untuk membuat chart yang membantu membuat keputusan. Dengan <strong>Computational Thinking (CT)</strong>, proses membuat chart jadi lebih mudah dan teratur.
//       </p>

//       <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12 relative">
//         <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Peran Visualisasi Data
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
//           Visualisasi data membantu kita memahami informasi dengan lebih mudah melalui chart, tabel, atau grafik.
//         </p>
//         <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
//           <li className="text-sm md:text-base text-justify">
//             <strong>Mengidentifikasi pola dan tren</strong> → Chart membantu kita melihat perubahan data, seperti nilai ujian siswa selama satu semester.
//           </li>
//           <li className="text-sm md:text-base text-justify">
//             <strong>Membantu membuat keputusan</strong> → Chart membuat data lebih jelas, sehingga kita bisa memilih strategi belajar.
//           </li>
//           <li className="text-sm md:text-base text-justify">
//             <strong>Menyajikan data</strong> lebih ringkas → Informasi jadi sederhana dan mudah dibaca.
//           </li>
//           <li className="text-sm md:text-base text-justify">
//             <strong>Meningkatkan komunikasi data</strong> → Chart membuat presentasi lebih menarik dan mudah dipahami.
//           </li>
//           <li className="text-sm md:text-base text-justify">
//             <strong>Mendeteksi kesalahan</strong> → Chart membantu menemukan data yang salah, seperti nilai ujian yang tidak wajar.
//           </li>
//         </ul>
//       </div>

//       <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-12 relative text-justify">
//         <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Contoh dalam Kehidupan Sehari-hari
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6">
//           Visualisasi data sering digunakan untuk membuat informasi lebih jelas dan menarik.
//         </p>
//         <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
//           <li className="text-sm md:text-base">
//             <strong>Line Chart</strong> → Menunjukkan perubahan nilai siswa selama satu semester.
//           </li>
//           <li className="text-sm md:text-base">
//             <strong>Bar Chart</strong> → Membandingkan jumlah pelanggan di beberapa toko.
//           </li>
//           <li className="text-sm md:text-base">
//             <strong>Pie Chart</strong> → Menunjukkan persentase pengeluaran untuk makanan, transportasi, dan hiburan.
//           </li>
//         </ul>
//         <p className="text-gray-700 text-sm md:text-base mt-2 sm:mt-4">
//           Dengan memahami visualisasi data, kita bisa memilih cara terbaik untuk menyajikan informasi.
//         </p>
//       </div>

//       <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-12 relative text-justify">
//         <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Dekomposisi
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6">
//           Dekomposisi adalah proses <span className="font-semibold">memecah tugas kompleks menjadi langkah-langkah kecil</span> yang lebih mudah dikelola. Dalam membuat chart, dekomposisi membantu kita merencanakan setiap tahap dengan jelas untuk menghasilkan visualisasi yang efektif.
//         </p>
//         <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
//           <li className="text-sm md:text-base">
//             <strong>Menentukan tujuan</strong> → Tentukan apa yang ingin ditunjukkan, seperti membandingkan penjualan jajanan.
//           </li>
//           <li className="text-sm md:text-base">
//             <strong>Mengumpulkan data</strong> → Kumpulkan data yang dibutuhkan, seperti jumlah jajanan yang terjual.
//           </li>
//           <li className="text-sm md:text-base">
//             <strong>Memilih jenis chart</strong> → Pilih chart yang tepat, seperti Bar Chart untuk membandingkan.
//           </li>
//         </ul>

//         <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 sm:mt-6 shadow-md">
//           <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
//             Latihan Pemahaman: Pecah Langkah Membuat Chart
//           </h3>
//           <p className="text-gray-700 text-sm md:text-base mb-2">
//             Kamu ingin membuat chart untuk membandingkan penjualan jajanan: bakpao (50 porsi), siomay (30 porsi), cilok (20 porsi). Pecah proses membuat chart menjadi langkah-langkah kecil berikut, lalu pilih yang benar:
//           </p>
//           <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
//             <div className="text-sm md:text-base">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={dekomposisiAnswers.step1}
//                   onChange={() => handleDekomposisiChange("step1")}
//                   className="mr-2"
//                 />
//                 Tentukan tujuan: bandingkan penjualan jajanan.
//               </label>
//             </div>
//             <div className="text-sm md:text-base">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={dekomposisiAnswers.step2}
//                   onChange={() => handleDekomposisiChange("step2")}
//                   className="mr-2"
//                 />
//                 Kumpulkan data: bakpao (50), siomay (30), cilok (20).
//               </label>
//             </div>
//             <div className="text-sm md:text-base">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={dekomposisiAnswers.step3}
//                   onChange={() => handleDekomposisiChange("step3")}
//                   className="mr-2"
//                 />
//                 Pilih Bar Chart untuk membandingkan.
//               </label>
//             </div>
//             <div className="text-sm md:text-base">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={dekomposisiAnswers.step4}
//                   onChange={() => handleDekomposisiChange("step4")}
//                   className="mr-2"
//                 />
//                 Hitung total penjualan semua jajanan.
//               </label>
//             </div>
//           </div>
//           <div className="mt-4 flex space-x-2">
//             <button
//               onClick={checkDekomposisiAnswers}
//               className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer"
//             >
//               Periksa
//             </button>
//             <button
//               onClick={resetDekomposisiAnswers}
//               className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
//             >
//               Hapus
//             </button>
//           </div>
//           {dekomposisiFeedback && (
//             <p
//               className={`text-sm mt-2 font-bold ${
//                 dekomposisiFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
//               }`}
//             >
//               {dekomposisiFeedback}
//             </p>
//           )}
//         </div>
//       </div>

//       <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative text-justify">
//         <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Pengenalan Pola
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6">
//           Setelah memecah masalah menjadi langkah-langkah kecil melalui dekomposisi, kita perlu <span className="font-semibold">mengenali pola</span> dalam data untuk memilih chart yang paling sesuai dengan tujuan visualisasi. Berikut adalah pola data yang dapat dikenali:
//         </p>
//         <ul className="list-none space-y-4 sm:space-y-5 text-gray-700">
//           <li className="text-sm md:text-base">
//             <strong className="text-gray-800">Data yang menunjukkan perubahan seiring waktu:</strong>
//             <ul className="list-disc ml-5 sm:ml-6 mt-2 space-y-2">
//               <li className="text-sm md:text-base">
//                 <span className="font-medium text-gray-700">Line Chart:</span> Digunakan untuk menunjukkan perkembangan data dari waktu ke waktu, seperti perubahan nilai ujian siswa per bulan.
//               </li>
//               <li className="text-sm md:text-base">
//                 <span className="font-medium text-gray-700">Area Chart:</span> Digunakan untuk menampilkan akumulasi total data seiring waktu, seperti jumlah siswa yang mengumpulkan tugas setiap minggu.
//               </li>
//             </ul>
//           </li>
//           <li className="text-sm md:text-base">
//             <strong className="text-gray-800">Data yang membandingkan antar kategori:</strong>
//             <ul className="list-disc ml-5 sm:ml-6 mt-2 space-y-2">
//               <li className="text-sm md:text-base">
//                 <span className="font-medium text-gray-700">Bar Chart:</span> Cocok untuk membandingkan jumlah antar kategori secara vertikal, seperti jumlah siswa di setiap ekstrakurikuler.
//               </li>
//               <li className="text-sm md:text-base">
//                 <span className="font-medium text-gray-700">Column Chart:</span> Digunakan untuk membandingkan jumlah antar kategori secara horizontal, seperti nilai rata-rata antar mata pelajaran.
//               </li>
//             </ul>
//           </li>
//           <li className="text-sm md:text-base">
//             <strong className="text-gray-800">Data yang menunjukkan proporsi:</strong>
//             <ul className="list-disc ml-5 sm:ml-6 mt-2 space-y-2">
//               <li className="text-sm md:text-base">
//                 <span className="font-medium text-gray-700">Pie Chart:</span> Digunakan untuk menunjukkan proporsi atau persentase masing-masing kategori terhadap keseluruhan, seperti proporsi pengeluaran bulanan.
//               </li>
//             </ul>
//           </li>
//         </ul>

//         <SimpleChart />

//         <p className="text-gray-700 text-sm md:text-base mt-4">
//           Dengan mengenali pola data, kita bisa memilih chart yang tepat. Selanjutnya, kita perlu menyaring data yang relevan melalui proses abstraksi untuk memastikan chart kita jelas dan fokus.
//         </p>
//       </div>

//       <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
//         <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Abstraksi
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-4">
//           Setelah mengenali pola data dan memilih jenis chart yang sesuai, kita perlu melakukan <span className="font-semibold">abstraksi</span> untuk memilih data yang penting dan mengabaikan informasi yang tidak relevan agar chart lebih jelas dan mudah dipahami.
//         </p>
//         <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2">
//           📌 Yang perlu diperhatikan:
//         </p>
//         <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
//           <li className="text-sm md:text-base">
//             <strong>Pilih data utama</strong> → Misalnya, hanya gunakan rata-rata nilai ujian, bukan semua nilai.
//           </li>
//           <li className="text-sm md:text-base">
//             <strong>Jangan gunakan terlalu banyak kategori</strong> → Terlalu banyak kategori membuat chart sulit dipahami.
//           </li>
//         </ul>

//         <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 sm:mt-6 shadow-md">
//           <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
//             Latihan Pemahaman: Pilih Data yang Penting
//           </h3>
//           <p className="text-gray-700 text-sm md:text-base mb-2">
//             Kamu ingin membuat Pie Chart untuk menunjukkan pilihan ekstrakurikuler: Pramuka (40 siswa), Seni Tari (30 siswa), Bola Voli (20 siswa). Pilih data yang dibutuhkan:
//           </p>
//           <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
//             <div className="text-sm md:text-base">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="abstraksi"
//                   value="Nama siswa"
//                   checked={abstraksiAnswer === "Nama siswa"}
//                   onChange={() => handleAbstraksiChange("Nama siswa")}
//                   className="mr-2"
//                 />
//                 Nama siswa
//               </label>
//             </div>
//             <div className="text-sm md:text-base">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="abstraksi"
//                   value="Jadwal ekstrakurikuler"
//                   checked={abstraksiAnswer === "Jadwal ekstrakurikuler"}
//                   onChange={() => handleAbstraksiChange("Jadwal ekstrakurikuler")}
//                   className="mr-2"
//                 />
//                 Jadwal ekstrakurikuler
//               </label>
//             </div>
//             <div className="text-sm md:text-base">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="abstraksi"
//                   value="Jumlah siswa di setiap ekstrakurikuler"
//                   checked={abstraksiAnswer === "Jumlah siswa di setiap ekstrakurikuler"}
//                   onChange={() => handleAbstraksiChange("Jumlah siswa di setiap ekstrakurikuler")}
//                   className="mr-2"
//                 />
//                 Jumlah siswa di setiap ekstrakurikuler
//               </label>
//             </div>
//           </div>
//           <div className="mt-4 flex space-x-2">
//             <button
//               onClick={checkAbstraksiAnswers}
//               className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer"
//             >
//               Periksa
//             </button>
//             <button
//               onClick={resetAbstraksiAnswers}
//               className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
//             >
//               Hapus
//             </button>
//           </div>
//           {abstraksiFeedback && (
//             <p
//               className={`text-sm mt-2 font-bold ${
//                 abstraksiFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
//               }`}
//             >
//               {abstraksiFeedback}
//             </p>
//           )}
//         </div>
//       </div>

//       <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
//         <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Algoritma
//         </div>
//         <p className="text-gray-600 text-sm md:text-base mt-4 sm:mt-4">
//           Setelah memilih data yang relevan melalui abstraksi, kita menyusun <span className="font-semibold">algoritma</span>, yaitu langkah-langkah terstruktur untuk membuat chart di spreadsheet. Berikut adalah langkah-langkahnya:
//         </p>
//         <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
//           <li className="text-sm md:text-base">
//             <strong>Siapkan data</strong> → Masukkan data ke dalam tabel yang rapi.
//           </li>
//           <li className="text-sm md:text-base">
//             <strong>Pilih data</strong> → Blok data yang akan dibuat chart.
//           </li>
//           <li className="text-sm md:text-base">
//             <strong>Klik Insert Chart</strong> → Pilih jenis chart, seperti Line Chart atau Bar Chart.
//           </li>
//         </ul>
//       </div>

//       <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12">
//         <h3 className="font-semibold text-[#255F38] text-lg mb-2">Kuis Pemahaman: Visualisasi Data</h3>
//         <p className="text-gray-700 text-sm md:text-base text-justify">
//           Jawab pertanyaan berikut untuk menguji pemahaman Anda tentang konsep visualisasi data:
//         </p>
//         <div className="bg-yellow-50 p-3 sm:p-4 border border-yellow-300 rounded mt-4 shadow-md">
//           <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-yellow-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
//             Soal {currentQuestion} dari 5
//           </div>
//           <div className="mt-8">
//             <h4 className="font-semibold text-yellow-800 text-sm md:text-base mb-2">
//               {questions[currentQuestion - 1].question}
//             </h4>
//             <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
//               {questions[currentQuestion - 1].options.map((option, index) => (
//                 <div key={index} className="text-sm md:text-base">
//                   <label className="flex items-center border border-gray-300 p-2 mb-2 rounded">
//                     <input
//                       type="radio"
//                       name={`quiz${currentQuestion}`}
//                       value={option}
//                       checked={answers[currentQuestion] === option}
//                       onChange={() => handleAnswerChange(option)}
//                       className="mr-2"
//                     />
//                     {option}
//                   </label>
//                 </div>
//               ))}
//             </div>
//             {feedback[currentQuestion] && (
//               <p
//                 className={`text-sm mt-2 font-bold ${
//                   feedback[currentQuestion].includes("Benar") ? "text-green-700" : "text-red-700"
//                 }`}
//               >
//                 {feedback[currentQuestion]}
//               </p>
//             )}
//             <div className="mt-4 flex justify-between">
//               <div className="flex space-x-2">
//                 <button
//                   onClick={goToPrevious}
//                   className="bg-[#B0BEC5] text-white px-4 py-2 rounded-lg hover:bg-[#90A4AE] transition duration-300 disabled:opacity-50 cursor-pointer"
//                   disabled={currentQuestion === 1}
//                 >
//                   Sebelumnya
//                 </button>
//                 {feedback[currentQuestion] && (
//                   <button
//                     onClick={resetQuizAnswer}
//                     className="bg-[#D32F2F] text-white px-4 py-2 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
//                   >
//                     Hapus
//                   </button>
//                 )}
//               </div>
//               {isAnswered[currentQuestion] && (
//                 <button
//                   onClick={goToNext}
//                   className="bg-yellow-800 text-white px-4 py-2 rounded-lg hover:bg-yellow-900 transition duration-300 cursor-pointer"
//                   disabled={currentQuestion === 5 && !isAnswered[currentQuestion]}
//                 >
//                   {currentQuestion === 5 ? "Selesai" : "Soal Selanjutnya"}
//                 </button>
//               )}
//             </div>
//             {currentQuestion === 5 && isAnswered[currentQuestion] && (
//               <p className="mt-4 text-center text-yellow-800 font-bold text-base">
//                 Anda telah menyelesaikan semua soal! Klik "Sebelumnya" untuk meninjau.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-between items-center px-2 sm:px-4 py-2 mt-4 sm:mt-8">
//         <button
//           onClick={() => (window.location.href = "/contoh-lookup")}
//           className="bg-gray-500 text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-gray-600 text-center min-w-[100px] cursor-pointer"
//         >
//           ← Sebelumnya
//         </button>
//         <button
//           onClick={() => (window.location.href = "/contoh-penerapan-visualisasi-data")}
//           className="bg-[#255F38] text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-[#1E4D2E] text-center min-w-[100px] cursor-pointer"
//         >
//           Selanjutnya →
//         </button>
//       </div>
//     </Layout>
//   );
// }


import { useState } from "react";
import Layout from "../../components/Layout";
import SimpleChart from "../../components/SimpleChart";

export default function VisualisasiData() {
  // State untuk Aktivitas Dekomposisi
  const [dekomposisiAnswers, setDekomposisiAnswers] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
  });
  const [dekomposisiFeedback, setDekomposisiFeedback] = useState("");
  const [dekomposisiAnswered, setDekomposisiAnswered] = useState(false);

  const handleDekomposisiChange = (step) => {
    setDekomposisiAnswers((prev) => ({ ...prev, [step]: !prev[step] }));
  };

  const checkDekomposisiAnswers = () => {
    const correctAnswers = { step1: true, step2: true, step3: true, step4: false };
    const isCorrect =
      dekomposisiAnswers.step1 === correctAnswers.step1 &&
      dekomposisiAnswers.step2 === correctAnswers.step2 &&
      dekomposisiAnswers.step3 === correctAnswers.step3 &&
      dekomposisiAnswers.step4 === correctAnswers.step4;
    setDekomposisiFeedback(
      isCorrect
        ? "Benar! Langkah-langkah yang tepat adalah menentukan tujuan, mengumpulkan data, dan memilih jenis chart."
        : "Jawaban salah, ayo coba lagi."
    );
    setDekomposisiAnswered(true);
  };

  const resetDekomposisiAnswers = () => {
    setDekomposisiAnswers({ step1: false, step2: false, step3: false, step4: false });
    setDekomposisiFeedback("");
    setDekomposisiAnswered(false);
  };

  // State untuk Aktivitas Pengenalan Pola
  const [polaAnswer, setPolaAnswer] = useState("");
  const [polaFeedback, setPolaFeedback] = useState("");
  const [polaAnswered, setPolaAnswered] = useState(false);

  const handlePolaChange = (value) => {
    setPolaAnswer(value);
  };

  const checkPolaAnswer = () => {
    const correctAnswer = "Line Chart";
    setPolaFeedback(
      polaAnswer === correctAnswer
        ? "Benar! Line Chart cocok untuk menunjukkan perubahan kehadiran siswa seiring waktu."
        : "Jawaban salah, ayo coba lagi."
    );
    setPolaAnswered(true);
  };

  const resetPolaAnswer = () => {
    setPolaAnswer("");
    setPolaFeedback("");
    setPolaAnswered(false);
  };

  // State untuk Aktivitas Abstraksi
  const [abstraksiAnswer, setAbstraksiAnswer] = useState("");
  const [abstraksiFeedback, setAbstraksiFeedback] = useState("");
  const [abstraksiAnswered, setAbstraksiAnswered] = useState(false);

  const handleAbstraksiChange = (value) => {
    setAbstraksiAnswer(value);
  };

  const checkAbstraksiAnswers = () => {
    const correctAnswer = "Jumlah siswa di setiap ekstrakurikuler";
    setAbstraksiFeedback(
      abstraksiAnswer === correctAnswer
        ? "Benar! Hanya jumlah siswa di setiap ekstrakurikuler yang relevan untuk Pie Chart."
        : "Jawaban salah, ayo coba lagi."
    );
    setAbstraksiAnswered(true);
  };

  const resetAbstraksiAnswers = () => {
    setAbstraksiAnswer("");
    setAbstraksiFeedback("");
    setAbstraksiAnswered(false);
  };

  // State untuk Kuis Pemahaman
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  const [feedback, setFeedback] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  const [isAnswered, setIsAnswered] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const questions = [
    {
      question: "Manfaat utama visualisasi data adalah....",
      options: [
        "A. Membantu melihat pola dengan cepat",
        "B. Membuat data lebih rumit",
        "C. Mengurangi jumlah data",
        "D. Menghapus data yang salah",
      ],
      correctAnswer: "A. Membantu melihat pola dengan cepat",
      explanation: "Visualisasi data membantu kita melihat pola dan tren dengan cepat melalui chart atau tabel.",
    },
    {
      question: "Proses memecah masalah besar menjadi langkah-langkah kecil disebut....",
      options: [
        "A. Dekomposisi",
        "B. Abstraksi",
        "C. Pengenalan Pola",
        "D. Algoritma",
      ],
      correctAnswer: "A. Dekomposisi",
      explanation: "Dekomposisi adalah proses memecah masalah besar menjadi langkah-langkah kecil untuk memudahkan pemahaman dan penyelesaian.",
    },
    {
      question: "Jenis chart yang digunakan untuk menunjukkan persentase pengeluaran adalah....",
      options: [
        "A. Pie Chart",
        "B. Line Chart",
        "C. Bar Chart",
        "D. Area Chart",
      ],
      correctAnswer: "A. Pie Chart",
      explanation: "Pie Chart cocok untuk menunjukkan persentase, seperti pembagian pengeluaran dalam kategori tertentu.",
    },
    {
      question: "Proses memilih data relevan untuk chart disebut....",
      options: [
        "A. Abstraksi",
        "B. Dekomposisi",
        "C. Pengenalan Pola",
        "D. Algoritma",
      ],
      correctAnswer: "A. Abstraksi",
      explanation: "Abstraksi adalah proses memilih data yang relevan dan mengabaikan informasi yang tidak perlu untuk membuat chart yang jelas.",
    },
    {
      question: "Langkah awal dalam membuat chart di spreadsheet adalah....",
      options: [
        "A. Siapkan data dalam tabel",
        "B. Pilih jenis chart",
        "C. Hitung rata-rata data",
        "D. Simpan chart",
      ],
      correctAnswer: "A. Siapkan data dalam tabel",
      explanation: "Langkah pertama dalam membuat chart adalah menyiapkan data dalam tabel yang rapi untuk memastikan chart akurat.",
    },
  ];

  const handleAnswerChange = (option) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    const currentCorrect = questions[currentQuestion - 1].correctAnswer;
    if (option === currentCorrect) {
      setFeedback((prev) => ({
        ...prev,
        [currentQuestion]: `Benar! ${currentCorrect}. ${questions[currentQuestion - 1].explanation}`,
      }));
    } else {
      setFeedback((prev) => ({
        ...prev,
        [currentQuestion]: "Jawaban salah, ayo coba lagi.",
      }));
    }
    setIsAnswered((prev) => ({ ...prev, [currentQuestion]: true }));
  };

  const resetQuizAnswer = () => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: "" }));
    setFeedback((prev) => ({ ...prev, [currentQuestion]: "" }));
    setIsAnswered((prev) => ({ ...prev, [currentQuestion]: false }));
  };

  const goToPrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setFeedback((prev) => ({ ...prev, [currentQuestion - 1]: "" }));
      if (isAnswered[currentQuestion - 1]) {
        alert("Soal ini telah dijawab. Silakan lanjut ke soal berikutnya atau hapus jawaban untuk memilih ulang.");
      }
    }
  };

  const goToNext = () => {
    if (!isAnswered[currentQuestion]) {
      alert("Silakan jawab soal ini terlebih dahulu.");
      return;
    }
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
      setFeedback((prev) => ({ ...prev, [currentQuestion + 1]: "" }));
    } else if (
      currentQuestion === 5 &&
      isAnswered[1] &&
      isAnswered[2] &&
      isAnswered[3] &&
      isAnswered[4] &&
      isAnswered[5] &&
      feedback[currentQuestion].includes("Benar")
    ) {
      alert("Kamu sudah selesai mengerjakan semua soal, kerja bagus!");
    }
  };

  return (
    <Layout>
      <div className="p-2 sm:p-4 bg-[#255F38] text-white font-bold text-base sm:text-lg text-center rounded-lg shadow-lg">
        B. VISUALISASI DATA
      </div>

      <section className="bg-green-100 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6 mb-2 sm:mb-6">
        <h2 className="font-bold text-[#255F38] text-base sm:text-lg">Tujuan Pembelajaran:</h2>
        <ol className="list-decimal list-inside space-y-1 sm:space-y-2 mt-2 text-gray-700">
          <li className="text-xs sm:text-sm md:text-base">
            Peserta didik mampu menyajikan informasi dalam bentuk visualisasi data.
          </li>
          <li className="text-xs sm:text-sm md:text-base">
            Peserta didik mampu menerapkan pendekatan Computational Thinking dalam menyelesaikan permasalahan yang berkaitan dengan visualisasi data.
          </li>
        </ol>
      </section>

      <p className="text-gray-700 text-xs sm:text-sm md:text-base text-justify leading-relaxed px-2 sm:px-4">
        <strong>Visualisasi data</strong> adalah cara menyajikan informasi dalam bentuk <strong>chart, tabel, atau grafik</strong> agar mudah dipahami. Dibandingkan membaca angka atau teks panjang, chart membantu kita melihat <strong>pola</strong> dan <strong>tren</strong> dengan cepat. Kita sering menggunakan <strong>spreadsheet</strong> untuk membuat chart yang membantu membuat keputusan. Dengan <strong>Computational Thinking (CT)</strong>, proses membuat chart jadi lebih mudah dan teratur.
      </p>

      <div className="bg-white p-2 sm:p-3 md:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-6 relative">
        <div className="absolute -top-3 sm:-top-4 md:-top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 md:px-5 py-1 rounded-t-lg text-base sm:text-lg font-bold shadow-lg">
          Peran Visualisasi Data
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-6 sm:mt-8 text-justify">
          Visualisasi data membantu kita memahami informasi dengan lebih mudah melalui chart, tabel, atau grafik.
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-xs sm:text-sm md:text-base text-justify">
            <strong>Mengidentifikasi pola dan tren</strong> → Chart membantu kita melihat perubahan data, seperti nilai ujian siswa selama satu semester.
          </li>
          <li className="text-xs sm:text-sm md:text-base text-justify">
            <strong>Membantu membuat keputusan</strong> → Chart membuat data lebih jelas, sehingga kita bisa memilih strategi belajar.
          </li>
          <li className="text-xs sm:text-sm md:text-base text-justify">
            <strong>Menyajikan data</strong> lebih ringkas → Informasi jadi sederhana dan mudah dibaca.
          </li>
          <li className="text-xs sm:text-sm md:text-base text-justify">
            <strong>Meningkatkan komunikasi data</strong> → Chart membuat presentasi lebih menarik dan mudah dipahami.
          </li>
          <li className="text-xs sm:text-sm md:text-base text-justify">
            <strong>Mendeteksi kesalahan</strong> → Chart membantu menemukan data yang salah, seperti nilai ujian yang tidak wajar.
          </li>
        </ul>
      </div>

      <div className="bg-white p-2 sm:p-3 md:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-6 relative text-justify">
        <div className="absolute -top-3 sm:-top-4 md:-top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 md:px-5 py-1 rounded-t-lg text-base sm:text-lg font-bold shadow-lg">
          Contoh dalam Kehidupan Sehari-hari
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-6 sm:mt-8">
          Visualisasi data sering digunakan untuk membuat informasi lebih jelas dan menarik.
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-xs sm:text-sm md:text-base">
            <strong>Line Chart</strong> → Menunjukkan perubahan nilai siswa selama satu semester.
          </li>
          <li className="text-xs sm:text-sm md:text-base">
            <strong>Bar Chart</strong> → Membandingkan jumlah pelanggan di beberapa toko.
          </li>
          <li className="text-xs sm:text-sm md:text-base">
            <strong>Pie Chart</strong> → Menunjukkan persentase pengeluaran untuk makanan, transportasi, dan hiburan.
          </li>
        </ul>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 sm:mt-4">
          Dengan memahami visualisasi data, kita bisa memilih cara terbaik untuk menyajikan informasi.
        </p>
      </div>

      <div className="bg-white p-2 sm:p-3 md:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-6 relative text-justify">
        <div className="absolute -top-3 sm:-top-4 md:-top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 md:px-5 py-1 rounded-t-lg text-base sm:text-lg font-bold shadow-lg">
          Dekomposisi
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-6 sm:mt-8">
          Dekomposisi adalah proses <span className="font-semibold">memecah tugas kompleks menjadi langkah-langkah kecil</span> yang lebih mudah dikelola. Dalam membuat chart, dekomposisi membantu kita merencanakan setiap tahap dengan jelas untuk menghasilkan visualisasi yang efektif.
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-xs sm:text-sm md:text-base">
            <strong>Menentukan tujuan</strong> → Tentukan apa yang ingin ditunjukkan, seperti membandingkan penjualan jajanan.
          </li>
          <li className="text-xs sm:text-sm md:text-base">
            <strong>Mengumpulkan data</strong> → Kumpulkan data yang dibutuhkan, seperti jumlah jajanan yang terjual.
          </li>
          <li className="text-xs sm:text-sm md:text-base">
            <strong>Memilih jenis chart</strong> → Pilih chart yang tepat, seperti Bar Chart untuk membandingkan.
          </li>
        </ul>

        <div className="bg-[#F0FFF4] p-2 sm:p-3 md:p-4 border border-[#81C784] rounded mt-4 sm:mt-6 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Pecah Langkah Membuat Chart
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2">
            Kamu ingin membuat chart untuk membandingkan penjualan jajanan: bakpao (50 porsi), siomay (30 porsi), cilok (20 porsi). Pecah proses membuat chart menjadi langkah-langkah kecil berikut, lalu pilih yang benar:
          </p>
          <div className="ml-2 sm:ml-4 md:ml-6 text-gray-700 space-y-1 sm:space-y-2">
            <div className="text-xs sm:text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dekomposisiAnswers.step1}
                  onChange={() => handleDekomposisiChange("step1")}
                  className="mr-2"
                />
                Tentukan tujuan: bandingkan penjualan jajanan.
              </label>
            </div>
            <div className="text-xs sm:text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dekomposisiAnswers.step2}
                  onChange={() => handleDekomposisiChange("step2")}
                  className="mr-2"
                />
                Kumpulkan data: bakpao (50), siomay (30), cilok (20).
              </label>
            </div>
            <div className="text-xs sm:text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dekomposisiAnswers.step3}
                  onChange={() => handleDekomposisiChange("step3")}
                  className="mr-2"
                />
                Pilih Bar Chart untuk membandingkan.
              </label>
            </div>
            <div className="text-xs sm:text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dekomposisiAnswers.step4}
                  onChange={() => handleDekomposisiChange("step4")}
                  className="mr-2"
                />
                Hitung total penjualan semua jajanan.
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkDekomposisiAnswers}
              className="bg-[#1B5E20] text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded hover:bg-[#145A20] transition duration-300 cursor-pointer"
            >
              Periksa
            </button>
            <button
              onClick={resetDekomposisiAnswers}
              className="bg-[#D32F2F] text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
            >
              Hapus
            </button>
          </div>
          {dekomposisiFeedback && (
            <p
              className={`text-xs sm:text-sm mt-2 font-bold ${
                dekomposisiFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {dekomposisiFeedback}
            </p>
          )}
        </div>
      </div>

      <div className="bg-white p-2 sm:p-3 md:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-6 relative text-justify">
        <div className="absolute -top-3 sm:-top-4 md:-top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 md:px-5 py-1 rounded-t-lg text-base sm:text-lg font-bold shadow-lg">
          Pengenalan Pola
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-6 sm:mt-8">
          Setelah memecah masalah menjadi langkah-langkah kecil melalui dekomposisi, kita perlu <span className="font-semibold">mengenali pola</span> dalam data untuk memilih chart yang paling sesuai dengan tujuan visualisasi. Berikut adalah pola data yang dapat dikenali:
        </p>
        <ul className="list-none space-y-3 sm:space-y-4 md:space-y-5 text-gray-700">
          <li className="text-xs sm:text-sm md:text-base">
            <strong className="text-gray-800">Data yang menunjukkan perubahan seiring waktu:</strong>
            <ul className="list-disc ml-4 sm:ml-5 md:ml-6 mt-2 space-y-1 sm:space-y-2">
              <li className="text-xs sm:text-sm md:text-base">
                <span className="font-medium text-gray-700">Line Chart:</span> Digunakan untuk menunjukkan perkembangan data dari waktu ke waktu, seperti perubahan nilai ujian siswa per bulan.
              </li>
              <li className="text-xs sm:text-sm md:text-base">
                <span className="font-medium text-gray-700">Area Chart:</span> Digunakan untuk menampilkan akumulasi total data seiring waktu, seperti jumlah siswa yang mengumpulkan tugas setiap minggu.
              </li>
            </ul>
          </li>
          <li className="text-xs sm:text-sm md:text-base">
            <strong className="text-gray-800">Data yang membandingkan antar kategori:</strong>
            <ul className="list-disc ml-4 sm:ml-5 md:ml-6 mt-2 space-y-1 sm:space-y-2">
              <li className="text-xs sm:text-sm md:text-base">
                <span className="font-medium text-gray-700">Bar Chart:</span> Cocok untuk membandingkan jumlah antar kategori secara vertikal, seperti jumlah siswa di setiap ekstrakurikuler.
              </li>
              <li className="text-xs sm:text-sm md:text-base">
                <span className="font-medium text-gray-700">Column Chart:</span> Digunakan untuk membandingkan jumlah antar kategori secara horizontal, seperti nilai rata-rata antar mata pelajaran.
              </li>
            </ul>
          </li>
          <li className="text-xs sm:text-sm md:text-base">
            <strong className="text-gray-800">Data yang menunjukkan proporsi:</strong>
            <ul className="list-disc ml-4 sm:ml-5 md:ml-6 mt-2 space-y-1 sm:space-y-2">
              <li className="text-xs sm:text-sm md:text-base">
                <span className="font-medium text-gray-700">Pie Chart:</span> Digunakan untuk menunjukkan proporsi atau persentase masing-masing kategori terhadap keseluruhan, seperti proporsi pengeluaran bulanan.
              </li>
            </ul>
          </li>
        </ul>

        <SimpleChart />

        <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-4">
          Dengan mengenali pola data, kita bisa memilih chart yang tepat. Selanjutnya, kita perlu menyaring data yang relevan melalui proses abstraksi untuk memastikan chart kita jelas dan fokus.
        </p>
      </div>

      <div className="bg-white p-2 sm:p-3 md:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-6 relative">
        <div className="absolute -top-3 sm:-top-4 md:-top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 md:px-5 py-1 rounded-t-lg text-base sm:text-lg font-bold shadow-lg">
          Abstraksi
        </div>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-6 sm:mt-8">
          Setelah mengenali pola data dan memilih jenis chart yang sesuai, kita perlu melakukan <span className="font-semibold">abstraksi</span> untuk memilih data yang penting dan mengabaikan informasi yang tidak relevan agar chart lebih jelas dan mudah dipahami.
        </p>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
          📌 Yang perlu diperhatikan:
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-xs sm:text-sm md:text-base">
            <strong>Pilih data utama</strong> → Misalnya, hanya gunakan rata-rata nilai ujian, bukan semua nilai.
          </li>
          <li className="text-xs sm:text-sm md:text-base">
            <strong>Jangan gunakan terlalu banyak kategori</strong> → Terlalu banyak kategori membuat chart sulit dipahami.
          </li>
        </ul>

        <div className="bg-[#F0FFF4] p-2 sm:p-3 md:p-4 border border-[#81C784] rounded mt-4 sm:mt-6 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Pilih Data yang Penting
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2">
            Kamu ingin membuat Pie Chart untuk menunjukkan pilihan ekstrakurikuler: Pramuka (40 siswa), Seni Tari (30 siswa), Bola Voli (20 siswa). Pilih data yang dibutuhkan:
          </p>
          <div className="ml-2 sm:ml-4 md:ml-6 text-gray-700 space-y-1 sm:space-y-2">
            <div className="text-xs sm:text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="abstraksi"
                  value="Nama siswa"
                  checked={abstraksiAnswer === "Nama siswa"}
                  onChange={() => handleAbstraksiChange("Nama siswa")}
                  className="mr-2"
                />
                Nama siswa
              </label>
            </div>
            <div className="text-xs sm:text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="abstraksi"
                  value="Jadwal ekstrakurikuler"
                  checked={abstraksiAnswer === "Jadwal ekstrakurikuler"}
                  onChange={() => handleAbstraksiChange("Jadwal ekstrakurikuler")}
                  className="mr-2"
                />
                Jadwal ekstrakurikuler
              </label>
            </div>
            <div className="text-xs sm:text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="abstraksi"
                  value="Jumlah siswa di setiap ekstrakurikuler"
                  checked={abstraksiAnswer === "Jumlah siswa di setiap ekstrakurikuler"}
                  onChange={() => handleAbstraksiChange("Jumlah siswa di setiap ekstrakurikuler")}
                  className="mr-2"
                />
                Jumlah siswa di setiap ekstrakurikuler
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkAbstraksiAnswers}
              className="bg-[#1B5E20] text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded hover:bg-[#145A20] transition duration-300 cursor-pointer"
            >
              Periksa
            </button>
            <button
              onClick={resetAbstraksiAnswers}
              className="bg-[#D32F2F] text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
            >
              Hapus
            </button>
          </div>
          {abstraksiFeedback && (
            <p
              className={`text-xs sm:text-sm mt-2 font-bold ${
                abstraksiFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {abstraksiFeedback}
            </p>
          )}
        </div>
      </div>

      <div className="bg-white p-2 sm:p-3 md:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-6 relative">
        <div className="absolute -top-3 sm:-top-4 md:-top-6 left-2 sm:left-4 bg-green-800 text-white px-2 sm:px-3 md:px-5 py-1 rounded-t-lg text-base sm:text-lg font-bold shadow-lg">
          Algoritma
        </div>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-6 sm:mt-8">
          Setelah memilih data yang relevan melalui abstraksi, kita menyusun <span className="font-semibold">algoritma</span>, yaitu langkah-langkah terstruktur untuk membuat chart di spreadsheet. Berikut adalah langkah-langkahnya:
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-xs sm:text-sm md:text-base">
            <strong>Siapkan data</strong> → Masukkan data ke dalam tabel yang rapi.
          </li>
          <li className="text-xs sm:text-sm md:text-base">
            <strong>Pilih data</strong> → Blok data yang akan dibuat chart.
          </li>
          <li className="text-xs sm:text-sm md:text-base">
            <strong>Klik Insert Chart</strong> → Pilih jenis chart, seperti Line Chart atau Bar Chart.
          </li>
        </ul>
      </div>

      {/* Latihan Pemahaman */}
      <div className="bg-white p-2 sm:p-3 md:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-6">
        <h3 className="font-semibold text-[#255F38] text-base sm:text-lg mb-2">Kuis Pemahaman: Visualisasi Data</h3>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base text-justify">
          Jawab pertanyaan berikut untuk menguji pemahaman Anda tentang konsep visualisasi data:
        </p>
        <div className="bg-yellow-50 p-2 sm:p-3 md:p-4 border border-yellow-300 rounded mt-4 shadow-md relative">
          <div className="mt-8 sm:mt-10">
            <h4 className="font-semibold text-yellow-800 text-sm md:text-base mb-2">
              {questions[currentQuestion - 1].question}
            </h4>
            <div className="ml-2 sm:ml-4 md:ml-6 text-gray-700 space-y-1 sm:space-y-2">
              {questions[currentQuestion - 1].options.map((option, index) => (
                <div key={index} className="text-xs sm:text-sm md:text-base">
                  <label className="flex items-center border border-gray-300 p-2 mb-2 rounded">
                    <input
                      type="radio"
                      name={`quiz${currentQuestion}`}
                      value={option}
                      checked={answers[currentQuestion] === option}
                      onChange={() => handleAnswerChange(option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
            {feedback[currentQuestion] && (
              <p
                className={`text-xs sm:text-sm mt-2 font-bold ${
                  feedback[currentQuestion].includes("Benar") ? "text-green-700" : "text-red-700"
                }`}
              >
                {feedback[currentQuestion]}
              </p>
            )}
            <div className="mt-4 flex justify-between space-x-2">
              <div className="flex space-x-2">
                <button
                  onClick={goToPrevious}
                  className="bg-[#B0BEC5] text-white px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-lg hover:bg-[#90A4AE] transition duration-300 disabled:opacity-50 cursor-pointer"
                  disabled={currentQuestion === 1}
                >
                  Sebelumnya
                </button>
                {feedback[currentQuestion] && (
                  <button
                    onClick={resetQuizAnswer}
                    className="bg-[#D32F2F] text-white px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
                  >
                    Hapus
                  </button>
                )}
              </div>
              {currentQuestion < 5 && isAnswered[currentQuestion] && (
                <button
                  onClick={goToNext}
                  className="bg-yellow-800 text-white px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-lg hover:bg-yellow-900 transition duration-300 cursor-pointer"
                >
                  Soal Selanjutnya
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-2 sm:px-4 py-2 mt-4 sm:mt-8 space-x-2">
        <button
          onClick={() => (window.location.href = "/contoh-lookup")}
          className="bg-gray-500 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-gray-600 text-xs sm:text-base text-center min-w-[100px] cursor-pointer"
        >
          ← Sebelumnya
        </button>
        <button
          onClick={() => (window.location.href = "/contoh-penerapan-visualisasi-data")}
          className="bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] text-xs sm:text-base text-center min-w-[100px] cursor-pointer"
        >
          Selanjutnya →
        </button>
      </div>
    </Layout>
  );
}
// import Layout from "../../components/Layout";
// import { Lightbulb, BarChart, Filter, Code } from "lucide-react";
// import { useState } from "react";
// import ilustrasi1 from "../../assets/PencarianData/ilustrasi1.png";
// import ilustrasi2 from "../../assets/PencarianData/ilustrasi2.png";

// export default function PencarianLookup() {
//   // State untuk Aktivitas Dekomposisi
//   const [dekomposisiAnswers, setDekomposisiAnswers] = useState({
//     step1: false,
//     step2: false,
//     step3: false,
//   });
//   const [dekomposisiFeedback, setDekomposisiFeedback] = useState("");
//   const [dekomposisiAnswered, setDekomposisiAnswered] = useState(false);

//   const handleDekomposisiChange = (step) => {
//     setDekomposisiAnswers((prev) => ({ ...prev, [step]: !prev[step] }));
//   };

//   const checkDekomposisiAnswers = () => {
//     const correctAnswers = { step1: true, step2: true, step3: false };
//     const isCorrect =
//       dekomposisiAnswers.step1 === correctAnswers.step1 &&
//       dekomposisiAnswers.step2 === correctAnswers.step2 &&
//       dekomposisiAnswers.step3 === correctAnswers.step3;
//     setDekomposisiFeedback(
//       isCorrect
//         ? "Benar! Langkah-langkah yang tepat adalah mengidentifikasi data dan menentukan tabel referensi."
//         : "Jawaban salah, ayo coba lagi."
//     );
//     setDekomposisiAnswered(true);
//   };

//   const resetDekomposisiAnswers = () => {
//     setDekomposisiAnswers({ step1: false, step2: false, step3: false });
//     setDekomposisiFeedback("");
//     setDekomposisiAnswered(false);
//   };

//   // State untuk Aktivitas Algoritma (Visualisasi Interaktif)
//   const [lookupStep, setLookupStep] = useState(0);
//   const [isLookupStarted, setIsLookupStarted] = useState(false);
//   const lookupValue = "C002"; // Nilai referensi yang dicari
//   const tableData = [
//     { kode: "C001", nama: "Buku", harga: 5000 },
//     { kode: "C002", nama: "Pensil", harga: "" }, // Harga C002 kosong
//     { kode: "C003", nama: "Pen", harga: 3000 },
//   ];
//   const tableReference = [
//     { kode: "C001", nama: "Buku", harga: 5000 },
//     { kode: "C002", nama: "Pensil", harga: 2000 },
//     { kode: "C003", nama: "Pen", harga: 3000 },
//   ];
//   const colIndexNum = 3; // Kolom harga (indeks 3, karena dimulai dari 1)

//   const lookupSteps = [
//     {
//       description: "Pilih range kriteria: Kolom 'Kode' pada tabel data.",
//       highlightedRows: [],
//       highlightedColumn: null,
//       result: null,
//       colorData: null,
//       colorReference: null,
//     },
//     {
//       description: "Tetapkan nilai referensi: 'C002'.",
//       highlightedRows: [1],
//       highlightedColumn: 1,
//       result: null,
//       colorData: "bg-yellow-200",
//       colorReference: null,
//     },
//     {
//       description: "Cari 'C002' pada kolom 'Kode' di tabel referensi.",
//       highlightedRows: [1],
//       highlightedColumn: 1,
//       result: null,
//       colorData: null,
//       colorReference: "bg-green-200",
//     },
//     {
//       description: "Tentukan kolom harga (indeks 3) untuk mengambil nilai.",
//       highlightedRows: [1],
//       highlightedColumn: 3,
//       result: null,
//       colorData: null,
//       colorReference: "bg-blue-200",
//     },
//     {
//       description:
//         "Pilih metode pencarian: Gunakan FALSE untuk kecocokan persis.",
//       highlightedRows: [],
//       highlightedColumn: null,
//       result: null,
//       colorData: null,
//       colorReference: null,
//     },
//     {
//       description: "Hasil ditemukan: Harga untuk 'C002' adalah 2000.",
//       highlightedRows: [1],
//       highlightedColumn: 3,
//       result: 2000,
//       colorData: "bg-orange-200",
//       colorReference: "bg-orange-200",
//     },
//   ];

//   const nextStep = (currentStep, setStep, maxSteps, setIsStarted) => {
//     if (currentStep < maxSteps - 1) {
//       setStep(currentStep + 1);
//       setIsStarted(true);
//     }
//   };

//   const resetStep = (setStep, setIsStarted) => {
//     setStep(0);
//     setIsStarted(false);
//   };

//   // State untuk Kuis Pemahaman
//   const [currentQuestion, setCurrentQuestion] = useState(1);
//   const [answers, setAnswers] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" });
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

//   const questions = [
//     {
//       question:
//         "Jika tabel referensi tidak terurut, parameter range_lookup bernilai FALSE pada fungsi VLOOKUP akan ....",
//       options: [
//         "A. Mencari nilai terdekat",
//         "B. Mencari kecocokan persis",
//         "C. Mengurutkan tabel terlebih dahulu",
//         "D. Mengabaikan nilai referensi",
//       ],
//       correctAnswer: "B. Mencari kecocokan persis",
//       explanation:
//         "Parameter range_lookup FALSE memastikan VLOOKUP hanya mencari kecocokan yang persis, bukan nilai terdekat.",
//     },
//     {
//       question:
//         "Tujuan utama dari langkah abstraksi dalam proses pencarian data menggunakan fungsi Lookup adalah ....",
//       options: [
//         "A. Menghitung total data",
//         "B. Mengurutkan tabel referensi",
//         "C. Mengabaikan informasi yang tidak perlu",
//         "D. Membuat tabel baru",
//       ],
//       correctAnswer: "C. Mengabaikan informasi yang tidak perlu",
//       explanation:
//         "Abstraksi membantu menyederhanakan masalah dengan fokus pada data penting dan mengabaikan yang tidak relevan.",
//     },
//     {
//       question:
//         "Langkah pertama dalam dekomposisi proses pencarian data menggunakan fungsi Lookup adalah ....",
//       options: [
//         "A. Menentukan tabel referensi",
//         "B. Identifikasi data yang akan dicari",
//         "C. Menentukan jenis fungsi lookup",
//         "D. Mengambil informasi",
//       ],
//       correctAnswer: "B. Identifikasi data yang akan dicari",
//       explanation:
//         "Dekomposisi dimulai dengan mengidentifikasi data yang akan dicari, seperti kode barang atau nilai unik lainnya.",
//     },
//     {
//       question:
//         "Pola yang umum digunakan dalam pencarian data dengan fungsi Lookup adalah ....",
//       options: [
//         "A. Harga selalu di kolom pertama",
//         "B. Nilai referensi bersifat unik",
//         "C. Tabel tidak perlu terurut",
//         "D. Pencarian dilakukan tanpa referensi",
//       ],
//       correctAnswer: "B. Nilai referensi bersifat unik",
//       explanation:
//         "Nilai referensi yang unik memastikan pencarian data akurat dan tidak ada duplikat dalam tabel referensi.",
//     },
//     {
//       question:
//         "Jika tabel referensi terurut, pada fungsi VLOOKUP dengan range_lookup bernilai TRUE, maka yang harus dilakukan adalah ....",
//       options: [
//         "A. Mencari kecocokan persis",
//         "B. Mencari nilai terdekat",
//         "C. Mengabaikan urutan tabel",
//         "D. Menggunakan referensi absolut",
//       ],
//       correctAnswer: "B. Mencari nilai terdekat",
//       explanation:
//         "Jika tabel terurut dan range_lookup TRUE, VLOOKUP akan mencari nilai terdekat yang kurang dari atau sama dengan lookup_value.",
//     },
//   ];

//   const handleAnswerChange = (option) => {
//     setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
//     const currentCorrect = questions[currentQuestion - 1].correctAnswer;
//     setFeedback((prev) => ({
//       ...prev,
//       [currentQuestion]:
//         option === currentCorrect
//           ? `Benar! ${currentCorrect}. ${
//               questions[currentQuestion - 1].explanation
//             }`
//           : "Jawaban salah, ayo coba lagi.",
//     }));
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
//         alert(
//           "Soal ini telah dijawab. Silakan lanjut ke soal berikutnya atau hapus jawaban untuk memilih ulang."
//         );
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
//       <div className="p-2 sm:p-2 md:p-4 bg-[#255F38] text-white font-bold text-sm sm:text-base md:text-lg text-center rounded-lg shadow-lg">
//         A. PENCARIAN DATA
//       </div>

//       <section className="p-2 mt-2 mb-2 bg-green-100 rounded shadow-md sm:p-2 md:p-4 sm:mt-2 md:mt-6 sm:mb-2 md:mb-6">
//         <h2 className="font-bold text-[#255F38] text-sm sm:text-base md:text-lg">
//           Tujuan Pembelajaran:
//         </h2>
//         <div className="mt-1 ml-4 space-y-1 text-gray-700 sm:ml-4 md:ml-6">
//           <div className="text-xs sm:text-sm md:text-base">
//             1. Peserta didik mampu menggunakan fungsi Lookup dan Reference untuk
//             melakukan pencarian data secara tepat.
//           </div>
//           <div className="text-xs sm:text-sm md:text-base">
//             2. Peserta didik mampu menerapkan pendekatan Computational Thinking
//             dalam menyelesaikan permasalahan yang berkaitan dengan pencarian
//             data.
//           </div>
//         </div>
//       </section>

//       <p className="px-2 text-xs leading-relaxed text-justify text-gray-700 sm:text-sm md:text-base sm:px-2 md:px-6">
//         Dalam proses pencarian data, terdapat dua jenis utama fungsi pencarian:
//         Lookup dan Reference. Fungsi Lookup digunakan untuk mencari nilai
//         tertentu dalam tabel atau array dan mengembalikan hasil yang sesuai
//         berdasarkan kunci pencarian. Fungsi ini sering diterapkan dalam
//         spreadsheet untuk menemukan data terkait dengan nilai tertentu.
//         Sementara itu, fungsi Reference digunakan untuk mengambil nilai
//         berdasarkan referensi sel atau alamat memori, sehingga lebih fleksibel
//         saat posisi data berubah. Dengan kedua metode ini, pencarian data
//         menjadi lebih cepat dan akurat dibandingkan pencarian manual. Hasil
//         pencarian memiliki dua kemungkinan:
//       </p>
//       <div className="px-2 mt-1 ml-4 space-y-1 sm:ml-6 md:ml-6 sm:px-2 md:px-6">
//         <div className="text-xs text-justify sm:text-sm md:text-base">
//           <strong>1. Data ditemukan</strong> → Data yang dicari sesuai dengan
//           data dalam tabel.
//         </div>
//         <div className="text-xs text-justify sm:text-sm md:text-base">
//           <strong>2. Data tidak ditemukan</strong> → Data yang dicari tidak ada
//           dalam tabel.
//         </div>
//       </div>

//       <div className="p-2 sm:p-2 md:p-4 bg-[#255F38] text-white font-bold text-sm sm:text-base md:text-lg mt-2 sm:mt-2 md:mt-6">
//         1. Pencarian Lookup
//       </div>
//       <p className="px-2 mt-2 text-xs leading-relaxed text-justify text-gray-700 sm:text-sm md:text-base sm:px-2 md:px-6 sm:mt-2 md:mt-4">
//         Dalam kehidupan sehari-hari, kita sering melakukan pencarian data,
//         seperti mencari nomor telepon di kontak ponsel atau informasi barang di
//         daftar inventaris. Dalam dunia digital, pencarian data dapat dilakukan
//         lebih cepat dan efisien dengan menggunakan fungsi Lookup di aplikasi
//         lembar kerja.
//       </p>
//       <p className="px-2 text-xs font-semibold leading-relaxed text-justify text-gray-700 sm:text-sm md:text-base sm:px-2 md:px-6">
//         Fungsi Lookup digunakan untuk:
//       </p>
//       <div className="px-2 mt-1 ml-4 space-y-1 sm:ml-6 md:ml-6 sm:px-2 md:px-6">
//         <div className="text-xs text-justify sm:text-sm md:text-base">
//           <strong>1. Mencari data</strong> dalam tabel → Membantu menemukan
//           informasi di daftar besar.
//         </div>
//         <div className="text-xs text-justify sm:text-sm md:text-base">
//           <strong>2. Mengambil informasi</strong> berdasarkan referensi →
//           Memungkinkan pencarian dengan kunci tertentu.
//         </div>
//         <div className="text-xs text-justify sm:text-sm md:text-base">
//           <strong>3. Mempermudah pengolahan</strong> data → Efektif untuk
//           menangani data dalam jumlah banyak.
//         </div>
//       </div>

//       <div className="flex justify-center mt-2">
//         <img
//           src={ilustrasi1}
//           alt="Siswa Mengelola Data"
//           className="w-full max-w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-md h-auto object-contain"
//         />
//       </div>
//       <p className="mt-1 text-xs italic text-center text-gray-500 sm:text-sm md:text-base">
//         Gambar 2. Pencarian dengan VLOOKUP
//       </p>
//       <p className="px-2 mt-2 text-xs leading-relaxed text-justify text-gray-700 sm:text-sm md:text-base sm:px-2 md:px-6">
//         Pada gambar 2, fungsi <strong>VLOOKUP</strong> digunakan untuk mencari
//         sebuah nilai tertentu, misalnya simbol <code>*</code> yang ada di sel
//         G5, dalam sebuah tabel di rentang <strong>B5 sampai E9</strong>. Fungsi
//         ini akan mencari simbol tersebut di <strong>kolom pertama tabel</strong>{" "}
//         (kolom B). Jika simbol <code>*</code> ditemukan, maka fungsi akan
//         mengambil <strong>nilai dari kolom ke-3</strong> (yaitu kolom D) yang
//         sejajar atau sebaris dengan simbol tersebut. Angka 3 ini disebut{" "}
//         <em>col index num</em>, yaitu posisi kolom yang diambil datanya. Karena
//         menggunakan <code>FALSE</code>, artinya hanya akan cocok jika simbol
//         yang dicari benar-benar sama persis. Jadi, jika simbol <code>*</code>{" "}
//         ada di kolom B, maka nilai yang diambil dari kolom D adalah{" "}
//         <code>@</code>.
//       </p>

//       <div className="flex justify-center mt-2">
//         <img
//           src={ilustrasi2}
//           alt="Siswa Mengelola Data"
//           className="w-full max-w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-md h-auto object-contain"
//         />
//       </div>
//       <p className="mt-1 text-xs italic text-center text-gray-500 sm:text-sm md:text-base">
//         Gambar 3. Pencarian dengan HLOOKUP
//       </p>
//       <p className="px-2 mt-2 text-xs leading-relaxed text-justify text-gray-700 sm:text-sm md:text-base sm:px-2 md:px-6">
//         Pada Gambar 3, fungsi <strong>HLOOKUP</strong> digunakan untuk mencari
//         sebuah nilai tertentu, misalnya simbol <code>*</code> yang ada di sel
//         G5, dalam tabel pada rentang <strong>B5 sampai E9</strong>. Fungsi ini
//         akan mencari simbol tersebut di <strong>baris pertama tabel</strong>{" "}
//         (yaitu baris 5). Jika simbol <code>*</code> ditemukan, maka fungsi akan
//         mengambil <strong>nilai dari baris ke-4</strong> dalam tabel (yaitu
//         baris 8), di kolom yang sama. Angka 4 ini disebut <em>row index num</em>
//         , yaitu posisi baris yang datanya ingin diambil. Karena kita memakai{" "}
//         <code>FALSE</code>, maka pencarian hanya akan berhasil jika simbol yang
//         dicari benar-benar sama. Jadi, jika simbol <code>*</code> ditemukan di
//         baris 5, maka nilai dari baris 8 di kolom yang sama akan diambil,
//         misalnya <code>@</code>.
//       </p>

//       <div className="relative p-2 mt-2 space-y-2 bg-white border-gray-300 sm:p-2 md:p-4 sm:mt-4 md:mt-6">
//         <div className="absolute flex items-center px-3 py-1 text-sm font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-3 sm:-top-3 md:-top-4 left-2 sm:left-2 md:left-4 sm:px-3 md:px-5 sm:py-1 md:py-2 sm:text-base md:text-lg">
//           <Lightbulb className="w-4 h-4 mr-1 sm:mr-1 md:mr-2 sm:w-4 md:w-5 sm:h-4 md:h-5" />{" "}
//           Dekomposisi
//         </div>
//         <p className="mt-6 text-xs text-justify text-gray-700 sm:text-sm md:text-base sm:mt-3 md:mt-4">
//           Sebelum melakukan pencarian dengan fungsi Lookup, kita perlu memahami{" "}
//           <span className="font-semibold">komponen utama</span> dalam pencarian
//           data dan memecahnya menjadi{" "}
//           <span className="font-semibold">bagian-bagian kecil</span>. Pencarian
//           data dalam tabel lembar kerja dapat dipecah menjadi beberapa langkah
//           berikut:
//         </p>
//         <ul className="ml-4 space-y-1 text-gray-700 list-disc list-inside sm:ml-4 md:ml-6">
//           <li className="text-xs text-justify sm:text-sm md:text-base">
//             <strong>Identifikasi data</strong> yang akan dicari → Data harus
//             memiliki nilai unik sebagai referensi (misalnya, kode barang atau
//             kode siswa).
//           </li>
//           <li className="text-xs text-justify sm:text-sm md:text-base">
//             <strong>Menentukan tabel</strong> referensi → Data harus tersedia
//             dalam tabel dengan format yang benar.
//           </li>
//           <li className="text-xs text-justify sm:text-sm md:text-base">
//             <strong>Menentukan jenis</strong> fungsi lookup → Pilih fungsi yang
//             sesuai dengan kebutuhan:
//             <div className="mt-1 ml-4 space-y-2 sm:ml-4 md:ml-4">
//               <section className="p-2 bg-gray-100 rounded shadow-lg sm:p-2 md:p-4">
//                 <h3 className="font-semibold text-[#255F38] text-xs sm:text-sm md:text-base">
//                   1. VLOOKUP
//                 </h3>
//                 <p className="text-xs text-gray-700 sm:text-sm md:text-base">
//                   Fungsi VLOOKUP (Vertical Lookup) dalam spreadsheet digunakan
//                   untuk mencari nilai tertentu dalam kolom pertama dari sebuah
//                   tabel atau rentang data secara vertical (dari atas ke bawah).
//                 </p>
//                 <pre className="p-1 overflow-x-auto text-xs text-gray-800 break-words whitespace-normal bg-gray-200 rounded sm:p-1 md:p-2 sm:text-sm md:text-sm">
//                   =VLOOKUP(
//                   <span className="italic">
//                     lookup_value;table_array;col_index_num;[range_lookup]
//                   </span>
//                   )
//                 </pre>
//                 <p className="text-xs text-gray-700 sm:text-sm md:text-base">
//                   Keterangan:
//                 </p>
//                 <ul className="ml-4 text-gray-700 list-disc list-inside sm:ml-4 md:ml-6">
//                   <li className="text-xs sm:text-sm md:text-base">
//                     <strong>lookup_value:</strong> Nilai yang akan dicari dalam
//                     kolom pertama tabel.
//                   </li>
//                   <li className="text-xs sm:text-sm md:text-base">
//                     <strong>table_array:</strong> Rentang tabel tempat pencarian
//                     dilakukan.
//                   </li>
//                   <li className="text-xs sm:text-sm md:text-base">
//                     <strong>col_index_num:</strong> Nomor kolom dari mana nilai
//                     yang ingin diambil.
//                   </li>
//                   <li className="text-xs sm:text-sm md:text-base">
//                     <strong>range_lookup:</strong>{" "}
//                     <span className="italic font-bold">TRUE</span> untuk
//                     pencarian nilai mendekati,{" "}
//                     <span className="italic font-bold">FALSE</span> untuk
//                     pencarian nilai persis.
//                   </li>
//                 </ul>
//               </section>

//               <section className="p-2 bg-gray-100 rounded shadow-lg sm:p-2 md:p-4">
//                 <h3 className="font-semibold text-[#255F38] text-xs sm:text-sm md:text-base">
//                   2. HLOOKUP
//                 </h3>
//                 <p className="text-xs text-gray-700 sm:text-sm md:text-base">
//                   Fungsi HLOOKUP (Horizontal Lookup) dalam spreadsheet digunakan
//                   untuk mencari nilai tertentu dalam baris pertama dari sebuah
//                   tabel atau rentang data secara horizontal (dari kiri ke
//                   kanan).
//                 </p>
//                 <pre className="p-1 overflow-x-auto text-xs text-gray-800 break-words whitespace-normal bg-gray-200 rounded sm:p-1 md:p-2 sm:text-sm md:text-sm">
//                   =HLOOKUP(
//                   <span className="italic">
//                     lookup_value;table_array;row_index_num;[range_lookup]
//                   </span>
//                   )
//                 </pre>
//                 <p className="text-xs text-gray-700 sm:text-sm md:text-base">
//                   Keterangan:
//                 </p>
//                 <ul className="ml-4 text-gray-700 list-disc list-inside sm:ml-4 md:ml-6">
//                   <li className="text-xs sm:text-sm md:text-base">
//                     <strong>lookup_value:</strong> NilMathi yang akan dicari
//                     dalam baris pertama tabel.
//                   </li>
//                   <li className="text-xs sm:text-sm md:text-base">
//                     <strong>table_array:</strong> Rentang tabel tempat pencarian
//                     dilakukan.
//                   </li>
//                   <li className="text-xs sm:text-sm md:text-base">
//                     <strong>row_index_num:</strong> Nomor baris dari mana nilai
//                     yang ingin diambil.
//                   </li>
//                   <li className="text-xs sm:text-sm md:text-base">
//                     <strong>range_lookup:</strong>{" "}
//                     <span className="italic font-bold">TRUE</span> untuk
//                     pencarian nilai mendekati,{" "}
//                     <span className="italic font-bold">FALSE</span> untuk
//                     pencarian nilai persis.
//                   </li>
//                 </ul>
//               </section>
//             </div>
//           </li>
//         </ul>

//         <div className="bg-[#F0FFF4] p-2 sm:p-2 md:p-3 border border-[#81C784] rounded mt-2 sm:mt-4 md:mt-4 shadow-md">
//           <h3 className="font-semibold text-[#2E7D32] text-sm sm:text-base md:text-base mb-2">
//             Latihan Pemahaman: Memecah Masalah Pencarian Kode Barang
//           </h3>
//           <p className="mb-2 text-xs text-justify text-gray-700 sm:text-sm md:text-base">
//             Bantulah toko untuk memecah masalah pencarian data barang
//             berdasarkan kode. Daftar barang memiliki kolom kode, nama, dan
//             harga. Tentukan langkah-langkah yang tepat untuk memecah masalah
//             ini:
//           </p>
//           <div className="ml-4 space-y-1 text-gray-700 sm:ml-4 md:ml-6">
//             <div className="text-xs sm:text-sm md:text-base">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={dekomposisiAnswers.step1}
//                   onChange={() => handleDekomposisiChange("step1")}
//                   className="mr-2"
//                 />
//                 1. Identifikasi data yang akan dicari (misalnya kode barang
//                 "B001").
//               </label>
//             </div>
//             <div className="text-xs sm:text-sm md:text-base">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={dekomposisiAnswers.step2}
//                   onChange={() => handleDekomposisiChange("step2")}
//                   className="mr-2"
//                 />
//                 2. Tentukan tabel referensi yang berisi data barang.
//               </label>
//             </div>
//             <div className="text-xs sm:text-sm md:text-base">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={dekomposisiAnswers.step3}
//                   onChange={() => handleDekomposisiChange("step3")}
//                   className="mr-2"
//                 />
//                 3. Hitung total harga barang secara manual.
//               </label>
//             </div>
//           </div>
//           <div className="flex justify-center mt-2 space-x-2">
//             <button
//               onClick={checkDekomposisiAnswers}
//               className="bg-[#1B5E20] text-white px-2 sm:px-2 md:px-3 py-1 sm:py-1 md:py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
//             >
//               Periksa
//             </button>
//             <button
//               onClick={resetDekomposisiAnswers}
//               className="bg-[#D32F2F] text-white px-2 sm:px-2 md:px-3 py-1 sm:py-1 md:py-1 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
//             >
//               Hapus
//             </button>
//           </div>
//           {dekomposisiFeedback && (
//             <p
//               className={`text-xs sm:text-sm md:text-base mt-2 font-bold ${
//                 dekomposisiFeedback.includes("Benar")
//                   ? "text-[#255F38]"
//                   : "text-red-600"
//               }`}
//             >
//               {dekomposisiFeedback}
//             </p>
//           )}
//         </div>
//       </div>

//       <div className="relative p-2 mt-2 space-y-2 bg-white border-gray-300 sm:p-2 md:p-4 sm:mt-4 md:mt-10">
//         <div className="absolute flex items-center px-3 py-1 text-sm font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-3 sm:-top-3 md:-top-4 left-2 sm:left-2 md:left-4 sm:px-3 md:px-5 sm:py-1 md:py-2 sm:text-base md:text-lg">
//           <BarChart className="w-4 h-4 mr-1 sm:mr-1 md:mr-2 sm:w-4 md:w-5 sm:h-4 md:h-5" />{" "}
//           PENGENALAN POLA
//         </div>
//         <p className="mt-6 text-xs text-justify text-gray-700 sm:text-sm md:text-base sm:mt-3 md:mt-4">
//           Setelah memecah permasalahan, kita perlu mengidentifikasi{" "}
//           <span className="font-bold">pola dalam data</span> untuk memastikan
//           pencarian dilakukan secara efisien.
//         </p>
//         <p className="mt-1 text-xs text-justify text-gray-700 sm:text-sm md:text-base">
//           📌 Pola umum dalam pencarian data menggunakan Lookup meliputi:
//         </p>
//         <div className="ml-4 space-y-1 text-gray-700 sm:ml-4 md:ml-6">
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             <strong>1. Nilai referensi</strong> bersifat unik dalam tabel
//             referensi.
//           </div>
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             <strong>2. Data dalam tabel</strong> referensi harus tersusun dengan
//             benar sesuai urutan pencarian.
//           </div>
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             <strong>3. Pencarian dilakukan</strong> dengan mencocokkan nilai
//             referensi dengan baris atau kolom pertama dalam tabel referensi.
//           </div>
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             <strong>4. Jika tabel tidak terurut</strong> maka parameter
//             range_lookup harus bernilai FALSE untuk mencari kecocokan persis.
//           </div>
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             <strong>5. Jika tabel terurut</strong> maka range_lookup bisa
//             bernilai TRUE untuk pencarian nilai terdekat.
//           </div>
//         </div>
//       </div>

//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
//           <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
//         </div>
//         <p className="mt-6 text-xs text-justify text-gray-600 sm:text-sm md:text-base sm:mt-2 md:mt-2">
//           Setelah mengidentifikasi pola, kita dapat{" "}
//           <span className="font-semibold">menyederhanakan masalah</span> dengan{" "}
//           <span className="font-semibold">mengabaikan</span> informasi yang
//           tidak perlu dan fokus pada elemen penting untuk pencarian.
//         </p>
//         <p className="mt-1 text-xs text-justify text-gray-700 sm:text-sm md:text-base">
//           📌 Bagian yang harus diperhatikan:
//         </p>
//         <div className="ml-4 space-y-1 text-gray-700 sm:ml-4 md:ml-6">
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             <strong>1. Kolom atau baris pertama</strong> dalam tabel referensi
//             harus berisi nilai referensi (lookup_value).
//           </div>
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             <strong>2. Posisi kolom atau baris</strong> tempat data yang akan
//             diambil harus diketahui.
//           </div>
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             <strong>3. Gunakan tanda dolar</strong> atau absolute reference ($)
//             untuk membuat referensi tabel tetap saat menyalin rumus.
//           </div>
//         </div>
//       </div>

//       <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
//         <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
//           <Code className="w-4 h-4 mr-1 sm:mr-1 md:mr-2 sm:w-4 md:w-5 sm:h-4 md:h-5" />{" "}
//           ALGORITMA
//         </div>
//         <p className="mt-6 text-xs text-justify text-gray-600 sm:text-sm md:text-base sm:mt-2 md:mt-2">
//           Setelah memahami dan menyederhanakan masalah, kita dapat{" "}
//           <span className="font-semibold">
//             menyusun langkah-langkah sistematis
//           </span>{" "}
//           untuk pencarian menggunakan VLOOKUP atau HLOOKUP.
//         </p>
//         <p className="mt-1 text-xs text-justify text-gray-700 sm:text-sm md:text-base">
//           📌 Langkah-langkah penggunaan fungsi Lookup:
//         </p>
//         <div className="ml-4 space-y-1 text-gray-700 sm:ml-4 md:ml-6">
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             1. Tentukan nilai referensi (lookup_value) yang akan dicari.
//           </div>
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             2. Pilih tabel referensi (table_array) yang berisi data pencarian.
//           </div>
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             3. Tentukan nomor kolom atau baris yang berisi data yang ingin
//             diambil.
//           </div>
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             4. Pilih metode pencarian:
//             <div className="mt-1 ml-4 sm:ml-4 md:ml-4">
//               <div className="text-xs sm:text-sm md:text-base">
//                 a. Jika tabel tidak terurut, kita harus menggunakan FALSE agar
//                 VLOOKUP mencari kecocokan yang persis.
//               </div>
//               <div className="text-xs sm:text-sm md:text-base">
//                 b. Jika tabel terurut, kita bisa menggunakan TRUE untuk mencari
//                 nilai terdekat atau mendekati.
//               </div>
//             </div>
//           </div>
//           <div className="text-xs text-justify sm:text-sm md:text-base">
//             5. Gunakan rumus VLOOKUP atau HLOOKUP dengan format yang benar.
//           </div>
//         </div>

//         <div className="bg-[#F0FFF4] p-2 sm:p-2 md:p-3 border border-[#81C784] rounded mt-2 sm:mt-4 md:mt-4 shadow-md">
//           <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#255F38] mb-2">
//             MARI MENGAMATI
//           </h3>
//           <p className="mb-2 text-xs text-justify text-gray-700 sm:text-sm md:text-base">
//             Perhatikan tabel data yang berisi kolom kode barang dan harga, di
//             mana harga untuk kode C002 masih kosong. Gunakan fungsi LOOKUP untuk
//             mencari harga C002 pada tabel referensi yang memuat daftar kode
//             barang dan harganya, lalu isi harga yang sesuai di tabel data.
//           </p>
//           <div className="flex flex-col justify-center gap-2 mt-2 sm:flex-row sm:gap-4">
//             <div className="w-full sm:w-auto">
//               <p className="mb-2 text-xs text-center text-gray-700 sm:text-sm md:text-base">
//                 Tabel Data
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="w-full mx-auto text-xs border border-collapse border-green-800 sm:max-w-xs md:max-w-md sm:text-sm">
//                   <thead>
//                     <tr className="bg-[#255F38] text-white">
//                       <th className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
//                         Kode
//                       </th>
//                       <th className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
//                         Nama
//                       </th>
//                       <th className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
//                         Harga
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {tableData.map((row, index) => (
//                       <tr
//                         key={index}
//                         className={
//                           isLookupStarted &&
//                           lookupSteps[lookupStep].highlightedRows.includes(
//                             index
//                           )
//                             ? lookupSteps[lookupStep].colorData || ""
//                             : ""
//                         }
//                       >
//                         <td
//                           className={`border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1 ${
//                             isLookupStarted &&
//                             lookupSteps[lookupStep].highlightedColumn === 1 &&
//                             index === 1
//                               ? "bg-yellow-200"
//                               : ""
//                           }`}
//                         >
//                           {row.kode}
//                         </td>
//                         <td className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
//                           {row.nama}
//                         </td>
//                         <td
//                           className={`border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1 ${
//                             isLookupStarted &&
//                             lookupSteps[lookupStep].highlightedColumn === 3 &&
//                             index === 1 &&
//                             lookupStep === lookupSteps.length - 1
//                               ? "bg-orange-200"
//                               : ""
//                           }`}
//                         >
//                           {isLookupStarted &&
//                           lookupStep === lookupSteps.length - 1 &&
//                           row.kode === lookupValue
//                             ? lookupSteps[lookupStep].result
//                             : row.harga}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className="w-full sm:w-auto">
//               <p className="mb-2 text-xs text-center text-gray-700 sm:text-sm md:text-base">
//                 Tabel Referensi
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="w-full mx-auto text-xs border border-collapse border-green-800 sm:max-w-xs md:max-w-md sm:text-sm">
//                   <thead>
//                     <tr className="bg-[#255F38] text-white">
//                       <th className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
//                         Kode
//                       </th>
//                       <th className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
//                         Nama
//                       </th>
//                       <th className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
//                         Harga
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {tableReference.map((row, index) => (
//                       <tr
//                         key={index}
//                         className={
//                           isLookupStarted &&
//                           lookupSteps[lookupStep].highlightedRows.includes(
//                             index
//                           )
//                             ? lookupSteps[lookupStep].colorReference || ""
//                             : ""
//                         }
//                       >
//                         <td
//                           className={`border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1 ${
//                             isLookupStarted &&
//                             lookupSteps[lookupStep].highlightedColumn === 1 &&
//                             index === 1
//                               ? "bg-green-200"
//                               : ""
//                           }`}
//                         >
//                           {row.kode}
//                         </td>
//                         <td className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
//                           {row.nama}
//                         </td>
//                         <td
//                           className={`border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1 ${
//                             isLookupStarted &&
//                             lookupSteps[lookupStep].highlightedColumn === 3 &&
//                             index === 1 &&
//                             lookupStep >= 3
//                               ? "bg-blue-200"
//                               : lookupSteps[lookupStep].colorReference ===
//                                   "bg-orange-200" && index === 1
//                               ? "bg-orange-200"
//                               : ""
//                           }`}
//                         >
//                           {row.harga}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//           <p className="mt-2 text-xs text-center text-gray-700 sm:text-sm md:text-base">
//             Langkah saat ini:{" "}
//             <strong>
//               {isLookupStarted
//                 ? lookupSteps[lookupStep].description
//                 : "Tekan 'Mulai' untuk memulai visualisasi"}
//             </strong>
//           </p>
//           {isLookupStarted && lookupSteps[lookupStep].result && (
//             <p className="mt-2 text-xs text-center text-gray-700 sm:text-sm md:text-base">
//               Hasil: <strong>{lookupSteps[lookupStep].result}</strong>
//             </p>
//           )}
//           <div className="flex justify-center mt-2 space-x-2">
//             {!isLookupStarted ? (
//               <button
//                 onClick={() => {
//                   setIsLookupStarted(true);
//                   setLookupStep(0);
//                 }}
//                 className="bg-[#1B5E20] text-white px-2 sm:px-2 md:px-3 py-1 sm:py-1 md:py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
//               >
//                 Mulai
//               </button>
//             ) : (
//               <>
//                 <button
//                   onClick={() =>
//                     nextStep(
//                       lookupStep,
//                       setLookupStep,
//                       lookupSteps.length,
//                       setIsLookupStarted
//                     )
//                   }
//                   className="bg-[#1B5E20] text-white px-2 sm:px-2 md:px-3 py-1 sm:py-1 md:py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
//                 >
//                   Langkah Selanjutnya
//                 </button>
//                 <button
//                   onClick={() => resetStep(setLookupStep, setIsLookupStarted)}
//                   className="bg-[#D32F2F] text-white px-2 sm:px-2 md:px-3 py-1 sm:py-1 md:py-1 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
//                 >
//                   Ulangi
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="relative p-2 mt-2 space-y-2 bg-white border-gray-300 sm:p-2 md:p-4 sm:mt-4 md:mt-12">
//         <h3 className="font-semibold text-[#255F38] text-sm sm:text-base md:text-lg mb-2">
//           Kuis Pemahaman: Pencarian Data dengan Fungsi Lookup
//         </h3>
//         <p className="text-xs text-justify text-gray-700 sm:text-sm md:text-base">
//           Jawab pertanyaan berikut untuk menguji pemahaman Anda tentang konsep
//           pencarian data menggunakan fungsi Lookup:
//         </p>
//         <div className="relative p-2 mt-2 border border-yellow-300 rounded shadow-md bg-yellow-50 sm:p-2 md:p-4 sm:mt-4 md:mt-4">
//           <div className="mt-8 sm:mt-8 md:mt-8">
//             <h4 className="mb-2 text-xs font-semibold text-yellow-800 sm:text-sm md:text-base">
//               {questions[currentQuestion - 1].question}
//             </h4>
//             <div className="ml-4 space-y-1 text-gray-700 sm:ml-4 md:ml-6">
//               {questions[currentQuestion - 1].options.map((option, index) => (
//                 <div key={index} className="text-xs sm:text-sm md:text-base">
//                   <label className="flex items-center p-2 mb-2 border border-gray-300 rounded sm:p-2 sm:mb-2">
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
//                 className={`text-xs sm:text-sm md:text-base mt-2 font-bold ${
//                   feedback[currentQuestion].includes("Benar")
//                     ? "text-[#255F38]"
//                     : "text-red-600"
//                 }`}
//               >
//                 {feedback[currentQuestion]}
//               </p>
//             )}
//             <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
//               <div className="flex space-x-2">
//                 <button
//                   onClick={goToPrevious}
//                   className="bg-gray-500 text-white px-3 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-lg hover:bg-gray-600 text-xs sm:text-sm md:text-base min-w-[80px] cursor-pointer"
//                   disabled={currentQuestion === 1}
//                 >
//                   Sebelumnya
//                 </button>
//                 {feedback[currentQuestion] && (
//                   <button
//                     onClick={resetQuizAnswer}
//                     className="bg-[#D32F2F] text-white px-3 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded hover:bg-[#B71C1C] transition duration-300 text-xs sm:text-sm md:text-base min-w-[80px] cursor-pointer"
//                   >
//                     Hapus
//                   </button>
//                 )}
//               </div>
//               {currentQuestion < 5 && isAnswered[currentQuestion] && (
//                 <button
//                   onClick={goToNext}
//                   className="bg-[#255F38] text-white px-3 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-lg hover:bg-[#1E4D2E] text-xs sm:text-sm md:text-base min-w-[80px] cursor-pointer"
//                 >
//                   Soal Selanjutnya
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-between px-2 py-2 mt-2 sm:px-2 md:px-6 sm:py-2 md:py-2 sm:mt-4 md:mt-4">
//         <button
//           onClick={() => (window.location.href = "/penerapan-ct")}
//           className="bg-gray-500 text-white px-3 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-lg hover:bg-gray-600 text-xs sm:text-sm md:text-base min-w-[80px] cursor-pointer"
//         >
//           ← Sebelumnya
//         </button>
//         <button
//           onClick={() => (window.location.href = "/contoh-lookup")}
//           className="bg-[#255F38] text-white px-3 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-lg hover:bg-[#1E4D2E] text-xs sm:text-sm md:text-base min-w-[80px] cursor-pointer"
//         >
//           Selanjutnya →
//         </button>
//       </div>
//     </Layout>
//   );
// }


import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code } from "lucide-react";
import { useState } from "react";
import ilustrasi1 from "../../assets/PencarianData/ilustrasi1.png";
import ilustrasi2 from "../../assets/PencarianData/ilustrasi2.png";

export default function PencarianLookup() {
  // State untuk Aktivitas DEKOMPOSISI
  const [dekomposisiAnswers, setDekomposisiAnswers] = useState({
    step1: false,
    step2: false,
    step3: false,
  });
  const [dekomposisiFeedback, setDekomposisiFeedback] = useState("");
  const [dekomposisiAnswered, setDekomposisiAnswered] = useState(false);

  const handleDekomposisiChange = (step) => {
    setDekomposisiAnswers((prev) => ({ ...prev, [step]: !prev[step] }));
  };

  const checkDekomposisiAnswers = () => {
    const correctAnswers = { step1: true, step2: true, step3: false };
    const isCorrect =
      dekomposisiAnswers.step1 === correctAnswers.step1 &&
      dekomposisiAnswers.step2 === correctAnswers.step2 &&
      dekomposisiAnswers.step3 === correctAnswers.step3;
    setDekomposisiFeedback(
      isCorrect
        ? "Benar! Langkah-langkah yang tepat adalah mengidentifikasi data dan menentukan tabel referensi."
        : "Salah. Silakan coba lagi dan perhatikan langkah-langkah yang relevan."
    );
    setDekomposisiAnswered(true);
  };

  const resetDekomposisiAnswers = () => {
    setDekomposisiAnswers({ step1: false, step2: false, step3: false });
    setDekomposisiFeedback("");
    setDekomposisiAnswered(false);
  };

  // State untuk Aktivitas Algoritma (Visualisasi Interaktif)
  const [lookupStep, setLookupStep] = useState(0);
  const [isLookupStarted, setIsLookupStarted] = useState(false);
  const lookupValue = "C002"; // Nilai referensi yang dicari
  const tableData = [
    { kode: "C001", nama: "Buku", harga: 5000 },
    { kode: "C002", nama: "Pensil", harga: "" }, // Harga C002 kosong
    { kode: "C003", nama: "Pen", harga: 3000 },
  ];
  const tableReference = [
    { kode: "C001", nama: "Buku", harga: 5000 },
    { kode: "C002", nama: "Pensil", harga: 2000 },
    { kode: "C003", nama: "Pen", harga: 3000 },
  ];
  const colIndexNum = 3; // Kolom harga (indeks 3, karena dimulai dari 1)

  const lookupSteps = [
    {
      description: "Pilih range kriteria: Kolom 'Kode' pada tabel data.",
      highlightedRows: [],
      highlightedColumn: null,
      result: null,
      colorData: null,
      colorReference: null,
    },
    {
      description: "Tetapkan nilai referensi: 'C002'.",
      highlightedRows: [1],
      highlightedColumn: 1,
      result: null,
      colorData: "bg-yellow-200",
      colorReference: null,
    },
    {
      description: "Cari 'C002' pada kolom 'Kode' di tabel referensi.",
      highlightedRows: [1],
      highlightedColumn: 1,
      result: null,
      colorData: null,
      colorReference: "bg-green-200",
    },
    {
      description: "Tentukan kolom harga (indeks 3) untuk mengambil nilai.",
      highlightedRows: [1],
      highlightedColumn: 3,
      result: null,
      colorData: null,
      colorReference: "bg-blue-200",
    },
    {
      description:
        "Pilih metode pencarian: Gunakan FALSE untuk kecocokan persis.",
      highlightedRows: [],
      highlightedColumn: null,
      result: null,
      colorData: null,
      colorReference: null,
    },
    {
      description: "Hasil ditemukan: Harga untuk 'C002' adalah 2000.",
      highlightedRows: [1],
      highlightedColumn: 3,
      result: 2000,
      colorData: "bg-orange-200",
      colorReference: "bg-orange-200",
    },
  ];

  const nextStep = (currentStep, setStep, maxSteps, setIsStarted) => {
    if (currentStep < maxSteps - 1) {
      setStep(currentStep + 1);
      setIsStarted(true);
    }
  };

  const resetStep = (setStep, setIsStarted) => {
    setStep(0);
    setIsStarted(false);
  };

  // State untuk Kuis Pemahaman
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" });
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
      question:
        "Jika tabel referensi tidak terurut, parameter range_lookup bernilai FALSE pada fungsi VLOOKUP akan ....",
      options: [
        "A. Mencari nilai terdekat",
        "B. Mencari kecocokan persis",
        "C. Mengurutkan tabel terlebih dahulu",
        "D. Mengabaikan nilai referensi",
      ],
      correctAnswer: "B. Mencari kecocokan persis",
      explanation:
        "Parameter range_lookup FALSE memastikan VLOOKUP hanya mencari kecocokan yang persis, bukan nilai terdekat.",
    },
    {
      question:
        "Tujuan utama dari langkah abstraksi dalam proses pencarian data menggunakan fungsi Lookup adalah ....",
      options: [
        "A. Menghitung total data",
        "B. Mengurutkan tabel referensi",
        "C. Mengabaikan informasi yang tidak perlu",
        "D. Membuat tabel baru",
      ],
      correctAnswer: "C. Mengabaikan informasi yang tidak perlu",
      explanation:
        "Abstraksi membantu menyederhanakan masalah dengan fokus pada data penting dan mengabaikan yang tidak relevan.",
    },
    {
      question:
        "Langkah pertama dalam dekomposisi proses pencarian data menggunakan fungsi Lookup adalah ....",
      options: [
        "A. Menentukan tabel referensi",
        "B. Identifikasi data yang akan dicari",
        "C. Menentukan jenis fungsi lookup",
        "D. Mengambil informasi",
      ],
      correctAnswer: "B. Identifikasi data yang akan dicari",
      explanation:
        "Dekomposisi dimulai dengan mengidentifikasi data yang akan dicari, seperti kode barang atau nilai unik lainnya.",
    },
    {
      question:
        "Pola yang umum digunakan dalam pencarian data dengan fungsi Lookup adalah ....",
      options: [
        "A. Harga selalu di kolom pertama",
        "B. Nilai referensi bersifat unik",
        "C. Tabel tidak perlu terurut",
        "D. Pencarian dilakukan tanpa referensi",
      ],
      correctAnswer: "B. Nilai referensi bersifat unik",
      explanation:
        "Nilai referensi yang unik memastikan pencarian data akurat dan tidak ada duplikat dalam tabel referensi.",
    },
    {
      question:
        "Jika tabel referensi terurut, pada fungsi VLOOKUP dengan range_lookup bernilai TRUE, maka yang harus dilakukan adalah ....",
      options: [
        "A. Mencari kecocokan persis",
        "B. Mencari nilai terdekat",
        "C. Mengabaikan urutan tabel",
        "D. Menggunakan referensi absolut",
      ],
      correctAnswer: "B. Mencari nilai terdekat",
      explanation:
        "Jika tabel terurut dan range_lookup TRUE, VLOOKUP akan mencari nilai terdekat yang kurang dari atau sama dengan lookup_value.",
    },
  ];

  const handleAnswerChange = (option) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    const currentCorrect = questions[currentQuestion - 1].correctAnswer;
    setFeedback((prev) => ({
      ...prev,
      [currentQuestion]:
        option === currentCorrect
          ? `Benar! ${questions[currentQuestion - 1].explanation}`
          : "Salah. Silakan coba lagi dan perhatikan opsi yang lebih sesuai.",
    }));
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
        alert(
          "Soal ini telah dijawab. Silakan lanjut ke soal berikutnya atau hapus jawaban untuk memilih ulang."
        );
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
      <div className="p-2 sm:p-2 md:p-4 bg-[#255F38] text-white font-bold text-sm sm:text-base md:text-lg text-center rounded-lg shadow-lg">
        A. PENCARIAN DATA
      </div>

      <section className="p-2 mt-2 mb-2 bg-green-100 rounded shadow-md sm:p-2 md:p-4 sm:mt-2 md:mt-6 sm:mb-2 md:mb-6">
        <h2 className="font-bold text-[#255F38] text-sm sm:text-base md:text-lg">
          Tujuan Pembelajaran:
        </h2>
        <div className="mt-1 ml-4 space-y-1 text-gray-700 sm:ml-4 md:ml-6">
          <div className="text-xs sm:text-sm md:text-base">
            1. Peserta didik mampu menggunakan fungsi Lookup dan Reference untuk
            melakukan pencarian data secara tepat.
          </div>
          <div className="text-xs sm:text-sm md:text-base">
            2. Peserta didik mampu menerapkan pendekatan Computational Thinking
            dalam menyelesaikan permasalahan yang berkaitan dengan pencarian
            data.
          </div>
        </div>
      </section>

      <p className="px-2 text-xs leading-relaxed text-justify text-gray-700 sm:text-sm md:text-base sm:px-2 md:px-6">
        Dalam proses pencarian data, terdapat dua jenis utama fungsi pencarian:
        Lookup dan Reference. Fungsi Lookup digunakan untuk mencari nilai
        tertentu dalam tabel atau array dan mengembalikan hasil yang sesuai
        berdasarkan kunci pencarian. Fungsi ini sering diterapkan dalam
        spreadsheet untuk menemukan data terkait dengan nilai tertentu.
        Sementara itu, fungsi Reference digunakan untuk mengambil nilai
        berdasarkan referensi sel atau alamat memori, sehingga lebih fleksibel
        saat posisi data berubah. Dengan kedua metode ini, pencarian data
        menjadi lebih cepat dan akurat dibandingkan pencarian manual. Hasil
        pencarian memiliki dua kemungkinan:
      </p>
      <div className="px-2 mt-1 ml-4 space-y-1 sm:ml-6 md:ml-6 sm:px-2 md:px-6">
        <div className="text-xs text-justify sm:text-sm md:text-base">
          <strong>1. Data ditemukan</strong> → Data yang dicari sesuai dengan
          data dalam tabel.
        </div>
        <div className="text-xs text-justify sm:text-sm md:text-base">
          <strong>2. Data tidak ditemukan</strong> → Data yang dicari tidak ada
          dalam tabel.
        </div>
      </div>

      <div className="p-2 sm:p-2 md:p-4 bg-[#255F38] text-white font-bold text-sm sm:text-base md:text-lg mt-2 sm:mt-2 md:mt-6">
        1. Pencarian Lookup
      </div>
      <p className="px-2 mt-2 text-xs leading-relaxed text-justify text-gray-700 sm:text-sm md:text-base sm:px-2 md:px-6 sm:mt-2 md:mt-4">
        Dalam kehidupan sehari-hari, kita sering melakukan pencarian data,
        seperti mencari nomor telepon di kontak ponsel atau informasi barang di
        daftar inventaris. Dalam dunia digital, pencarian data dapat dilakukan
        lebih cepat dan efisien dengan menggunakan fungsi Lookup di aplikasi
        lembar kerja.
      </p>
      <p className="px-2 text-xs font-semibold leading-relaxed text-justify text-gray-700 sm:text-sm md:text-base sm:px-2 md:px-6">
        Fungsi Lookup digunakan untuk:
      </p>
      <div className="px-2 mt-1 ml-4 space-y-1 sm:ml-6 md:ml-6 sm:px-2 md:px-6">
        <div className="text-xs text-justify sm:text-sm md:text-base">
          <strong>1. Mencari data</strong> dalam tabel → Membantu menemukan
          informasi di daftar besar.
        </div>
        <div className="text-xs text-justify sm:text-sm md:text-base">
          <strong>2. Mengambil informasi</strong> berdasarkan referensi →
          Memungkinkan pencarian dengan kunci tertentu.
        </div>
        <div className="text-xs text-justify sm:text-sm md:text-base">
          <strong>3. Mempermudah pengolahan</strong> data → Efektif untuk
          menangani data dalam jumlah banyak.
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <img
          src={ilustrasi1}
          alt="Siswa Mengelola Data"
          className="w-full max-w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-md h-auto object-contain"
        />
      </div>
      <p className="mt-1 text-xs italic text-center text-gray-500 sm:text-sm md:text-base">
        Gambar 2. Pencarian dengan VLOOKUP
      </p>
      <p className="px-2 mt-2 text-xs leading-relaxed text-justify text-gray-700 sm:text-sm md:text-base sm:px-2 md:px-6">
        Pada gambar 2, fungsi <strong>VLOOKUP</strong> digunakan untuk mencari
        sebuah nilai tertentu, misalnya simbol <code>*</code> yang ada di sel
        G5, dalam sebuah tabel di rentang <strong>B5 sampai E9</strong>. Fungsi
        ini akan mencari simbol tersebut di <strong>kolom pertama tabel</strong>{" "}
        (kolom B). Jika simbol <code>*</code> ditemukan, maka fungsi akan
        mengambil <strong>nilai dari kolom ke-3</strong> (yaitu kolom D) yang
        sejajar atau sebaris dengan simbol tersebut. Angka 3 ini disebut{" "}
        <em>col index num</em>, yaitu posisi kolom yang diambil datanya. Karena
        menggunakan <code>FALSE</code>, artinya hanya akan cocok jika simbol
        yang dicari benar-benar sama persis. Jadi, jika simbol <code>*</code>{" "}
        ada di kolom B, maka nilai yang diambil dari kolom D adalah{" "}
        <code>@</code>.
      </p>

      <div className="flex justify-center mt-2">
        <img
          src={ilustrasi2}
          alt="Siswa Mengelola Data"
          className="w-full max-w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-md h-auto object-contain"
        />
      </div>
      <p className="mt-1 text-xs italic text-center text-gray-500 sm:text-sm md:text-base">
        Gambar 3. Pencarian dengan HLOOKUP
      </p>
      <p className="px-2 mt-2 text-xs leading-relaxed text-justify text-gray-700 sm:text-sm md:text-base sm:px-2 md:px-6">
        Pada Gambar 3, fungsi <strong>HLOOKUP</strong> digunakan untuk mencari
        sebuah nilai tertentu, misalnya simbol <code>*</code> yang ada di sel
        G5, dalam tabel pada rentang <strong>B5 sampai E9</strong>. Fungsi ini
        akan mencari simbol tersebut di <strong>baris pertama tabel</strong>{" "}
        (yaitu baris 5). Jika simbol <code>*</code> ditemukan, maka fungsi akan
        mengambil <strong>nilai dari baris ke-4</strong> dalam tabel (yaitu
        baris 8), di kolom yang sama. Angka 4 ini disebut <em>row index num</em>
        , yaitu posisi baris yang datanya ingin diambil. Karena kita memakai{" "}
        <code>FALSE</code>, maka pencarian hanya akan berhasil jika simbol yang
        dicari benar-benar sama. Jadi, jika simbol <code>*</code> ditemukan di
        baris 5, maka nilai dari baris 8 di kolom yang sama akan diambil,
        misalnya <code>@</code>.
      </p>

      <div className="relative p-2 mt-2 space-y-2 bg-white border-gray-300 sm:p-2 md:p-4 sm:mt-4 md:mt-6">
        <div className="absolute flex items-center px-3 py-1 text-sm font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-3 sm:-top-3 md:-top-4 left-2 sm:left-2 md:left-4 sm:px-3 md:px-5 sm:py-1 md:py-2 sm:text-base md:text-lg">
          <Lightbulb className="w-4 h-4 mr-1 sm:mr-1 md:mr-2 sm:w-4 md:w-5 sm:h-4 md:h-5" />{" "}
          DEKOMPOSISI
        </div>
        <p className="mt-6 text-xs text-justify text-gray-700 sm:text-sm md:text-base sm:mt-3 md:mt-4">
          Sebelum melakukan pencarian dengan fungsi Lookup, kita perlu memahami{" "}
          <span className="font-semibold">komponen utama</span> dalam pencarian
          data dan memecahnya menjadi{" "}
          <span className="font-semibold">bagian-bagian kecil</span>. Pencarian
          data dalam tabel lembar kerja dapat dipecah menjadi beberapa langkah
          berikut:
        </p>
        <ul className="ml-4 space-y-1 text-gray-700 list-disc list-inside sm:ml-4 md:ml-6">
          <li className="text-xs text-justify sm:text-sm md:text-base">
            <strong>Identifikasi data</strong> yang akan dicari → Data harus
            memiliki nilai unik sebagai referensi (misalnya, kode barang atau
            kode siswa).
          </li>
          <li className="text-xs text-justify sm:text-sm md:text-base">
            <strong>Menentukan tabel</strong> referensi → Data harus tersedia
            dalam tabel dengan format yang benar.
          </li>
          <li className="text-xs text-justify sm:text-sm md:text-base">
            <strong>Menentukan jenis</strong> fungsi lookup → Pilih fungsi yang
            sesuai dengan kebutuhan:
            <div className="mt-1 ml-4 space-y-2 sm:ml-4 md:ml-4">
              <section className="p-2 bg-gray-100 rounded shadow-lg sm:p-2 md:p-4">
                <h3 className="font-semibold text-[#255F38] text-xs sm:text-sm md:text-base">
                  1. VLOOKUP
                </h3>
                <p className="text-xs text-gray-700 sm:text-sm md:text-base">
                  Fungsi VLOOKUP (Vertical Lookup) dalam spreadsheet digunakan
                  untuk mencari nilai tertentu dalam kolom pertama dari sebuah
                  tabel atau rentang data secara vertical (dari atas ke bawah).
                </p>
                <pre className="p-1 overflow-x-auto text-xs text-gray-800 break-words whitespace-normal bg-gray-200 rounded sm:p-1 md:p-2 sm:text-sm md:text-sm">
                  =VLOOKUP(
                  <span className="italic">
                    lookup_value;table_array;col_index_num;[range_lookup]
                  </span>
                  )
                </pre>
                <p className="text-xs text-gray-700 sm:text-sm md:text-base">
                  Keterangan:
                </p>
                <ul className="ml-4 text-gray-700 list-disc list-inside sm:ml-4 md:ml-6">
                  <li className="text-xs sm:text-sm md:text-base">
                    <strong>lookup_value:</strong> Nilai yang akan dicari dalam
                    kolom pertama tabel.
                  </li>
                  <li className="text-xs sm:text-sm md:text-base">
                    <strong>table_array:</strong> Rentang tabel tempat pencarian
                    dilakukan.
                  </li>
                  <li className="text-xs sm:text-sm md:text-base">
                    <strong>col_index_num:</strong> Nomor kolom dari mana nilai
                    yang ingin diambil.
                  </li>
                  <li className="text-xs sm:text-sm md:text-base">
                    <strong>range_lookup:</strong>{" "}
                    <span className="italic font-bold">TRUE</span> untuk
                    pencarian nilai mendekati,{" "}
                    <span className="italic font-bold">FALSE</span> untuk
                    pencarian nilai persis.
                  </li>
                </ul>
              </section>

              <section className="p-2 bg-gray-100 rounded shadow-lg sm:p-2 md:p-4">
                <h3 className="font-semibold text-[#255F38] text-xs sm:text-sm md:text-base">
                  2. HLOOKUP
                </h3>
                <p className="text-xs text-gray-700 sm:text-sm md:text-base">
                  Fungsi HLOOKUP (Horizontal Lookup) dalam spreadsheet digunakan
                  untuk mencari nilai tertentu dalam baris pertama dari sebuah
                  tabel atau rentang data secara horizontal (dari kiri ke
                  kanan).
                </p>
                <pre className="p-1 overflow-x-auto text-xs text-gray-800 break-words whitespace-normal bg-gray-200 rounded sm:p-1 md:p-2 sm:text-sm md:text-sm">
                  =HLOOKUP(
                  <span className="italic">
                    lookup_value;table_array;row_index_num;[range_lookup]
                  </span>
                  )
                </pre>
                <p className="text-xs text-gray-700 sm:text-sm md:text-base">
                  Keterangan:
                </p>
                <ul className="ml-4 text-gray-700 list-disc list-inside sm:ml-4 md:ml-6">
                  <li className="text-xs sm:text-sm md:text-base">
                    <strong>lookup_value:</strong> Nilai yang akan dicari
                    dalam baris pertama tabel.
                  </li>
                  <li className="text-xs sm:text-sm md:text-base">
                    <strong>table_array:</strong> Rentang tabel tempat pencarian
                    dilakukan.
                  </li>
                  <li className="text-xs sm:text-sm md:text-base">
                    <strong>row_index_num:</strong> Nomor baris dari mana nilai
                    yang ingin diambil.
                  </li>
                  <li className="text-xs sm:text-sm md:text-base">
                    <strong>range_lookup:</strong>{" "}
                    <span className="italic font-bold">TRUE</span> untuk
                    pencarian nilai mendekati,{" "}
                    <span className="italic font-bold">FALSE</span> untuk
                    pencarian nilai persis.
                  </li>
                </ul>
              </section>
            </div>
          </li>
        </ul>

        <div className="bg-[#F5F5F5] p-2 sm:p-2 md:p-3 border border-[#B0BEC5] rounded mt-2 sm:mt-4 md:mt-4 shadow-md">
          <h3 className="font-semibold text-[#455A64] text-sm sm:text-base md:text-base mb-2">
            Latihan Pemahaman: Memecah Masalah Pencarian Kode Barang
          </h3>
          <p className="mb-2 text-xs text-justify text-gray-700 sm:text-sm md:text-base">
            Bantulah toko untuk memecah masalah pencarian data barang
            berdasarkan kode. Daftar barang memiliki kolom kode, nama, dan
            harga. Tentukan langkah-langkah yang tepat untuk memecah masalah
            ini:
          </p>
          <div className="ml-4 space-y-1 text-gray-700 sm:ml-4 md:ml-6">
            <div className="text-xs sm:text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dekomposisiAnswers.step1}
                  onChange={() => handleDekomposisiChange("step1")}
                  className="mr-2"
                />
                1. Identifikasi data yang akan dicari (misalnya kode barang
                "B001").
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
                2. Tentukan tabel referensi yang berisi data barang.
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
                3. Hitung total harga barang secara manual.
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-2 space-x-2">
            <button
              onClick={checkDekomposisiAnswers}
              className="bg-[#1B5E20] text-white px-2 sm:px-2 md:px-3 py-1 sm:py-1 md:py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
            >
              Periksa
            </button>
            <button
              onClick={resetDekomposisiAnswers}
              className="bg-[#D32F2F] text-white px-2 sm:px-2 md:px-3 py-1 sm:py-1 md:py-1 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
            >
              Hapus
            </button>
          </div>
          {dekomposisiFeedback && (
            <p
              className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                dekomposisiFeedback.includes("Benar")
                  ? "bg-[#C8E6C9] text-[#1B5E20]"
                  : "bg-[#FFEBEE] text-[#D32F2F]"
              }`}
            >
              {dekomposisiFeedback}
            </p>
          )}
        </div>
      </div>

      <div className="relative p-2 mt-2 space-y-2 bg-white border-gray-300 sm:p-2 md:p-4 sm:mt-4 md:mt-10">
        <div className="absolute flex items-center px-3 py-1 text-sm font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-3 sm:-top-3 md:-top-4 left-2 sm:left-2 md:left-4 sm:px-3 md:px-5 sm:py-1 md:py-2 sm:text-base md:text-lg">
          <BarChart className="w-4 h-4 mr-1 sm:mr-1 md:mr-2 sm:w-4 md:w-5 sm:h-4 md:h-5" />{" "}
          PENGENALAN POLA
        </div>
        <p className="mt-6 text-xs text-justify text-gray-700 sm:text-sm md:text-base sm:mt-3 md:mt-4">
          Setelah memecah permasalahan, kita perlu mengidentifikasi{" "}
          <span className="font-bold">pola dalam data</span> untuk memastikan
          pencarian dilakukan secara efisien.
        </p>
        <p className="mt-1 text-xs text-justify text-gray-700 sm:text-sm md:text-base">
          📌 Pola umum dalam pencarian data menggunakan Lookup meliputi:
        </p>
        <div className="ml-4 space-y-1 text-gray-700 sm:ml-4 md:ml-6">
          <div className="text-xs text-justify sm:text-sm md:text-base">
            <strong>1. Nilai referensi</strong> bersifat unik dalam tabel
            referensi.
          </div>
          <div className="text-xs text-justify sm:text-sm md:text-base">
            <strong>2. Data dalam tabel</strong> referensi harus tersusun dengan
            benar sesuai urutan pencarian.
          </div>
          <div className="text-xs text-justify sm:text-sm md:text-base">
            <strong>3. Pencarian dilakukan</strong> dengan mencocokkan nilai
            referensi dengan baris atau kolom pertama dalam tabel referensi.
          </div>
          <div className="text-xs text-justify sm:text-sm md:text-base">
            <strong>4. Jika tabel tidak terurut</strong> maka parameter
            range_lookup harus bernilai FALSE untuk mencari kecocokan persis.
          </div>
          <div className="text-xs text-justify sm:text-sm md:text-base">
            <strong>5. Jika tabel terurut</strong> maka range_lookup bisa
            bernilai TRUE untuk pencarian nilai terdekat.
          </div>
        </div>
      </div>

      <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
        <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
          <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
        </div>
        <p className="mt-6 text-xs text-justify text-gray-600 sm:text-sm md:text-base sm:mt-2 md:mt-2">
          Setelah mengidentifikasi pola, kita dapat{" "}
          <span className="font-semibold">menyederhanakan masalah</span> dengan{" "}
          <span className="font-semibold">mengabaikan</span> informasi yang
          tidak perlu dan fokus pada elemen penting untuk pencarian.
        </p>
        <p className="mt-1 text-xs text-justify text-gray-700 sm:text-sm md:text-base">
          📌 Bagian yang harus diperhatikan:
        </p>
        <div className="ml-4 space-y-1 text-gray-700 sm:ml-4 md:ml-6">
          <div className="text-xs text-justify sm:text-sm md:text-base">
            <strong>1. Kolom atau baris pertama</strong> dalam tabel referensi
            harus berisi nilai referensi (lookup_value).
          </div>
          <div className="text-xs text-justify sm:text-sm md:text-base">
            <strong>2. Posisi kolom atau baris</strong> tempat data yang akan
            diambil harus diketahui.
          </div>
          <div className="text-xs text-justify sm:text-sm md:text-base">
            <strong>3. Gunakan tanda dolar</strong> atau absolute reference ($)
            untuk membuat referensi tabel tetap saat menyalin rumus.
          </div>
        </div>
      </div>

      <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
        <div className="absolute flex items-center px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
          <Code className="w-4 h-4 mr-1 sm:mr-1 md:mr-2 sm:w-4 md:w-5 sm:h-4 md:h-5" />{" "}
          ALGORITMA
        </div>
        <p className="mt-6 text-xs text-justify text-gray-600 sm:text-sm md:text-base sm:mt-2 md:mt-2">
          Setelah memahami dan menyederhanakan masalah, kita dapat{" "}
          <span className="font-semibold">
            menyusun langkah-langkah sistematis
          </span>{" "}
          untuk pencarian menggunakan VLOOKUP atau HLOOKUP.
        </p>
        <p className="mt-1 text-xs text-justify text-gray-700 sm:text-sm md:text-base">
          📌 Langkah-langkah penggunaan fungsi Lookup:
        </p>
        <div className="ml-4 space-y-1 text-gray-700 sm:ml-4 md:ml-6">
          <div className="text-xs text-justify sm:text-sm md:text-base">
            1. Tentukan nilai referensi (lookup_value) yang akan dicari.
          </div>
          <div className="text-xs text-justify sm:text-sm md:text-base">
            2. Pilih tabel referensi (table_array) yang berisi data pencarian.
          </div>
          <div className="text-xs text-justify sm:text-sm md:text-base">
            3. Tentukan nomor kolom atau baris yang berisi data yang ingin
            diambil.
          </div>
          <div className="text-xs text-justify sm:text-sm md:text-base">
            4. Pilih metode pencarian:
            <div className="mt-1 ml-4 sm:ml-4 md:ml-4">
              <div className="text-xs sm:text-sm md:text-base">
                a. Jika tabel tidak terurut, kita harus menggunakan FALSE agar
                VLOOKUP mencari kecocokan yang persis.
              </div>
              <div className="text-xs sm:text-sm md:text-base">
                b. Jika tabel terurut, kita bisa menggunakan TRUE untuk mencari
                nilai terdekat atau mendekati.
              </div>
            </div>
          </div>
          <div className="text-xs text-justify sm:text-sm md:text-base">
            5. Gunakan rumus VLOOKUP atau HLOOKUP dengan format yang benar.
          </div>
        </div>

        <div className="bg-[#F5F5F5] p-2 sm:p-2 md:p-3 border border-[#B0BEC5] rounded mt-2 sm:mt-4 md:mt-4 shadow-md">
          <h3 className="font-semibold text-[#455A64] text-sm sm:text-base md:text-base mb-2">
            MARI MENGAMATI
          </h3>
          <p className="mb-2 text-xs text-justify text-gray-700 sm:text-sm md:text-base">
            Perhatikan tabel data yang berisi kolom kode barang dan harga, di
            mana harga untuk kode C002 masih kosong. Gunakan fungsi LOOKUP untuk
            mencari harga C002 pada tabel referensi yang memuat daftar kode
            barang dan harganya, lalu isi harga yang sesuai di tabel data.
          </p>
          <div className="flex flex-col justify-center gap-2 mt-2 sm:flex-row sm:gap-4">
            <div className="w-full sm:w-auto">
              <p className="mb-2 text-xs text-center text-gray-700 sm:text-sm md:text-base">
                Tabel Data
              </p>
              <div className="overflow-x-auto">
                <table className="w-full mx-auto text-xs border border-collapse border-green-800 sm:max-w-xs md:max-w-md sm:text-sm">
                  <thead>
                    <tr className="bg-[#255F38] text-white">
                      <th className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
                        Kode
                      </th>
                      <th className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
                        Nama
                      </th>
                      <th className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
                        Harga
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr
                        key={index}
                        className={
                          isLookupStarted &&
                          lookupSteps[lookupStep].highlightedRows.includes(
                            index
                          )
                            ? lookupSteps[lookupStep].colorData || ""
                            : ""
                        }
                      >
                        <td
                          className={`border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1 ${
                            isLookupStarted &&
                            lookupSteps[lookupStep].highlightedColumn === 1 &&
                            index === 1
                              ? "bg-yellow-200"
                              : ""
                          }`}
                        >
                          {row.kode}
                        </td>
                        <td className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
                          {row.nama}
                        </td>
                        <td
                          className={`border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1 ${
                            isLookupStarted &&
                            lookupSteps[lookupStep].highlightedColumn === 3 &&
                            index === 1 &&
                            lookupStep === lookupSteps.length - 1
                              ? "bg-orange-200"
                              : ""
                          }`}
                        >
                          {isLookupStarted &&
                          lookupStep === lookupSteps.length - 1 &&
                          row.kode === lookupValue
                            ? lookupSteps[lookupStep].result
                            : row.harga}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <p className="mb-2 text-xs text-center text-gray-700 sm:text-sm md:text-base">
                Tabel Referensi
              </p>
              <div className="overflow-x-auto">
                <table className="w-full mx-auto text-xs border border-collapse border-green-800 sm:max-w-xs md:max-w-md sm:text-sm">
                  <thead>
                    <tr className="bg-[#255F38] text-white">
                      <th className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
                        Kode
                      </th>
                      <th className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
                        Nama
                      </th>
                      <th className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
                        Harga
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableReference.map((row, index) => (
                      <tr
                        key={index}
                        className={
                          isLookupStarted &&
                          lookupSteps[lookupStep].highlightedRows.includes(
                            index
                          )
                            ? lookupSteps[lookupStep].colorReference || ""
                            : ""
                        }
                      >
                        <td
                          className={`border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1 ${
                            isLookupStarted &&
                            lookupSteps[lookupStep].highlightedColumn === 1 &&
                            index === 1
                              ? "bg-green-200"
                              : ""
                          }`}
                        >
                          {row.kode}
                        </td>
                        <td className="border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1">
                          {row.nama}
                        </td>
                        <td
                          className={`border border-green-600 px-2 sm:px-1 md:px-2 py-1 sm:py-0.5 md:py-1 ${
                            isLookupStarted &&
                            lookupSteps[lookupStep].highlightedColumn === 3 &&
                            index === 1 &&
                            lookupStep >= 3
                              ? "bg-blue-200"
                              : lookupSteps[lookupStep].colorReference ===
                                  "bg-orange-200" && index === 1
                              ? "bg-orange-200"
                              : ""
                          }`}
                        >
                          {row.harga}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <p className="mt-2 text-xs text-center text-gray-700 sm:text-sm md:text-base">
            <strong>{isLookupStarted
              ? `Langkah ${lookupStep + 1} dari ${lookupSteps.length}: ${lookupSteps[lookupStep].description}`
              : "Tekan 'Mulai' untuk memulai visualisasi"}
            </strong>
          </p>
          {isLookupStarted && lookupSteps[lookupStep].result && (
            <p className="mt-2 text-xs text-center text-gray-700 sm:text-sm md:text-base">
              Hasil: <strong>{lookupSteps[lookupStep].result}</strong>
            </p>
          )}
          <div className="flex justify-center mt-2 space-x-2">
            {!isLookupStarted ? (
              <button
                onClick={() => {
                  setIsLookupStarted(true);
                  setLookupStep(0);
                }}
                className="bg-[#1B5E20] text-white px-2 sm:px-2 md:px-3 py-1 sm:py-1 md:py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
              >
                Mulai
              </button>
            ) : (
              <>
                <button
                  onClick={() =>
                    nextStep(
                      lookupStep,
                      setLookupStep,
                      lookupSteps.length,
                      setIsLookupStarted
                    )
                  }
                  className="bg-[#1B5E20] text-white px-2 sm:px-2 md:px-3 py-1 sm:py-1 md:py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
                >
                  Langkah Selanjutnya
                </button>
                <button
                  onClick={() => resetStep(setLookupStep, setIsLookupStarted)}
                  className="bg-[#D32F2F] text-white px-2 sm:px-2 md:px-3 py-1 sm:py-1 md:py-1 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
                >
                  Ulangi
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="relative p-2 mt-2 space-y-4 bg-white  shadow-md sm:p-4 md:p-6 sm:mt-4 md:mt-8">
        <div className="flex items-center justify-between px-2 py-2 bg-gray-100 border-b border-gray-300 rounded-t-lg sm:px-4 md:px-6">
          <h3 className="text-sm font-semibold text-[#255F38] sm:text-base md:text-lg">
            Kuis Pemahaman: Pencarian Data dengan Fungsi Lookup
          </h3>
          <span className="text-xs font-medium text-[#255F38] sm:text-sm md:text-base">
            Soal {currentQuestion} dari 5
          </span>
        </div>
        <p className="px-2 text-xs text-justify text-gray-700 sm:text-sm md:text-base sm:px-4 md:px-6">
          Jawab pertanyaan berikut untuk menguji pemahaman Anda tentang konsep pencarian data menggunakan fungsi Lookup:
        </p>
        <div className="p-2 border border-yellow-300 rounded-lg bg-yellow-50 shadow-md sm:p-4 md:p-6">
          <div className="mt-4 sm:mt-2">
            <h4 className="mb-2 text-xs font-semibold text-yellow-800 sm:text-sm md:text-base">
              {questions[currentQuestion - 1].question}
            </h4>
            <div className="ml-4 space-y-1 text-gray-700 sm:ml-6 md:ml-8">
              {questions[currentQuestion - 1].options.map((option, index) => (
                <div key={index} className="text-xs sm:text-sm md:text-base">
                  <label className="flex items-center p-2 mb-2 border border-gray-300 rounded sm:p-2 sm:mb-2">
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
                className={`text-xs font-bold sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg ${
                  feedback[currentQuestion].includes("Benar")
                    ? "bg-[#C8E6C9] text-[#1B5E20]"
                    : "bg-[#FFEBEE] text-[#D32F2F]"
                }`}
              >
                {feedback[currentQuestion]}
              </p>
            )}
            <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
              <div className="flex space-x-2">
                <button
                  onClick={goToPrevious}
                  className="bg-gray-500 text-white px-3 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-lg hover:bg-gray-600 text-xs sm:text-sm md:text-base min-w-[80px] cursor-pointer"
                  disabled={currentQuestion === 1}
                >
                  Sebelumnya
                </button>
                {feedback[currentQuestion] && (
                  <button
                    onClick={resetQuizAnswer}
                    className="bg-[#D32F2F] text-white px-3 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded hover:bg-[#B71C1C] transition duration-300 text-xs sm:text-sm md:text-base min-w-[80px] cursor-pointer"
                  >
                    Hapus
                  </button>
                )}
              </div>
              {currentQuestion < 5 && isAnswered[currentQuestion] && (
                <button
                  onClick={goToNext}
                  className="bg-[#255F38] text-white px-3 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-lg hover:bg-[#1E4D2E] text-xs sm:text-sm md:text-base min-w-[80px] cursor-pointer"
                >
                  Soal Selanjutnya
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex items-center justify-between px-2 py-2 mt-2 sm:px-2 md:px-6 sm:py-2 md:py-2 sm:mt-4 md:mt-4">
        <button
          onClick={() => (window.location.href = "/penerapan-ct")}
          className="bg-gray-500 text-white px-3 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-lg hover:bg-gray-600 text-xs sm:text-sm md:text-base min-w-[80px] cursor-pointer"
        >
          ← Sebelumnya
        </button>
        <button
          onClick={() => (window.location.href = "/contoh-lookup")}
          className="bg-[#255F38] text-white px-3 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-lg hover:bg-[#1E4D2E] text-xs sm:text-sm md:text-base min-w-[80px] cursor-pointer"
        >
          Selanjutnya →
        </button>
      </div>
    </Layout>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import {
  BookOpen,
  Lightbulb,
  BarChart,
  Filter,
  Code,
  CheckCircle,
} from "lucide-react";

// Pengecekan sederhana untuk Layout (opsional)
if (!Layout) {
  console.error("Layout component not found. Check the import path.");
}

export default function PeringkasanData() {
  const navigate = useNavigate();

  // State untuk Latihan Pemahaman: Abstraksi
  const [abstraksiAnswer, setAbstraksiAnswer] = useState("");
  const [abstraksiFeedback, setAbstraksiFeedback] = useState("");
  const [abstraksiAnswered, setAbstraksiAnswered] = useState(false);

  const handleAbstraksiChange = (value) => {
    setAbstraksiAnswer(value);
  };

  const checkAbstraksiAnswer = () => {
    const correctAnswer = "Kolom Nilai Ujian";
    setAbstraksiFeedback(
      abstraksiAnswer === correctAnswer
        ? "Benar! Hanya kolom Nilai Ujian yang diperlukan untuk menghitung jumlah siswa lulus."
        : "Jawaban salah, ayo coba lagi."
    );
    setAbstraksiAnswered(true);
  };

  const resetAbstraksiAnswer = () => {
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
      question: "Fungsi yang digunakan untuk menjumlahkan data dengan satu syarat adalah....",
      options: ["A. SUMIF", "B. COUNTIF", "C. SUMIFS", "D. COUNTIFS"],
      correctAnswer: "A. SUMIF",
      explanation: "SUMIF menjumlahkan data berdasarkan satu kriteria tertentu.",
    },
    {
      question: "Fungsi COUNTIF dalam peringkasan data bertujuan untuk....",
      options: [
        "A. Menjumlahkan data",
        "B. Menghitung jumlah data dengan syarat",
        "C. Memilih data berdasarkan indeks",
        "D. Mengurutkan data",
      ],
      correctAnswer: "B. Menghitung jumlah data dengan syarat",
      explanation: "COUNTIF menghitung jumlah data yang memenuhi satu kriteria.",
    },
    {
      question: "Fungsi SUMIFS berfungsi untuk....",
      options: [
        "A. Menghitung data dengan satu syarat",
        "B. Menjumlahkan data dengan banyak syarat",
        "C. Mengambil data dari kolom",
        "D. Mencocokkan data dengan tabel",
      ],
      correctAnswer: "B. Menjumlahkan data dengan banyak syarat",
      explanation: "SUMIFS menjumlahkan data yang memenuhi beberapa kriteria.",
    },
    {
      question: "Langkah yang termasuk dalam dekomposisi peringkasan data adalah....",
      options: [
        "A. Menentukan kriteria peringkasan",
        "B. Menggambar grafik",
        "C. Menghitung rata-rata",
        "D. Membuat presentasi",
      ],
      correctAnswer: "A. Menentukan kriteria peringkasan",
      explanation: "Dekomposisi melibatkan menentukan kriteria untuk memecah masalah peringkasan data.",
    },
    {
      question: "Dalam proses abstraksi, yang harus dilakukan adalah....",
      options: [
        "A. Mengabaikan data yang tidak relevan",
        "B. Mengumpulkan semua data",
        "C. Membuat tabel baru",
        "D. Mengurutkan data",
      ],
      correctAnswer: "A. Mengabaikan data yang tidak relevan",
      explanation: "Abstraksi berfokus pada memilih data penting dan mengabaikan yang tidak diperlukan.",
    },
  ];

  const handleAnswerChange = (option) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    const currentCorrect = questions[currentQuestion - 1]?.correctAnswer || "";
    if (option === currentCorrect) {
      setFeedback((prev) => ({
        ...prev,
        [currentQuestion]: `Benar! ${currentCorrect}. ${questions[currentQuestion - 1]?.explanation || ""}`,
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
    } else if (
      currentQuestion === 5 &&
      isAnswered[1] &&
      isAnswered[2] &&
      isAnswered[3] &&
      isAnswered[4] &&
      isAnswered[5]
    ) {
      alert("Kamu sudah selesai mengerjakan semua soal, kerja bagus!");
    }
  };

  // State untuk visualisasi langkah-langkah
  const [sumifStep, setSumifStep] = useState(0);
  const [sumifsStep, setSumifsStep] = useState(0);
  const [countifStep, setCountifStep] = useState(0);
  const [countifsStep, setCountifsStep] = useState(0);
  const [isSumifStarted, setIsSumifStarted] = useState(false);
  const [isSumifsStarted, setIsSumifsStarted] = useState(false);
  const [isCountifStarted, setIsCountifStarted] = useState(false);
  const [isCountifsStarted, setIsCountifsStarted] = useState(false);

  // Data untuk visualisasi
  const sumifData = [
    { name: "Aisyah", class: "8A", score: 80 },
    { name: "Budi", class: "8B", score: 65 },
    { name: "Citra", class: "8A", score: 90 },
    { name: "Dani", class: "8A", score: 70 },
    { name: "Eko", class: "8B", score: 85 },
  ];

  const sumifsData = [
    { product: "Laptop", category: "Elektronik", revenue: 8500000, month: "Januari" },
    { product: "Printer", category: "Elektronik", revenue: 2000000, month: "Februari" },
    { product: "Roti", category: "Makanan", revenue: 500000, month: "Januari" },
    { product: "Mouse", category: "Elektronik", revenue: 150000, month: "Januari" },
    { product: "Susu", category: "Makanan", revenue: 800000, month: "Januari" },
  ];

  const countifData = [
    { name: "Aisyah", score: 80 },
    { name: "Budi", score: 65 },
    { name: "Citra", score: 90 },
    { name: "Dani", score: 70 },
    { name: "Eko", score: 85 },
  ];

  const countifsData = [
    { name: "Aisyah", class: "8A", score: 80 },
    { name: "Budi", class: "8B", score: 65 },
    { name: "Citra", class: "8A", score: 90 },
    { name: "Dani", class: "8A", score: 70 },
    { name: "Eko", class: "8B", score: 85 },
  ];

  // Langkah-langkah visualisasi
  const sumifSteps = [
    { description: "Pilih range kriteria: Kolom 'Kelas' (B2:B6).", highlightedRows: [], result: null },
    { description: "Tetapkan kriteria: '8A'.", highlightedRows: [], result: null },
    { description: "Cocokkan: Aisyah (8A) → Cocok.", highlightedRows: [0], result: null },
    { description: "Budi (8B) → Tidak cocok.", highlightedRows: [1], result: null },
    { description: "Citra (8A) → Cocok.", highlightedRows: [2], result: null },
    { description: "Dani (8A) → Cocok.", highlightedRows: [3], result: null },
    { description: "Eko (8B) → Tidak cocok.", highlightedRows: [4], result: null },
    { description: "Jumlahkan: 80 + 90 + 70 = 240.", highlightedRows: [0, 2, 3], result: 240 },
  ];

  const sumifsSteps = [
    { description: "Pilih sum range: Kolom 'Pendapatan' (C2:C6).", highlightedRows: [], result: null },
    { description: "Criteria 1: 'Elektronik' di Kolom 'Kategori'.", highlightedRows: [], result: null },
    { description: "Criteria 2: 'Januari' di Kolom 'Bulan'.", highlightedRows: [], result: null },
    { description: "Laptop (Elektronik, Januari) → Cocok → 8.500.000.", highlightedRows: [0], result: null },
    { description: "Printer (Elektronik, Februari) → Tidak cocok.", highlightedRows: [1], result: null },
    { description: "Roti (Makanan, Januari) → Tidak cocok.", highlightedRows: [2], result: null },
    { description: "Mouse (Elektronik, Januari) → Cocok → 150.000.", highlightedRows: [3], result: null },
    { description: "Susu (Makanan, Januari) → Tidak cocok.", highlightedRows: [4], result: null },
    { description: "Jumlahkan: 8.500.000 + 150.000 = 8.650.000.", highlightedRows: [0, 3], result: 8650000 },
  ];

  const countifSteps = [
    { description: "Pilih range: Kolom 'Nilai Ujian' (B2:B6).", highlightedRows: [], result: null },
    { description: "Kriteria: '>75'.", highlightedRows: [], result: null },
    { description: "Aisyah (80) → Cocok.", highlightedRows: [0], result: 1 },
    { description: "Budi (65) → Tidak cocok.", highlightedRows: [1], result: 1 },
    { description: "Citra (90) → Cocok.", highlightedRows: [2], result: 2 },
    { description: "Dani (70) → Tidak cocok.", highlightedRows: [3], result: 2 },
    { description: "Eko (85) → Cocok.", highlightedRows: [4], result: 3 },
    { description: "Hasil: 3 siswa.", highlightedRows: [0, 2, 4], result: 3 },
  ];

  const countifsSteps = [
    { description: "Criteria 1: '8A' di Kolom 'Kelas'.", highlightedRows: [], result: null },
    { description: "Criteria 2: '>75' di Kolom 'Nilai Ujian'.", highlightedRows: [], result: null },
    { description: "Aisyah (8A, 80) → Cocok.", highlightedRows: [0], result: 1 },
    { description: "Budi (8B, 65) → Tidak cocok.", highlightedRows: [1], result: 1 },
    { description: "Citra (8A, 90) → Cocok.", highlightedRows: [2], result: 2 },
    { description: "Dani (8A, 70) → Tidak cocok.", highlightedRows: [3], result: 2 },
    { description: "Eko (8B, 85) → Tidak cocok.", highlightedRows: [4], result: 2 },
    { description: "Hasil: 2 siswa.", highlightedRows: [0, 2], result: 2 },
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

  // State untuk Drag-and-Drop Dekomposisi
  const [steps, setSteps] = useState([
    { id: "step1", text: "Menghitung jumlah siswa lulus", category: "Menentukan Tujuan" },
    { id: "step2", text: "Memilih nilai di atas 75", category: "Menentukan Kriteria" },
    { id: "step3", text: "Menggunakan fungsi COUNTIF", category: "Memilih Fungsi" },
    { id: "step4", text: "Menjumlahkan total penjualan produk elektronik", category: "Menentukan Tujuan" },
    { id: "step5", text: "Memilih transaksi pada bulan Januari", category: "Menentukan Kriteria" },
  ]);

  const [categories, setCategories] = useState({
    "Menentukan Tujuan": [],
    "Menentukan Kriteria": [],
    "Memilih Fungsi": [],
  });

  const [feedbackDrag, setFeedbackDrag] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleDragStart = (e, stepId) => {
    e.dataTransfer.setData("text/plain", stepId); // Menggunakan tipe data yang sesuai
  };

  const handleDrop = (e, category) => {
    e.preventDefault();
    const stepId = e.dataTransfer.getData("text/plain");
    const step = steps.find((s) => s.id === stepId);

    if (step) {
      setCategories((prev) => ({
        ...prev,
        [category]: [...prev[category], step],
      }));
      setSteps((prev) => prev.filter((s) => s.id !== stepId));
      setIsChecked(false);
      setFeedbackDrag("");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const checkAnswers = () => {
    let correct = true;
    let feedbackText = "";
    Object.keys(categories).forEach((category) => {
      categories[category].forEach((step) => {
        if (step.category !== category) {
          correct = false;
          feedbackText = "Coba lagi, ada yang salah!";
        }
      });
    });
    if (correct && steps.length === 0) {
      feedbackText = "Benar sekali! Semua langkah sudah di tempat yang tepat.";
    } else if (steps.length > 0) {
      feedbackText = "Masih ada langkah yang belum ditempatkan. Ayo lengkapi!";
      correct = false;
    }
    setFeedbackDrag(feedbackText);
    setIsChecked(true);
  };

  const resetSteps = () => {
    setSteps([
      { id: "step1", text: "Menghitung jumlah siswa lulus", category: "Menentukan Tujuan" },
      { id: "step2", text: "Memilih nilai di atas 75", category: "Menentukan Kriteria" },
      { id: "step3", text: "Menggunakan fungsi COUNTIF", category: "Memilih Fungsi" },
      { id: "step4", text: "Menjumlahkan total penjualan produk elektronik", category: "Menentukan Tujuan" },
      { id: "step5", text: "Memilih transaksi pada bulan Januari", category: "Menentukan Kriteria" },
    ]);
    setCategories({
      "Menentukan Tujuan": [],
      "Menentukan Kriteria": [],
      "Memilih Fungsi": [],
    });
    setFeedbackDrag("");
    setIsChecked(false);
  };

  return (
    <Layout>
      <div className="border-l-4 border-[#255F38] pl-4">
        <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
          C. PERINGKASAN DATA
        </div>

        <section className="bg-green-100 p-4 rounded shadow-md mt-6 mb-6">
          <h3 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h3>
          <ol className="list-decimal list-inside ml-6 space-y-2 mt-4 text-gray-700">
            <li>
              Peserta didik mampu merangkum data menggunakan fungsi peringkasan
            </li>
            <li>
              Peserta didik mampu menerapkan pendekatan Computational Thinking dalam menyelesaikan permasalahan yang berkaitan dengan peringkasan data.
            </li>
          </ol>
        </section>

        <p className="text-gray-700 text-sm md:text-base mt-2 text-justify leading-relaxed px-4">
          Dalam kehidupan sehari-hari, kita sering berhadapan dengan banyak data
          yang perlu dianalisis dan diringkas agar lebih mudah dipahami.
          Peringkasan data adalah proses mengolah data yang besar dan kompleks
          menjadi lebih sederhana tanpa menghilangkan informasi penting.
        </p>

        <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg mt-6">
          Mengapa Peringkasan Data Penting?
        </div>
        <ul className="list-disc list-inside mt-4 ml-6 text-gray-700 px-4 space-y-2">
          <li className="text-justify">
            <strong>Menghemat waktu</strong> dan tenaga → Dengan fungsi otomatis, kita tidak perlu menghitung satu per satu.
          </li>
          <li className="text-justify">
            <strong>Membantu dalam</strong> pengambilan keputusan → Data yang telah diringkas lebih mudah dianalisis.
          </li>
          <li className="text-justify">
            <strong>Menampilkan informasi</strong> lebih jelas → Menghindari tumpukan angka yang sulit dipahami.
          </li>
        </ul>

        <h3 className="font-bold text-[#255F38] mt-6 px-4">
          Contoh Peringkasan Data dalam Kehidupan Sehari-hari
        </h3>
        <ul className="list-disc list-inside mt-4 ml-6 text-gray-700 px-4 space-y-2">
          <li className="text-justify">
            <strong>Seorang siswa</strong> ingin tahu berapa kali ia membeli makanan favorit di kantin dalam satu minggu → Dengan COUNTIF, ia bisa langsung mendapatkan jumlahnya.
          </li>
          <li className="text-justify">
            <strong>Seseorang mencatat</strong> pengeluarannya setiap bulan dan ingin tahu total pengeluaran untuk transportasi → Dengan SUMIF, ia bisa menjumlahkan hanya untuk kategori transportasi.
          </li>
          <li className="text-justify">
            <strong>Seorang guru</strong> ingin tahu berapa siswa yang mendapat nilai di atas 75 → Dengan COUNTIF, ia bisa langsung mengetahui jumlah siswa yang lulus.
          </li>
        </ul>

        {/* Dekomposisi */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Lightbulb className="mr-2 w-5 h-5" /> DEKOMPOSISI
          </div>
          <p className="text-gray-700 text-sm md:text-base mt-4 text-justify">
            Dekomposisi adalah proses memecah masalah besar menjadi langkah-langkah kecil yang lebih mudah dikelola. Dalam peringkasan data, kita memecah proses menjadi tiga kategori utama:
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
            <li className="text-justify">
              <strong>Tentukan apa</strong> yang ingin diringkas → Apakah ingin menjumlahkan angka (penjualan, nilai, dll.) atau menghitung jumlah data (jumlah siswa, jumlah transaksi, dll.)?
            </li>
            <li className="text-justify">
              <strong>Tentukan kriteria</strong> peringkasan → Misalnya, hanya menjumlahkan nilai siswa yang lebih dari 75 atau hanya menghitung transaksi di bulan tertentu.
            </li>
            <li className="text-justify">
              <strong>Pilih fungsi</strong> yang sesuai:
              <div className="ml-4 mt-2 space-y-4">
                <section className="bg-gray-100 p-4 rounded shadow-lg">
                  <h3 className="font-semibold text-[#255F38] mb-2">1. SUMIF</h3>
                  <p className="text-gray-700 mt-2">
                    <strong>SUMIF</strong> digunakan untuk menjumlahkan data dengan satu syarat.
                  </p>
                  <pre className="bg-gray-200 p-2 rounded text-gray-800 mt-2">
                    =SUMIF(range, criteria, sum_range)
                  </pre>
                  <p className="text-gray-700 mt-2">Keterangan:</p>
                  <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
                    <li><strong>range:</strong> Rentang data yang akan diperiksa kriterianya.</li>
                    <li><strong>criteria:</strong> Syarat yang harus dipenuhi agar nilainya dijumlahkan.</li>
                    <li><strong>sum_range:</strong> Rentang angka yang akan dijumlahkan jika kriterianya terpenuhi.</li>
                  </ul>
                </section>

                <section className="bg-gray-100 p-4 rounded shadow-lg">
                  <h3 className="font-semibold text-[#255F38] mb-2">2. SUMIFS</h3>
                  <p className="text-gray-700 mt-2">
                    <strong>SUMIFS</strong> digunakan untuk menjumlahkan data dengan lebih dari satu syarat.
                  </p>
                  <pre className="bg-gray-200 p-2 rounded text-gray-800 mt-2">
                    =SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)
                  </pre>
                  <p className="text-gray-700 mt-2">Keterangan:</p>
                  <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
                    <li><strong>sum_range:</strong> Rentang data yang akan dijumlahkan.</li>
                    <li><strong>criteria_range1:</strong> Rentang pertama yang akan diperiksa.</li>
                    <li><strong>criteria1:</strong> Syarat pertama yang harus dipenuhi.</li>
                    <li><strong>criteria_range2:</strong> Rentang kedua yang akan diperiksa.</li>
                    <li><strong>criteria2:</strong> Syarat kedua yang harus dipenuhi.</li>
                  </ul>
                </section>

                <section className="bg-gray-100 p-4 rounded shadow-lg">
                  <h3 className="font-semibold text-[#255F38] mb-2">3. COUNTIF</h3>
                  <p className="text-gray-700 mt-2">
                    <strong>COUNTIF</strong> digunakan untuk menghitung jumlah data dengan satu syarat.
                  </p>
                  <pre className="bg-gray-200 p-2 rounded text-gray-800 mt-2">
                    =COUNTIF(range, criteria)
                  </pre>
                  <p className="text-gray-700 mt-2">Keterangan:</p>
                  <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
                    <li><strong>range:</strong> Rentang data yang akan diperiksa.</li>
                    <li><strong>criteria:</strong> Kriteria yang harus dipenuhi agar data dihitung.</li>
                  </ul>
                </section>

                <section className="bg-gray-100 p-4 rounded shadow-lg">
                  <h3 className="font-semibold text-[#255F38] mb-2">4. COUNTIFS</h3>
                  <p className="text-gray-700 mt-2">
                    <strong>COUNTIFS</strong> digunakan untuk menghitung jumlah data dengan lebih dari satu syarat.
                  </p>
                  <pre className="bg-gray-200 p-2 rounded text-gray-800 mt-2">
                    =COUNTIFS(criteria_range1, criteria1, criteria_range2, criteria2)
                  </pre>
                  <p className="text-gray-700 mt-2">Keterangan:</p>
                  <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
                    <li><strong>criteria_range1:</strong> Rentang pertama yang akan diperiksa.</li>
                    <li><strong>criteria1:</strong> Syarat pertama yang harus dipenuhi.</li>
                    <li><strong>criteria_range2:</strong> Rentang kedua yang akan diperiksa.</li>
                    <li><strong>criteria2:</strong> Syarat kedua yang harus dipenuhi.</li>
                  </ul>
                </section>
              </div>
            </li>
          </ul>

          {/* Aktivitas Drag-and-Drop */}
          <div className="bg-[#F5F5F5] p-2 sm:p-3 md:p-4 border border-[#B0BEC5] rounded mt-4 sm:mt-6 shadow-md">
            <h3 className="font-semibold text-[#455A64] text-sm sm:text-base md:text-base mb-2">
              AYO MENGELOMPOKKAN LANGKAH
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base text-justify mb-2">
              Perhatikan beberapa langkah yang biasa dilakukan saat meringkas data. Setiap langkah memiliki <strong>tujuan</strong>, <strong>kriteria</strong>, atau <strong>fungsi</strong> tertentu dalam proses peringkasan.
            </p>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base text-justify mb-2">
              Seret masing-masing langkah ke dalam kotak yang paling sesuai: <strong>Tujuan</strong>, <strong>Kriteria</strong>, atau <strong>Fungsi</strong>.
            </p>

            {/* Drop Zones */}
            <div className="mb-4">
              <h4 className="font-semibold text-green-700 mb-2">Area Penempatan</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Menentukan Tujuan", "Menentukan Kriteria", "Memilih Fungsi"].map((category) => (
                  <div
                    key={category}
                    onDrop={(e) => handleDrop(e, category)}
                    onDragOver={handleDragOver}
                    className="bg-white p-2 border-2 border-dashed border-green-400 rounded min-h-[120px] flex flex-col items-center justify-center"
                  >
                    <h4 className="font-semibold text-green-700 mb-2">{category}</h4>
                    {categories[category].length > 0 ? (
                      categories[category].map((step) => (
                        <div
                          key={step.id}
                          className="bg-white p-2 border border-gray-300 rounded text-sm w-full text-center"
                        >
                          {step.text}
                        </div>
                      ))
                    ) : (
                      <span className="text-gray-500 text-sm italic">Seret langkah ke sini</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Draggable Steps */}
            <div className="mb-2">
              <h4 className="font-semibold text-green-700 mb-2">Langkah yang Bisa Digerakkan</h4>
              <div className="flex flex-wrap gap-2">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, step.id)}
                    className="bg-white p-2 border border-gray-300 rounded cursor-move text-sm"
                  >
                    {step.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Tombol Periksa dan Reset */}
            <div className="mt-4 flex space-x-2">
              <button
                onClick={checkAnswers}
                className="bg-[#1B5E20] text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
              >
                Periksa
              </button>
              <button
                onClick={resetSteps}
                className="bg-[#D32F2F] text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
              >
                Hapus
              </button>
            </div>

            {/* Umpan Balik */}
            {feedbackDrag && (
              <p
                className={`text-xs sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg font-bold ${
                  feedbackDrag.includes("Benar") ? "bg-[#C8E6C9] text-[#1B5E20]" : "bg-[#FFEBEE] text-[#D32F2F]"
                }`}
              >
                {feedbackDrag}
              </p>
            )}
          </div>
        </div>

        {/* Pengenalan Pola */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <BarChart className="mr-2 w-5 h-5" /> PENGENALAN POLA
          </div>
          <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
            Setelah memahami langkah-langkah kecilnya, kita harus mengenali pola
            dalam data agar tahu cara terbaik untuk meringkasnya.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">
            📌 Beberapa pola umum dalam peringkasan data:
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
            <li className="text-justify">
              <strong>Menjumlahkan total</strong> penjualan berdasarkan kategori produk → Dengan SUMIF, kita bisa menjumlahkan total penjualan hanya untuk kategori tertentu.
            </li>
            <li className="text-justify">
              <strong>Menghitung jumlah</strong> siswa yang mendapat nilai di atas batas tertentu → Dengan COUNTIF, kita bisa menghitung berapa banyak siswa yang mendapat nilai lebih dari 75.
            </li>
            <li className="text-justify">
              <strong>Menjumlahkan total</strong> penjualan dengan beberapa syarat → Dengan SUMIFS, kita bisa menjumlahkan hanya transaksi yang memenuhi lebih dari satu kriteria, misalnya kategori produk tertentu dan periode tertentu.
            </li>
            <li className="text-justify">
              <strong>Menghitung jumlah</strong> data berdasarkan lebih dari satu kriteria → Dengan COUNTIFS, kita bisa menghitung berapa transaksi yang terjadi di bulan tertentu untuk produk tertentu.
            </li>
          </ul>
        </div>

        {/* Abstraksi */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Filter className="mr-2 w-5 h-5" /> ABSTRAKSI
          </div>
          <p className="text-gray-700 text-sm md:text-base mt-4 text-justify">
            Agar lebih mudah dipahami, kita hanya fokus pada bagian penting dalam
            data dan mengabaikan informasi yang tidak diperlukan.
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
            <li className="text-justify">
              <strong>Hanya pilih</strong> data yang benar-benar diperlukan → Jika ingin menghitung jumlah siswa yang lulus, kita hanya perlu kolom "Nilai Ujian", tidak perlu melihat nama siswa.
            </li>
            <li className="text-justify">
              <strong>Gunakan rumus</strong> yang tepat → Jika hanya butuh jumlah siswa yang lulus, cukup gunakan COUNTIF tanpa perlu SUMIF.
            </li>
          </ul>
          {/* Latihan Pemahaman Abstraksi */}
          <div className="bg-[#F5F5F5] p-2 sm:p-3 md:p-4 border border-[#B0BEC5] rounded mt-4 sm:mt-6 shadow-md">
            <h3 className="font-semibold text-[#455A64] text-sm sm:text-base md:text-base mb-2">
              Latihan Pemahaman: Memilih Data Penting
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base text-justify mb-2">
              Guru ingin menghitung jumlah siswa dengan nilai di atas 75 dari tabel yang berisi nama, kelas, dan nilai. Pilih data yang diperlukan:
            </p>
            <div className="ml-6 text-gray-700 space-y-2">
              <div className="text-xs sm:text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="abstraction"
                    value="Kolom Nilai Ujian"
                    checked={abstraksiAnswer === "Kolom Nilai Ujian"}
                    onChange={() => handleAbstraksiChange("Kolom Nilai Ujian")}
                    className="mr-2"
                  />
                  1. Kolom Nilai Ujian
                </label>
              </div>
              <div className="text-xs sm:text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="abstraction"
                    value="Kolom Nama Siswa"
                    checked={abstraksiAnswer === "Kolom Nama Siswa"}
                    onChange={() => handleAbstraksiChange("Kolom Nama Siswa")}
                    className="mr-2"
                  />
                  2. Kolom Nama Siswa
                </label>
              </div>
              <div className="text-xs sm:text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="abstraction"
                    value="Kolom Kelas"
                    checked={abstraksiAnswer === "Kolom Kelas"}
                    onChange={() => handleAbstraksiChange("Kolom Kelas")}
                    className="mr-2"
                  />
                  3. Kolom Kelas
                </label>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={checkAbstraksiAnswer}
                className="bg-[#1B5E20] text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
              >
                Periksa
              </button>
              <button
                onClick={resetAbstraksiAnswer}
                className="bg-[#D32F2F] text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base"
              >
                Hapus
              </button>
            </div>
            {abstraksiFeedback && (
              <p
                className={`text-xs sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg font-bold ${
                  abstraksiFeedback.includes("Benar") ? "bg-[#C8E6C9] text-[#1B5E20]" : "bg-[#FFEBEE] text-[#D32F2F]"
                }`}
              >
                {abstraksiFeedback}
              </p>
            )}
          </div>
        </div>

        {/* Algoritma */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Code className="w-5 h-5 mr-2" /> ALGORITMA
          </div>
          <p className="text-gray-600 text-sm md:text-base mt-4 text-justify">
            Setelah kita memahami data dan menyederhanakannya, kita bisa membuat
            langkah-langkah sistematis untuk menerapkan peringkasan data dalam
            spreadsheet. Berikut adalah langkah-langkah umum untuk menggunakan fungsi-fungsi peringkasan data:
          </p>

          {/* Langkah-langkah Umum untuk SUMIF */}
          <div className="mt-6">
            <h3 className="font-semibold text-[#255F38] text-lg mb-2">Langkah-langkah Menggunakan Fungsi SUMIF</h3>
            <ol className="list-decimal list-inside ml-6 text-gray-700 space-y-2">
              <li>Tentukan rentang data yang akan diperiksa untuk kriteria (range).</li>
              <li>Tentukan kriteria yang harus dipenuhi (misalnya, "8A" atau ">75").</li>
              <li>Tentukan rentang angka yang akan dijumlahkan (sum_range).</li>
              <li>Tulis rumus <code>=SUMIF(range, criteria, sum_range)</code> dengan benar.</li>
            </ol>
          </div>

          {/* Visualisasi SUMIF */}
          <div className="mt-6">
            <h3 className="font-semibold text-[#255F38] text-lg mb-2">
              MARI MENGAMATI CARA KERJA SUMIF
            </h3>
            <p className="text-gray-700 text-base mb-4">
              Klik tombol untuk melihat langkah-langkah kerja fungsi SUMIF dalam menjumlahkan nilai siswa kelas 8A.
            </p>
            <div className="flex flex-col items-center mt-4">
              <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
                <thead>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                    <th className="border border-green-600 px-4 py-2">Kelas</th>
                    <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
                  </tr>
                </thead>
                <tbody>
                  {sumifData.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        sumifSteps[sumifStep]?.highlightedRows?.includes(index)
                          ? "bg-yellow-200"
                          : index % 2 === 0
                          ? "bg-green-50"
                          : "bg-white"
                      }
                    >
                      <td className="border border-green-600 px-4 py-2">{item.name}</td>
                      <td className="border border-green-600 px-4 py-2">{item.class}</td>
                      <td className="border border-green-600 px-4 py-2">{item.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 text-base">
                <strong>Langkah {sumifStep + 1}:</strong> {sumifSteps[sumifStep]?.description || "Langkah tidak tersedia"}
              </p>
              {sumifSteps[sumifStep]?.result !== null && (
                <p className="text-gray-700 text-base mt-2">
                  <strong>Hasil:</strong> {sumifSteps[sumifStep].result}
                </p>
              )}
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => nextStep(sumifStep, setSumifStep, sumifSteps.length, setIsSumifStarted)}
                className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] disabled:opacity-50 cursor-pointer"
                disabled={sumifStep === sumifSteps.length - 1}
              >
                {isSumifStarted ? "Selanjutnya" : "Mulai"}
              </button>
              <button
                onClick={() => resetStep(setSumifStep, setIsSumifStarted)}
                className="bg-[#D32F2F] text-white px-4 py-2 rounded-lg hover:bg-[#B71C1C] cursor-pointer"
              >
                Ulangi
              </button>
            </div>
          </div>

          {/* Langkah-langkah Umum untuk COUNTIF */}
          <div className="mt-6">
            <h3 className="font-semibold text-[#255F38] text-lg mb-2">Langkah-langkah Menggunakan Fungsi COUNTIF</h3>
            <ol className="list-decimal list-inside ml-6 text-gray-700 space-y-2">
              <li>Tentukan rentang data yang akan diperiksa untuk kriteria (range).</li>
              <li>Tentukan kriteria yang harus dipenuhi (misalnya, ">75").</li>
              <li>Tulis rumus <code>=COUNTIF(range, criteria)</code> dengan benar.</li>
            </ol>
          </div>

          {/* Visualisasi COUNTIF */}
          <div className="mt-6">
            <h3 className="font-semibold text-[#255F38] text-lg mb-2">
              MARI MENGAMATI CARA KERJA COUNTIF
            </h3>
            <p className="text-gray-700 text-base mb-4">
              Klik tombol untuk melihat langkah-langkah kerja fungsi COUNTIF dalam menghitung jumlah siswa dengan nilai di atas 75.
            </p>
            <div className="flex flex-col items-center mt-4">
              <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
                <thead>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                    <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
                  </tr>
                </thead>
                <tbody>
                  {countifData.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        countifSteps[countifStep]?.highlightedRows?.includes(index)
                          ? "bg-yellow-200"
                          : index % 2 === 0
                          ? "bg-green-50"
                          : "bg-white"
                      }
                    >
                      <td className="border border-green-600 px-4 py-2">{item.name}</td>
                      <td className="border border-green-600 px-4 py-2">{item.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 text-base">
                <strong>Langkah {countifStep + 1}:</strong> {countifSteps[countifStep]?.description || "Langkah tidak tersedia"}
              </p>
              {countifSteps[countifStep]?.result !== null && (
                <p className="text-gray-700 text-base mt-2">
                  <strong>Hasil Sementara:</strong> {countifSteps[countifStep].result}
                </p>
              )}
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => nextStep(countifStep, setCountifStep, countifSteps.length, setIsCountifStarted)}
                className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] disabled:opacity-50 cursor-pointer"
                disabled={countifStep === countifSteps.length - 1}
              >
                {isCountifStarted ? "Selanjutnya" : "Mulai"}
              </button>
              <button
                onClick={() => resetStep(setCountifStep, setIsCountifStarted)}
                className="bg-[#D32F2F] text-white px-4 py-2 rounded-lg hover:bg-[#B71C1C] cursor-pointer"
              >
                Ulangi
              </button>
            </div>
          </div>

          {/* Langkah-langkah Umum untuk SUMIFS */}
          <div className="mt-6">
            <h3 className="font-semibold text-[#255F38] text-lg mb-2">Langkah-langkah Menggunakan Fungsi SUMIFS</h3>
            <ol className="list-decimal list-inside ml-6 text-gray-700 space-y-2">
              <li>Tentukan rentang angka yang akan dijumlahkan (sum_range).</li>
              <li>Tentukan rentang data pertama yang akan diperiksa (criteria_range1) dan kriterianya (criteria1).</li>
              <li>Tentukan rentang data kedua yang akan diperiksa (criteria_range2) dan kriterianya (criteria2).</li>
              <li>Tulis rumus <code>=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)</code> dengan benar.</li>
            </ol>
          </div>

          {/* Visualisasi SUMIFS */}
          <div className="mt-6">
            <h3 className="font-semibold text-[#255F38] text-lg mb-2">
              MARI MENGAMATI CARA KERJA SUMIFS
            </h3>
            <p className="text-gray-700 text-base mb-4">
              Klik tombol untuk melihat langkah-langkah kerja fungsi SUMIFS dalam menjumlahkan pendapatan kategori Elektronik pada bulan Januari.
            </p>
            <div className="flex flex-col items-center mt-4">
              <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
                <thead>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border border-green-600 px-4 py-2">Nama Produk</th>
                    <th className="border border-green-600 px-4 py-2">Kategori</th>
                    <th className="border border-green-600 px-4 py-2">Pendapatan (Rp)</th>
                    <th className="border border-green-600 px-4 py-2">Bulan</th>
                  </tr>
                </thead>
                <tbody>
                  {sumifsData.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        sumifsSteps[sumifsStep]?.highlightedRows?.includes(index)
                          ? "bg-yellow-200"
                          : index % 2 === 0
                          ? "bg-green-50"
                          : "bg-white"
                      }
                    >
                      <td className="border border-green-600 px-4 py-2">{item.product}</td>
                      <td className="border border-green-600 px-4 py-2">{item.category}</td>
                      <td className="border border-green-600 px-4 py-2">{item.revenue.toLocaleString()}</td>
                      <td className="border border-green-600 px-4 py-2">{item.month}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 text-base">
                <strong>Langkah {sumifsStep + 1}:</strong> {sumifsSteps[sumifsStep]?.description || "Langkah tidak tersedia"}
              </p>
              {sumifsSteps[sumifsStep]?.result !== null && (
                <p className="text-gray-700 text-base mt-2">
                  <strong>Hasil:</strong> {sumifsSteps[sumifsStep].result.toLocaleString()}
                </p>
              )}
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => nextStep(sumifsStep, setSumifsStep, sumifsSteps.length, setIsSumifsStarted)}
                className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] disabled:opacity-50 cursor-pointer"
                disabled={sumifsStep === sumifsSteps.length - 1}
              >
                {isSumifsStarted ? "Selanjutnya" : "Mulai"}
              </button>
              <button
                onClick={() => resetStep(setSumifsStep, setIsSumifsStarted)}
                className="bg-[#D32F2F] text-white px-4 py-2 rounded-lg hover:bg-[#B71C1C] cursor-pointer"
              >
                Ulangi
              </button>
            </div>
          </div>

          {/* Langkah-langkah Umum untuk COUNTIFS */}
          <div className="mt-6">
            <h3 className="font-semibold text-[#255F38] text-lg mb-2">Langkah-langkah Menggunakan Fungsi COUNTIFS</h3>
            <ol className="list-decimal list-inside ml-6 text-gray-700 space-y-2">
              <li>Tentukan rentang data pertama yang akan diperiksa (criteria_range1) dan kriterianya (criteria1).</li>
              <li>Tentukan rentang data kedua yang akan diperiksa (criteria_range2) dan kriterianya (criteria2).</li>
              <li>Tulis rumus <code>=COUNTIFS(criteria_range1, criteria1, criteria_range2, criteria2)</code> dengan benar.</li>
            </ol>
          </div>

          {/* Visualisasi COUNTIFS */}
          <div className="mt-6">
            <h3 className="font-semibold text-[#255F38] text-lg mb-2">
              MARI MENGAMATI CARA KERJA COUNTIFS
            </h3>
            <p className="text-gray-700 text-base mb-4">
              Klik tombol untuk melihat langkah-langkah kerja fungsi COUNTIFS dalam menghitung jumlah siswa kelas 8A dengan nilai di atas 75.
            </p>
            <div className="flex flex-col items-center mt-4">
              <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
                <thead>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                    <th className="border border-green-600 px-4 py-2">Kelas</th>
                    <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
                  </tr>
                </thead>
                <tbody>
                  {countifsData.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        countifsSteps[countifsStep]?.highlightedRows?.includes(index)
                          ? "bg-yellow-200"
                          : index % 2 === 0
                          ? "bg-green-50"
                          : "bg-white"
                      }
                    >
                      <td className="border border-green-600 px-4 py-2">{item.name}</td>
                      <td className="border border-green-600 px-4 py-2">{item.class}</td>
                      <td className="border border-green-600 px-4 py-2">{item.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 text-base">
                <strong>Langkah {countifsStep + 1}:</strong> {countifsSteps[countifsStep]?.description || "Langkah tidak tersedia"}
              </p>
              {countifsSteps[countifsStep]?.result !== null && (
                <p className="text-gray-700 text-base mt-2">
                  <strong>Hasil Sementara:</strong> {countifsSteps[countifsStep].result}
                </p>
              )}
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => nextStep(countifsStep, setCountifsStep, countifsSteps.length, setIsCountifsStarted)}
                className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] disabled:opacity-50 cursor-pointer"
                disabled={countifsStep === countifsSteps.length - 1}
              >
                {isCountifsStarted ? "Selanjutnya" : "Mulai"}
              </button>
              <button
                onClick={() => resetStep(setCountifsStep, setIsCountifsStarted)}
                className="bg-[#D32F2F] text-white px-4 py-2 rounded-lg hover:bg-[#B71C1C] cursor-pointer"
              >
                Ulangi
              </button>
            </div>
          </div>
        </div>

        {/* Kuis Pemahaman */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
          <div className="flex items-center justify-between px-2 py-2 bg-gray-100 border-b border-gray-300 rounded-t-lg sm:px-4 md:px-6">
            <h3 className="font-semibold text-[#255F38] text-base sm:text-lg">Kuis Pemahaman: Peringkasan Data</h3>
            <span className="text-xs font-medium text-[#255F38] sm:text-sm md:text-base">
              Soal {currentQuestion} dari 5
            </span>
          </div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base text-justify">
            Jawab pertanyaan berikut untuk menguji pemahamanmu tentang fungsi peringkasan data:
          </p>
          <div className="bg-yellow-50 p-2 sm:p-3 md:p-4 border border-yellow-300 rounded mt-4 shadow-md">
            <div className="mt-6">
              <h4 className="font-semibold text-yellow-800 text-sm md:text-base mb-2">
                {questions[currentQuestion - 1]?.question || "Soal tidak tersedia"}
              </h4>
              <div className="ml-6 text-gray-700 space-y-2">
                {questions[currentQuestion - 1]?.options?.map((option) => (
                  <div key={option} className="text-xs sm:text-sm md:text-base">
                    <label className="flex items-center border border-gray-300 p-2 mb-2 rounded">
                      <input
                        type="radio"
                        name="quiz-option"
                        value={option}
                        checked={answers[currentQuestion] === option}
                        onChange={() => handleAnswerChange(option)}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  </div>
                )) || <p>Tidak ada opsi tersedia</p>}
              </div>
              {feedback[currentQuestion] && (
                <p
                  className={`text-xs sm:text-sm md:text-base mt-2 px-3 py-2 rounded-lg font-bold ${
                    feedback[currentQuestion].includes("Benar") ? "bg-[#C8E6C9] text-[#1B5E20]" : "bg-[#FFEBEE] text-[#D32F2F]"
                  }`}
                >
                  {feedback[currentQuestion]}
                </p>
              )}
              <div className="mt-4 flex justify-between items-center">
                <div className="flex space-x-2">
                  <button
                    onClick={goToPrevious}
                    className="bg-[#B0BEC5] text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-[#90A4AE] disabled:opacity-50 cursor-pointer text-xs sm:text-sm md:text-base"
                    disabled={currentQuestion === 1}
                  >
                    Sebelumnya
                  </button>
                  {isAnswered[currentQuestion] && (
                    <button
                      onClick={resetQuizAnswer}
                      className="bg-[#D32F2F] text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-[#B71C1C] cursor-pointer text-xs sm:text-sm md:text-base"
                    >
                      Hapus
                    </button>
                  )}
                </div>
                {isAnswered[currentQuestion] && (
                  <button
                    onClick={goToNext}
                    className="bg-yellow-800 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-yellow-900 cursor-pointer text-xs sm:text-sm md:text-base"
                  >
                    {currentQuestion === 5 ? "Selesai" : "Soal Selanjutnya"}
                  </button>
                )}
              </div>
              {currentQuestion === 5 && isAnswered[currentQuestion] && (
                <p className="mt-4 text-center text-yellow-700 font-semibold text-xs sm:text-sm md:text-base">
                  Anda telah menyelesaikan semua soal! Klik Selesai untuk meninjau!
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 px-2 sm:px-4">
          <button
            onClick={() => navigate("/feedback2")}
            className="bg-gray-500 text-white px-3 sm:px-5 py-1 sm:py-2 rounded hover:bg-gray-600 transition duration-300 cursor-pointer text-xs sm:text-base min-w-[100px]"
          >
            ← Sebelumnya
          </button>
          <button
            onClick={() => navigate("/penerapan-peringkasan")}
            className="bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded hover:bg-[#1E4D2E] transition duration-300 cursor-pointer text-xs sm:text-base min-w-[100px]"
          >
            Selanjutnya →
          </button>
        </div>
      </div>
    </Layout>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import axios from "axios";
import Swal from "sweetalert2";

export default function BerlatihPencarian() {
  const navigate = useNavigate();

  const correctAnswers = {
    tableReference: ["daftar kategori prestasi", "kategori prestasi"],
    studentCategory: "cukup",
    unnecessaryInfo: "nama siswa",
    searchVlookup: "=VLOOKUP(C4;$A$9:$B$13;2;TRUE)",
    searchChoose: '=CHOOSE(E4;"Piala";"Medali";"Buku Tulis";"Pensil Warna")',
  };

  const [answers, setAnswers] = useState({
    tableReference: "",
    studentCategory: "",
    unnecessaryInfo: "",
    searchVlookup: "",
    searchChoose: "",
  });

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const submitLatihan = async () => {
    // Periksa apakah semua kolom jawaban sudah terisi
    const allAnswered = Object.values(answers).every(
      (answer) => answer.trim() !== ""
    );

    if (!allAnswered) {
      Swal.fire({
        title: "Belum Selesai",
        text: "Anda belum menyelesaikan semua soal yang ada.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      });
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      const nis = user?.nis;

      if (!token || !nis) {
        Swal.fire({
          title: "Autentikasi Gagal",
          text: "Silakan login kembali.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
        return;
      }

      let correctCount = 0;
      Object.keys(correctAnswers).forEach((field) => {
        const userAnswer = answers[field].trim().toLowerCase();
        const correctAnswer = correctAnswers[field];
        const isCorrect = Array.isArray(correctAnswer)
          ? correctAnswer.some((ans) => ans.trim().toLowerCase() === userAnswer)
          : correctAnswer.trim().toLowerCase() === userAnswer;
        if (isCorrect) correctCount++;
        console.log(
          `Field: ${field}, User Answer: ${userAnswer}, Correct Answer: ${JSON.stringify(
            correctAnswer
          )}, Is Correct: ${isCorrect}`
        );
      });

      const score = (correctCount / 5) * 100;
      console.log(`Calculated Score: ${score}, Correct Count: ${correctCount}`);

      // Kirim hanya skor latihan1 ke database
      await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/students/scores/${nis}`,
        {
          latihan1: score,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Score sent to database successfully");
      Swal.fire({
        title: "Berhasil",
        text: "Sudah selesai mengerjakan Mari Berlatih!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      }).then(() => {
        navigate("/rangkuman-pencarian");
      });
    } catch (error) {
      console.error(
        "Error saat mengirim latihan:",
        error.response?.data || error.message
      );
      Swal.fire({
        title: "Kesalahan",
        text: `Terjadi kesalahan saat mengirim skor latihan: ${
          error.response?.data?.message || error.message
        }`,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      });
    }
  };

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        MARI BERLATIH MENCARI DATA
      </div>

      {/* Petunjuk Umum */}
      <section className="p-4 mb-6 bg-green-100 rounded shadow-md">
        <h3 className="text-lg font-semibold text-[#255F38] mb-2">
          Petunjuk Umum
        </h3>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside md:text-base">
          <li>Bacalah studi kasus di bawah ini dengan saksama.</li>
          <li>Jawab setiap pertanyaan pada bagian yang telah disediakan.</li>
          <li>
            Setelah selesai menjawab semua pertanyaan, klik tombol{" "}
            <em>“Selesai Latihan”</em> untuk mengumpulkan jawabanmu.
          </li>
        </ol>
      </section>

      {/* Studi Kasus */}
      <section className="p-6 mb-6 bg-white rounded shadow-lg">
        <h3 className="mb-3 text-lg font-semibold text-green-700">
          Studi Kasus: Berlatih Pencarian Data
        </h3>
        <p className="px-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
          SMP Bintang Jaya mengadakan lomba mewarnai untuk siswa kelas 8. Setiap
          siswa mendapatkan poin berdasarkan hasil karya mereka, dan poin ini
          digunakan untuk menentukan kategori prestasi (misalnya, Cukup, Baik,
          atau Sangat Baik). Selain itu, panitia memberikan hadiah berdasarkan
          urutan pemenang (peringkat). Kamu diminta membantu panitia untuk
          menentukan kategori prestasi dan hadiah menggunakan fungsi VLOOKUP dan
          CHOOSE.
        </p>
        <div className="flex justify-center w-full px-4 mt-5">
          <iframe
            width="800"
            height="394"
            style={{ border: "1px solid #ccc" }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/jtwahc2a855af8e2a49cca0946a4458597bb2?mode=embed"
          />
        </div>
      </section>

      {/* Soal Latihan */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-[#255F38] mb-4">
          Soal Latihan
        </h3>
        {[
          {
            key: "tableReference",
            title: "1. Memecah Masalah (Dekomposisi)",
            question:
              "Daftar apa yang digunakan untuk mencari kategori prestasi berdasarkan poin lomba?",
            points: [
              "Lihat tabel yang berisi informasi tentang poin dan kategori.",
              "Pilih tabel yang akan digunakan untuk VLOOKUP.",
            ],
          },
          {
            key: "studentCategory",
            title: "2. Mencari Pola (Pengenalan Pola)",
            question: "Apa kategori prestasi siswa Budi dengan poin lomba 65?",
            points: [
              "Cari poin lomba Budi di Tabel 1.",
              "Cocokkan poin tersebut dengan poin minimal di Tabel 2.",
            ],
          },
          {
            key: "unnecessaryInfo",
            title: "3. Mengabaikan yang Tidak Penting (Abstraksi)",
            question:
              "Informasi apa yang tidak perlu saat mencari kategori prestasi?",
            points: [
              "Fokus hanya pada poin lomba dan kategori.",
              "Pikirkan apakah nama siswa diperlukan.",
            ],
          },
          {
            key: "searchVlookup",
            title: "4. Membuat Langkah-langkah (Algoritma - VLOOKUP)",
            question:
              "Tulis rumus VLOOKUP untuk mencari kategori prestasi siswa Budi jika poin lomba ada di kolom C dan tabel kategori ada di sel A9:B13.",
            points: [
              "Gunakan =VLOOKUP(poin_lomba, rentang_tabel_referensi, posisi_kolom, TRUE).",
              "Pilih kolom kedua untuk kategori.",
            ],
          },
          {
            key: "searchChoose",
            title: "5. Membuat Langkah-langkah (Algoritma - CHOOSE)",
            question:
              "Tulis rumus CHOOSE untuk menampilkan hadiah siswa Budi berdasarkan peringkat di kolom E dan tabel hadiah ada di sel E10:E13.",
            points: [
              "Gunakan =CHOOSE(kolom_peringkat, hadiah1, hadiah2, ...).",
              "Urutkan hadiah sesuai peringkat: Piala, Medali, Buku Tulis, Pensil Warna.",
            ],
          },
        ].map(({ key, title, question, points }) => (
          <div key={key} className="p-6 mb-6 bg-white rounded shadow-lg">
            <h4 className="mb-3 font-semibold text-green-700 text-md">
              {title}
            </h4>
            <p className="leading-relaxed text-gray-700">
              <strong>Pertanyaan:</strong> {question}
            </p>
            <p className="mt-2 leading-relaxed text-gray-700">
              <strong>Petunjuk:</strong>
            </p>
            <ul className="mt-1 ml-6 text-sm text-gray-700 list-disc md:text-base">
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p className="mt-3 leading-relaxed text-gray-700">
              <strong>Jawaban Anda:</strong>
            </p>
            <input
              className="w-full p-2 mt-2 border rounded"
              placeholder="Tulis jawabanmu di sini"
              value={answers[key]}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </div>
        ))}
      </section>

      {/* Tombol untuk submit latihan */}
      <div className="flex justify-center mt-8">
        <button
          onClick={submitLatihan}
          className="px-5 py-2 text-base text-white transition duration-300 bg-green-800 rounded-lg shadow-md cursor-pointer hover:bg-green-700"
        >
          Selesai Latihan
        </button>
      </div>
    </Layout>
  );
}

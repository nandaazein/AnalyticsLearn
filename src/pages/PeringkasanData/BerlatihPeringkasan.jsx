import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import axios from "axios";
import Swal from "sweetalert2";

export default function SummaryLesson() {
  const navigate = useNavigate();

  const correctAnswers = {
    sumif: ["nama dan poin", "nama", "poin"],
    sumifs: ["C2:C11 dan D2:D11", "C2:C11", "D2:D11", "C2:C11 D2:D11"],
    countif: ["kolom kegiatan", "kegiatan"],
    countifs: '=COUNTIFS(C2:C11;"8A";D2:D11;"Kebersihan")',
  };

  const [answers, setAnswers] = useState({
    sumif: "",
    sumifs: "",
    countif: "",
    countifs: "",
  });

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const submitLatihan = async () => {
    const allAnswered = Object.values(answers).every(
      (answer) => answer.trim() !== ""
    );
    if (!allAnswered) {
      Swal.fire({
        title: "Belum Selesai",
        text: "Anda belum menyelesaikan semua soal yang ada",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      });
      return;
    }

    try {
      let correctCount = 0;
      Object.keys(correctAnswers).forEach((field) => {
        let isCorrect = false;
        if (Array.isArray(correctAnswers[field])) {
          isCorrect = correctAnswers[field].some(
            (answer) =>
              answers[field].trim().toLowerCase() ===
              answer.trim().toLowerCase()
          );
        } else {
          isCorrect =
            answers[field].trim().toLowerCase() ===
            correctAnswers[field].trim().toLowerCase();
        }
        if (isCorrect) correctCount++;
      });
      const score = (correctCount / 4) * 100;

      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      if (!token || !user) {
        Swal.fire({
          title: "Autentikasi Gagal",
          text: "Token atau data pengguna tidak ditemukan. Silakan login kembali.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
        return;
      }
      const nis = JSON.parse(user).nis;
      if (!nis) {
        Swal.fire({
          title: "Kesalahan",
          text: "NIS tidak ditemukan dalam data pengguna.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
        return;
      }

      await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/students/scores/${nis}`,
        {
          latihan3: score,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      Swal.fire({
        title: "Berhasil",
        text: "Sudah selesai mengerjakan Mari Berlatih",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      }).then(() => {
        navigate("/rangkuman-peringkasan");
      });
    } catch (error) {
      console.error("Error saat mengirim latihan:", error);
      if (error.response) {
        Swal.fire({
          title: "Kesalahan",
          text: `Gagal mengirim skor: ${
            error.response.data.message || error.response.statusText
          }`,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
      } else if (error.request) {
        Swal.fire({
          title: "Kesalahan",
          text: "Tidak ada respons dari server. Periksa koneksi atau server.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
      } else {
        Swal.fire({
          title: "Kesalahan",
          text: `Terjadi kesalahan: ${error.message}`,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
      }
    }
  };

  return (
    <Layout>
      <div className="border-4 border-[#255F38] p-4 rounded-lg">
        <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
          MARI BERLATIH PERINGKASAN DATA
        </div>

        {/* Petunjuk Umum */}
        <section className="p-4 bg-green-100 rounded shadow-md mb-6">
          <h3 className="text-lg font-semibold text-[#255F38] mb-2">
            Petunjuk Umum
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm md:text-base">
            <li>Bacalah studi kasus di bawah ini dengan saksama.</li>
            <li>
              Jawab setiap pertanyaan pada bagian yang yang telah disediakan.
            </li>
            <li>
              Setelah selesai menjawab semua pertanyaan, klik tombol{" "}
              <em>“Selesai Latihan”</em> untuk mengumpulkan jawabanmu.
            </li>
          </ol>
        </section>

        {/* Studi Kasus */}
        <div className="p-6 bg-white rounded shadow-lg mt-6">
          <h3 className="text-md font-semibold text-green-700">
            Studi Kasus Berlatih Peringkasan Data
          </h3>
          <p className="text-gray-700 mt-3 leading-relaxed text-justify">
            Kamu anggota OSIS yang sedang merekap data partisipasi siswa dalam
            kegiatan sekolah. Gunakan fungsi{" "}
            <strong>SUMIF, SUMIFS, COUNTIF,</strong> dan{" "}
            <strong>COUNTIFS</strong> untuk membantu analisis berikut.
          </p>
          <div className="w-full flex justify-center px-4 mt-5">
            <iframe
              width="80%"
              height="400"
              style={{ border: "1px solid #e7e7e7" }}
              frameBorder="0"
              scrolling="no"
              src="https://sheet.zohopublic.com/sheet/published/5ein2bd127829d1bd4a3c85ad2b0af6a05621?mode=embed"
            ></iframe>
          </div>
        </div>

        {/* Sections */}
        {[
          {
            key: "sumif",
            title: "1. Memecah Masalah (Dekomposisi)",
            question:
              "Apa saja nama kolom yang harus digunakan untuk menghitung total poin Naya dengan fungsi SUMIF?",
            points: [
              "Identifikasi kolom yang bisa digunakan sebagai kriteria pencarian.",
              "Tentukan kolom yang berisi data angka yang ingin dijumlahkan.",
            ],
          },
          {
            key: "sumifs",
            title: "2. Mencari Pola (Pengenalan Pola)",
            question:
              "Sebutkan range kolom kriteria yang digunakan untuk menghitung total poin siswa kelas 8A yang mengikuti kegiatan Kebersihan menggunakan fungsi SUMIFS.",
            points: [
              "Identifikasi kolom yang berisi kriteria pertama.",
              "Identifikasi kolom yang berisi kriteria kedua.",
              "Pastikan kamu menemukan kolom-kolom yang menjadi syarat dalam fungsi SUMIFS.",
            ],
          },
          {
            key: "countif",
            title: "3. Mengabaikan yang Tidak Penting (Abstraksi)",
            question:
              "Kolom mana yang digunakan untuk menghitung jumlah siswa yang ikut Olahraga dengan fungsi COUNTIF?",
            points: [
              "Fokus pada kolom yang didalamnya berisi olahraga.",
              "Abaikan kolom lain seperti nama siswa atau kelas yang tidak diperlukan.",
            ],
          },
          {
            key: "countifs",
            title: "4. Membuat Langkah-langkah (Algoritma)",
            question:
              "Tulis rumus COUNTIFS yang tepat untuk menghitung jumlah siswa kelas 8A yang mengikuti kegiatan Kebersihan.",
            points: [
              "Gunakan range kolom kelas sebagai kriteria pertama.",
              "Gunakan range kolom kegiatan sebagai kriteria kedua.",
              'Gunakan fungsi COUNTIFS dengan kriteria "8A" dan "Kebersihan".',
            ],
          },
        ].map(({ key, title, question, points }) => (
          <section key={key} className="p-6 bg-white rounded shadow-lg mt-6">
            <h3 className="text-md font-semibold text-green-700">{title}</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              <strong>Pertanyaan:</strong> {question}
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-2 text-sm md:text-base">
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <input
              className="border p-2 rounded w-full mt-3"
              placeholder="Jawaban Anda"
              value={answers[key]}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </section>
        ))}

        {/* Tombol submit */}
        <div className="flex justify-center mt-8">
          <button
            onClick={submitLatihan}
            className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md cursor-pointer"
          >
            Selesai Latihan
          </button>
        </div>
      </div>
    </Layout>
  );
}

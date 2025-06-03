import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/admin/Layout";

const ProgressBelajar = () => {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("Semua kelas");
  const [limit, setLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");

  const itemsPerPage = 10; // Menampilkan 10 data per halaman

  // Fungsi untuk mengkapitalkan huruf pada nama kelas (misal: 10c → 10C)
  const capitalizeClass = (className) => {
    if (!className) return className;
    // Pisahkan angka dan huruf (misal: "10c" → ["10", "c"])
    const match = className.match(/(\d+)([a-zA-Z]+)/);
    if (match) {
      const number = match[1]; // Bagian angka
      const letter = match[2].toUpperCase(); // Bagian huruf dijadikan kapital
      return `${number}${letter}`;
    }
    return className.toUpperCase(); // Jika tidak ada angka, kapital semua
  };
  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login kembali.");
      }
      console.log("Fetching students with token:", token);
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/api/students`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Students response:", response.data);
      setStudents(response.data || []);
      setError("");
    } catch (err) {
      console.error("Fetch students error:", err);
      setError(err.response?.data?.message || "Gagal mengambil data siswa");
    }
  };

  const fetchClasses = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Fetching classes with token:", token);
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/api/students/classes`, // Ensure the URL is correct
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Classes response:", response.data);
      const capitalizedClasses = response.data.map((cls) =>
        capitalizeClass(cls)
      );
      setClasses(["Semua kelas", ...capitalizedClasses]);
      setError("");
    } catch (err) {
      console.error("Fetch classes error:", err);
      setError(err.response?.data?.message || "Gagal mengambil daftar kelas");
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("Current user:", user);
    if (!user || user.role !== "teacher") {
      console.log("Redirecting to /masuk due to invalid user or role");
      window.location.href = "/masuk";
    } else {
      fetchStudents();
      fetchClasses();
    }
  }, []);

  // Filter dan hitung data untuk pagination
  const filteredStudents = students
    .filter((student) =>
      student.full_name?.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (student) =>
        classFilter === "Semua kelas" || student.class === classFilter
    );

  const totalItems = Math.min(filteredStudents.length, limit);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Pastikan currentPage tidak melebihi totalPages
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // Potong data untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudents.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      console.log("Navigating to previous page:", currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      console.log("Navigating to next page:", currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    console.log("Navigating to page:", pageNumber);
    setCurrentPage(pageNumber);
  };

  // Generate nomor halaman untuk ditampilkan
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Layout>
      <section className="p-4 mt-6 mb-6 text-center bg-gray-100 rounded shadow-md sm:p-6">
        <h2 className="text-xl font-semibold text-[#255F38] mb-6">
          Progres Belajar
        </h2>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 space-x-4">
          <div className="flex flex-wrap items-center gap-4 space-x-4">
            <select
              className="p-2 border border-gray-300 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              value={limit}
              onChange={(e) => {
                setLimit(parseInt(e.target.value));
                setCurrentPage(1); // Reset ke halaman 1 saat limit berubah
              }}
            >
              <option value="20">Menampilkan 20 data</option>
              <option value="50">Menampilkan 50 data</option>
              <option value="100">Menampilkan 100 data</option>
            </select>
            <select
              className="p-2 border border-gray-300 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              value={classFilter}
              onChange={(e) => {
                setClassFilter(e.target.value);
                setCurrentPage(1); // Reset ke halaman 1 saat filter berubah
              }}
            >
              {classes.map((cls, index) => (
                <option key={index} value={cls} className="text-sm bg-white">
                  {cls === "Semua kelas" ? cls : cls.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Cari nama..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1); // Reset ke halaman 1 saat pencarian berubah
              }}
              className="p-2 border border-gray-300 rounded-lg w-64 shadow-md focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-gray-700 border-collapse">
            <thead className="bg-[#255F38] text-white">
              <tr>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  NIS
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  Nama
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  Kelas
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  Progres Belajar
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((student) => (
                <tr
                  key={student.nis}
                  className="transition-colors duration-200 hover:bg-gray-100 even:bg-gray-50"
                >
                  <td className="p-2 text-sm border-b border-gray-200">
                    {student.nis}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {student.full_name}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {student.class?.toUpperCase() ?? "-"}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#255F38] h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {student.progress}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {currentItems.length === 0 && !error && (
          <p className="mt-4 text-sm text-gray-500">
            Tidak ada data siswa yang ditemukan.
          </p>
        )}
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-end mt-4 space-x-2">
            <button
              className={`px-4 py-2 rounded-lg text-sm ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400 cursor-pointer"
              }`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              «
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                className={`px-4 py-2 rounded-lg text-sm ${
                  currentPage === number
                    ? "bg-[#255F38] text-white"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                }`}
                onClick={() => handlePageClick(number)}
              >
                {number}
              </button>
            ))}
            <button
              className={`px-4 py-2 rounded-lg text-sm ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400 cursor-pointer"
              }`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProgressBelajar;

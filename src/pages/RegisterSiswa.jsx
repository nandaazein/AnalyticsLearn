// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import registerImage from "../assets/register.png"; // Impor gambar dari folder src/assets

// const RegisterSiswa = () => {
//   const [nis, setNis] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [studentClass, setStudentClass] = useState(""); // Default kosong
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [token, setToken] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Daftar opsi kelas
//   const classOptions = ["8A", "8B", "8C", "8D"];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (password !== confirmPassword) {
//       setError("Kata sandi tidak cocok");
//       return;
//     }

//     try {
//       const payload = {
//         nis,
//         fullName,
//         password,
//         confirmPassword,
//         class: studentClass,
//         token,
//       };
//       await axios.post(
//         `${import.meta.env.VITE_API_ENDPOINT}/api/students/register`,
//         payload
//       );

//       // Tampilkan SweetAlert2 untuk notifikasi registrasi berhasil
//       Swal.fire({
//         title: "Berhasil Daftar Akun",
//         text: "Akun Anda telah berhasil dibuat. Silakan login untuk melanjutkan.",
//         icon: "success",
//         confirmButtonText: "OK",
//         confirmButtonColor: "#255F38",
//       }).then(() => {
//         // Redirect ke halaman login setelah konfirmasi
//         navigate("/login-siswa");
//       });
//     } catch (err) {
//       setError(err.response?.data?.message || "Registrasi gagal");
//     }
//   };

//   const handleLoginClick = (e) => {
//     e.preventDefault();
//     // Tampilkan SweetAlert2 untuk notifikasi menuju login
//     Swal.fire({
//       title: "Menuju Login",
//       text: "Anda akan diarahkan ke halaman login siswa.",
//       icon: "info",
//       confirmButtonText: "OK",
//       confirmButtonColor: "#255F38",
//     }).then(() => {
//       // Redirect ke halaman login
//       navigate("/login-siswa");
//     });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
//       <div className="flex flex-col items-center w-full max-w-2xl p-6 bg-white shadow-md rounded-2xl md:flex-row">
//         {/* Gambar di sisi kiri - Diimpor dari src/assets */}
//         <div className="w-full mb-4 md:w-1/2 md:mb-0 md:pr-4">
//           <img
//             src={registerImage}
//             alt="Ilustrasi Register Siswa"
//             className="object-cover w-full h-auto rounded-lg"
//           />
//         </div>
//         {/* Form Register */}
//         <div className="w-full md:w-1/2">
//           <h2 className="mb-4 text-xl font-bold text-center text-green-700">
//             Daftar sebagai Siswa
//           </h2>
//           <form className="space-y-3" onSubmit={handleSubmit}>
//             <div>
//               <label className="block mb-1 text-sm text-gray-700">NIS</label>
//               <input
//                 type="text"
//                 value={nis}
//                 onChange={(e) => setNis(e.target.value)}
//                 className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-1 text-sm text-gray-700">
//                 Nama Lengkap
//               </label>
//               <input
//                 type="text"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-1 text-sm text-gray-700">Kelas</label>
//               <select
//                 value={studentClass}
//                 onChange={(e) => setStudentClass(e.target.value)}
//                 className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               >
//                 <option value="" disabled>
//                   Pilih Kelas
//                 </option>
//                 {classOptions.map((cls) => (
//                   <option key={cls} value={cls}>
//                     {cls}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="block mb-1 text-sm text-gray-700">Token</label>
//               <input
//                 type="text"
//                 value={token}
//                 onChange={(e) => setToken(e.target.value)}
//                 className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//             <div className="flex space-x-3">
//               <div className="w-1/2">
//                 <label className="block mb-1 text-sm text-gray-700">
//                   Kata Sandi
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block mb-1 text-sm text-gray-700">
//                   Konfirmasi Kata Sandi
//                 </label>
//                 <input
//                   type="password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                   required
//                 />
//               </div>
//             </div>
//             {error && <p className="text-xs text-red-500">{error}</p>}
//             <button
//               type="submit"
//               className="w-full py-1 text-sm text-white bg-green-700 rounded-lg cursor-pointer hover:bg-green-800"
//             >
//               Daftar
//             </button>
//           </form>
//           <p className="mt-3 text-xs text-center text-gray-600 cursor-pointer">
//             Sudah punya akun?{" "}
//             <button
//               onClick={handleLoginClick}
//               className="font-medium text-green-700 cursor-pointer hover:underline"
//             >
//               Masuk di sini
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterSiswa;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import registerImage from "../assets/register.png";

const RegisterSiswa = () => {
  const [nis, setNis] = useState("");
  const [fullName, setFullName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Daftar opsi kelas
  const classOptions = ["8A", "8B", "8C", "8D"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Kata sandi tidak cocok");
      return;
    }

    try {
      const payload = {
        nis,
        fullName,
        password,
        confirmPassword,
        class: studentClass,
        token,
      };
      await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/students/register`,
        payload
      );

      // Tampilkan SweetAlert2 untuk notifikasi registrasi berhasil
      Swal.fire({
        title: "Berhasil Daftar Akun",
        text: "Akun Anda telah berhasil dibuat. Silakan login untuk melanjutkan.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      }).then(() => {
        // Redirect ke halaman login setelah konfirmasi
        navigate("/login-siswa");
      });
    } catch (err) {
      setError(err.response?.data?.message || "Registrasi gagal");
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    // Tampilkan SweetAlert2 untuk notifikasi menuju login
    Swal.fire({
      title: "Menuju Login",
      text: "Anda akan diarahkan ke halaman login siswa.",
      icon: "info",
      confirmButtonText: "OK",
      confirmButtonColor: "#255F38",
    }).then(() => {
      // Redirect ke halaman login
      navigate("/login-siswa");
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-md sm:max-w-lg md:max-w-2xl p-6 sm:p-8 bg-white shadow-md rounded-2xl md:flex-row">
        {/* Gambar di sisi kiri */}
        <div className="w-full mb-4 sm:mb-6 md:w-1/2 md:mb-0 md:pr-4">
          <img
            src={registerImage}
            alt="Ilustrasi Register Siswa"
            className="object-cover w-full h-auto max-h-[300px] sm:max-h-[400px] rounded-lg"
          />
        </div>
        {/* Form Register */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-center text-green-700">
            Daftar sebagai Siswa
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm sm:text-base text-gray-700">NIS</label>
              <input
                type="text"
                value={nis}
                onChange={(e) => setNis(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm sm:text-base text-gray-700">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm sm:text-base text-gray-700">Kelas</label>
              <select
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="" disabled>
                  Pilih Kelas
                </option>
                {classOptions.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm sm:text-base text-gray-700">Token</label>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-3 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 text-sm sm:text-base text-gray-700">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 text-sm sm:text-base text-gray-700">
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full py-2 text-sm sm:text-base text-white bg-green-700 rounded-lg hover:bg-green-800 transition duration-300"
            >
              Daftar
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Sudah punya akun?{" "}
            <button
              onClick={handleLoginClick}
              className="font-medium text-green-700 hover:underline"
            >
              Masuk di sini
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterSiswa;
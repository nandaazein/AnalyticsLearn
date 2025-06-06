import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faChartBar,
  faUsers,
  faBook,
  faFileText,
  faTasks,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    // Tampilkan SweetAlert2 untuk notifikasi logout
    Swal.fire({
      title: "Berhasil Logout",
      text: "Anda telah berhasil logout dari sistem.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#255F38",
    }).then(() => {
      // Clear authentication data from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // Redirect to student login page
      navigate("/");
    });
  };

  const menuItems = [
    { icon: faBookOpen, title: "Dashboard", path: "/dashboard" },
    { icon: faChartBar, title: "Progres Belajar", path: "/progres" },
    { icon: faUsers, title: "Data Siswa", path: "/data-siswa" },
    { icon: faBook, title: "Data Nilai", path: "/data-nilai" },
    { icon: faFileText, title: "Data Kuis", path: "/kelola-soal" },
    { icon: faTasks, title: "Pengaturan", path: "/pengaturan-kkm" },
    { icon: faSignOutAlt, title: "Logout", path: "/logout", isLogout: true },
  ];

  return (
    <aside
      className={`bg-gray-100 border-gray-200 shadow-sm p-4 transition-all duration-200 ease-in-out 
        ${isMobile ? "w-full" : "w-64 fixed left-0 h-screen"} 
        ${isScrolled ? "top-0" : "top-16"}`}
    >
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.isLogout ? (
              <div
                onClick={handleLogout}
                className={`flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer font-normal text-base ${
                  location.pathname === item.path ? "bg-gray-300 font-bold" : ""
                }`}
              >
                <div className="w-6 h-6 bg-[#255F38] text-white rounded-md flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={item.icon} size="sm" />
                </div>
                {item.title}
              </div>
            ) : (
              <Link
                to={item.path}
                className={`flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer font-normal text-base ${
                  location.pathname === item.path ? "bg-gray-300 font-bold" : ""
                }`}
              >
                <div className="w-6 h-6 bg-[#255F38] text-white rounded-md flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={item.icon} size="sm" />
                </div>
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
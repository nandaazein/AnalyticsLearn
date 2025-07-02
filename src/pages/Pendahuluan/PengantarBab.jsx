
import Layout from "../../components/Layout";

const PengantarBab = () => {
  
  return (
    <Layout>
      <div className="border-l-4 border-[#255F38] pl-4">
        {/* Header judul */}
        <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-8 p-4 bg-[#255F38] text-white rounded-lg shadow-lg ">
          Pengantar Bab Analisis Data
        </h1>

        {/* Capaian Pembelajaran */}
        <div className="bg-white p-4 shadow-md rounded mt-4 border border-gray-300">
          <h2 className="font-bold text-lg text-[#255F38] flex items-center">
            <i className="ri-flag-line text-[#255F38] text-xl mr-2"></i> Capaian Pembelajaran
          </h2>
          <p className="mt-2 text-gray-700">
            Pada akhir fase D, peserta didik mampu mengakses, mengolah, mengelola, dan menganalisis data
            secara efisien, terstruktur, dan sistematis untuk menginterpretasi dan memprediksi sekumpulan
            data dari situasi konkret sehari-hari dengan menggunakan perkakas TIK atau manual.
          </p>
        </div>

        {/* Tujuan Pembelajaran */}
        <div className="bg-white p-4 shadow-md rounded mt-4 border border-gray-300">
          <h2 className="font-bold text-[#255F38] text-lg flex items-center">
            <i className="ri-check-double-line text-[#255F38] text-xl mr-2"></i> Tujuan Pembelajaran
          </h2>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Peserta didik mampu memahami konsep dasar analisis data dan pentingnya dalam kehidupan sehari-hari.</li>
            <li>Peserta didik mampu memahami konsep dasar Computational Thinking (CT) dan menerapkannya dalam menyelesaikan masalah sederhana melalui studi kasus.</li>
            <li>Peserta didik mampu menggunakan fungsi Lookup dan Reference untuk melakukan pencarian data secara tepat.</li>
            <li>Peserta didik mampu menyajikan informasi dalam bentuk visualisasi data.</li>
            <li>Peserta didik mampu merangkum data menggunakan fungsi peringkasan.</li>
            <li>Peserta didik mampu mengelola data menggunakan teknik Sorting dan Filtering.</li>
            <li>Peserta didik mampu menerapkan pendekatan Computational Thinking dalam menyelesaikan permasalahan yang berkaitan dengan pencarian data, visualisasi data, peringkasan data, dan pengelolaan data.</li>
          </ul>
        </div>

        {/* Tombol Navigasi */}
        <div className="flex justify-end mt-8 px-4">
          <button onClick={() => (window.location.href = "/pendahuluan")} className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer">
            Selanjutnya →
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PengantarBab;
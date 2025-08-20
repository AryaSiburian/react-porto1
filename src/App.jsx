import { listTools, listProyek } from "./data";


function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
              alt="Foto Profil Arya Siburian"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Kode yang indah, lahir dari ketekunan.😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-5">
            Hi, Saya Arya Siburian Mahasiswa Teknologi Informasi
          </h1>
          <p className="text-justify">
            Saya mempunyai ketertarikan dalam bidang Programming Web/app terutama pada pembuatan Website dan Design Seperti Poster, Website E-commerce, dll.
            Ketertarikan pada bidang ini sudah berlangsung lebih dari 2 tahun.
          </p>
          <div className="mt-6 flex sm:gap-4 gap-2 mb-10">
            <a
              href="/assets/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>.
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-fill"></i>
            </a>
          </div>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
          alt="picture"
          className="w-[500px] md:ml-auto rounded-4xl animate__animated animate__fadeInUp animate__delay-2s"
          loading="lazy"
        />
      </div>

      {/* Tentang Section */}
      <div className="tentang mt-32 py-10">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
            alt="Hero Image"
            className="w-12 rounded-md sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Arya Siburian, seorang Mahasiswa yang sedang
            menggeluti FullStack Web Developer. Saya percaya bahwa desain dan
            fungsionalitas harus berjalan beriringan, sehingga setiap proyek
            yang saya kembangkan tidak hanya terlihat menarik tetapi juga
            memberikan pengalaman pengguna yang optimal.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div>
              <h1 className="text-4xl mb-1">
                45<span className="text-violet-500">+</span>
              </h1>
              <p>Proyek selesai</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                2<span className="text-violet-500">+</span>
              </h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section*/}
      <div className="tools mt-32">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Tools yang dipakai
        </h1>
        <p
          className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut ada tools yg saya pakai untuk pembuatan website atau design
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((statistik) => (
            <div
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
              key={statistik.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={statistik.dad}
              data-aos-once="true"
            >
              <img
                src={statistik.gambar}
                alt="Tools Image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                loading="lazy"
              />
              <div>
                <h4>{statistik.nama}</h4>
                <p>{statistik.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Proyek Section */}
      <div className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center opacity-50">
          Berikut ini beberapa proyek yang telah saya buat
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="#" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-600 bg-zinc-600 rounded-md font-semibold gap-2"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kontak Section */}
      <div className="kontak mt-32 px-4">
        <h1
          className="text-4xl mb-8 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kontak
        </h1>
        <p
          className="text-base text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Mari Terhubung Dengan Saya.
        </p>
        <form
          action="https://formsubmit.co/aryaiseng5@gmail.com"
          method="POST"
          autoComplete="off"
          className="bg-zinc-800 p-6 md:p-10 w-full max-w-xl mx-auto rounded-md"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan nama"
                required
                className="border border-zinc-500 p-2 rounded-md w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan email"
                required
                className="border border-zinc-500 p-2 rounded-md w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                rows="6"
                placeholder="Masukan Pesan ....."
                className="border border-zinc-500 p-2 rounded-md w-full"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full md:w-auto border border-zinc-600 hover:bg-violet-600 transition"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;

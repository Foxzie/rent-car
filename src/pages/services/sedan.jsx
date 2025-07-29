import React, { Suspense } from "react"; // Import Suspense

// Data dummy untuk produk Sedan Anda
const mpvProducts = [
  {
    id: 1,
    name: "Toyota Camry - Luxury Sedan",
    description:
      "Experience refined elegance and superior comfort with our luxury Toyota Camry. Ideal for executive travel and long family trips, it offers plush seating for four, advanced infotainment, and a serene ride.", // Deskripsi diperbarui
    imageUrl:
      "https://via.placeholder.com/400x250/F8D800/FFFFFF?text=Luxury+Sedan", // Placeholder, ganti dengan gambar asli
    features: [
      "4 Seater",
      "Premium Audio",
      "Executive Comfort",
      "Advanced Safety",
    ], // Fitur diperbarui
    price: "Mulai Rp 800.000/hari",
  },
  {
    id: 2,
    name: "Toyota Vios - Standard Sedan",
    description:
      "Our reliable Toyota Vios is the perfect standard sedan for daily commutes, city tours, or small group travel. It's economical, fuel-efficient, and offers a comfortable, agile ride for urban environments.", // Deskripsi diperbarui
    imageUrl:
      "https://via.placeholder.com/400x250/F8D800/FFFFFF?text=Standard+Sedan", // Placeholder, ganti dengan gambar asli
    features: [
      "4 Seater",
      "Fuel Efficient",
      "Compact & Agile",
      "Child Seat Ready",
    ], // Fitur diperbarui
    price: "Mulai Rp 550.000/hari",
  },
  {
    id: 3,
    name: "Honda Civic Type R - Sport Sedan",
    description:
      "Unleash exhilarating performance with the Honda Civic Type R sport sedan. Designed for thrill-seekers, it combines aggressive styling with powerful engineering, offering dynamic handling and a responsive drive.", // Deskripsi diperbarui
    imageUrl:
      "https://via.placeholder.com/400x250/F8D800/FFFFFF?text=Sport+Sedan", // Placeholder, ganti dengan gambar asli
    features: [
      "4 Seater",
      "High Performance Engine",
      "Sport Suspension",
      "Aerodynamic Design",
    ], // Fitur diperbarui
    price: "Mulai Rp 700.000/hari",
  },
];

// NewTabLink komponen sesuai format Anda
const NewTabLink = ({ to, children, className }) => (
  <div
    className={`relative group cursor-pointer transition-all duration-500 ${className}`}
    onClick={(e) => {
      e.preventDefault();
      window.open(to, "_blank");
    }}
  >
    {children}
  </div>
);

const Mpv = () => {
  const title = "Our Sedan Services - Andrea's Garage"; // Title updated for consistency
  document.title = title;

  // Lazily load the Footer component
  // Path ini tetap "/src/components/footer" sesuai permintaan Anda
  const Footer = React.lazy(() => import("/src/components/footer"));

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Sesi Judul Utama */}
        <div
          className="max-w-4xl w-full text-center mb-12"
          data-aos="fade-up" // AOS animation for the whole title section
          data-aos-duration="1000"
        >
          <br />
          {/* AOS tetap dipertahankan pada parent div */}
          <h1 className="text-5xl md:text-5xl font-extrabold text-amber-400 drop-shadow-lg mb-4">
            Pilihan Sedan Terbaik untuk Anda
          </h1>{" "}
          {/* Heading updated for consistency */}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Temukan kenyamanan dan fleksibilitas tak tertandingi dengan beragam
            pilihan Sedan kami, siap menemani setiap perjalanan Anda.
          </p>{" "}
          {/* Paragraph updated for consistency */}
        </div>

        {/* --- */}

        {/* Sesi Produk MPV */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mpvProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out group"
              data-aos="fade-up" // Animation for each product card
              data-aos-delay={index * 100} // Stagger the animation of each card
              data-aos-duration="800"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="p-6">
                <h2 className="text-3xl font-bold text-amber-400 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-300 text-base mb-4">
                  {product.description}
                </p>
                <div className="mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="text-xl font-semibold text-gray-100 mb-6">
                  {product.price}
                </p>
                {/* FIX: NewTabLink langsung menerima semua kelas styling tombol */}
                <NewTabLink
                  to="/rent" // Target URL untuk tab baru
                  className="w-full bg-amber-500 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-amber-400 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50 text-center block"
                  // 'text-center' dan 'block' memastikan gaya tombol penuh lebar dan teks di tengah
                  // 'onClick' yang memanggil handleTitleChange dihapus karena tidak didefinisikan
                  // dan tidak relevan untuk navigasi tab baru
                >
                  Pesan Sekarang
                </NewTabLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Mpv;

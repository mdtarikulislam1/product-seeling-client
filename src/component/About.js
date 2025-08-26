export default function AboutSection() {
  return (
    <section className="px-6 py-16 bg-gray-50 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
          About <span className="text-blue-600">Our Shop</span>
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mb-10 leading-relaxed text-gray-600">
          Welcome to <span className="font-semibold text-gray-800">Our E-commerce Store</span> — 
          your one-stop destination for quality products at the best prices. 
          We believe shopping should be simple, affordable, and enjoyable. 
          That’s why we bring you a wide range of items, from everyday essentials 
          to the latest trends, all in one place.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">🌍 Our Mission</h3>
            <p className="text-gray-600">
              To make online shopping fast, secure, and accessible for everyone, 
              no matter where you are.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">💡 Why Choose Us</h3>
            <p className="text-gray-600">
              We provide top-quality products, reliable delivery, and excellent 
              customer support that you can always count on.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">🤝 Our Promise</h3>
            <p className="text-gray-600">
              100% customer satisfaction, easy returns, and a seamless shopping experience. 
              Because your happiness is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

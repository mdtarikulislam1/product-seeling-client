"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://i.postimg.cc/4NVh1fPY/sport-new-lifestyle-fashion-sneakers-removebg-preview.png",
    title: "Trendy Shoes Collection",
    text: "Discover the latest footwear styles for every occasion with unbeatable prices.",
    button: "Shop Now",
  },
  {
    image: "https://i.postimg.cc/PfLDPz8z/OH1-BPC0-removebg-preview.png",
    title: "Premium Watches",
    text: "Elevate your style with our exclusive collection of luxury watches.",
    button: "Explore Collection",
  },
  {
    image: "https://i.postimg.cc/Gmj8ZXZr/26322-removebg-preview.png",
    title: "Crystal Clear Sound",
    text: "Experience immersive sound quality with our latest headphone collection.",
    button: "Buy Now",
  },
];

export default function Hero() {
  return (
    <div className="w-full mx-auto my-8 max-w-7xl">
      <div className="mx-4">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="shadow-lg rounded-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-black/40">
                <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                  {slide.title}
                </h2>
                <p className="max-w-2xl text-lg md:text-xl">{slide.text}</p>
                <button className="px-4 py-2 mt-6 transition bg-blue-600 rounded-lg hover:bg-blue-700">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}

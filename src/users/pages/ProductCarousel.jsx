import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";


const products = [
  {
    _id: "6975d47babb869e845dae424",
    image: "http://localhost:3000/uploads/image-1769329787375-cloth-8-2.jpg",
    name: "pant",
  },
  {
    _id: "695a081f99acc02a4cef6159",
    image: "https://static.zara.net/assets/public/63fd/6d79/8d8e46339eb5/ab97b76b2478/00858613250-p/00858613250-p.jpg?ts=1765983610422&w=1024",
    name: "Retro Shirt",
  },

  {
    _id: "6963eac1c549b70c35aa9c39",
    image: "https://static.zara.net/assets/public/4c1c/1763/5da74ad287ec/13e9c3b7a225/06124350427-p/06124350427-p.jpg?ts=1763543224962&w=1024",
    name: "Denim Shirt",
  },
    {
    _id: "6963f5d4c549b70c35aa9cac",
    image: "https://static.zara.net/assets/public/6416/04b7/1b454082be19/b399dd84970e/09632045802-p/09632045802-p.jpg?ts=1766498273107&w=1024",
    name: "Denim Shirt",
  },
];

function ProductCarousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false,pauseOnMouseEnter: true    }}
  

      loop={true}
      className="md:h-150 h-80 md:w-160 w-89"
    >
      {products.map((item) => (
      <SwiperSlide key={item._id}>
  <div className="relative group h-full w-full">

      
      <img
        src={item.image}
        alt={item.name}
        className="me-6  md:h-150 h-80 md:w-160 w-89 object-cover object-top relative "
      />
    <Link to={`/cloth/${item?._id}/details`} className="block h-full w-full">
      <button
        style={{ fontFamily: "Playfair Display, serif" }}
        className="absolute z-30 md:text-sm text-xs md:left-124 left-57  md:top-139 top-71 -translate-x-1/9 -translate-y-1/9 border border-black text-black cursor-pointer px-6 py-1 md:hover:border-yellow-50 hover:border-yellow-50 md:hover:text-yellow-50 hover:text-yellow-50  active:border-white active:text-white   transition-all duration-300 ease-out"
      >
        View Product
      </button>

    </Link>

  </div>
</SwiperSlide>

      ))}
    </Swiper>
  );
}

export default ProductCarousel;

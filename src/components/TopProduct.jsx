import React from "react";
//photos
import rate1 from "../assets/rate1.avif";
import rate2 from "../assets/rate2.avif";
import rate3 from "../assets/rate3.avif";

//icons
import { FaStar } from "react-icons/fa";
const TopProduct = () => {
  const productsData = [
    {
      id: 1,
      img: rate1,
      title: "Casual Wear",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, totam omnis? Accusamus alias nulla omnis voluptas eligendi, expedita cumque dolore.",
    },
    {
      id: 2,
      img: rate2,
      title: "Printed shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, totam omnis? Accusamus alias nulla omnis voluptas eligendi, expedita cumque dolore.",
    },
    {
      id: 3,
      img: rate3,
      title: "Women Shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, totam omnis? Accusamus alias nulla omnis voluptas eligendi, expedita cumque dolore.",
    },
  ];

  return (
    <div className="bg-gray-100  p-6 ">
      <div className="container mx-auto ">
        <div className="text-left mb-24 ">
          <p data-aos="fade-up" className="text-sm text-orange-300">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            itaque nihil error rerum quisquam, provident eos odio corporis
            officiis excepturi?
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {productsData.map((product) => (
            <div 
            data-aos="zoom-in"
            className="rounded-2xl bg-white hover:bg-black hover:text-white relative shadow-xl duration-high group max-w-[300px]">
              <div className="h-[80px]">
                <img
                  src={product.img}
                  alt="ProductRate"
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <div className="flex w-full items-center justify-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                <h1 className="text-xl font-bold">{product.title}</h1>
                <p className="text-gray-400 group-hover:text-white duration-300 text-sm ">
                  {product.description}
                </p>
                <button
                  type="button"
                  className="bg-orange-300 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-300"
                >
                    Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;

//photos
import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";


//icons
import { FaStar } from "react-icons/fa";
const Product = () => {

  const productsData = [
    {
      id: 1,
      img: product1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: product2,
      title: "Women western",
      rating: 4.5,
      color: "red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: product3,
      title: "Googles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: product4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: product5,
      title: "Fashion T-Shirt",
      rating: 4.7,
      color: "Pink",
      aosDelay: "800",
    },
  ];

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-orange-300">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            itaque nihil error rerum quisquam, provident eos odio corporis
            officiis excepturi?
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-4">
            {productsData.map((products) => (
              <div 
              data-aos="fade-up"
              data-aos-delay={products.aosDelay}
              key={products.id} className="space-y-4">

                <img
                  src={products.img}
                  alt="PRODUCTS"
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div className="">
                    <h3 className="font-semibold">{products.title}</h3>
                    <p className="text-sm text-gray-600">
                        {products.color}
                    </p>
                    <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-400"/>
                        <span>{products.rating}</span>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

//photos
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.png";
//library
import Slider from "react-slick";

const Hero = () => {
  const imageList = [
    {
      id: 1,
      image: hero1,
      title: "Upto 50% off on all Mens's Wear",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero consectetur a eligendi at optio voluptas vitae est natus totam?",
    },
    {
      id: 2,
      image: hero2,
      title: "Upto 30% off on all Mens's Wear",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero consectetur a eligendi at optio voluptas vitae est natus totam?",
    },
    {
      id: 3,
      image: hero3,
      title: "Upto 70% off on all Mens's Wear",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero consectetur a eligendi at optio voluptas vitae est natus totam?",
    },
  ];

  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 2000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200">
      <div className="h-[700px] w-[700px] bg-orange-200 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10"></div>
      <div className="container mx-auto pb-8 sm:pb-0">
        <Slider {...settings}>
          {imageList.map((imagelist) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 ml-8">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {imagelist.title}
                  </h1>
                  <p 
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-sm">
                    {imagelist.description}
                  </p>
                  <div 
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="3008"
                  className="">
                    <button
                      type="button"
                      className="bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="order-2 sm:order-1">
                  <div 
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="relative z-10">
                    <img
                      src={imagelist.image}
                      alt="IMAGE"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]  object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
//photos
import footer from "../assets/footer.jpg";
import logo from "../assets/logo.png";

//icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        
        {/* คอลัมน์ที่ 1 */}
        <div data-aos="zoom-in" className="py-8 px-4">
          <h1 className="sm:text-3xl text-xl font-bold mb-3 flex items-center gap-4">
            <img src={logo} alt="Logo" className="max-w-[50px]" />
            Shops
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            officia nisi harum consequuntur temporibus omnis, pariatur numquam
            ipsa fugiat provident.
          </p>
        </div>

        {/* คอลัมน์ที่ 2 (Important Links 2 กล่อง ข้างกัน) */}
        <div className="py-8 px-4 flex flex-col sm:flex-row gap-8">
          <div>
            <h1 className="sm:text-2xl text-xl font-bold mb-3">
              Important Links
            </h1>
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer hover:text-orange-300">Home</li>
              <li className="cursor-pointer hover:text-orange-300">About</li>
              <li className="cursor-pointer hover:text-orange-300">Contact</li>
              <li className="cursor-pointer hover:text-orange-300">Blog</li>
            </ul>
          </div>
          <div>
            <h1 className="sm:text-2xl text-xl font-bold mb-3">
              Important Links
            </h1>
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer hover:text-orange-300">Home</li>
              <li className="cursor-pointer hover:text-orange-300">About</li>
              <li className="cursor-pointer hover:text-orange-300">Contact</li>
              <li className="cursor-pointer hover:text-orange-300">Blog</li>
            </ul>
          </div>
        </div>

        {/* คอลัมน์ที่ 3 */}
        <div className="py-8 px-4">
          <div className="flex gap-2">
            <a href="#"><FaInstagram className="text-3xl" /></a>
            <a href="#"><FaFacebook className="text-3xl" /></a>
            <a href="#"><FaLinkedin className="text-3xl" /></a>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileScreen />
              <p>123456789</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;

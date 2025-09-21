//photos
import logo from "../assets/logo.png";

//icons
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
const Navbar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 5,
      name: "Electronics",
      link: "/#",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
  return (
    <div className="shadow-md bg-white ">
      
      <div className="bg-orange-300 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="Logo" className="w-10 uppercase" />
              Shops
            </a>
          </div>
          <div className="flex justify-between items-center gap-4 ">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="bg-white w-50 sm:w-40 group-hover:w-70 transition-all duration-300 rounded-full border border-grey-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400"
              />
              <IoMdSearch className="text-gray-500  group-hover:text-orange-400 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              type="button"
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2 group"
            >
              <span className="group-hover:block hidden transition-all  duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

  
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className="inline-block px-4 hover:text-orange-400 duration-200"
              >
                {menu.name}
              </a>
            </li>
          ))}
          {
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Trending Products
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[999] hidden group-hover:block w-30 bg-white rounded-md p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((dropdown) => (
                    <li index={dropdown.id}>
                      <a href={dropdown.link} className="inline-block w-full rounded-md p-2 hover:bg-orange-300">{dropdown.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

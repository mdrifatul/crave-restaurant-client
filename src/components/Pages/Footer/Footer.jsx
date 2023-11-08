import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import logo from "../../../assets/image/352514_local_restaurant_icon.png";

const Footer = () => {
  return (
    <div data-aos="fade-up">
    <footer className="footer p-10 text-neutral-content felx justify-between md:px-20 lg:px-36 border-t-2 border-t-[#cbe8a2]">
        <nav>
          <div className="flex items-center">
            <img  className="w-14 h-12"  src={logo} alt="" />
            <p className=" text-[#7DA640] px-2 font-semibold text-xl md:text-4xl italic">Creave</p>
          </div>
          <p className="py-6 text-gray-600 lg:w-56">Enjoy the best of fast food without compromising on quality. Carve serves up quick bites that are big on flavor</p>
        </nav>
        <nav>
        <div className="grid grid-flow-col gap-4 md:mt-10">
            <a><BsFacebook className='w-8 h-8 text-[#0d8ff3]'/></a> 
            <a><BsYoutube className='w-8 h-8  text-[#FF0000]'/></a> 
            <a><BsTwitter className='w-8 h-8  text-[#18A4FC]'/></a>
          </div>
        </nav>
        <nav>
          <p className=" text-3xl text-[#7DA640] ">123-456-78901</p>
          <a className=" text-gray-700 text-base ">drivewave@gmail.com</a>
          <a className=" text-gray-700 text-base">West 12th Street</a>
          <a className=" text-gray-700 text-base">New York, USA</a>
        </nav>
      </footer>
        <p className="my-4 text-gray-600 text-center">
          Copyright © 2023 Crave | Powered by Crave.
        </p>
      </div>
  );
};

export default Footer;
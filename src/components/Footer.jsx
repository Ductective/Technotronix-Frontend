import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-orange-500 lg:py-[40px] px-[50px] flex justify-center flex-wrap py-[8%] lg:justify-between">
        <div className="flex  items-center">
          <p className="text-[24px] lg:text-[30px] font-bold">TECHNOTRONIX</p>
        </div>
        <div>
          <h1 className="text-[18px] font-bold mb-[10px]"></h1>
          <ul>
            <li>
              <a href="" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] font-bold mb-[10px]">Follow Us</h1>
          <div className="flex gap-5">
            <FaFacebook />
            <FaXTwitter />
            <FaSquareInstagram />
            <FaTiktok />
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center py-[5px]">
        <p>&copy; Copyright Technotronix | All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;

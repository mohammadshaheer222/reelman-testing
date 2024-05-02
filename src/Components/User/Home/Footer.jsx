import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+919895943440";
  const email = "mohammadshaheer222@gmail.com"
  return (
    <div className="text-black bg-gray-100 py-16 flex flex-col justify-center items-center md:flex-row md:items-start md:gap-x-28">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl">Reelman Productions</h1>
        <div className="flex gap-6">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>

      <div className="pt-10 flex flex-col items-center md:pt-0">
        <p>1st floor, Nahdi Building</p>
        <p>Pattambi Road, Palakkad</p>
        <p>Kerala - 679335</p>
      </div>

      <div className="flex flex-col items-center pt-10 md:pt-0">
        <a className="hover:underline" href={`mailto:${email}`}>{email}</a>
        <a className="hover:underline" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </div>

      <div className="flex flex-col items-center pt-10 md:pt-0">
        <p>All Rights Reserved</p>
        <p>© {currentYear} Reelman Productions</p>
      </div>
    </div>
  );
};
export default Footer;

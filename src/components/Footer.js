import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-100 bg-secondary m-auto position-fixed bottom-0 end-0">
      <div className="d-flex justify-content-evenly align-items-center py-4">
        <FaYoutube role="button" aria-label="you tube" />
        <FaTwitterSquare role="button" aria-label="twitter" />
        <FaFacebookSquare role="button" aria-label="facebook" />
        <FaTiktok role="button" aria-label="tiktok" />
      </div>
      <small className="p-1 d-block text-center text-white">
        &copy; Cat Tinder | {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;

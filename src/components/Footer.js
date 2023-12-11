import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-100 bg-secondary m-auto ">
      <div className="d-flex justify-content-evenly align-items-center py-4">
        <a href="https://www.youtube.com/" target="_blank">
          {" "}
          <FaYoutube className="fs-4" role="button" aria-label="you tube" />
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank">
          {" "}
          <FaTwitterSquare
            className="fs-4"
            role="button"
            aria-label="twitter"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebookSquare
            className="fs-4"
            role="button"
            aria-label="facebook"
          />
        </a>
        <a href="https://www.tiktok.com/en/" target="_blank">
          <FaTiktok className="fs-4" role="button" aria-label="tiktok" />
        </a>
      </div>
      <small className="p-1 d-block text-center text-white">
        &copy; Cat Tinder | {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;

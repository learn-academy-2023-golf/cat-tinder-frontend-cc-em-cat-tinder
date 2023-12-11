import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-100 bg-secondary m-auto fixed-bottom">
      <div className="d-flex justify-content-evenly align-items-center py-3">
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
        <small className="p-1 d-block text-center text-white">
        &copy; Cat Tinder | {new Date().getFullYear()}
      </small>
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebookSquare
            className="fs-4"
            role="button"
            aria-label="facebook"
          />
        </a>
        <a href="https://www.tiktok.com/@fluffandtoast/" target="_blank">
          <FaTiktok className="fs-4" role="button" aria-label="tiktok" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

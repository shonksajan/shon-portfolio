import logo from "../assets/shonlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center flex-shrink-0">
        <img className="w-10 mx-2" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-4 m-1 text-2xl">
        <a
          href="https://www.linkedin.com/in/shon-k-sajan-5b8807249/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shonksajan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/ShonSajan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.instagram.com/mr.achayan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

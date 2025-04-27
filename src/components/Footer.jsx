import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import "../css/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer text-center py-3">
      <div className="footer-icons">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/nicolasferdez/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl fa-facebook"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl fa-github"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

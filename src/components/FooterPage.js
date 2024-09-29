import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon, faInstagram, faXTwitter, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterPage = () => {
  return (
    <footer className="footer bg-dark fixed-bottom">
      <div className="container d-flex flex-column align-items-center">
        <div className="navbar-nav d-flex flex-row justify-content-center p-1" >
          <a href="https://www.amazon.com/" className="nav-item mx-3">
            <FontAwesomeIcon icon={faAmazon} />
          </a>
          <a href="https://www.instagram.com/" className="nav-item mx-3">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/" className="nav-item mx-3">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.facebook.com/" className="nav-item mx-3">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/" className="nav-item mx-3">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <span className="navbar-text text-light py-2 my-0">
          © 2024 Copyright Alright Recived
        </span>
      </div>
    </footer>
  );
};

export default FooterPage;

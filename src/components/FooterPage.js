import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon, faInstagram, faXTwitter, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterPage = () => {
  return (
    <footer className="navbar navbar-dark bg-dark navbar-expand-lg overflow-hidden">
      <div className="container d-flex flex-column align-items-center overflow-hidden">
        <span className="navbar-brand mb-3">Follow us here:</span>
        <ul className="navbar-nav d-flex flex-row justify-content-center"  style={{color: "#fff"}}>
          <li className="nav-item mx-3">
            <FontAwesomeIcon icon={faAmazon} />
          </li>
          <li className="nav-item mx-3">
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li className="nav-item mx-3">
            <FontAwesomeIcon icon={faXTwitter} />
          </li>
          <li className="nav-item mx-3">
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li className="nav-item mx-3">
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
        </ul>
        <span className="navbar-text text-light mt-3">
          © 2024 Copyright Alright Recived
        </span>
      </div>
    </footer>
  );
};

export default FooterPage;

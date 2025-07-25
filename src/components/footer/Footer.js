import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import LittleLemonLogo from "../../assets/LittleLemonLogo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row g-4">
          <h2 className="visually-hidden">Site Footer</h2>

          {/* Logo Section*/}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <img
                src={LittleLemonLogo}
                alt="Little Lemon Logo"
                className="img-fluid mb-3"
                width="200"
                height="auto"
              />
              <p className="text-muted small mb-0 text-center text-md-start">
                Authentic Mediterranean cuisine in Chicago.
              </p>
            </div>
          </div>

          {/* Site Menu */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="h6 text-warning mb-3 fw-bold text-center text-md-start">
              Site Menu
            </h3>
            <ul className="list-unstyled text-center text-md-start">
              <li className="mb-2">
                <a
                  href="#home"
                  className="text-light text-decoration-none hover-link small d-inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#about"
                  className="text-light text-decoration-none hover-link small d-inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#about');
                    if (element) {
                      const headerHeight = 80;
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                    }
                  }}
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#menu"
                  className="text-light text-decoration-none hover-link small d-inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#menu');
                    if (element) {
                      const headerHeight = 80;
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                    }
                  }}
                >
                  Menu
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="h6 text-warning mb-3 fw-bold text-center text-md-start">
              Contact
            </h3>
            <address className="mb-0 text-center text-md-start">
              <div className="mb-2">
                <span className="text-light small">
                  info@littlelemon.com
                </span>
              </div>
              <div className="mb-2">
                <span className="text-light small">
                  (000) 000-0000
                </span>
              </div>
              <div>
                <span className="text-light small">Chicago, IL</span>
              </div>
            </address>
          </div>

          {/* Social Media */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="h6 text-warning mb-3 fw-bold text-center text-md-start">
              Follow Us
            </h3>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a
                href="https://www.facebook.com"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <FaFacebookSquare size={28} className="hover-icon" />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
              >
                <FaTwitterSquare size={28} className="hover-icon" />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <FaInstagramSquare size={28} className="hover-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <hr className="my-4 border-secondary" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-3 text-muted small">
              &copy; 2025 Little Lemon Restaurant. All rights reserved.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a
                href="/privacy"
                className="text-warning text-decoration-none hover-link small"
              >
                Privacy Policy
              </a>
              <span className="text-muted small">|</span>
              <a
                href="/terms"
                className="text-warning text-decoration-none hover-link small"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

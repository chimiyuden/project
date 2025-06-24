import { Link } from "react-router-dom";
import { Github, Twitter, Instagram, Mail } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer" aria-label="Site footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Seng_ Library</h3>
          <p className="footer-description">
            Your gateway to a world of books. Discover, organize, and share your
            literary adventures.
          </p>
          <div className="footer-links">
            <div className="footer-section">
              <Link to="/about" className="footer-link">
                About Project
              </Link>
            </div>
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-subheading">Quick Links</h4>
          <ul className="footer-list">
            <li>
              <Link to="/team" className="footer-link">
                Development Team
              </Link>
            </li>
            <li>
              <Link to="/catalog" className="footer-link">
                Book Catalog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="footer-section">
          <h4 className="footer-subheading">Connect With Us</h4>
          <div className="footer-contact">
            <a
              href="mailto:support@seng_library.app"
              className="footer-contact-link"
            >
              <Mail size={16} className="contact-icon" />
              support@seng_library.app
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/your-repo/seng_library"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com/grandlibrary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-link"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com/grandlibrary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Seng_Library. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

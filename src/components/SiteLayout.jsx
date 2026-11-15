import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  ExternalLink,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigation, phoneNumber, resumeUrl } from "../data/portfolio.js";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link
          className="brand"
          to="/"
          onClick={closeMenu}
          aria-label="Sudeep Singh, home"
        >
          <span className="brand-mark">SS</span>
          <span className="brand-name">
            Sudeep Singh
            <span>Hospitality professional</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="nav-resume"
            href={resumeUrl}
            download="sudeep-singh.pdf"
          >
            <Download size={15} aria-hidden="true" />
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div className="footer-brand">
          <Link className="brand brand--footer" to="/">
            <span className="brand-mark">SS</span>
            <span className="brand-name">
              Sudeep Singh
              <span>Hospitality professional</span>
            </span>
          </Link>
          <p>Creating memorable moments, one thoughtful service at a time.</p>
        </div>
        <div className="footer-links">
          <h2>Explore</h2>
          {navigation.slice(0, 4).map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-links footer-contact">
          <h2>Get in touch</h2>
          <a href={`tel:${phoneNumber}`}>+91 97603 37193</a>
          <span>Civil Lines, Roorkee</span>
          <span>Uttarakhand, India</span>
        </div>
        <div className="footer-cta">
          <p>Ready to connect?</p>
          <Link to="/contact">
            Start a conversation <ArrowUpRight size={15} />
          </Link>
          <a
            className="footer-resume"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Preview resume <ExternalLink size={14} />
          </a>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>© {new Date().getFullYear()} Sudeep Singh. All rights reserved.</span>
        <Link to="/">
          Back to top <ArrowDown size={13} />
        </Link>
      </div>
    </footer>
  );
}

export default function SiteLayout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}

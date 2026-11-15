import {
  ArrowDownRight,
  ArrowRight,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import { resumeUrl } from "../data/portfolio.js";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "./ContactPage.jsx";
import DocumentsPage from "./DocumentsPage.jsx";
import ExperiencePage from "./ExperiencePage.jsx";
import ExpertisePage from "./ExpertisePage.jsx";

export default function HomePage() {
  return (
    <>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              Hospitality <span>•</span> Food & beverage <span>•</span> Leadership
            </p>
            <h1 id="hero-title">
              Hospitality,
              <br />
              <span>Delivered with</span>
              <br />
              Excellence.
            </h1>
            <p className="hero-name">SUDEEP SINGH</p>
            <p className="hero-role">
              Food & Beverage Manager <span>·</span> Hospitality Professional
            </p>
            <p className="hero-intro">
              Creating exceptional guest experiences through dedicated service,
              operational excellence and a genuine passion for hospitality.
            </p>
          </div>

          <div className="hero-portrait-wrap">
            <div className="portrait-frame">
              <img
                className="hero-portrait"
                src="/assets/sudeep-singh-profile.jpeg"
                alt="Sudeep Singh, hospitality professional"
                fetchPriority="high"
              />
            </div>
            <div className="portrait-caption">
              <span>Hospitality Professional</span>
              <strong>Food & Beverage Management</strong>
              <p>Creating memorable guest experiences.</p>
            </div>
          </div>

          <div className="hero-details">
            <div className="hero-actions">
              <Link className="button button--gold" to="/experience">
                Explore Experience <ArrowDownRight size={17} />
              </Link>
              <a
                className="button button--outline"
                href={resumeUrl}
                download="sudeep-singh.pdf"
              >
                <Download size={16} /> Download My CV
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>Experience</dt>
                <dd>
                  10+ <span>Years of hospitality</span>
                </dd>
              </div>
              <div>
                <dt>Career</dt>
                <dd>
                  6 <span>Organizations</span>
                </dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>Hindi & English</dd>
              </div>
            </dl>
            <Link className="hero-contact-link" to="/contact">
              Open to hospitality opportunities
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <AboutPage />
      <ExperiencePage />
      <ExpertisePage />
      <DocumentsPage />
      <ContactPage />
    </>
  );
}

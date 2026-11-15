import {
  ArrowUpRight,
  MapPin,
  Phone,
} from "lucide-react";
import { phoneNumber } from "../data/portfolio.js";
import { FadeIn } from "../components/Section.jsx";

export default function ContactPage() {
  return (
    <>
      <section className="contact-section section-pad" id="contact">
        <div className="contact-orbit contact-orbit--one" aria-hidden="true" />
        <div className="contact-orbit contact-orbit--two" aria-hidden="true" />
        <div className="page-shell contact-layout">
          <FadeIn className="contact-copy">
            <p className="eyebrow">Let's connect</p>
            <h2>
              Good hospitality
              <br />
              starts with <em>a conversation.</em>
            </h2>
            <p>
              For opportunities, professional enquiries, or a conversation
              about hospitality, I’d be glad to hear from you.
            </p>
            <a className="contact-phone" href={`tel:${phoneNumber}`}>
              <span className="contact-icon">
                <Phone size={18} />
              </span>
              <span>
                <small>Call me</small>
                +91 97603 37193
              </span>
              <ArrowUpRight size={16} />
            </a>
            <div className="contact-location">
              <MapPin size={17} />
              <span>
                <small>Based in</small>
                Civil Lines, Roorkee, Uttarakhand, India
              </span>
            </div>
          </FadeIn>

          <FadeIn className="contact-card" delay={0.13}>
            <span className="contact-card-kicker">A direct conversation</span>
            <span className="contact-card-icon">
              <Phone size={23} strokeWidth={1.5} />
            </span>
            <h3>Let’s talk hospitality.</h3>
            <p>
              For a professional opportunity or enquiry, reach out by phone. I
              look forward to hearing from you.
            </p>
            <a
              className="button button--gold contact-card-button"
              href={`tel:${phoneNumber}`}
            >
              Call Sudeep <ArrowUpRight size={16} />
            </a>
            <p className="contact-card-note">
              Phone contact is listed in the supplied resume. No email address
              was provided.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

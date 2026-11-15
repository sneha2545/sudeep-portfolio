import { MapPin } from "lucide-react";
import { experience } from "../data/portfolio.js";
import { FadeIn, SectionHeading } from "../components/Section.jsx";

export default function ExperiencePage() {
  return (
    <section className="experience-section section-pad" id="experience">
      <div className="page-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="The journey so far"
            title="A career in service."
            description="From the energy of the bar to the responsibility of leading F&B operations—each chapter has shaped how I serve."
          />
        </FadeIn>

        <div className="timeline">
          {experience.map((role, index) => {
            const Icon = role.icon;
            return (
              <FadeIn
                className={`timeline-item${role.current ? " timeline-item--current" : ""}`}
                key={role.company}
                delay={index * 0.04}
              >
                <div className="timeline-marker" aria-hidden="true">
                  <Icon size={17} strokeWidth={1.6} />
                </div>
                <article className="experience-card">
                  <div className="experience-topline">
                    <span className="experience-period">{role.dates}</span>
                    {role.current && (
                      <span className="current-badge">
                        <span /> Current role
                      </span>
                    )}
                  </div>
                  <div className="experience-card-main">
                    <div>
                      <h3>{role.company}</h3>
                      <p className="experience-title">{role.title}</p>
                    </div>
                    <span className="experience-location">
                      <MapPin size={14} aria-hidden="true" />
                      {role.location}
                    </span>
                  </div>
                  <p className="experience-detail">{role.detail}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
        <p className="timeline-note">
          Dates and roles follow the supplied resume. Descriptions provide
          context without adding unverified achievements.
        </p>
      </div>
    </section>
  );
}

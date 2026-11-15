import {
  ArrowUpRight,
  Award,
} from "lucide-react";
import { expertise, strengths } from "../data/portfolio.js";
import { FadeIn, SectionHeading } from "../components/Section.jsx";

export default function ExpertisePage() {
  return (
    <section className="expertise-section section-pad" id="expertise">
      <div className="page-shell">
        <div className="expertise-header">
          <FadeIn>
            <SectionHeading
              eyebrow="What I bring to the table"
              title="The art of good service."
              description="A practical mix of floor experience, operational awareness, and a lasting respect for the guest."
              light
            />
          </FadeIn>
          <FadeIn className="expertise-side-note" delay={0.12}>
            <Award size={22} strokeWidth={1.4} />
            <p>
              Built through hands-on experience across restaurants, bars, fine
              dining, and hotel service.
            </p>
          </FadeIn>
        </div>
        <div className="expertise-grid">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn
                className="expertise-card"
                key={item.label}
                delay={index * 0.025}
              >
                <span className="expertise-icon">
                  <Icon size={19} strokeWidth={1.5} />
                </span>
                <span>{item.label}</span>
                <ArrowUpRight className="expertise-arrow" size={15} />
              </FadeIn>
            );
          })}
        </div>
        <div className="expertise-footnote">
          <span className="footnote-mark">*</span>
          <p>
            These are professional skill categories that describe my work
            history; they are not a list of separate certifications.
          </p>
        </div>
        <div className="strengths-row">
          <span className="strengths-heading">Personal strengths</span>
          <div className="strengths-list">
            {strengths.map((strength) => (
              <span key={strength}>{strength}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

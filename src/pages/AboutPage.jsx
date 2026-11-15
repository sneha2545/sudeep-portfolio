import {
  ClipboardCheck,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { FadeIn } from "../components/Section.jsx";

export default function AboutPage() {
  return (
    <>
      <section className="intro-section section-pad" id="about">
        <div className="page-shell intro-grid">
          <FadeIn className="intro-aside">
            <p className="eyebrow">A little about me</p>
            <span className="intro-aside-number">01</span>
            <p className="intro-aside-note">
              A people-first approach, shaped on the floor and refined with
              every service.
            </p>
          </FadeIn>
          <FadeIn className="intro-main" delay={0.1}>
            <h2>
              Every great meal is remembered for <em>how it made you feel.</em>
            </h2>
            <p>
              I’m Sudeep Singh, a hospitality professional with a journey
              spanning fine dining, bar service, hotel operations, and
              restaurant management. From my first role behind the bar to
              leading food and beverage operations, I’ve grown by listening
              closely, supporting the team, and caring about the details that
              make guests feel at home.
            </p>
            <p>
              Today, I bring that experience to my work as an F&B Manager in
              Roorkee—coordinating service, supporting high standards, and
              building an environment where thoughtful hospitality comes
              naturally.
            </p>
            <div className="career-objective">
              <span>Professional objective</span>
              <p>
                To pursue a challenging career in a dynamic organization, apply
                existing knowledge and creativity, develop new skills, and
                contribute to organizational success.
              </p>
            </div>
            <div className="intro-facts">
              <div>
                <span className="fact-number">10+</span>
                <span className="fact-label">Years in hospitality</span>
              </div>
              <div>
                <span className="fact-number">06</span>
                <span className="fact-label">Career chapters</span>
              </div>
              <div>
                <span className="fact-number">02</span>
                <span className="fact-label">Languages spoken</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="education-section section-pad" id="education">
        <div className="page-shell education-layout">
          <FadeIn className="education-intro">
            <p className="eyebrow">Learning & growth</p>
            <h2>
              Grounded in the basics. <em>Growing every day.</em>
            </h2>
            <p>
              Hospitality has taught me that learning never stops: each shift,
              each guest, and each team brings a new perspective.
            </p>
            <div className="language-chip">
              <MessageCircle size={16} />
              Hindi <span /> English
            </div>
          </FadeIn>
          <div className="education-cards">
            <FadeIn className="education-card">
              <span className="education-icon">
                <GraduationCap size={21} />
              </span>
              <span className="education-label">Academic qualification</span>
              <h3>12th Passed</h3>
              <p>Uttarakhand Board</p>
            </FadeIn>
            <FadeIn className="education-card" delay={0.08}>
              <span className="education-icon">
                <GraduationCap size={21} />
              </span>
              <span className="education-label">Academic qualification</span>
              <h3>10th Passed</h3>
              <p>Uttarakhand Board</p>
            </FadeIn>
            <FadeIn
              className="education-card education-card--computer"
              delay={0.16}
            >
              <span className="education-icon">
                <ClipboardCheck size={21} />
              </span>
              <span className="education-label">Additional knowledge</span>
              <h3>Basic computer knowledge</h3>
              <p>As listed in the supplied resume</p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

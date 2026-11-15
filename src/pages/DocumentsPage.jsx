import { useState } from "react";
import {
  ArrowDownRight,
  Download,
  ExternalLink,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { documents, resumeUrl } from "../data/portfolio.js";
import { FadeIn, SectionHeading } from "../components/Section.jsx";

export default function DocumentsPage() {
  const [activeDocument, setActiveDocument] = useState(null);

  return (
    <>
      <section className="documents-section section-pad" id="documents">
        <div className="page-shell">
          <div className="documents-heading">
            <FadeIn>
              <SectionHeading
                eyebrow="Proof of the journey"
                title="Career documents."
                description="A selection of original supporting documents, shared here as a record of past service."
              />
            </FadeIn>
            <FadeIn className="resume-shortcut" delay={0.1}>
              <span className="resume-shortcut-icon">
                <Download size={18} />
              </span>
              <div>
                <strong>Want the full story?</strong>
                <span>Download the original resume PDF.</span>
              </div>
              <a
                href={resumeUrl}
                download="sudeep-singh.pdf"
                aria-label="Download Sudeep Singh's resume"
              >
                <ArrowDownRight size={19} />
              </a>
            </FadeIn>
          </div>
          <div className="documents-grid">
            {documents.map((document, index) => (
              <FadeIn
                className="document-card"
                key={document.title}
                delay={index * 0.06}
              >
                <button
                  className="document-preview"
                  type="button"
                  onClick={() => setActiveDocument(document)}
                  aria-label={`Preview ${document.title} ${document.category}`}
                >
                  <img src={document.image} alt={document.alt} loading="lazy" />
                </button>
                <div className="document-meta">
                  <div>
                    <span className="document-category">{document.category}</span>
                    <h3>{document.title}</h3>
                    <p>{document.description}</p>
                    {document.note && <small>{document.note}</small>}
                  </div>
                  <button
                    type="button"
                    className="document-open"
                    onClick={() => setActiveDocument(document)}
                    aria-label={`Open ${document.title} document`}
                  >
                    <ExternalLink size={16} />
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="documents-disclaimer">
            Supporting document previews are shared for professional reference.
            The venue document is not presented as employment evidence.
          </p>
        </div>
      </section>

      <AnimatePresence>
        {activeDocument && (
          <motion.div
            className="document-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="document-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveDocument(null);
            }}
          >
            <motion.div
              className="document-modal-card"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="document-modal-header">
                <div>
                  <span>{activeDocument.category}</span>
                  <h2 id="document-modal-title">{activeDocument.title}</h2>
                </div>
                <button
                  type="button"
                  className="modal-close"
                  aria-label="Close document preview"
                  onClick={() => setActiveDocument(null)}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="document-modal-viewer">
                <img src={activeDocument.image} alt={activeDocument.alt} />
              </div>
              <div className="document-modal-footer">
                <span>{activeDocument.description}</span>
                {activeDocument.note && <small>{activeDocument.note}</small>}
                <a
                  href={activeDocument.image}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open full-size image <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

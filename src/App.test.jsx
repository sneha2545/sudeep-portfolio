// Runtime validation coverage for: portfolio routes and shared navigation.
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App.jsx";

function renderRoute(path) {
  return renderToStaticMarkup(
    createElement(
      MemoryRouter,
      { initialEntries: [path] },
      createElement(App),
    ),
  );
}

describe("portfolio routes", () => {
  it("renders each dedicated page with the shared navigation and footer", () => {
    const routes = [
      ["/", "hero-title", "SUDEEP SINGH"],
      ["/about", "about", "A little about me"],
      ["/experience", "experience", "A career in service."],
      ["/expertise", "expertise", "The art of good service."],
      ["/documents", "documents", "Career documents."],
      ["/contact", "contact", "Good hospitality"],
    ];

    for (const [path, activeRoute, pageContent] of routes) {
      const markup = renderRoute(path);

      expect(markup).toContain(`id="${activeRoute}"`);
      expect(markup).toContain(pageContent);
      expect(markup).toContain('class="site-header"');
      expect(markup).toContain('class="site-footer"');
      expect(markup).toContain('href="/assets/sudeep-singh.pdf"');
      if (path !== "/") {
        expect(markup).toContain(
          `aria-current="page" class="is-active" href="${path}"`,
        );
      }
    }
  });

  it("renders the six experience entries and all four document previews", () => {
    const experienceMarkup = renderRoute("/experience");
    const documentsMarkup = renderRoute("/documents");
    const homeMarkup = renderRoute("/");

    expect(experienceMarkup.match(/class="experience-card"/g)).toHaveLength(6);
    expect(documentsMarkup.match(/class="document-preview"/g)).toHaveLength(4);
    expect(documentsMarkup).toContain('aria-label="Open Gourmet Gallery document"');
    expect(homeMarkup).toContain('class="hero" id="home"');
    for (const section of [
      "about",
      "education",
      "experience",
      "expertise",
      "documents",
      "contact",
    ]) {
      expect(homeMarkup).toContain(`id="${section}"`);
    }
    expect(homeMarkup.match(/class="experience-card"/g)).toHaveLength(6);
    expect(homeMarkup.match(/class="document-preview"/g)).toHaveLength(4);
  });
});

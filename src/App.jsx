import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import DocumentsPage from "./pages/DocumentsPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import ExpertisePage from "./pages/ExpertisePage.jsx";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}

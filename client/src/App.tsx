import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

// Pages
import HomePage from "./components/pages/HomePage";
import FAQPage from "./components/pages/FAQPage";
import CasesPage from "./components/pages/CasesPage";
import PrivacyPage from "./components/pages/PrivacyPage";
import TermsPage from "./components/pages/TermsPage";
import SuccessPage from "./components/pages/SuccessPage";
import ContactPage from "./components/pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

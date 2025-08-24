import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

// Homepage + section detail pages
import HomePage from "./components/pages/HomePage";
import WhatWeDoPage from "./components/pages/WhatWeDoPage";
import HowItWorksPage from "./components/pages/HowItWorksPage";
import WhoWeServePage from "./components/pages/WhoWeServePage";
import WhyChooseUsPage from "./components/pages/WhyChooseUsPage";

// Other standalone pages
import CasesPage from "./components/pages/CasesPage";
import FAQPage from "./components/pages/FAQPage";
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
            {/* Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* Section detail pages */}
            <Route path="/what-we-do" element={<WhatWeDoPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/who-we-serve" element={<WhoWeServePage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />

            {/* Other pages */}
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/faq" element={<FAQPage />} />
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

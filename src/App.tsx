import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { MethodPage } from '@/pages/MethodPage';
import { AboutPage } from '@/pages/AboutPage';
import { DiagnosticPage } from '@/pages/DiagnosticPage';
import { ConfirmationPage } from '@/pages/ConfirmationPage';
import { LegalNoticesPage } from '@/pages/LegalNoticesPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { UpcomingPage } from '@/pages/UpcomingPage';
import { CareersPage } from '@/pages/CareersPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { CaseStudiesPage } from '@/pages/CaseStudiesPage';
import { CaseStudyDetailPage } from '@/pages/CaseStudyDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/methode" element={<MethodPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/diagnostic" element={<DiagnosticPage />} />
          <Route path="/diagnostic/confirmation" element={<ConfirmationPage />} />
          <Route path="/produits" element={<ProductsPage />} />
          <Route path="/produits/:slug" element={<ProductDetailPage />} />
          <Route path="/etudes-de-cas" element={<CaseStudiesPage />} />
          <Route path="/etudes-de-cas/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/carrieres" element={<CareersPage />} />
          <Route path="/apprendre-ia" element={<UpcomingPage />} />
          <Route path="/mentions-legales" element={<LegalNoticesPage />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

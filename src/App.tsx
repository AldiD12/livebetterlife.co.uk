import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessTimeline from './components/ProcessTimeline';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import UnderConstruction from './pages/UnderConstruction';
import BlogPage from './pages/Blog';
import Privacy from './pages/Privacy';
import KitchenRenovationLondon from './pages/services/KitchenRenovationLondon';
import BathroomRenovationLondon from './pages/services/BathroomRenovationLondon';
import HomeExtensionLondon from './pages/services/HomeExtensionLondon';
import LoftConversionLondon from './pages/services/LoftConversionLondon';
import StructuralAlterationsLondon from './pages/services/StructuralAlterationsLondon';
import KitchenExtensionLondon from './pages/services/KitchenExtensionLondon';
import BuildingRenovationsLondon from './pages/services/BuildingRenovationsLondon';
import LoadBearingWallRemovalLondon from './pages/services/LoadBearingWallRemovalLondon';
import BasementConversionLondon from './pages/services/BasementConversionLondon';
import GarageConversionLondon from './pages/services/GarageConversionLondon';
import KitchenCabinetReplacementLondon from './pages/services/KitchenCabinetReplacementLondon';
import QuartzWorktopInstallationLondon from './pages/services/QuartzWorktopInstallationLondon';
import WetRoomConversionLondon from './pages/services/WetRoomConversionLondon';
import UnderfloorHeatingInstallationLondon from './pages/services/UnderfloorHeatingInstallationLondon';
import InternalWallRemovalLondon from './pages/services/InternalWallRemovalLondon';
import SteelBeamInstallationLondon from './pages/services/SteelBeamInstallationLondon';
import SingleStoreyRearExtensionLondon from './pages/services/SingleStoreyRearExtensionLondon';
import KitchenIslandInstallationLondon from './pages/services/KitchenIslandInstallationLondon';
import KitchenPlumbingRelocationLondon from './pages/services/KitchenPlumbingRelocationLondon';
import EnSuiteBathroomCreationLondon from './pages/services/EnSuiteBathroomCreationLondon';
import WalkInShowerInstallationLondon from './pages/services/WalkInShowerInstallationLondon';
import BathroomSuiteReplacementLondon from './pages/services/BathroomSuiteReplacementLondon';
import VictorianHouseRestorationLondon from './pages/services/VictorianHouseRestorationLondon';
import PeriodPropertyRenovationLondon from './pages/services/PeriodPropertyRenovationLondon';
import ListedBuildingRestorationLondon from './pages/services/ListedBuildingRestorationLondon';
import SashWindowRestorationLondon from './pages/services/SashWindowRestorationLondon';
import HeritageBuildingRenovationLondon from './pages/services/HeritageBuildingRenovationLondon';
import TraditionalBuildingRepairLondon from './pages/services/TraditionalBuildingRepairLondon';
import FAQSection from './components/FAQSection';
import BlogPreview from './components/BlogPreview';
import ChatWidget from './components/ChatWidget';
// import ExitIntentPopup from './components/ExitIntentPopup';
import WhyRenovateNotMove from './components/WhyRenovateNotMove';
import PlanningExpertise from './components/PlanningExpertise';
import Stats from './components/Stats';
import WestHampsteadNW6 from './pages/locations/WestHampsteadNW6';
import HarrowHA3 from './pages/locations/HarrowHA3';
import KensingtonMayfairPrime from './pages/locations/KensingtonMayfairPrime';
import FullHouseRenovationVictorianEdwardian from './pages/services/FullHouseRenovationVictorianEdwardian';
import StructuralAlterationsWallRemoval from './pages/services/StructuralAlterationsWallRemoval';
import KitchenExtensionsSideReturns from './pages/services/KitchenExtensionsSideReturns';
import LoftConversionsDormerMansard from './pages/services/LoftConversionsDormerMansard';
import BespokeKitchenInstallation from './pages/services/BespokeKitchenInstallation';
import PeriodPropertyRestoration from './pages/services/PeriodPropertyRestoration';

// Generate RSS feed on app start

// Other Pages

const App = () => {
  console.log('App component rendering');
  const siteUrl = 'https://livebetterlife.co.uk';
  const pageTitle = 'Construction Company London | Live Better Life | Expert Building Services';
  const pageDescription = 'Leading construction company in London providing expert building services, renovations, extensions, and restoration. Serving all London boroughs with 15+ years experience.';

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <SEO
          title={pageTitle}
          description={pageDescription}
          canonicalUrl={siteUrl}
          isHome={true}
          ogImage={`${siteUrl}/images/projects/project1/after/af1.jpg`}
        />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <main className="w-full">
                <Hero />
                <WhyRenovateNotMove />
                <PlanningExpertise />
                <Services />
                <WhyChooseUs />
                <Stats />
                <Portfolio />
                <FAQSection />
                <Contact />
              </main>
            } />
            <Route path="/services" element={<ServicesPage />} />
            {/* Construction Company Services */}
            <Route path="/services/house-extensions-london" element={<HomeExtensionLondon />} />
            <Route path="/services/structural-alterations-london" element={<StructuralAlterationsLondon />} />
            <Route path="/services/whole-property-renovations-london" element={<BuildingRenovationsLondon />} />
            <Route path="/services/load-bearing-wall-removal-london" element={<LoadBearingWallRemovalLondon />} />
            <Route path="/services/basement-conversion-london" element={<BasementConversionLondon />} />
            <Route path="/services/garage-conversion-london" element={<GarageConversionLondon />} />

            {/* Home Builder Services */}
            <Route path="/services/double-storey-extension-london" element={<HomeExtensionLondon />} />
            <Route path="/services/loft-conversion-london" element={<LoftConversionLondon />} />
            <Route path="/services/full-house-renovation-london" element={<BuildingRenovationsLondon />} />
            <Route path="/services/internal-wall-removal-london" element={<InternalWallRemovalLondon />} />
            <Route path="/services/steel-beam-installation-london" element={<SteelBeamInstallationLondon />} />
            <Route path="/services/single-storey-rear-extension-london" element={<SingleStoreyRearExtensionLondon />} />

            {/* Kitchen Renovator Services */}
            <Route path="/services/complete-kitchen-renovation-london" element={<KitchenRenovationLondon />} />
            <Route path="/services/kitchen-extension-london" element={<KitchenExtensionLondon />} />
            <Route path="/services/kitchen-island-installation-london" element={<KitchenIslandInstallationLondon />} />
            <Route path="/services/complete-kitchen-refit-extension-london" element={<KitchenExtensionLondon />} />
            <Route path="/services/premium-kitchen-surface-installation-london" element={<QuartzWorktopInstallationLondon />} />
            <Route path="/services/kitchen-layout-restructuring-london" element={<KitchenPlumbingRelocationLondon />} />

            {/* Bathroom Renovator Services */}
            <Route path="/services/complete-bathroom-renovation-london" element={<BathroomRenovationLondon />} />
            <Route path="/services/wet-room-conversion-london" element={<WetRoomConversionLondon />} />
            <Route path="/services/ensuite-bathroom-creation-london" element={<EnSuiteBathroomCreationLondon />} />
            <Route path="/services/designer-wet-room-creation-london" element={<WetRoomConversionLondon />} />
            <Route path="/services/luxury-bathroom-renovation-london" element={<BathroomSuiteReplacementLondon />} />
            <Route path="/services/underfloor-heating-installation-london" element={<UnderfloorHeatingInstallationLondon />} />

            {/* New GBP-Aligned Service Pages */}
            <Route path="/services/full-house-renovation-victorian-edwardian" element={<FullHouseRenovationVictorianEdwardian />} />
            <Route path="/services/structural-alterations-wall-removal" element={<StructuralAlterationsWallRemoval />} />
            <Route path="/services/kitchen-extensions-side-returns" element={<KitchenExtensionsSideReturns />} />
            <Route path="/services/loft-conversions-dormer-mansard" element={<LoftConversionsDormerMansard />} />
            <Route path="/services/bespoke-kitchen-installation" element={<BespokeKitchenInstallation />} />
            <Route path="/services/period-property-restoration" element={<PeriodPropertyRestoration />} />

            {/* Building Restoration Services */}
            <Route path="/services/victorian-house-restoration-london" element={<VictorianHouseRestorationLondon />} />
            <Route path="/services/period-property-renovation-london" element={<PeriodPropertyRenovationLondon />} />
            <Route path="/services/listed-building-restoration-london" element={<ListedBuildingRestorationLondon />} />
            <Route path="/services/sash-window-restoration-london" element={<SashWindowRestorationLondon />} />
            <Route path="/services/heritage-building-renovation-london" element={<HeritageBuildingRenovationLondon />} />
            <Route path="/services/traditional-building-repair-london" element={<TraditionalBuildingRepairLondon />} />

            {/* Location Pages */}
            <Route path="/locations/west-hampstead-nw6" element={<WestHampsteadNW6 />} />
            <Route path="/locations/harrow-ha3" element={<HarrowHA3 />} />
            <Route path="/locations/kensington-mayfair-prime" element={<KensingtonMayfairPrime />} />

            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            <Route path="/estimate" element={<UnderConstruction />} />
            <Route path="/blog/*" element={<BlogPage />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
        {/* <ExitIntentPopup /> */}
      </div>
    </Router>
  );
};

export default App;
import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/Navbar'; // Importing Navbar component
// import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner'; // Importing Hero Banner component
// import InfoSection from './components/InfoSection'; // Importing Info Section component
// import VideosSection from './components/VideosSection'; // Importing Videos Section component
// import NewsSection from './components/NewsSection'; // Importing News Section component
// import EventsSection from './components/EventsSection'; // Importing Events Section component

function App() {
  return (
    <Router>
      {/* Outer container to structure the page layout with flexbox */}
      <div className="flex flex-col min-h-screen overflow-y-auto">
        {/* Navbar component for navigation links */}
        {/* <Navbar /> */}
        {/* Hero Banner added before the main content */}
        {/* <HeroBanner backgroundImage="/path-to-hero-image.jpg" /> */}
        <HeroBanner backgroundImage="/src/images/hisandher-banner.gif" />

        {/* Main content sections stacked vertically */}
        {/* <main className="flex flex-col space-y-12 p-4">
          <InfoSection />
          <VideosSection />
          <NewsSection />
          <EventsSection />
        </main>
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

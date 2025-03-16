import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import VideosSection from './components/VideosSection';
import NewsSection from './components/NewsSection';
// import InfoSection from './components/InfoSection';
// import EventsSection from './components/EventsSection';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-y-auto">
        {/* <Navbar /> */}
        <HeroBanner backgroundImage="/src/images/hisandher-banner.gif" />

        <main className="flex flex-col space-y-12 p-4">
          {/* <InfoSection /> */}
          <VideosSection />
          <NewsSection />
          {/* <EventsSection />  */}
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

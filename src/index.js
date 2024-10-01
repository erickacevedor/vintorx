import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Import required styles
import './styles/main.scss';


// Import components and hooks
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import useSmoothScroll from './hooks/useSmothScroll/useSmothScroll';
import SEO from './components/SEO/SEO';

// Initialize Google Analytics
ReactGA.initialize("G-3FS702E55Y");

function App() {
  useSmoothScroll();
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <Layout>
      <SEO
        title="Top-tier websites for brands and entrepreneurs – VPixel CO"
        description="We design and build marketing websites to help grow and strengthen brands, entrepreneurs, and businesses worldwide."
        ogImage="https://vpixel.co/assets/OG-v2-Final-EN.jpg"
        favicon="https://vpixel.co/assets/favicon-32x32.png"
        appleFavicon="https://vpixel.co/assets/apple-touch-icon.png"
      />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import { useState, useEffect } from 'react';
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

const COOKIE_NAME = 'cookie-consent';

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [isScrollLocked, setIsScrollLocked] = useState(true);

  useEffect(() => {
    const hasConsent = localStorage.getItem(COOKIE_NAME);
    if (hasConsent) {
      setShowPopup(false);
      setIsScrollLocked(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_NAME, 'true');
    setShowPopup(false);
    setIsScrollLocked(false);
  };

  const handleScroll = () => {
    if (isScrollLocked) {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollLocked]);

  return (
    <>
      <SeoHead title='Mywebclass' />
      <Layout>
        <div className={`fixed inset-0 z-40 ${showPopup ? 'flex' : 'hidden'}`} style={{ backgroundColor: 'rgba(255,255,255,1)' }}>
          <div className="mx-auto my-auto max-w-lg w-full p-4 bg-black rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Cookie consent</h2>
            <p className="mb-4">
              This website uses cookies to enhance the user experience. By continuing to use this site, you consent to the use of cookies in accordance with our <a href="/privacy-policy">Privacy Policy</a>.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleAccept}>Accept</button>
          </div>
        </div>
        <div className={`${isScrollLocked ? 'overflow-hidden h-screen' : 'overflow-y-scroll'}`}>
          <Hero />
          <Feature />
          <Pricing />
        </div>
      </Layout>
    </>
  );
}

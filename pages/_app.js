import "../styles/tailwind.css";
import "../styles/slick.css";
import "../styles/blog.css";
import ReactGA from 'react-ga';
import React from 'react';

function initializeReactGA() {
  ReactGA.initialize('G-31NWXKZV5E');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function MyApp({ Component, pageProps }) {
  // Call initializeReactGA() once when the app loads
  React.useEffect(() => {
    initializeReactGA();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

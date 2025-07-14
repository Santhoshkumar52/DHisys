// src/layouts/RouterLayout.jsx
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ThemeContext } from '../Context/ThemeContext';
import ScrollToTopButton from '../components/scrollToTopButn/ScrollToTopButton';

const RouterLayout = () => {
  const location = useLocation();

  const theme = useMemo(() => {
    const path = location.pathname;
    if (path === '/' || path === '/services') return 'themeMaroon';
    return 'themeBlue';
  }, [location.pathname]);

  return (
    <ThemeContext.Provider value={theme}>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton/>
    </ThemeContext.Provider>
  );
};

export default RouterLayout;

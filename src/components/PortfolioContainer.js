// Use this file to render the full portfolio page, bringing together all components

// import React
import React, { useState } from 'react';

// import permanent components
import Header from './Header';
// TODO: do we need navigation here, or does that go inside Header.js?
import Navigation from './Navigation';
import Footer from './Footer';

// import page components
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
// TODO: do we need project here, or does that go inside Portfolio?
import Project from './Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
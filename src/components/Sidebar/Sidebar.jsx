import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar-decor"></div>
      <button className="toggle-btn" aria-label="Toggle sidebar"></button>
      <Navigation />
    </div>
  );
};

export default Sidebar;

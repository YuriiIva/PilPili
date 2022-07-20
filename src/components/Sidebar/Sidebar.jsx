import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './Sidebar.css';

const definestyles = isOpen => {
  const finalestyles = ['Sidebar'];
  if (!isOpen) {
    finalestyles.push('Sidebar-close');
  }
  return finalestyles.join(' ');
};

const Sidebar = () => {
  // const isOpen = false
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    return setIsOpen(prev => !prev);
  };

  return (
    <div className={definestyles(isOpen)}>
      <div className="Sidebar-decor"></div>
      <button
        className="toggle-btn"
        aria-label="Toggle sidebar"
        onClick={toggle}
      ></button>
      <Navigation />
    </div>
  );
};

export default Sidebar;

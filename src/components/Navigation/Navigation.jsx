import { Route, Routes, Link } from 'react-router-dom';

import { FiBookOpen } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import s from './Navigation.module.css';

const Navigation = ({ isOpen }) => {
  return (
    <>
      <div className={s.nav}>
        {/* <div className={s.link}> */}
        <Link to="/" className={s.navLink}>
          <FiBookOpen className={s.icon} /> {isOpen ? 'Menu' : ''}
        </Link>
        <Link to="/contacts" className={s.navLink}>
          <FiPhone className={s.icon} /> {isOpen ? 'Contacts' : ''}
        </Link>
        {/* </div> */}
      </div>
    </>

    // <nav className={s.nav}>
    //   {navConfig.map(({ name, icon }) => (
    //     <div key={name} className={s.link}>
    //       <span className={s.icon}> {icon}</span>
    //       {isOpen && (
    //         <a href="/" className={s.navLink}>
    //           {name}
    //         </a>
    //       )}
    //     </div>
    //   ))}
    // </nav>
  );
};

export default Navigation;

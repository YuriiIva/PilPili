import { navConfig } from '../../data/navigation';
import s from './Navigation.module.css';

const Navigation = ({ isOpen }) => {
  return (
    <nav className={s.nav}>
      {navConfig.map(({ name, icon }) => (
        <div key={name} className={s.link}>
          <span className={s.icon}> {icon}</span>
          {isOpen && (
            <a href="/" className={s.navLink}>
              {name}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;

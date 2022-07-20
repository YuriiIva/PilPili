import { navConfig } from '../../data/navigation';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      {navConfig.map(({ name }) => (
        <a key={name} href="/">
          {name}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;

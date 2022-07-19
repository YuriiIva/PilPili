import { navConfig } from '../../data/navigation';

const Navigation = () => {
  return (
    <nav>
      {navConfig.map(({ name }) => (
        <a key={name} href="/">
          {name}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;

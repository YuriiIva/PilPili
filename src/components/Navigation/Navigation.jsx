import { navConfig } from '../../data/navigation';

const Navigation = () => {
  return (
    <nav>
      {navConfig.map(({ name }) => (
        <a key={name} href="/">
          {name}
        </a>
      ))}
      {/* <a href="/">{navConfig[0].name}</a>
        <a href="/">{navConfig[1].name}</a> */}
    </nav>
  );
};

export default Navigation;

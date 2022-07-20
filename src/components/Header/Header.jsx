import s from './Header.module.css';

const Header = ({ title }) => {
  return (
    <header className={s.header}>
      <a href="https://pilpilikyiv.com/" className={s.link}>
        {/* <img src={require('images/Logo.png')} alt="" width={80} height={50}/> */}
        Pilpili
      </a>
      {/* <h3>{title}</h3> */}
    </header>
  );
};

export default Header;

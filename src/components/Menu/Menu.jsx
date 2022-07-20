import { useState } from 'react';
import FirstMenu from './FirstMenu/FirstMenu';
import s from './Menu.module.css';
import Submenu from './Submenu/Submenu';

const Menu = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [isOpenFirstMenu, setIsOpenFirstMenu] = useState(false);

  const handleChange = e => {
    if (e.target.id === 'первые') {
      setIsOpenFirstMenu(prev => !prev);
    }
    if (e.target.id === 'Основные') {
      setisOpenMenu(prev => !prev);
    }
  };
  return (
    <div>
      <h2>Menu</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <button
            type="buttom"
            onClick={handleChange}
            id="первые"
            className={s.btn}
          >
            {' '}
            Первые блюда
          </button>
        </li>
        {isOpenFirstMenu && <FirstMenu />}
        <li className={s.item}>
          <button
            type="buttom"
            onClick={handleChange}
            id="Основные"
            className={s.btn}
          >
            {' '}
            Основные
          </button>
        </li>
        {isOpenMenu && <Submenu />}

        <li className={s.item}>
          <button
            type="buttom"
            onClick={handleChange}
            id="выпечка"
            className={s.btn}
          >
            {' '}
            Выпечка
          </button>
        </li>
        <li className={s.item}>
          <button
            type="buttom"
            onClick={handleChange}
            id="наборы"
            className={s.btn}
          >
            {' '}
            Подарочные наборы
          </button>
        </li>
        <li className={s.item}>
          <button
            type="buttom"
            onClick={handleChange}
            id="Алкоголь"
            className={s.btn}
          >
            {' '}
            Алкоголь
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

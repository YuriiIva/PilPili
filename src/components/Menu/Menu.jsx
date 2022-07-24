import { useState } from 'react';
import s from './Menu.module.css';
import { hot, hincal, salat } from '../../data/forMenu';
import Submenu from './Submenu/Submenu';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';

const Menu = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [isOpenFirstMenu, setIsOpenFirstMenu] = useState(false);
  const [hinkali, setHinkali] = useState(false);

  const handleChange = e => {
    switch (e.target.id) {
      case 'Закуски':
        setIsOpenFirstMenu(prev => !prev);

        return;
      case 'Гаряче':
        setisOpenMenu(prev => !prev);

        return;
      case 'Хинкали':
        setHinkali(prev => !prev);

        return;
      default:
        break;
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
            id={'Закуски'}
            className={s.btn}
          >
            Закуски
            <span>
              {!isOpenFirstMenu ? <FiChevronRight /> : <FiChevronDown />}
            </span>
          </button>
          {isOpenFirstMenu && <Submenu date={salat} />}
        </li>

        <li className={s.item}>
          <button
            type="buttom"
            onClick={handleChange}
            id={'Гаряче'}
            className={s.btn}
          >
            Гаряче
            <span>{!isOpenMenu ? <FiChevronRight /> : <FiChevronDown />}</span>
          </button>
          {isOpenMenu && <Submenu date={hot} />}
        </li>

        <li className={s.item}>
          <button
            type="buttom"
            onClick={handleChange}
            id={'Хинкали'}
            className={s.btn}
          >
            Хинкали
            <span>{!hinkali ? <FiChevronRight /> : <FiChevronDown />}</span>
          </button>
          {hinkali && <Submenu date={hincal} />}
        </li>
      </ul>
    </div>
  );
};

export default Menu;

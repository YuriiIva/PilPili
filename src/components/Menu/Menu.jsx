import { useState } from 'react';
import s from './Menu.module.css';
import { hot, hincal, salat, hachap, bakery, soda } from '../../data/forMenu';
import Submenu from './Submenu/Submenu';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';

const Menu = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [isOpenFirstMenu, setIsOpenFirstMenu] = useState(false);
  const [hinkali, setHinkali] = useState(false);
  const [hachapuri, setHachapuri] = useState(false);
  const [isOpenBakery, setIsOpenBakery] = useState(false);
  const [isOpenSoda, setIsOpenSoda] = useState(false);

  const handleChange = e => {
    switch (e.target.id) {
      case 'Закуски':
        setIsOpenFirstMenu(prev => !prev);

        return;
      case 'Oсновне':
        setisOpenMenu(prev => !prev);

        return;
      case 'Хинкали':
        setHinkali(prev => !prev);

        return;
      case 'Хачапурі':
        setHachapuri(prev => !prev);

        return;
      case 'Випічка':
        setIsOpenBakery(prev => !prev);

        return;

      case 'лимонад':
        setIsOpenSoda(prev => !prev);

        return;
      default:
        break;
    }
  };
  return (
    <div>
      <h2 className={s.title}>Menu</h2>
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
            id={'Oсновне'}
            className={s.btn}
          >
            Oсновне
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
            Хiнкали
            <span>{!hinkali ? <FiChevronRight /> : <FiChevronDown />}</span>
          </button>
          {hinkali && <Submenu date={hincal} />}
        </li>

        <li className={s.item}>
          <button
            type="buttom"
            onClick={handleChange}
            id={'Хачапурі'}
            className={s.btn}
          >
            Хачапурі
            <span>{!hachapuri ? <FiChevronRight /> : <FiChevronDown />}</span>
          </button>
          {hachapuri && <Submenu date={hachap} />}
        </li>

        <li className={s.item}>
          <button
            type="buttom"
            onClick={handleChange}
            id={'Випічка'}
            className={s.btn}
          >
            Випічка
            <span>
              {!isOpenBakery ? <FiChevronRight /> : <FiChevronDown />}
            </span>
          </button>
          {isOpenBakery && <Submenu date={bakery} />}
        </li>
        <li className={s.item}>
          <button
            type="buttom"
            onClick={handleChange}
            id={'лимонад'}
            className={s.btn}
          >
            Грузинський лимонад
            <span>{!isOpenSoda ? <FiChevronRight /> : <FiChevronDown />}</span>
          </button>
          {isOpenSoda && <Submenu date={soda} />}
        </li>
      </ul>
    </div>
  );
};

export default Menu;

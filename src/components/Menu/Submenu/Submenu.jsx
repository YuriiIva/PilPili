import Modal from 'common/Modal/Modal';
import { useState } from 'react';
import s from './Submenu.module.css';

const Submenu = ({ date }) => {
  const [isOpenMod, setisOpenMod] = useState(false);

  const handelOpen = () => {
    setisOpenMod(true);
  };
  const closeForm = () => {
    setisOpenMod(prev => !prev);
  };
  return (
    <ul className={s.section}>
      {date.map(({ name, price, gramm, one, description }) => (
        <li className={s.link}>
          <div className={s.right_column}>
            <p>{name}</p>
            <button className={s.btn} onClick={handelOpen}>
              Склад
            </button>
            {isOpenMod && (
              <Modal description={description} closeForm={closeForm} />
            )}
          </div>

          <p>
            {price} грн / {gramm || one}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Submenu;

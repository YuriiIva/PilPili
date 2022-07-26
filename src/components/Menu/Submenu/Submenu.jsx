import Modal from 'common/Modal/Modal';
import { useState } from 'react';
import s from './Submenu.module.css';

const Submenu = ({ date }) => {
  const [isOpenMod, setisOpenMod] = useState(false);
  const [descr, setDescr] = useState(null);

  const handelOpen = description => {
    setisOpenMod(true);
    setDescr(description);
  };
  const closeForm = () => {
    setisOpenMod(prev => !prev);
  };
  return (
    <ul className={s.section}>
      {date.map(({ name, price, gramm, one, description }) => (
        <li className={s.link}>
          {/* <div className={s.left_column}>
            <p>{name}</p>
          </div> */}
          <button className={s.btn} onClick={() => handelOpen(description)}>
            {name}
          </button>
          <p className={s.price}>
            <span className={s.priceSpan}>{price} грн</span>/
            <span>{gramm || one} </span>
          </p>
        </li>
      ))}
      {isOpenMod && <Modal description={descr} closeForm={closeForm} />}
    </ul>
  );
};

export default Submenu;

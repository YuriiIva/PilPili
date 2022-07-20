import s from './Submenu.module.css';

const Submenu = () => {
  return (
    <div>
      <ul>
        <li>
          <button className={s.btn}>
            {' '}
            Чашушули <span className={s.price}> 177 грн / 200 г</span>
          </button>
        </li>
        <li>
          <button className={s.btn}>
            {' '}
            Чашушули <span className={s.price}> 177 грн / 200 г</span>
          </button>
        </li>
        <li>
          <button className={s.btn}>
            {' '}
            Чашушули <span className={s.price}> 177 грн / 200 г</span>
          </button>
        </li>
        <li>
          <button className={s.btn}>
            {' '}
            Чашушули <span className={s.price}> 177 грн / 200 г</span>
          </button>
        </li>
        <li>
          <button className={s.btn}>
            {' '}
            Чашушули <span className={s.price}> 177 грн / 200 г</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Submenu;

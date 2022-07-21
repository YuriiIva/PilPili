import s from './Submenu.module.css';

const Submenu = ({ date }) => {
  return (
    <div>
      <ul>
        {date.map(({ name, price, gramm, one }) => (
          <li>
            <button className={s.btn}>
              {name}
              <span className={s.price}>
                {' '}
                {price} грн / {gramm || one}{' '}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;

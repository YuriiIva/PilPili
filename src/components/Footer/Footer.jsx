import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <h2>Our dishes</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={require('images/1.jpg')} alt="" width={80} height={60} />
        </li>
        <li className={s.item}>
          <img
            src={require('images/bakery.jpg')}
            alt=""
            width={80}
            height={60}
          />
        </li>
        <li className={s.item}>
          <img
            src={require('images/hinkali.jpg')}
            alt=""
            width={80}
            height={60}
          />
        </li>
        <li className={s.item}>
          <img src={require('images/sets.jpg')} alt="" width={80} height={60} />
        </li>
        <li className={s.item}>
          <img
            src={require('images/alcohol.jpg')}
            alt=""
            width={80}
            height={60}
          />
        </li>
        <li className={s.item}>
          <img
            src={require('images/alcohol.jpg')}
            alt=""
            width={80}
            height={60}
          />
        </li>
      </ul>
    </div>
  );
};

export default Footer;

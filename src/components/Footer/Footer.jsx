import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <h2 className={s.title}>Our dishes</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={require('images/1.jpg')} alt="" className={s.img} />
        </li>
        <li className={s.item}>
          <img src={require('images/bakery.jpg')} alt="" className={s.img} />
        </li>
        <li className={s.item}>
          <img src={require('images/hinkali.jpg')} alt="" className={s.img} />
        </li>
        <li className={s.item}>
          <img src={require('images/sets.jpg')} alt="" className={s.img} />
        </li>
        <li className={s.item}>
          <img src={require('images/alcohol.jpg')} alt="" className={s.img} />
        </li>
        <li className={s.item}>
          <img src={require('images/Rolls.jpg')} alt="" className={s.img} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;

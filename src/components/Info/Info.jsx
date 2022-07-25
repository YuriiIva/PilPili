import React from 'react';
import s from './Info.module.css';

const Info = () => {
  return (
    <div className={s.info}>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        <li className={s.item}>
          <p className={s.text}>Tel: </p>
          <a href="tel:+380987553300">0(98)-755-33-00</a>
        </li>
        <li className={s.item}>
          <p className={s.text}>Email: </p>
          <a href="/">example@gmail.com</a>
        </li>
        <li className={s.item}>
          <p className={s.text}>Location: </p>
          <a href="https://www.google.com.ua/maps/place/%D0%9E%D1%81%D0%BE%D0%BA%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%B0+2%D0%90/@50.3954188,30.600701,16.32z/data=!4m5!3m4!1s0x40d4c5fb4fea0c67:0x17eaab54abb994c1!8m2!3d50.3974905!4d30.5998192?hl=ru">
            PilPili
          </a>
        </li>
        <li></li>
      </ul>
      <p className={s.secText}>До зустрічи!</p>
    </div>
  );
};

export default Info;

import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import Info from 'components/Info/Info';
import React from 'react';
import s from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={s.main}>
      <Header />
      <Hero />
      <Info />
    </div>
  );
};

export default Contacts;

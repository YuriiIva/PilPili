import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Menu from '../Menu/Menu';
import s from './Main.module.css';

const Main = () => {
  return (
    <main className={s.main}>
      <Header title="Main menu" />
      <Hero />
      <Menu />
      <Footer />
    </main>
  );
};

export default Main;

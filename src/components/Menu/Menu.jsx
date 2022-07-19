import React from 'react';

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.facebook.com">
            <img
              src={require('images/main-menu.jpg')}
              alt="Main menu"
              width={70}
              height={70}
            ></img>
            Main menu
          </a>
        </li>
        <li>
          <a href="../../images/hinkali.jpg">
            <img
              src={require('images/hinkali.jpg')}
              alt="Main menu"
              width={70}
              height={70}
            ></img>
            Hinkali
          </a>
        </li>
        <li>
          <a href="../../images/bakery.jpg">
            <img
              src={require('images/bakery.jpg')}
              alt="Main menu"
              width={70}
              height={70}
            ></img>
            Bakery products
          </a>
        </li>
        <li>
          <a href="../../images/sets.jpg">
            <img
              src={require('images/sets.jpg')}
              alt="Main menu"
              width={70}
              height={70}
            ></img>
            Gift Baskets
          </a>
        </li>
        <li>
          <a href="../../images/alcohol.jpg">
            <img
              src={require('images/alcohol.jpg')}
              alt="Main menu"
              width={70}
              height={70}
            ></img>
            Alcohol
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

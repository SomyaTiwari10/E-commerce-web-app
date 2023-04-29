import React from "react";
import './Footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur minus iusto debitis atque quos doloribus porro dolorum
            ea inventore, autem, reiciendis voluptatem facere, perspiciatis
            excepturi laudantium. Rerum quod et expedita at reiciendis.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            assumenda dolorum distinctio perspiciatis blanditiis iusto iure.
            Nobis sapiente accusamus quam, mollitia ducimus quibusdam porro
            quidem voluptatum aliquid itaque placeat sint dolores voluptate.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">SHOPSWIFT</span>
          <span className="copyright">
            ©️ Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

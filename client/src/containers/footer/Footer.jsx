import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Хотел бы шагнуть в будущее раньше других?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <NavLink to="/dialog">
        <p>Начни диалог</p>
      </NavLink>
      
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 GPT3-chat-react. Все права защищены.</p>
    </div>
  </div>
);

export default Footer;

import React from 'react';
import { NavLink } from 'react-router-dom';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Давай создадим что-то удивительное с GPT-3 OpenAI</h1>
      <p>Нажми начать диалог и спроси GPT о чем угодно.</p>

      <div className="gpt3__header-content__input">
        <NavLink to="/dialog" >
          <button type="button" >Начать диалог</button>
        </NavLink>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="Head" />
    </div>
  </div>
);

export default Header;

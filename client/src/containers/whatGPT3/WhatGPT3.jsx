import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Что такое GPT-3" text="Чат-бот с искусственным интеллектом, разработанный компанией OpenAI и способный работать в диалоговом режиме, поддерживающий запросы на естественных языках. ChatGPT - большая языковая модель, для тренировки которой использовались методы обучения с учителем и обучения с подкреплением." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Возможности находятся за пределами вашего воображения</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Отвечает на любой вопрос" text="Причем не просто копирует ответ из Википедии, а анализирует и структурирует ответ" />
      <Feature title="Придумывает истории" text="Можно попросить его придумать сказку" />
      <Feature title="Обучает кодить и может писать код" text="Он может сам написать простой код, помогает выявить баги, подсказывает, как наладить процесс" />
    </div>
  </div>
);

export default WhatGPT3;

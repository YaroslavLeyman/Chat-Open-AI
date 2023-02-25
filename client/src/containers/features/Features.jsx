import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Возможности применения ChatGPT для разработчиков голосовых ботов',
    text: 'На первый взгляд, наши задачи, мягко говоря, разные. Но это только на первый взгляд. Ведь подключенный к сайту ChatGPT или аналогичный бот поможет в разы сократить ветки сценариев.',
  },
  {
    title: 'Поиск почти как Google',
    text: 'ChatGPT в перспективе может даже заменить Google, потому что у него есть точный ответ практически на каждый запрос. Единственный минус, он не дает ссылок на источники',
  },
  {
    title: 'Составляй электронные письма и метатеги',
    text: 'Если уж рассказы для бота не проблема, то и с составлением текстов для e-mail рассылок и генерацией метатегов у него трудностей нет',
  },
  {
    title: 'Разрабатывай простые приложения',
    text: 'К ChatGPT можно обратиться за помощью в создании приложения — и это действительно работает. Чат-бот выдаст пример кода, который можно использовать для определенного приложения',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Будущее уже сейчас, и вам просто нужно это осознать. Сделайте шаг в будущее сегодня.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

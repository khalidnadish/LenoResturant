import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'وجبات الافطار',
    text: 'فطائر الإفطار المخبوزة بالفرن في الصباح الباكر وغير ذلك',
  },
  {
    title: 'وجبات الغداء',
    text: ' اللحوم الحمرا والبيضا الطازجة منها المدفون والمندي والتندوري وغيرها الكثير',
  },
  {
    title: 'وجبات العشاء',
    text: 'البتزا الايطالية بأصولها حدث ولا حرج',
  },
  {
    title: 'الحلويات',
    text: 'هشاشة الكوكيز واناقة الوافل بالعسل الاصلي او الشوكلاتة البلجيكية',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">يقدم لينو الإفطار والغداء والعشاء طازج يتم تحضيرها يوميًا من قبل أفضل الطهاة ذوي الخبرة الطويلة. 

تحتوي قائمتنا على مجموعة متنوعة من الأطباق المختلفة التي تضمن إرضاء أذواق زبائننا المتنوعة.</h1>
 
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

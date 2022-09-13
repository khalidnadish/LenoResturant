import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
    
      <h1 className="gradient__text">قطعة من السعادة
عندما نتحدث عن معشوقتنا الشوكولاته، كل التفاصيل تهم…</h1>
      <p>كريب محشو ببسكويت الدايجستيف المقرمش المغطى بالشوكولاته البلجيكية الغنية والآيس كريم المفضل لديكم.</p>
      <p>كريب الموز وكريمة الجبن مزينة ببودرة القرفة وكرسبي رايس ومغطى بالشوكولاته البلجيكية الغنية والآيس كريم المفضل لديكم.</p>
      <h4>برتقال 420 |KCAL تفاح 300 |KCAL ليمون نعناع 240 |KCAL</h4>

      <h4> موكا 420 KCAL | بندق 470 KCAL | كراميل 420 KCAL | كوكيز 520 لوتس 520 KCAL | وايت موكا 420 KCAL |</h4>
    </div>
  </div>
);

export default Possibility;

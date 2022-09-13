import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="مطعم وكافي لينو" 
      text="يهدف مطعم لينو إلى نشر المأكولات الكلاسيكية   .
      لينو هو جنة لعشاق المتعة فهو لا يقدم سوى ألذ الأطباق والمأكولات الأصيلة مع الوصفات التقليدية التي تم تمريرها عبر الأجيال.
      مع لينو تأتي ذكريات مليئة بالضيافة الدافئة وكرم الثقافات، ذكريات مشتركة يستمتع بها الجميع.
   " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">الاحتمالات تفوق خيالك</h1>
      <p>منتجات من مصادرها</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="حلوياتنا" text="إذا كنت من محبي الشوكولاتة البلجيكية أو تريد تجرلتها لأول مرة، فنحن  قمنا بجمع أفضل ماركات الشوكولاتة البلجيكية الفاخرة لتجربها!" />
      <Feature title="موالحنا" text="القيمة الغذائية اساس منتجاتنا نستخدم البهارات الخليجية ذات الجود العالية واللحوم الطازجه المذبوحة عن طريقنا لكي نوفر اعلي قيمة غذائية  والذ ظعم" />
      <Feature title="مشروباتنا" text=" نوفر  المشروبات  الساخنة والباردة من مكونات طازجة 100% " />
    </div>
  </div>
);

export default WhatGPT3;

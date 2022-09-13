import React from 'react';
import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import ai from '../../assets/looby.jpg';
import header1 from '../../assets/header1.png';
import './header.css';

const Header = () => (
  <>
   {/* header */}
   
   <div className="header__image">
        <img src={header1} />
   </div>
   
  <div className="gpt3__header section__padding" id="home">

    <div className="gpt3__header-content">
      {/* <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1> */}
      <h1 className="gradient__text">استمتع بالاجواء العائلية بطابع خليجي وذوق مصري انيق</h1>
      <p>يتيميز مطعمم لينو  بالاجواء العائلية الخليجية وهدوء المكان وتميز  الديكوارات التي تعكس هدوء النفس  ويتميز بطاقم من  الشيفات المصريين الجاصلين على شهعادات التمييز</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="البريد الالكتروني" />
        <button type="button">عروض و هدايا</button>
      </div>
      

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p style={{marginRight: '20px'}}> 1,600 عائلة زارتنا واستمتعت بالاناقة ولذة الطعم </p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  </>
);

export default Header;

import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">الكثير يحدث
ونحن ندون ونتصدر حول هذا الموضوع</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="تم افتتاح الفرع الرابع لمنظومة لينو في  جمهورية مصر العربية  مدينة القاهرة" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 01, 2020" text="تم بنجاح عمل الاسطرمبولي  بعد عمل استبان ميداني من خلال الجمهور المباشر  من عينات للتجربة لمواكبة الذوق المصري " />
        <Article imgUrl={blog03} date="Sep 26, 2020" text="بيع الو بيتزاء ايطالية دبل تشير " />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="الحصول علي شهادة اعجاب من اكثر من 500 عميل علي الحجم والطعم" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="تم اعتماد التجيهيز الكامل لها داخل مطابخ لينو ابتداء من العجين  الي  فم العميل" />
      </div>
    </div>
  </div>
);

export default Blog;

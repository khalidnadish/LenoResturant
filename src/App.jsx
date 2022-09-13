import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    <WhatGPT3 />
    <Features />
    <Possibility />
    {/* <CTA /> */}
    <Blog />
    <Footer />
    <Gotop/>
  </div>
);

export default App;


const Gotop=() => {
  const handleClick=() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
  }
return (
<>
<button onClick={()=>handleClick()} className="myscrollBtn">Menu</button>
</>

)
  


}

import React from 'react';
import MobileHeader from './MobileHeader';

import headerImg from '../../assets/header-img.png';
import whatIfImg from '../../assets/what-if.png';

export default function Header() {
  return (
    <header>
      <MobileHeader />
      <div className="title">
        <img src={headerImg} alt="xkcd logo" />
        <p>A webcomic of romance, sarcasm, math, and language.</p>
      </div>
      <div className="title-ad">
        <div className="ad-text">
          <p>
            What If? 2: Additional Serious Scientific Answers to Absurd
            Hypothetical Questions
          </p>
          <p>Comes out 9/13. Preorder now!</p>
        </div>
        <img src={whatIfImg} alt="what if book ad" />
      </div>
    </header>
  );
}

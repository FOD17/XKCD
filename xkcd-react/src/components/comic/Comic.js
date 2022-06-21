import React from 'react';

import comicImg from '../../assets/selection_bias_2x.png';

export default function Comic() {
  return (
    <div className="comic">
      <h2>Selection Bias</h2>
      <img src={comicImg} alt="comic" />
      <div className="comic-nav">
        <button>|&lt;</button>
        <button>&lt; Prev</button>
        <button>Random</button>
        <button>Next &gt;</button>
        <button>|&gt;</button>
      </div>
    </div>
  );
}

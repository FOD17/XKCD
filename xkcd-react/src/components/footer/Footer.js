import React from 'react';

import groupedImgOne from '../../assets/grouped-images.jpeg';
import groupedImgTwo from '../../assets/grouped_images_2.png';

export default function Footer() {
  return (
    <div className="mega-footer">
      <img src={groupedImgOne} alt="XKCD comic images" />
      <img src={groupedImgTwo} alt="More XKCD comic images" />
      <div className="feed">
        <p>RSS Feed</p>
        <p>-</p>
        <p>Atom Feed</p>
        <p>-</p>
        <p>Email</p>
      </div>
      <div className="other-comics">
        <h5>Comics I Enjoy</h5>
        <div className="comics-list">
          <p>Three Word Phrase</p>
          <p>SMBC</p>
          <p>Dinosaur Comics</p>
          <p>Comics</p>
          <p>Oglaf</p>
          <p>A Softer World</p>
          <p>Buttersafe</p>
          <p>Perry Bible Fellowship</p>
          <p>Questionable Content</p>
          <p>Buttercup Festival</p>
          <p>Homestuck</p>
          <p>Junior Scientist Power Hour</p>
        </div>
      </div>
      <div className="other-things">
        <h5>Other Things</h5>
        <p>Tips on technology and government</p>
        <p>Climate FAQ</p>
        <p>Katharine Hayhoe</p>
      </div>
      <div className="best-viewed">
        <p>
          xkcd.com is best viewed with Netscape Navigator 4.0 or below on a
          Pentium 3±1 emulated in Javascript on an Apple IIGS at a screen
          resolution of 1024x1. Please enable your ad blockers, disable
          high-heat drying, and remove your device from Airplane Mode and set it
          to Boat Mode. For security reasons, please leave caps lock on while
          browsing.
        </p>
      </div>
      <div className="license">
        <p>
          This work is licensed under a
          <span>Creative Commons Attribution-NonCommercial 2.5 License</span>.
        </p>
        <p>
          This means you're free to copy and share these comics (but not to sell
          them). <span>More details</span>.
        </p>
      </div>
    </div>
  );
}

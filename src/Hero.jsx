import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Wolf asymmetrical hella woke cardigan hashtag banh mi distillery
            tattooed DSA beard godard jianbing. Praxis whatever tonx kombucha
            pour-over neutral milk hotel hammock before they sold out next level
            post-ironic. Shaman scenester enamel pin vexillologist tumblr
            microdosing. Organic portland gatekeep four loko pork belly, ugh
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' />
        </div>
      </div>
    </section>
  );
};

export default Hero;

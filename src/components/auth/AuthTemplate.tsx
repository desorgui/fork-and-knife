import React from 'react';
import bg1 from '../../images/bg1.jpg';
import bg2 from '../../images/bg2.jpg';
import bg3 from '../../images/bg3.jpg';
import bg4 from '../../images/bg4.jpg'

const background : any= [bg1, bg2, bg3, bg4];

const backgroundItem : any = background[Math.floor(Math.random() * background.length)];

const AuthTemplate = () => {
  return (
    <section className="w-full h-screen" style={{backgroundImage: `url(${backgroundItem})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <h1>
        Authentication Template
      </h1>
    </section>
  )
}

export default AuthTemplate;

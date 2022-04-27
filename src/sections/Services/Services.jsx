import React from 'react';
import "./Services.css"
import serviceIcon1 from "../../assets/images/icons/service-icon-1.png";
import serviceIcon2 from "../../assets/images/icons/service-icon-2.png";
import serviceIcon3 from "../../assets/images/icons/service-icon-3.png";

function About() {
  return (
    <section className='services' id="services">
      <div className='container'>
        <h4>FULL-SERVICE AND INNOVATION AGENCY</h4>
        <h3>We custom build websites to make your brand stand out from the noise</h3>
        <div className='content'>
          <div>
            <img src={serviceIcon1} width="100px" />
            <h4>UI/UX Design</h4>
            <p>Beautiful, memorable, and user-friendly interfaces that are as unique as your brand.</p>
          </div>
          <div>
            <img src={serviceIcon2} width="100px" />
            <h4>Web Development</h4>
            <p>Fully custom web applications for an intuitive and immersive user experience.</p>
          </div>
          <div>
            <img src={serviceIcon3} width="100px" />
            <h4>Mobile Development</h4>
            <p>Mobile-friendly apps built in tandem with your web app and compatible across platforms.</p>
          </div>
        </div>
      </div>
      <div className='clouds-background'></div>
      <div className='divider1' />
    </section>
  );
}

export default About;

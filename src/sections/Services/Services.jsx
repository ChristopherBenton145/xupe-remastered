import React, { memo } from 'react';
import './Services.css';
import Service from '../../components/Service/Service';
import service1 from '../../assets/images/services/service-1.png';
import service2 from '../../assets/images/services/service-2.png';
import service3 from '../../assets/images/services/service-3.png';

function Services() {
  return (
    <section className='services'>
      <div className='container'>
        <h3>FULL-SERVICE AND INNOVATION AGENCY</h3>
        <h2>We custom build websites to make your brand stand out from the noise</h2>
        <div className='content'>
          <Service image={service1} title='UX Design' text='Beautiful, memorable, and user-friendly interfaces that are as unique as your brand.' />
          <Service image={service2} title='Web Devlopment' text='Fully custom web applications for an intuitive and immersive user experience.' />
          <Service image={service3} title='Mobile Development' text='Mobile-friendly apps built in tandem with your web app and compatible across platforms.' />
        </div>
      </div>
    </section>
  );
}

export default memo(Services);

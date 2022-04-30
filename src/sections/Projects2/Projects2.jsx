import React, { memo } from 'react';
import './Projects2.css';
import Divider from '../../components/Divider/Divider';
import challenge from '../../assets/images/challenge.png';

function Projects2() {
  return (
    <section className='projects2'>
      <div className='container'>
        <img src={challenge} alt="challenge" />
        <div className='content'>
          <h3>We like to challenge our skills and experience</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae auctor urna, at sagittis sem.</p>
          <div className='stats'>
            <div>
              <h4>426</h4>
              <p>Projects Dilvered</p>
            </div>
            <div>
              <h4>16</h4>
              <p>Experts Team</p>
            </div>
            <div>
              <h4>123</h4>
              <p>Clients</p>
            </div>
          </div>
        </div>
      </div>
      <Divider type='tilt' position='top: -1px' rotation='180deg' color='#fb8e70' height='200px' />
      <Divider type='tilt' position='bottom: -1px' rotation='0deg' color='#ffeb8f' height='300px' />
    </section>
  );
}

export default memo(Projects2);

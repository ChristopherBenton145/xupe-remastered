import React, { memo } from 'react';
import './Projects.css';
import Stat from '../../components/Stat/Stat';
import Divider from '../../components/Divider/Divider';
import typeWaves from '../../components/Divider/types/typeWaves';
import project1 from '../../assets/images/projects/project1.jpg';
import project2 from '../../assets/images/projects/project2.png';
import project3 from '../../assets/images/projects/project3.jpg';
import challenge from '../../assets/images/challenge.png';

function Projects() {
  return (
    <>
      <section className='projects'>
        <div className='container'>
          <h4>Our Works</h4>
          <h2>Latest Projects</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae auctor urna, at sagittis sem.</h3>
          <div className='content'>
            <img className='project' src={project1} alt='Project' />
            <img className='project' src={project2} alt='Project' />
            <img className='project' src={project3} alt='Project' />
          </div>
        </div>
        <Divider type={typeWaves(1, `transform: scale(-1, 1);`, { height: '350px', color: 'rgba(41, 128, 185, 0.7)', position: 'top' })} />
        <Divider type={typeWaves(1, `transform: scale(-1, 1);`, { height: '250px', color: '#2980B9', position: 'top' })} />
        <Divider type={typeWaves(2, ``, { height: '100px', color: '#fdf3f6', position: 'bottom' })} />
      </section>
      <section className='projects2'>
        <div className='container'>
          <img src={challenge} alt="challenge" />
          <div className='content'>
            <h2>We like to challenge our skills and experience</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae auctor urna, at sagittis sem.</h3>
            <div className='stats'>
              <Stat title='Projects Dilvered' amount='426' />
              <Stat title='Experts Team' amount='16' />
              <Stat title='Clients' amount='123' />
            </div>
          </div>
        </div>
        <Divider type={typeWaves(1, `transform: scale(-1, 1);`, { height: '700px', color: '#fdecf2', position: 'top' })} />
        <Divider type={typeWaves(1, `transform: scale(-1, 1);`, { height: '200px', color: '#fdf3f6', position: 'top' })} />
        <Divider type={typeWaves(2, `transform: scale(-1, 1);`, { height: '200px', color: '#fdedbe', position: 'bottom' })} />
      </section>
    </>
  );
}

export default memo(Projects);

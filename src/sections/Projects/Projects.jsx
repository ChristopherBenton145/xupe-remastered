import React from 'react';
import './Projects.css';
import Divider from '../../components/Divider/Divider';
import project1 from '../../assets/images/projects/project1.jpg';
import project2 from '../../assets/images/projects/project2.png';
import project3 from '../../assets/images/projects/project3.jpg';

function Projects() {
  return (
    <section className='projects' id='projects'>
      <div className='container'>
        <h5>Our Works</h5>
        <h3>Latest Projects</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae auctor urna, at sagittis sem.</h4>
        <div className='content'>
          <img src={project1} />
          <img src={project2} />
          <img src={project3} />
        </div>
      </div>
      <Divider type='waves' position='top: -1px' rotation='180deg' color='#2980B9' height='300px' />
      <Divider type='waves' position='top: 10px' rotation='180deg' color='rgba(41, 128, 185, 0.5)' height='400px' />
      <Divider type='waves' position='bottom: -1px' rotation='0deg' color='#feffd0' height='250px' />
    </section>
  );
}

export default Projects;

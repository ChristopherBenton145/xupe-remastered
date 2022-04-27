import React from 'react';
import "./Projects.css";
import unknown from "../../assets/images/icons/unknown.svg";

function Projects() {
  return (
    <section className='projects' id="projects">
      <div className='container'>
        <h5>Our Works</h5>
        <h3>Latest Projects</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae auctor urna, at sagittis sem.</h4>
        <div className='content'>
          <div>
            <img src={unknown} width="100px" />
            <h4>Project 1</h4>
          </div>
          <div>
            <img src={unknown} width="100px" />
            <h4>Project 2</h4>
          </div>
          <div>
            <img src={unknown} width="100px" />
            <h4>Project 3</h4>
          </div>
        </div>
      </div>
      <div className='divider1' />
    </section>
  );
}

export default Projects;

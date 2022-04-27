import React from 'react';
import "./Teams.css";
import team1 from "../../assets/images/team/team1.jpg";
import team2 from "../../assets/images/team/team2.jpg";
import team3 from "../../assets/images/team/team3.jpg";

function Team() {
  return (
    <section className='team' id='team'>
      <div className='container'>
        <h4>WE'RE A TEAM OF STRATEGIST, DESIGNERS AND TECHNOLOGIES</h4>
        <h3>We'll become an extension of your team</h3>
        <div className='content'>
          <div>
            <img src={team1} width="100%" />
            <h4>David Brown</h4>
          </div>
          <div>
            <img src={team2} width="100%" />
            <h4>Adam Smith</h4>
          </div>
          <div>
            <img src={team3} width="100%" />
            <h4>Emma Jackson</h4>
          </div>
        </div>
      </div>
      <div className='divider1' />
      <div className='divider2' />
    </section>
  );
}

export default Team;

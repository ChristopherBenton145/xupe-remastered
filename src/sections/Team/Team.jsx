import React, { memo } from 'react';
import './Teams.css';
import Member from '../../components/Member/Member';
import Divider from '../../components/Divider/Divider';
import typeDrip from '../../components/Divider/types/typeDrip';
import team1 from '../../assets/images/team/team1.jpg';
import team2 from '../../assets/images/team/team2.jpg';
import team3 from '../../assets/images/team/team3.jpg';

function Team() {
  return (
    <section className='team' id='team'>
      <div className='container'>
        <h3>WE'RE A TEAM OF STRATEGIST, DESIGNERS AND TECHNOLOGIES</h3>
        <h2>We'll become an extension of your team</h2>
        <div className='content'>
          <Member pic={team1} name='David Brown' title='Managing Director' text='Curabitur vitae auctor urna, at sagittis sem.' />
          <Member pic={team2} name='Adam Smith' title='UX/UI Desinger' text='Curabitur vitae auctor urna, at sagittis sem.' />
          <Member pic={team3} name='Emma Jackson' title='Lead UX Designer' text='Curabitur vitae auctor urna, at sagittis sem.' />
        </div>
      </div>
      <Divider type={typeDrip(``, { height: '200px', color: '#fdedbe', position: 'top', rotation: '180deg' })} />
    </section>
  );
}

export default memo(Team);

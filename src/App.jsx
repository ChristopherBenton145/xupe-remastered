import React, { memo } from 'react';
import Loading from './components/Loading/Loading';
import Header from "./sections/Header/Header";
import Services from "./sections/Services/Services";
import Projects from "./sections/Projects/Projects";
import Team from "./sections/Team/Team";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <div className='app'>
      <Loading color='#fff' duration='1' delay='1.5' />
      <Header />
      <Services />
      <Projects />
      <Team />
      <Footer />
    </div>
  );
}

export default memo(App);

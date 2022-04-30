import React from 'react';
import Loading from './components/Loading/Loading';
import Header from "./sections/Header/Header";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Projects2 from "./sections/Projects2/Projects2";
import Team from "./sections/Team/Team";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Loading color='#fff' duration='1' delay='1.5' />
      <Header />
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Projects2 /> */}
      {/* <Team /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;

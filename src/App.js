import React from 'react';
// components
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/skills';
import Experience from './components/Experience';
import Interest from './components/Interest';
import Awards from './components/Awards';

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Interest />
      <Awards />
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default App;

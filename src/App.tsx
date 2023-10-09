import React from 'react';
import './App.scss';
import HomeSection from './components/HomeSection';
import Header from './components/header/Header';

const App:React.FC = () => {
  return (
    <div className='App' id='main'>
      <div className='mask'>
        <Header />
        <HomeSection />
      </div>
    </div>
  );
}

export default App;

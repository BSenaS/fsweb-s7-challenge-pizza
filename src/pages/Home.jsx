import React from 'react';
import "./home.css";
import "../mvp-assets/mvp-banner.png";
import "../mvp-assets/logo.svg";
import { useHistory } from 'react-router-dom';
import { HomeCategory } from '../components/HomeCategory/HomeCategory.jsx';


export default function Home() {
  const history = useHistory();

  const handleButtonClick = () => {
    // Yönlendirme işlemi
    history.push('/pizza');
  };
  return (
    <>
      <div className='home-banner'>
        <div className='home-wrapper' >
          <h1>Teknolojik Yemekler</h1>
          <div className='h2-wrapper'>
            <h2>KOD ACIKTIRIR PİZZA, DOYURUR</h2>
          </div>
          <button onClick={handleButtonClick}>ACIKTIM</button>
        </div>
      </div>
     <HomeCategory/>
      </>
  );
}
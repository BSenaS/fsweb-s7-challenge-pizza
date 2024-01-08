import React from 'react';
import "./header.css";
export default function Header() {
  return (
    <header>
      <div className='header-div'>
      <h1>Teknolojik Yemekler</h1>
      <p>Anasayfa - <span className='siparis-span'>Sipariş Oluştur</span></p>
      </div>
    </header>
    
  );
}
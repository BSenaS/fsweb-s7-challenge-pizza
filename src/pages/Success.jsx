import React from 'react';
import "./success.css";

export default function Success(props) {
  const {selectedSize,hamurKalinligi,secimler} = props;
  return (
    <div className='main-wrapper'>
      <h1>Teknolojik Yemekler</h1>
      <div className='siparis-wrapper'>
        <p>TEBRİKLER! SİPARİŞİNİZ ALINDI!</p>
        {selectedSize}
        <br />
        {hamurKalinligi}
        <br />
        {secimler}
      </div>
    </div>
    
  );
}
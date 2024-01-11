import React from 'react';
import "./success.css";
import SiparisBilgi from '../components/SiparisBilgi';

export default function Success(props) {
  const {selectedSize,hamurKalinligi,secimler,totalfiyat} = props;
  const secimlerListesi = secimler.join(",");
  return (
    <div className='main-wrapper'>
      <h1>Teknolojik Yemekler</h1>
      <div className='siparis-confirm'>
        <p className='lezzet-p'>lezzetin yolda</p>
        <p className='siparis-al'>SİPARİŞ ALINDI!</p>
        <hr />
        <h2>Position Absolute Acı Pizza</h2>
      </div>
      <div className='seçilen-malzemeler'>
        
        <p className='malz-icerik'>{`Boyut:${selectedSize}`}</p>
        <p className='malz-icerik'>{`Hamur:${hamurKalinligi}`}</p>
        <p className='malz-icerik'>
          {`Ek Malzemeler:${secimlerListesi}`}
          </p>
      </div>
      <div className='siparis-bilgi-wrapper'>
        <p className='bosluk1'>Sipariş Toplamı</p>
        <p><span className='bosluk2'>
          Seçimler</span> {secimler.length * 5}₺
          </p>
        <p><span className='bosluk3'>Toplam</span> {totalfiyat}₺</p>
      </div>
    </div>
    
  );
}
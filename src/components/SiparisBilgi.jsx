import React, { useState } from "react";

export default function SiparisBilgi(props) {
  const {secimler,totalfiyat} = props;



  return(
    <>
    <div >
      <ul>
        <li>Siparis Toplamı:</li>
        <li>Seçimler: {secimler}</li>
        <li>Toplam: {totalfiyat}</li>
      </ul>
      {/* <p>Sipariş Toplamı</p>
      Seçimler
      <div>
        Toplam {totalfiyat}
      </div> */}
    </div>
    </>
  );
}
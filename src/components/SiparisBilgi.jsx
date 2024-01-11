import React, { useState } from "react";

export default function SiparisBilgi(props) {
  const {secimler,totalfiyat} = props;



  return(
    <>
    <div className="siparis-bilgi-wrapper">
      <p>Sipariş Toplamı</p>
      {console.log(secimler)}
      <div>
        Toplam {totalfiyat}
      </div>
    </div>
    </>
  );
}
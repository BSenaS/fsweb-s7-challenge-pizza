import React from "react";
import Header from "../layout/Header";
import "./order-pizza.css";
export default function OrderPizza(){
  let adet = 1;
  const checkBoxList = [
    'Pepperoni',
    'Tavuk Izgara',
    'Mısır',
    'Sarımsak',
    'Ananas',
    'Sosis',
    'Soğan',
    'Sucuk',
    'Biber',
    'Kabak',
    'Kanada Jambonu',
    'Domates',
    'Jalepeno'
  ];
  return(
    <>
    <Header/>
    <div className="order-section">
      <h2>Position Absolute Acı Pizza</h2>
      <div className="order-fiyat">
        <p>85.50₺</p>
        <div className="order-fiyat-stock">
          <p>4.9</p>
          <p>(200)</p>
        </div>
      </div>
      <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>

      <div className="order-options">
        <div className="order-options-size">
        <h3>Boyut Seç *</h3>
        <input type="radio" id="kucuk"/>
        <label htmlFor="kucuk">Küçük</label>

        <input type="radio" id="orta"/>
        <label htmlFor="kucuk">Orta</label>

        <input type="radio" id="buyuk"/>
        <label htmlFor="buyuk">Büyük</label>
        </div>

        <div className="order-options-type">
          <h3>Hamur Seç *</h3>
          <select name="cars">
            <option value="ince">İnce</option>
            <option value="orta">Orta</option>
            <option value="kalin">Kalın</option>
          </select>
        </div>
      </div>

      <div className="malzeme-container">
        <div className="malzeme-paragraph">
          <h3>Ek Malzemeler</h3>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>
        {/* CheckboxListe map atarak, checkboxlar oluşturma */}
        <div className="malzeme-options">
        {checkBoxList.map((item,index) => {
          return (<div key={index}>
          <input type="checkbox" id={item.toLowerCase()} />
          <label htmlFor={item.toLowerCase()}>{item}</label>
        </div>)
        })}
        </div>
      </div>

      <div className="siparis-notu-container">
        <h3>Sipariş Notu</h3>
        <input type="text" 
        className="siparis-notu"
        placeholder="Siparişine eklemek istediğin bir not var mı?"/>
      </div>
      <hr />

      <div className="siparis-toplami-container">
        {/* Buton */}
        <div>
          <button className="azalt-button">-</button>
          {adet}
          <button className="arttir-button">+</button>
        </div>

        <div className="siparis-calc-container">
          <p>Sipariş Toplamı</p>
          <div>
            <div className="siparis-secim">
              <p>Seçimler</p>
              <p>25.00₺</p>
            </div>
            <div className="siparis-toplam">
              <p>Toplam</p>
              <p>110.50₺</p>
            </div>
            <button className="siparis-button">
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
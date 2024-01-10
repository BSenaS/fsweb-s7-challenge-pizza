import React, { useEffect,useState } from "react";
import Header from "../layout/Header";
import "./order-pizza.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function OrderPizza(){
  //Hooklar  --->
  //Secilen Malzemeler
  const [secimler, setSecimler] = useState([]);
  //Total Price Hooku (Baslangic degeri pizza fiyati)
  const [totalfiyat,setTotalFiyat] = useState(85.50);
  //Pizza siparis sayisini yakalayan hook
  const [quantity,setQuantity] = useState(1);
  //Validation için butonu disable/enable etme
  const [isEnabled, setIsEnabled] = useState(false);

  const history = useHistory();

  //Axios isteği ile post atıp, verileri consola yazdırma + history push ile success sayfasına route
  const handleOrder = (e) => {
    e.preventDefault(); 
    axios.post('https://reqres.in/api/users', { 
      selectedToppings: secimler,
      quantity: quantity,
      totalPrice: totalfiyat
    })
    .then(response => {
      console.log("Sipariş başarıyla gönderildi:", response.data);
      history.push("/success");
    })
    .catch(error => {
      console.error("Sipariş gönderilirken bir hata oluştu:", error);
    });
  };
  

    //Seçilen malzemelerin toplam fiyatını hesaplama (secimler stateini izleyip, her seçim de güncelleme)
    useEffect(() => {
      const secimlerFiyat = secimler.length * 5;
      const newTotalPrice = 85.50 + secimlerFiyat;
      setTotalFiyat(newTotalPrice);
    }, [secimler]);
  
    // Pizzanın toplam fiyatını adet değiştiğinde güncelle (quantityi izler)
    useEffect(() => {
      const newTotalPrice = 85.50 * quantity;
      setTotalFiyat(newTotalPrice);
    }, [quantity]); 


  //Checkbox için handleChange eventi
  const handleCheckboxChange = ((event,item) => {
    const isChecked = event.target.checked;
    const id = event.target.id;

    if(isChecked) {
    // Checkbox seçiliyse, secimler listesine malzemeyi ekle
      const newSecimler = [...secimler,id];
      setSecimler(newSecimler);
    }else {
    // Checkbox seçili değilse, secimler listesinden malzemeyi çıkar
      const newSecimler = secimler.filter((secim) => secim !== id);
      setSecimler(newSecimler);
    }
  })

  //Quantityi azalt ve arttır butonları için changeHandler
  const handleQuantityChange = ((deger,event) => {
    event.preventDefault();
    const newQuantity = quantity + deger;
    if(newQuantity >= 0) {
      setQuantity(newQuantity)
    }
  });

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
    'Jalepeno',
    "Sucuk"
  ];
  return(
    <>
    <Header/>
    <form action="" id="pizza-form" onSubmit={handleOrder}>
      <div className="order-section">
        <h2 className="pizza-name">Position Absolute Acı Pizza</h2>
        <div className="order-fiyat">
          <p className="pizza-fiyati-p">85.50₺</p>
          <div className="order-fiyat-stock">
            <p>4.9</p>
            <p>(200)</p>
          </div>
        </div>
        <p className="ürün-aciklama">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>

        <div className="order-options">
          <div className="order-options-size">
            <h3 className="h3-aciklamalar">Boyut Seç *</h3>

            <div>
            <input type="radio" id="kucuk" />
            <label htmlFor="kucuk" className="boyut-sec">Küçük</label>
            </div>
            
            <div>
            <input type="radio" id="orta"/>
            <label htmlFor="kucuk" className="boyut-sec">Orta</label>
            </div>

            <div>
            <input type="radio" id="buyuk"/>
            <label htmlFor="buyuk" className="boyut-sec">Büyük</label>
            </div>
          </div>

          <div className="order-options-type">
            <h3 className="h3-aciklamalar h3-hamur">Hamur Seç *</h3>
            <select name="options">
              <option value="ince">Hamur Kalınlığı</option>
              <option value="ince" className="boyut-sec">İnce</option>
              <option value="orta" className="boyut-sec">Orta</option>
              <option value="kalin" className="boyut-sec">Kalın</option>
            </select>
          </div>
        </div>

        <div className="malzeme-container">
          <div className="malzeme-paragraph">
            <h3 className="h3-aciklamalar">Ek Malzemeler</h3>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          </div>
          {/* CheckboxListe map atarak, checkboxlar oluşturma */}
          <div className="malzeme-options">
          {checkBoxList.map((item,index) => {
            return (
            <div key={index}>
              <input 
              type="checkbox" 
              id={item.toLowerCase()} 
              onChange={(event) => handleCheckboxChange(event, item)}
              />
              <label htmlFor={item.toLowerCase()}>{item}</label>
            </div>)
          })}
          </div>
        </div>

        <div className="siparis-notu-container">
          <h3 className="h3-aciklamalar">Sipariş Notu</h3>
          <input type="text" 
          className="siparis-notu"
          placeholder="Siparişine eklemek istediğin bir not var mı?"/>
        </div>
        <hr /> 
        <div className="siparis-toplami-container">
          {/* Buton */}
          <div className="siparis-quantity-btn">
            <button className="azalt-button" onClick={(e) => handleQuantityChange(-1,e)}>-</button>
           <div className="quantity-display">{quantity}</div>
            <button className="arttir-button" onClick={(e) => handleQuantityChange(1,e)}>+</button>
          </div>

          <div className="siparis-calc-container">
            <div className="siparis-calc-wrapper">
              <p className="siparis-p1">Sipariş Toplamı</p>
                <div className="siparis-secim">
                  <p className="siparis-p2">Seçimler</p>
                  <p>{secimler.length * 5.00}₺</p>
                </div>
                <div className="siparis-toplam">
                  <p className="siparis-p2">Toplam</p>
                  <p >{`${totalfiyat}₺`}</p>
                </div>
                <div className="btn-div">
                  <button className="siparis-button" type="submit"> 
                    SİPARİŞ VER
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
}
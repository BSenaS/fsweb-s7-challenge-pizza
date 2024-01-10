import React, { useEffect,useState } from "react";
import Header from "../layout/Header";
import "./order-pizza.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function OrderPizza(props){
  const {
    handleChangeSize,
    handleHamurKalinligi,
    secimler,
    handleCheckboxChange,
    isSizeSelected,
    isDoughSelected
  } = props;
  //Hooklar  --->
  //Total Price Hooku (Baslangic degeri pizza fiyati)
  const [totalfiyat,setTotalFiyat] = useState(85.50);
  //Pizza siparis sayisini yakalayan hook
  const [quantity,setQuantity] = useState(1);
  //Validation için butonu disable/enable etme
  const [isEnabled, setIsEnabled] = useState(false);
  //İsim inputu için state
  const [userName, setUserName] = useState('');
  const history = useHistory();

  //Malzeme listem buradan map ile createleniyor
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

  //Axios isteği ile post atıp, verileri consola yazdırma + history push ile success sayfasına route
  const handleOrder = (e) => {
    e.preventDefault(); 
    axios.post('https://reqres.in/api/users', { 
      selectedToppings: secimler,
      quantity: quantity,
      totalPrice: totalfiyat,
    })
    .then(response => {
      console.log("Sipariş başarıyla gönderildi:", response.data);
      history.push("/success");
    })
    .catch(error => {
      console.error("Sipariş gönderilirken bir hata oluştu:", error);
    });
  };

  // İsim inputundaki değişikliklerde userName state'ini güncelleyen handleChange fonksiyonu
    const handleChange = (e) => {
      setUserName(e.target.value);
    };

    //İsim && malzeme sayısı && Boyut && Hamur Kalinligi &&validasyonu
    useEffect(() => {
      if (secimler.length >= 4 && secimler.length <= 10 && 
        validateName(document.getElementById("name-input").value) && isSizeSelected && isDoughSelected) {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }
    }, [secimler, userName,isSizeSelected,isDoughSelected]);

    // İsim doğrulama fonksiyonu
    const validateName = (name) => {
      if (name.length < 2) {
        return false;
      }
      return true;
    };
  
    //Seçilen malzemelerin toplam fiyatını hesaplama (secimler stateini izleyip, her seçim de güncelleme + quantityi izler totalPrice ı günceller )
    useEffect(() => {
      const secimlerFiyat = secimler.length * 5;
      const newTotalPrice = 85.50 + secimlerFiyat + (85.50 * (quantity - 1)); 
      setTotalFiyat(newTotalPrice);
    }, [secimler, quantity]);
  
    //Quantityi azalt ve arttır butonları için changeHandler
  const handleQuantityChange = ((deger,event) => {
    event.preventDefault();
    const newQuantity = quantity + deger;
    if(newQuantity > 0) {
      setQuantity(newQuantity)
    }
  });

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
        {/* Pizza Boyutu, handleChangeler ile valueler app.jsx e gönderiliyor */}
        <div className="order-options">
          <div className="order-options-size">
            <h3 className="h3-aciklamalar">Boyut Seç
            {" "} <span style={{color: "red"}}>*</span></h3>

            <div className="radio-div">
            <input type="radio" id="Kucuk" name="boyut" onChange={() => handleChangeSize("Küçük")}/>
            <label htmlFor="Kucuk">Küçük</label>
            </div>
            
            <div className="radio-div">
            <input type="radio" id="Orta" name="boyut" onChange={() => handleChangeSize("Orta")}/>
            <label htmlFor="Orta">Orta</label>
            </div>

            <div className="radio-div">
            <input type="radio" id="Buyuk" name="boyut" onChange={() => handleChangeSize("Büyük")}/>
            <label htmlFor="Buyuk" >Büyük</label>
            </div>
          </div>
          {/* Hamur Kalınlığı,handleChangeler ile valueler app.jsx e gönderiliyor */}
          <div className="order-options-type">
            <h3 className="h3-aciklamalar h3-hamur">Hamur Seç 
            {" "} <span style={{color: "red"}}>*</span> </h3>
            <select name="options" 
            onChange={(e) => handleHamurKalinligi(e.target.value)}>
              <option disabled selected>Hamur Kalınlığı</option>
              <option value="ince" className="boyut-sec" >İnce</option>
              <option value="orta" className="boyut-sec">Orta</option>
              <option value="kalin" className="boyut-sec">Kalın</option>
            </select>
          </div>
        </div>
        {/* Malzeme kısmı, mapping uyarı mesajı */}
        <div className="malzeme-container">
          <div className="malzeme-paragraph">
            <h3 className="h3-aciklamalar">Ek Malzemeler</h3>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            {/* Uyarı mesajı Malzeme. */}
            {secimler.length < 4 || secimler.length > 10 ?
            (<p className="malzeme-uyari" style={{color: "red"}}>
            Lütfen en az 4, en fazla 10 malzeme seçiniz..</p>): null}
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
              data-cy="malzeme-test"
              />
              <label htmlFor={item.toLowerCase()}>{item}</label>
            </div>)
          })}
          </div>
        </div>
        
        <div className="isim-wrapper">
          <p>Lütfen İsminizi Giriniz..</p>
          <input type="text" 
          placeholder="İsminizi Giriniz" 
          id="name-input"
          value={userName}
          onChange={handleChange}
          data-cy="isimAlani"
          />
          {userName.length > 0 && userName.length < 2 && (
          <p className="isim-uyarı">İsim en az 2 karakter olmalıdır.</p>
          )}
        </div>

        <div className="siparis-notu-container">
          <h3 className="h3-aciklamalar">Sipariş Notu</h3>
          <input type="text" 
          className="siparis-notu"
          placeholder="Siparişine eklemek istediğin bir not var mı?"/>
        </div>
        <hr /> 
        <div className="siparis-toplami-container">
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
                  <button className="siparis-button" type="submit" 
                  data-cy="form-button"
                  disabled={!isEnabled}> 
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
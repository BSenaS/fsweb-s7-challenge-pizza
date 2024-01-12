import React, { useState } from "react";
import Home from "./pages/Home.jsx";
import OrderPizza from "./pages/OrderPizza.jsx";
import Success from "./pages/Success.jsx";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min.js";
import SiparisBilgi from "./components/SiparisBilgi.jsx";
//Reset css ' i projeye ekleme
import "./reset.css"; 

const formData = {
  name: "",
  size: "",
  dough: "",
  toppings: [],
};


const App = () => {
  //HOOKLAR
  const [secimler, setSecimler] = useState([]);
  const [hamurKalinligi,setHamurKalinligi] = useState("");
  const [selectedSize,setSelectedSize] = useState("");
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [isDoughSelected, setIsDoughSelected] = useState(false);
    //Total Price Hooku (Baslangic degeri pizza fiyati)
    const [totalfiyat,setTotalFiyat] = useState(85.50);


  //Seçilen boyut, Proplar OrderPizza Sayfasına gönderiliyor. (+Validasyon)
  const handleChangeSize = (value) => {
    setSelectedSize(value)
    setIsSizeSelected(true);
  };

  //Hamur Kalınlığı Seçimi
  const handleHamurKalinligi = (value) => {
    setHamurKalinligi(value)
    setIsDoughSelected(true);
  };

  //Checkbox için handleChange eventi
  const handleCheckboxChange = ((event) => {
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

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/pizza" exact>
          <OrderPizza 
          handleChangeSize={handleChangeSize}
          handleHamurKalinligi={handleHamurKalinligi}
          secimler={secimler}
          handleCheckboxChange={handleCheckboxChange}
          isSizeSelected={isSizeSelected}
          isDoughSelected={isDoughSelected}
          totalfiyat={totalfiyat}
          setTotalFiyat={setTotalFiyat}
          />
        </Route>

        <Route path="/success" exact>
          <Success 
          selectedSize={selectedSize} 
          hamurKalinligi={hamurKalinligi}
          secimler={secimler}
          totalfiyat={totalfiyat}
          />
        </Route>

        <Route path="/siparis-bilgi" exact>
          <SiparisBilgi 
          secimler={secimler} 
          totalfiyat={totalfiyat} />
        </Route>
      </Switch>
    </>
  );
};
export default App;

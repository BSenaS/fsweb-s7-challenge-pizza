import React, { useState } from "react";
import Home from "./pages/Home.jsx";
import OrderPizza from "./pages/OrderPizza.jsx";
import Success from "./pages/Success.jsx";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min.js";
//Reset css ' i projeye ekleme
import "./reset.css"; 
const App = () => {
  //HOOKLAR
  const [secimler, setSecimler] = useState([]);
  const [hamurKalinligi,setHamurKalinligi] = useState("");
  const [selectedSize,setSelectedSize] = useState("");

  //Seçilen boyut, Proplar OrderPizza Sayfasına gönderiliyor.
  const handleChangeSize = (size) => {
    setSelectedSize(size)
  };

  //Hamur Kalınlığı Seçimi
  const handleHamurKalinligi = (kalinlik) => {
    setHamurKalinligi(kalinlik)
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
          />
        </Route>

        <Route path="/success" exact>
          <Success selectedSize={selectedSize} 
          hamurKalinligi={hamurKalinligi}
          secimler={secimler}
          />
        </Route>
      </Switch>
    </>
  );
};
export default App;

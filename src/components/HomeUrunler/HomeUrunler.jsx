import React from "react"
import icon1 from '../HomeCategory/HomeCategoryIcons/1.svg'
import icon2 from '../HomeCategory/HomeCategoryIcons/2.svg'
import icon3 from '../HomeCategory/HomeCategoryIcons/3.svg'
import icon4 from '../HomeCategory/HomeCategoryIcons/4.svg'
import icon5 from '../HomeCategory/HomeCategoryIcons/5.svg'
import icon6 from '../HomeCategory/HomeCategoryIcons/6.svg'
import "./home-urunler.css";
import { Link } from "react-router-dom"

import food1 from "../HomeUrunler/HomeUrunlerAssets/food1.png"
import food2 from "../HomeUrunler/HomeUrunlerAssets/food2.png"
import food3 from "../HomeUrunler/HomeUrunlerAssets/food3.png"

const icons = [
  [icon1, 'Ramen'],
  [icon2, 'Pizza'],
  [icon3, 'Burger'],
  [icon4, 'French Fries'],
  [icon5, 'Fast Food'],
  [icon6, 'Soft Drinks'],
] 

export function HomeUrunler() {
  
  return(
    <div className="fav-urunler-info">
      <span className="fav-slogan">
        <h2>en çok paketlenen menüler</h2>
        </span>
      <span className="fav-slogan2">
        <p>Acıktıran Kodlara Doyuran Lezzetler</p>
      </span>
        <div className="fav-urunler-main">
          {icons.map((icon,index) => (
            <>
            <div className="fav-urunler-item" key={index}>
              <button>
                <img src={icon[0]} alt={icon[1]} />
                <p>{icon[1]}</p>
              </button>
            </div>
            </>
          ))}
        </div>
        
            {/* Urunler kısmı */}
        <div className="urunler-secim-main">
          <div className="urunler-secim">
            <Link to="/product-catalog">
              <button className="urunler-btn">
                <img src={food1} alt="TerminalPizza" />
                <h2>Terminal Pizza</h2>
                <div className="urun-desc">
                  <p>4.9</p>
                  <p>(200)</p>
                  <p>130₺</p>
                </div>
              </button>
              </Link>
          </div>
          <div className="urunler-secim">
            <Link to="/product-catalog">
              <button className="urunler-btn">
                <img src={food2} alt="PositionAcıPizza" />
                <h2>Position Absolute Acı Pizza</h2>
                <div className="urun-desc">
                  <p>4.9</p>
                  <p>(1999)</p>
                  <p>145₺</p>
                </div>
              </button>
            </Link>
          </div>
          <div className="urunler-secim">
            <Link to="/product-catalog">
              <button className="urunler-btn">
                <img src={food3} alt="TavukluBurger" />
                <h2>useEffect Tavuklu Burger</h2>
                <div className="urun-desc">
                  <p>4.7</p>
                  <p>(455)</p>
                  <p>155₺</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
    </div>
    
  )
}
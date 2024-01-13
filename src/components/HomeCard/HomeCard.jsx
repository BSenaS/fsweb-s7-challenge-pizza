import React from "react";
import "./home-card.css";
import  { Link } from "react-router-dom";



export function HomeCard() {
  return (
    <>
    <div className="home-container">
      <div className="home-card-wrapper">

        <div className="card-1">
          <div className="card-1-items">
          <h2>Özel Lezzetus</h2>
          <p>Position:Absolute Acı Burger</p>
          <Link to="/product-catalog">
            <button>Sipariş Ver</button>
          </Link>
          </div>
        </div>

        <div className="right-side">
          <div className="card-2">
            <div className="card-2-items">
              <h2>Hackathlon Burger Menü</h2>
            <Link to="/product-catalog">
              <button>Sipariş Ver</button>
            </Link>
            </div>
          </div>
          <div className="card-3">
            <div className="card-3-items">
              <h2>
                <span className="card-red">
                   Çoooook
                </span> hızlı npm gibi kurye</h2>
              <Link to="/product-catalog">
                <button>Sipariş Ver</button>
              </Link>
            </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
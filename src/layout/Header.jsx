import React from "react";
import "./header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Header() {
  return (
    <header>
      <div className="header-div">
        <h1>Teknolojik Yemekler</h1>
        <div className="header-navLink">
          <Link to="/" className="header-home">
            Anasayfa -
          </Link>
          <span className="siparis-span">Sipariş Oluştur</span>
        </div>
      </div>
    </header>
  );
}

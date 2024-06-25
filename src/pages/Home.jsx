import React from "react";
import "./home.css";
import "../mvp-assets/mvp-banner.png";
import "../mvp-assets/logo.svg";
import { HomeCategory } from "../components/HomeCategory/HomeCategory.jsx";
import { HomeCard } from "../components/HomeCard/HomeCard.jsx";
import { HomeUrunler } from "../components/HomeUrunler/HomeUrunler.jsx";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

export default function Home() {
  return (
    <>
      <div className="home-banner">
        <div className="home-wrapper">
          <h1>Teknolojik Yemekler</h1>
          <p className="özel-firsat">fırsatı kaçırma</p>
          <div className="h2-wrapper">
            <h2>KOD ACIKTIRIR PİZZA, DOYURUR</h2>
          </div>
          <Link to="/pizza" className="home-link">
            ACIKTIM
          </Link>
        </div>
      </div>
      <HomeCategory />
      <HomeCard />
      <HomeUrunler />
    </>
  );
}

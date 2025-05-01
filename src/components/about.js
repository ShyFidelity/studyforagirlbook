// components/AboutPage.jsx
import React from "react";
import "./about.css"; // Adjust the path as necessary
import JillKiera from "../assets/jk-sm.png";
import Kiera from "../assets/kiera-small.png";

export default function AboutPage() {
  return (
<section className="about">
  <h2>wtf is girl book even anyway</h2>

  <div className="profile-layout">
  {/* Desktop layout – taped photo + text below */}
  <div className="desktop-profile">
    <div className="taped-photo-wrapper">
      <img src={Kiera} alt="Jillian FitzMaurice" className="taped-photo" />
      <div className="tape tape-top-left"></div>
      <div className="tape tape-bottom-right"></div>
    </div>
    <div className="profile-text">
      <h3>Jillian FitzMaurice</h3>
      <p className="title">Chief Technology Officer (CTO)</p>
      <p className="bio">Jillian is an interdisciplinary artist, designer, and creative technologist...</p>
    </div>
  </div>

  {/* Mobile layout – compact card */}
  <div className="mobile-profile-card">
    <div className="photo-wrapper">
      <img src={Kiera} className="profile-photo" alt="Jillian FitzMaurice" />
    </div>
    <div className="text-content">
      <h3>Jillian FitzMaurice</h3>
      <p className="title">CTO</p>
      <p className="bio">Jillian is an interdisciplinary artist, designer, and creative technologist...</p>
    </div>
  </div>
</div>
 

  <div className="profile-layout">
  {/* Desktop layout – taped photo + text below */}
  <div className="desktop-profile">
    <div className="taped-photo-wrapper">
      <img src={JillKiera} alt="Jillian FitzMaurice" className="taped-photo" />
      <div className="tape tape-top-left"></div>
      <div className="tape tape-bottom-right"></div>
    </div>
    <div className="profile-text">
      <h3>Jillian FitzMaurice</h3>
      <p className="title">Chief Technology Officer (CTO)</p>
      <p className="bio">Jillian is an interdisciplinary artist, designer, and creative technologist...</p>
    </div>
  </div>

  {/* Mobile layout – compact card */}
  <div className="mobile-profile-card">
    <div className="photo-wrapper">
      <img src={JillKiera} className="profile-photo" alt="Jillian FitzMaurice" />
    </div>
    <div className="text-content">
      <h3>Jillian FitzMaurice</h3>
      <p className="title">CTO</p>
      <p className="bio">Jillian is an interdisciplinary artist, designer, and creative technologist...</p>
    </div>
  </div>
</div>

</section>

  );
}

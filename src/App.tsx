import React from "react";
import "./App.scss";
import PersonalInfo from "./components/PersonalInfo";
import FamilyInfo from "./components/FamilyInfo";
import ContactInfo from "./components/ContactInfo";
import PhotoFrame from "./components/PhotoFrame";
import phoneIcon from "./assets/phone.png";
import emailIcon from "./assets/email.png";
import linkedInIcon from "./assets/linkedin.png";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Yogesh Bothara</h1>
      </header>
      <main>
        <PhotoFrame />
        <PersonalInfo />
        <FamilyInfo />
        <ContactInfo />
      </main>
      <footer className="App-Footer">
        <div className="links">
          <a href="tel:8275057303">
            <img className="logo" src={phoneIcon} alt="Phone" />
          </a>
          <a href="mailto:botharayogesh@gmail.com">
            <img className="logo" src={emailIcon} alt="Email" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/yogesh-bothara-25476018b">
            <img className="logo" src={linkedInIcon} alt="LinkedIn" />
          </a>
        </div>
        <span>&#169; of website by Samkit Kothari</span>
      </footer>
    </div>
  );
};

export default App;

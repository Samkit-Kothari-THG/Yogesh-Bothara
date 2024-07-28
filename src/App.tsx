import React from "react";
import "./App.scss";
import PersonalInfo from "./components/PersonalInfo";
import FamilyInfo from "./components/FamilyInfo";
import ContactInfo from "./components/ContactInfo";
import PhotoFrame from "./components/PhotoFrame";

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
      <footer className="App-header">
        <span>&#169; of website by Samkit Kothari</span>
      </footer>
    </div>
  );
};

export default App;

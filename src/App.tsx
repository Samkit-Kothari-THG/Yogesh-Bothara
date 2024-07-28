import React from 'react';
import './App.scss';
import PersonalInfo from './components/PersonalInfo';
import FamilyInfo from './components/FamilyInfo';
import ContactInfo from './components/ContactInfo';
import Hobbies from './components/Hobbies';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Yogesh Bothara</h1>
      </header>
      <main>
        <PersonalInfo />
        <FamilyInfo />
        <ContactInfo />
        <Hobbies />
      </main>
    </div>
  );
};

export default App;

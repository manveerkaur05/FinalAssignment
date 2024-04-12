// App.js
import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import Work from './Work';
import Skills from './Skills';
import DeveloperSetup from './DeveloperSetup';
import Resources from './Resources';
import './App.css'; 

function App() {
  const [activePage, setActivePage] = useState('BasicInfo');

  const handleNavigation = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigation('BasicInfo')}>Basic Info</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('Work')}>Work</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('Skills')}>Skills</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('DeveloperSetup')}>Developer Setup</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('Resources')}>Resources</button>
          </li>
          <li>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
          </li>
        </ul>
      </nav>

      <main>
        {activePage === 'BasicInfo' && <BasicInfo />}
        {activePage === 'Work' && <Work />}
        {activePage === 'Skills' && <Skills />}
        {activePage === 'DeveloperSetup' && <DeveloperSetup />}
        {activePage === 'Resources' && <Resources />}
      </main>
    </div>
  );
}

export default App;

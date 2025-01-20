import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleContent = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="App">
      <div>
        <div className="block">
          <div className="flex-container">
            <img src="/san-logo.jpg" alt="SAN-logo" className="image-class"/>
            <p className="text-class">SAN Tutoring - Learn, Achieve, Succeed</p>
          </div>
        </div>

        <div className="block button-container">
          <button 
            className="button" 
            onClick={() => toggleContent('aboutContent')}
          >
            <img 
              src="/dropdown.png" 
              alt="toggle" 
              className={`button-icon ${activeSection === 'aboutContent' ? 'rotate' : ''}`}
            />
            About
          </button>
          {activeSection === 'aboutContent' && (
            <div id="aboutContent" className="content show">
              <div className="block">About content goes here...</div>
            </div>
          )}
        </div>

        <div className="block button-container">
          <button 
            className="button" 
            onClick={() => toggleContent('credentialsContent')}
          >
            <img 
              src="/dropdown.png" 
              alt="toggle" 
              className={`button-icon ${activeSection === 'credentialsContent' ? 'rotate' : ''}`}
            />
            Credentials
          </button>
          {activeSection === 'credentialsContent' && (
            <div id="credentialsContent" className="content show">
              <div className="block">Credentials content goes here...</div>
            </div>
          )}
        </div>

        <div className="block button-container">
          <button 
            className="schedule-button" 
            onClick={() => alert('Redirecting to scheduling page...')}
          >
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

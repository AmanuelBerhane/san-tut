import React from 'react';
import './App.css'

// Initialize the About section when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create the About section content
    function createAboutSection() {
        const aboutContent = document.getElementById('aboutContent');
        if (!aboutContent) return;

        const content = `
            <div class="block">
                <h2>About SAN Tutoring</h2>
                <p>We are dedicated to helping students achieve their academic goals through personalized tutoring services.</p>
            </div>
        `;
        aboutContent.innerHTML = content;
    }

    // Create the Credentials section content
    function createCredentialsSection() {
        const credentialsContent = document.getElementById('credentialsContent');
        if (!credentialsContent) return;

        const content = `
            <div class="block">
                <h2>Our Credentials</h2>
                <p>Our tutors are highly qualified professionals with extensive experience in education.</p>
            </div>
        `;
        credentialsContent.innerHTML = content;
    }

    // Initialize sections
    createAboutSection();
    createCredentialsSection();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createAboutSection, createCredentialsSection };
}

const Credentials = ({ activeSection, toggleContent }) => {
  return (
    <div className="block button-container">
      <button className="button" onClick={() => toggleContent('credentialsContent')}>
        <img src="dropdown.png" alt="toggle" className={`button-icon ${activeSection === 'credentialsContent' ? 'rotate' : ''}`}
        />
        Credentials
      </button>
      <div id="credentialsContent" className={`content ${activeSection === 'credentialsContent' ? 'show' : ''}`}>
        <div className="credentials-tree">
          <div className="tree-level">
            <div className="tree-node">
              <div className="tree-content">
                <h3>Education</h3>
                <p>Master's in Education</p>
              </div>
              <div className="tree-line"></div>
            </div>
            <div className="tree-node">
              <div className="tree-content">
                <h3>Experience</h3>
                <p>10+ Years Teaching</p>
              </div>
              <div className="tree-line"></div>
            </div>
            <div className="tree-node">
              <div className="tree-content">
                <h3>Certifications</h3>
                <p>State Licensed Teacher</p>
              </div>
              <div className="tree-line"></div>
            </div>
            <div className="tree-node">
              <div className="tree-content">
                <h3>Specializations</h3>
                <p>Math & Science Expert</p>
              </div>
              <div className="tree-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScheduleButton = () => {
  return (
    <div id="schedule-button">Schedule
      <button className="schedule-button" onClick={() =>window.location.href = '/Schedule.js'}>
        Schedule Now
      </button>
    </div>
  );
};

export { Credentials, ScheduleButton };

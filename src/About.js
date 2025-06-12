import React from 'react';
import './App.css'

const About = () => (
  <div className="block">
    <h2>About SAN Tutoring</h2>
    <p>
      SAN Tutoring is dedicated to empowering students to achieve their academic goals through personalized, high-quality tutoring services. Our mission is to foster a love of learning, build confidence, and help every student reach their full potential.
    </p>
    <ul style={{ textAlign: 'left', maxWidth: '700px', margin: '20px auto', fontSize: '18px' }}>
      <li>Experienced, certified educators passionate about teaching</li>
      <li>Customized lesson plans tailored to each student's needs</li>
      <li>Support for a wide range of subjects and grade levels</li>
      <li>Flexible scheduling and online or in-person sessions</li>
      <li>Proven track record of student success</li>
    </ul>
  </div>
);

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

export default About;
export { Credentials, ScheduleButton };

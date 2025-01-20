import './App.css';

const Schedule = ({ activeSection, toggleContent }) => {
  return (
    <div>
      <div className="block">
        <div className="flex-container">
          <h2>Schedule a Session</h2>
        </div>
      </div>
      <div className="block button-container">
        <button className="button" onClick={() => toggleContent('scheduleContent')}>
          <img 
            src="drop-down-button.png" 
            alt="toggle" 
            className={`button-icon ${activeSection === 'scheduleContent' ? 'rotate' : ''}`}
          />
          Available Times
        </button>
        {activeSection === 'scheduleContent' && (
          <div className="content">
            <div className="schedule-grid">
              <div className="schedule-day">
                <h3>Monday - Friday</h3>
                <p>3:00 PM - 8:00 PM</p>
              </div>
              <div className="schedule-day">
                <h3>Saturday - Sunday</h3>
                <p>10:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="contact-info">
              <p>To schedule a tutoring session, please:</p>
              <ul>
                <li>Call or text: (555) 123-4567</li>
                <li>Email: contact@santutoring.com</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;

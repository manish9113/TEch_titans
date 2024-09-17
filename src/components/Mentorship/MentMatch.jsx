import React from 'react';
import './MentMatch.css'; // Assuming you have a CSS file for styling

const MentMatch = () => {
  const mentorData = [
    {
      name: "alpha male",
      star: "4.9",
      details1: "Messho | IIT Bombay",
      details2: "| master in coding",
    },
    {
      name: "alpha male",
      star: "4.9",
      details1: "Messho | IIT Bombay",
      details2: "| master in coding",
    },
    {
      name: "alpha male",
      star: "4.9",
      details1: "Messho | IIT Bombay",
      details2: "| master in coding",
    },
    {
      name: "alpha male",
      star: "4.9",
      details1: "Messho | IIT Bombay",
      details2: "| master in coding",
    },
    {
      name: "alpha male",
      star: "4.9",
      details1: "Messho | IIT Bombay",
      details2: "| master in coding",
    },
    {
      name: "alpha male",
      star: "4.9",
      details1: "Messho | IIT Bombay",
      details2: "| master in coding",
    },
    {
      name: "alpha male",
      star: "4.9",
      details1: "Messho | IIT Bombay",
      details2: "| master in coding",
    },
    {
      name: "alpha male",
      star: "4.9",
      details1: "Messho | IIT Bombay",
      details2: "| master in coding",
    },
  ];

  return (
    <>
    <h1 className="font-semibold text-3xl text-center text-slate-800 mb-16">Explore Our <span className="text-blue-700">Top Mentors</span></h1>
    
     <div className="profile-main">
      {mentorData.map((mentor, index) => (
        <div className="profile-card" key={index}>
          <div className="status-badge">Available</div>
          <div className="profile-image">
            <img
              src="https://via.placeholder.com/100" // Replace with actual image URL
              alt="Profile"
            />
          </div>
          <div className="profile-info">
           <div className="name-rating">
              <h3>{mentor.name}</h3>
              <span className='rating'>⭐ {mentor.star}</span>
            </div>
            <p>
              {mentor.details1} <br />
              {mentor.details2}
            </p>
          </div>
          <button className="view-profile-button">View Profile</button>
        </div>
      ))}
      </div>
    </>
  );
};

export default MentMatch;

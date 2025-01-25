import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'BSc. (Hons) Information Technology Specialized in Software Engineering',
      institute: 'Sri Lanka Institute of Information Technology  (SLIIT)',
      year: '2022 - Present',
    },
    {
      degree: 'Studied at Maris Stella College',
      institute: 'Maris Stella College Negombo Sri Lanka',
      year: '2006 - 2019',
    },
  ];

  return (
    <div id="education" className="education">
      <h2>Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item" data-aos="fade-up">
            <h3>{edu.degree}</h3>
            <p>{edu.institute}</p>
            <span>{edu.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;


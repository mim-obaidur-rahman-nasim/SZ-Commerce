import React from 'react';
import './CSS/About.css';

const AboutPage = () => {
  const teamMembers = [
    { name: 'Niamul Haque Shreezon', role: 'CEO', bio: 'Shreezon has over 5 years of experience in the clothing industry.' },
    { name: 'Abdullah Karim', role: 'Marketing Director', bio: 'Karim is an expert in digital marketing and brand development.' },
    { name: 'Alamin Hossain', role: 'Operations Manager', bio: 'Alamin oversees the smooth running of our supply chain and logistics.' },
  ];

  return (
    <div className='about'>
      <h1>About Us</h1>
      <p>Learn more about our team and the values that drive us.</p>

      <h2>Our Team:</h2>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            <h3>{member.name} - {member.role}</h3>
            <p>{member.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import './CSS/CompanyPage.css';

const CompanyPage = () => {
  const companyInfo = {
    name: 'EasyMart.bd',
    founded: '2020',
    mission: 'To provide easy access to quality mangoes and raw products.',
    values: ['Customer Satisfaction', 'Quality Products', 'Sustainability'],
  };

  return (
    <div className='company-page'>
      <h1>{companyInfo.name}</h1>
      <p>Founded in {companyInfo.founded}</p>
      <p><strong>Mission:</strong> {companyInfo.mission}</p>

      <h2>Our Values:</h2>
      <ul>
        {companyInfo.values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyPage;

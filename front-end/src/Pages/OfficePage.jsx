import React from 'react';
import './CSS/OfficePage.css';

const OfficesPage = () => {
  const offices = [
    { city: 'Dhaka', country: 'Bangladesh', address: '123 Main St, Dhaka, BD' },
    { city: 'Rajshahi', country: 'Bangladesh', address: '456 Station Rd, Rajshahi, BD' },
  ];

  return (
    <div className='office-page'>
      <h1>Our Offices</h1>
      <p>We have offices in multiple locations across Bangladesh.</p>
      
      <ul>
        {offices.map((office, index) => (
          <li key={index}>
            <h3>{office.city}, {office.country}</h3>
            <p><strong>Address:</strong> {office.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfficesPage;

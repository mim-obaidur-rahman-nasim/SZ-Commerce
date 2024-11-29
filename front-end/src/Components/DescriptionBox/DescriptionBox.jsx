import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>This e-commerce demo offers a seamless shopping experience with intuitive browsing, secure checkout, multiple payment options like Bkash, and real-time order tracking. It’s mobile-friendly, scalable, and designed for businesses of all sizes.</p>
            <p>
            Discover a modern e-commerce platform with advanced search, personalized user accounts, and streamlined checkout. Enjoy secure payments, real-time tracking, and a mobile-friendly design built to enhance online shopping for businesses of any scale.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
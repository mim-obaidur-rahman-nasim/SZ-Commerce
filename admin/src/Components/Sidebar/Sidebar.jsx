import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/product_list_icon.svg'
import list_review_icon from '../../assets/product_review.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={list_product_icon} alt="" />
            <p>Product List</p>
        </div>
        </Link>
        <Link to={'/listreview'} style={{textDecoration:"none"}}>
        <div className="sidebar-item3">
            <img src={list_review_icon} alt="" />
            <p>Review List</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar
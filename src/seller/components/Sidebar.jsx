import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function Sidebar() {
  const history = useNavigate();
  return (
    <div>
               <div className="sidebar close">
    <div className="logo-details">
      <i className='bx bx-store-alt'></i>
      <span className="logo_name">e-commerce</span>
    </div>
    <ul className="nav-links">
      <li  onClick={()=>history("/seller/dashboard/")} >
        <a >
          <i className='bx bx-grid-alt' ></i>
          <span className="link_name">Dashboard</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Dashboard</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-collection' ></i>
            <span className="link_name">Products</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Products</a></li>
          <li><a  onClick={()=>history("/seller/product/List/")} >Product List</a></li>
          <li><a  onClick={()=>history("/seller/product/View/")}>View Product</a></li>
          <li><a  onClick={()=>history("/seller/product/Add/")}>add Product</a></li>
        </ul>
      </li>

      <li>
        <div className="iocn-link">
          <a href="#">
          <i class='bx bx-cart' ></i>
            <span className="link_name">Orders</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" >Orders</a></li>
          <li><a onClick={()=>history("/seller/order/List/")}>Order List</a></li>
          <li><a onClick={()=>history("/seller/order/View/")}>View Order</a></li>
        </ul>
      </li>
      
      <li>
        <a >
        <i class='bx bx-wallet-alt'></i>
          <span className="link_name">MyWallet</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name">MyWallet</a></li>
        </ul>
      </li>
      <li onClick={()=>history("/seller/profile/")}>
        <a >
          <i className='bx bx-user' ></i>
          <span className="link_name">Manage Profile</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" >Manage Profile</a></li>
        </ul>
      </li>
      <li>
        <a onClick={()=>history("/seller/shop/")}>
          <i className='bx bx-store-alt' ></i>
          <span className="link_name">Shop Setting</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Shop Setting</a></li>
        </ul>
      </li>
      <li>
    <div className="profile-details">
      <div className="profile-content">
        <img src="https://www.nolimitlogic.com/demo/multi-ecommerce/public/uploads/shop/logo/Fn54wigRaMNBipEc275fWOES2zPgcTo4st92Od4U.jpeg" alt="profileImg" />
      </div>
      <div className="name-job">
        <div className="profile_name">Faiez Waseem</div>
        <div className="job">Seller</div>
      </div>
      <i className='bx bx-log-out' ></i>
    </div>
  </li>
</ul>
  </div>
    </div>
  )
}

import React from 'react';
import {useNavigate} from 'react-router-dom';
import logo from "../assets/images/logo.svg"
const Header = ({page}) => {
   const history = useNavigate()
   
   const ChangeLocation = (to) =>{
      history(to) 
   }

    return (
        <header className="section-header border-bottom">
        <section className="header-top-dark bg-primary">
           <div className="container">
              <nav className="d-flex justify-content-between align-items-center flex-column flex-md-row">
                 <div className="nav"> <a  className="nav-link p-2"> <i className="fab fa-lg fa-facebook"></i> </a> <a href="#" className="nav-link p-2"> <i className="fab fa-lg fa-instagram"></i> </a> <a href="#" className="nav-link p-2"> <i className="fab fa-lg fa-twitter"></i> </a> <a href="#" className="nav-link p-2"> <i className="fab fa-lg fa-linkedin"></i> </a> </div>
                 <div className="rating-wrap">
                    <ul className="rating-stars">
                       <li style={{ width: "80%"}} className="stars-active"> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> </li>
                       <li> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> </li>
                    </ul>
                    <span className="label-rating">4.9/5 on Facebook and Google</span> 
                 </div>
                 <ul className="nav">
                    <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> English </a> 
                       <ul className="dropdown-menu">
                          <li> <a className="dropdown-item" href="#">Arabic</a> </li>
                          <li> <a className="dropdown-item" href="#">Russian</a> </li>
                       </ul>
                    </li>
                 </ul>
              </nav>
              
           </div>
           
        </section>
        
        <section className="header-main border-bottom">
           <div className="container">
              <div className="row gx-2 gy-3">
                 <div className="col-lg col-md col-6 flex-grow-0">
                    <a onClick={()=>ChangeLocation("/")} className="brand-wrap me-3"> <img className="logo" height="40" src={logo}  /> </a>
                 </div>
                 <div className="col-lg col-md col-6 flex-grow-0">
                    <div className="dropdown float-end"> <button type="button" className="btn btn-light text-nowrap"> <i className="fa me-1 fa-map-marker"></i> Location </button> </div>
                    
                 </div>

                 <div className=" col-lg-4 col-md col-12">
                    <form action="#">
                       <div className="input-group"> <input type="search" className="form-control" placeholder="Search" /> <button className="input-group-text btn btn-light"> <i className="fa fa-search"></i> </button> </div>
                     
                    </form>
                    
                 </div>

                 <div className="col-lg col-12">
                    <div className="float-md-end"> <a href="#" className="btn btn-light"> <i className="fa fa-heart me-1"></i> Wishlist </a> <a data-bs-toggle="offcanvas" href="#offcanvas_cart" className="btn btn-light"> <i className="fa fa-shopping-cart me-1"></i> My cart </a> <button className="btn btn-dark d-md-none float-end" type="button" data-bs-toggle="collapse" data-bs-target="#div_nav" aria-controls="div_nav" aria-expanded="false" aria-label="Toggle navigation"> <i className="fa fa-bars"></i> </button> </div>
                 </div>
              </div>

           </div>

        </section>
        
        <nav className="navbar py-0 py-md-2 navbar-expand-md navbar-light">
           <div className="container">
              <div className="navbar-collapse collapse" id="div_nav" >
                 <ul className="navbar-nav">
                    <li className="nav-item"> <a className="nav-link ps-0"  onClick={()=>ChangeLocation("/categories/")}  > Categories </a> </li>
                    <li className="nav-item"> <a className="nav-link"  onClick={()=>ChangeLocation("/about/")}  > About </a> </li>
                    <li className="nav-item"> <a className="nav-link"  onClick={()=>ChangeLocation("/search/")} > Customer Support </a> </li>
                    <li className="nav-item dropdown">
                       <a className="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown" aria-expanded="false"> More items </a> 
                       <ul className="dropdown-menu">
                          <li> <a className="dropdown-item"  onClick={()=>ChangeLocation("/trackOrder/")} >Track Order</a> </li>
                          <li> <a className="dropdown-item"  onClick={()=>ChangeLocation("/contact/")} >Complain</a> </li>
                          <li> <a className="dropdown-item"  onClick={()=>ChangeLocation("/blog/")}>Blog</a> </li>
                       </ul>
                    </li>
                 </ul>
                 <ul className="navbar-nav ms-auto">
                    <li className="nav-item"> <a className="nav-link"  onClick={()=>ChangeLocation("/signin/")} >Sign in </a> </li>
                    <li className="nav-item"> <a className="nav-link"  onClick={()=>ChangeLocation("/register/")}>Register </a> </li>
                 </ul>
              </div>
           
           </div>
          
        </nav>
     </header>
    );
}

export default Header;

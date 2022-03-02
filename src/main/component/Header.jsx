import React from 'react';
import {useNavigate} from 'react-router-dom';
import logo from "../assets/images/logo.svg"
import { atom, useRecoilState } from "recoil";
const query = atom({
   key: "searchQuery", // unique ID (with respect to other atoms/selectors)
   default: '', // default value (aka initial value)
 });

const imageAvatar = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8F97-4tTe0kDw2M0XktW8gHaHZ%26pid%3DApi&f=1";
const Header = ({page}) => {
   const history = useNavigate()
   const [searchQuery, setsearchQuery] = useRecoilState(query);
   const [isLogin  , setIslogin] = React.useState(true);
   const ChangeLocation = (to) =>{
      history(to) 
   }
const HandleForm = (e) =>  {
   e.preventDefault();
   searchQuery != "" ? history("/search/"+searchQuery) : console.log("null")
}

const item = document.querySelectorAll(".nav-pills .nav-link")
item.forEach(el =>  {
   el.addEventListener("click" , (e)=>{
      item.forEach(elem =>  {
         elem.classList.remove("active")   
      })
       el.classList.add("active") 
       
      
   })    
})

    return (
        <header className="section-header border-bottom">

        
        <section className="header-main border-bottom">
           <div className="container">
              <div className="row gx-2 gy-3">
                 <div className="col-lg col-md col-6 flex-grow-0">
                    <a onClick={()=>ChangeLocation("/")} className="brand-wrap me-3"> 
                    <img className="logo" height="40" src={logo}  /> </a>
                 </div>
                 <div className="col-lg col-md col-6 flex-grow-0">
                    <div className="dropdown float-end">
                        <button type="button" className="btn btn-light text-nowrap">
                            <i className="fa me-1 fa-map-marker"></i> Location </button> </div>
                    
                 </div>

                 <div className=" col-lg-4 col-md col-12">
                    <form onSubmit={HandleForm}>
                       <div className="input-group">
                           <input type="search" className="form-control" placeholder="Search"  value={searchQuery}  onChange={(e)=>setsearchQuery(e.target.value)} />
                            <button className="input-group-text btn btn-light"> <i className="fa fa-search"></i> 
                            </button> </div>
                     
                    </form>
                    
                 </div>

                 <div className="col-lg col-12">
                    <div className="float-md-end"> 
                    <a  className="btn btn-light"  onClick={()=> ChangeLocation("/WishList/")}> 
                    <i className="fa fa-heart me-1"></i> Wishlist </a>
                     <a data-bs-toggle="offcanvas"  className="btn btn-light"  onClick={()=>ChangeLocation("/MyCart/") } > 
                     <i className="fa fa-shopping-cart me-1"></i> My cart </a> 
                     <button className="btn btn-dark d-md-none float-end" type="button" data-bs-toggle="collapse" data-bs-target="#div_nav" aria-controls="div_nav" aria-expanded="false" aria-label="Toggle navigation"> 
                     <i className="fa fa-bars"></i> </button> </div>
                 </div>
              </div>

           </div>

        </section>
        
        <nav className="navbar py-0 py-md-2 navbar-expand-md navbar-light">
           <div className="container">
              <div className="navbar-collapse collapse" id="div_nav" >
                 <ul className="navbar-nav">
                    <li className="nav-item"> <a className="nav-link ps-0"  onClick={()=>ChangeLocation("/categories/")}  > Categories </a> </li>
                    <li className="nav-item"> <a className="nav-link"  onClick={()=>ChangeLocation("/About/")}  > About </a> </li>
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
                 {
                    isLogin ?   <ul className="navbar-nav ms-auto">
                    <li className="nav-item"> <a className="nav-link"  onClick={()=>ChangeLocation("/Account/")}> <img alt='profile' src={imageAvatar}  style={{ width : 30 , height : 30 , borderRadius : "50%"}} />  </a> </li>
                    <li className="nav-item"> <a className="nav-link"  onClick={()=>ChangeLocation("/Account/")}>My account </a> </li>
                 </ul>:  <ul className="navbar-nav ms-auto">
                    <li className="nav-item"> <a className="nav-link"  onClick={()=>ChangeLocation("/signin/")} >Sign in </a> </li>
                    <li className="nav-item"> <a className="nav-link"  onClick={()=>ChangeLocation("/register/")}>Register </a> </li>
                 </ul>
                 }
              </div>
           
           </div>
          
        </nav>
     </header>
    );
}

export default Header;

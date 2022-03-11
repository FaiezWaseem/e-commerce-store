import React from 'react'
import "../assets/css/sidebar.css"
import Sidebar from "../components/Sidebar"
import { useParams } from 'react-router-dom'; 
import { useSelected } from '../state'
import List from "../components/product/list/index"
import Add from "../components/product/add/index"
import View from "../components/product/view/index"
export default function SellerProduct() {
    const { q } = useParams();
    const [title , setTitle] = useSelected();
    setTitle("Product "+q);

React.useEffect(()=>{
    let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
   arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  let home = document.querySelector(".home-section");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
    home.classList.toggle("home-full");
  });
},[])
  return (
    <div>
    <Sidebar />
<section className="home-section home-full">
<div className="home-content">
  <i className='bx bx-menu' ></i>
  {title}
</div>
<section className="home-content-container">

     <div className='container'>
     {
       q === "List" ? <List /> : q === "Add" ? <Add /> : q === "View" ?  <View /> : <div> <h1>Error 404 Page Not Found</h1></div>
     }
     </div>
  </section>
</section>
</div>
  )
}

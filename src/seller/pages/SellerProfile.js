import React from 'react'
import "../assets/css/sidebar.css"
import Sidebar from "../components/Sidebar"
import EditProfile from "../../main/component/Account/EditProfile"
import { useSelected } from '../state'

export default function SellerProfile() {
    const [title , setTitle] = useSelected();
    setTitle("Profile")

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
        <EditProfile />
      </section>
  </section>
    </div>
  )
}

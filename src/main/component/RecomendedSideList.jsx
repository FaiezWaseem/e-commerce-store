import React from 'react'

export default function RecomendedSideList() {
  return (
    <div>
        <div className="card-body">
                       <h5 className="card-title mb-3">Recomended</h5>
        
                          <SideBarCard />               
                          <SideBarCard />               
                          <SideBarCard />               
                          <SideBarCard />               
                          <SideBarCard />               
                          <SideBarCard />               
                          <SideBarCard />               
                          <SideBarCard />               
                       

                    </div>
    </div>
  )
}


const SideBarCard =()=>{
    return     <article className="itemside mb-3">
    <a  className="aside">
        <img src="../assets/images/3.jpg" className="img-md img-thumbnail"/></a> 
    <div className="info">
       <a  className="title"> Mens T-shirt Cotton Base… </a> 
       <div className="mb-2 text-muted">$339.90</div>
       <a  className="btn btn-outline-primary btn-sm"> Add to cart </a> 
    </div>
 </article>
}
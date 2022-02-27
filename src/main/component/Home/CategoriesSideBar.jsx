import React from 'react'

export default function CategoriesSideBar() {
  return (
    <div className="card p-3 mb-3">
    <nav className="nav flex-column nav-pills">
     <a className="nav-link active" aria-current="page" href="#">Electronics</a> 
     <a className="nav-link" href="#">Clothes and wear</a>
      <a className="nav-link" href="#">Home interiors</a> 
      <a className="nav-link" href="#">Computer and tech</a>
       <a className="nav-link" href="#">Tools, equipments</a>
        <a className="nav-link" href="#">Sports and outdoor</a>
         <a className="nav-link" href="#">Animal and pets</a>
          <a className="nav-link" href="#">Machinery tools</a> 
          </nav>
 </div>
  )
}

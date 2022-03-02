import React from 'react'

export default function Intro() {
  return (
    <div className="bg-primary shadow" style={{
        backgroundImage : 'url("https://www.bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/intro-bg.jpg")',
        backgroundPosition : "center",
        backgroundSize : "cover"
    }}>
    <div className="container align-items-center justify-content-center d-flex" style={{minHeight : "355px"}}>
       <article className="text-center">
          <h1 className="display-4 text-white"> Great products are <br /> always in our store available </h1>
          <p className="lead text-white">Trendy Products, Factory Prices, Excellent Service</p>
          <a  className="btn btn-light btn-lg"> Purchase now</a> <a className="btn btn-warning btn-lg"> Explore </a> 
       </article>
    </div>
 </div>
  )
}

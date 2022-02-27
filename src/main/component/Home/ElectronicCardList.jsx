import React from 'react'

export default function ElectronicCardList({path}) {
  return (
    <div className="col-lg-3 col-md-6">
    <div className="itemside mb-4">
       <div className="aside"><img src={path} className="img-sm img-thumbnail" /></div>
       <div className="info">
          <a href="#" className="title">The name of item here</a> 
          <div className="price">$1280 </div>
         <a href="#" className="btn-link"> Add to cart </a> 
       </div>
    </div>
 </div>
  )
}

import React from 'react'

export default function ElectronicCard({path}) {
  return (
    <div className="col-xl col-lg-3 col-6">
    <a href="#" className="card-product-grid mb-0">
       <div className="img-wrap"> <img className="img-thumbnail" src={path}  /> </div>
       <div className="text-center mt-2">
          <p className="title">Great product name</p>
          <div className="price text-muted">$99.00</div>
        
       </div>
    </a>
   
 </div>
  )
}

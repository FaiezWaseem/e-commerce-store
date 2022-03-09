import React from 'react'

export default function CardList() {
  return (
    <div>
        <article className="card card-product-list  mt-5 mb-5">
                    <div className="row g-0">
                       <aside className="col-xl-3 col-md-4"> <a href="#" className="img-wrap"> 
                       <img src="../assets/images/1.jpg"/> </a> </aside>
                       
                       <div className="col-xl-9 col-md-8 border-start">
                          <div className="card-body">
                              <a href="#" className="title mb-2"> GoPro HERO6 4K Action Camera - Black </a> 
                             <div className="price-wrap me-3"> <span className="price h5"> $590.50 </span> <del className="price-old"> $1128.00 </del> </div>
                             
                             <div className="rating-wrap mb-2">
                                <ul className="rating-stars">
                                   <li className="stars-active" style={{width : "90%" }}> 
                                   <img src="bootstrap5-ecommerce/images/misc/stars-active.svg" alt=""/> </li>
                                   <li>
                                    <img src="bootstrap5-ecommerce/images/misc/starts-disable.svg" alt=""/> </li>
                                </ul>
                                <span className="label-rating text-warning">4.5</span> <i className="dot"></i> <span className="label-rating text-muted">154 orders</span> <i className="dot"></i> <span className="label-rating text-success">Free Shipping</span> 
                             </div>
                             
                             <p className="text-muted">The largest GoPro Camera display yet. Electrical heart sensor. Re-engineered Digital Crown with haptic feedback. Entirely familiar, yet completely redesigned</p>
                             <div>
                             <a href="#">Details</a> 
                             <a href="#" class="btn btn-outline-danger w-100"> Remove </a>
                             </div>
                          </div>
                     
                       </div>
                       
                    </div>
                  
                 </article>
    </div>
  )
}

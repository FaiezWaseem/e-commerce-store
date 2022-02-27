import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function GridItem() {
  const history = useNavigate();
  return (
    <div className="col-lg-4 col-sm-6 col-12" onClick={()=>history("/view/2/")} >
                 <div className="card card-product-grid">
                    <div className="img-wrap"> <img src="../assets/images/13.jpg" /> </div>
                    <div className="info-wrap border-top">
                       <div className="price-wrap"> <strong className="price">$120.00</strong> </div>
                      
                       <p className="title mb-2">T-shirts with multiple colors, for men and lady - unisex</p>
                       <a href="#" className="btn btn-primary">Add to cart</a> <a href="#" className="btn btn-outline-primary btn-icon"> <i className="fa fa-heart"></i> </a> 
                    </div>
            </div>
               
        </div>
  )
}

import React from 'react'
import main from "../../assets/images/big.jpg"
import image1 from "../../assets/images/thumb1.jpg"
import image2 from "../../assets/images/thumb2.jpg"
import image3 from "../../assets/images/thumb3.jpg"
import image4 from "../../assets/images/thumb4.jpg"
import image5 from "../../assets/images/thumb5.jpg"
import image6 from "../../assets/images/thumb6.jpg"

export default function Product() {
  return (
    <div>
<section className="mt-5 bg-white shadow-sm">
   <div className="container">
      <div className="row">
         <aside className="col-lg-6">
            <article className="gallery-wrap gallery-vertical">
               <a href="#" className="img-big-wrap img-thumbnail bg-light"> 
               <img height="520" src={main} className="mix-blend-multiply" /> 
               </a> 
               <div className="thumbs-wrap mb-3">
                  <a href="#" className="item-thumb"> 
                  <img width="60" height="60" src={image1} />
                  </a> <a href="#" className="item-thumb">
                  <img width="60" height="60" src={image2} /> </a> 
                  <a href="#" className="item-thumb">
                  <img width="60" height="60" src={image3}/> </a> 
                  <a href="#" className="item-thumb"> 
                  <img width="60" height="60" src={image4}/> </a>
                  <a href="#" className="item-thumb"> 
                  <img width="60" height="60" src={image5}/> </a>
                  <a href="#" className="item-thumb"> 
                  <img width="60" height="60" src={image6}/> </a> 
                  <a href="#" className="item-thumb">
                  <img width="60" height="60" src={image1}/> </a> 
               </div>
            </article>
         </aside>
         <div className="col-lg-6">
            <article className="ps-lg-3">
               <h4 className="title text-dark">Mens Long Sleeve T-shirt Cotton Base <br/> Layer Slim Muscle</h4>
               <div className="rating-wrap my-3">
                  <ul className="rating-stars">
                     <li style={{ width : "80%"}} className="stars-active">
                        <img src="bootstrap5-ecommerce/images/misc/stars-active.svg" alt=""/> 
                     </li>
                     <li> <img src="bootstrap5-ecommerce/images/misc/starts-disable.svg" alt=""/> </li>
                  </ul>
                  <b className="label-rating text-warning"> 4.5</b> <i className="dot"></i> 
                  <span className="label-rating text-muted"> 
                  <i className="fa fa-comment"></i> 32 reviews </span>
                  <i className="dot"></i> <span className="label-rating text-muted">
                  <i className="fa fa-shopping-basket"></i> 154 orders</span> 
               </div>
               <hr/>
               <ul className="list-check cols-two mb-4">
                  <li>Optical heart sensor </li>
                  <li>Some feature name </li>
                  <li>Super fast and amazing </li>
                  <li>Optical heart sensor </li>
                  <li>Easy fast and ver good </li>
                  <li>Metallic corpus </li>
                  <li>Modern style and design</li>
               </ul>
               <div className="mb-3">
                  <label className="text-muted mb-2">Choose style</label> 
                  <div> <label className="checkbox-btn">
                     <input type="radio" name="choose_22" /> <span className="btn btn-light"> Orange </span> </label> <label className="checkbox-btn"> 
                     <input type="radio" name="choose_22" /> <span className="btn btn-light"> Green </span> </label> 
                     <label className="checkbox-btn">
                     <input type="radio" name="choose_22" /> <span className="btn btn-light"> Black </span> </label>
                      <label className="checkbox-btn"> 
                      <input type="radio" name="choose_22"/> <span className="btn btn-light"> White </span> </label> 
                  </div>
               </div>
               <div className="mb-4"> <var className="price h5">$98.00</var> <span>/ 1 box, incl VAT </span> </div>
               <div className="row gx-2 mb-4">
                  <div className="col-2">
                     <select className="form-select">
                        <option> 1 </option>
                        <option> 2 </option>
                        <option> 3 </option>
                     </select>
                  </div>
                  <div className="col-auto"> <a href="#" className="btn btn-primary w-100"> <i className="me-2 fa fa-shopping-basket"></i> Add to cart </a> </div>
                  <div className="col"> <a href="#" className="btn btn-light btn-icon"> <i className="fas fa-heart"></i> </a> </div>
               </div>
               <label className="form-check"> 
               <input className="form-check-input" type="checkbox" value=""/>
                <span className="form-check-label"> Add to compare </span> </label> 
            </article>
         </div>
      </div>
   </div>
</section>
    </div>
  )
}

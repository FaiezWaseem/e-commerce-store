import React from 'react'
import {useNavigate} from "react-router-dom"
import {  useRecoilState } from "recoil";
import totalItems , { set  ,remove } from "../cart/cartLogic"

export default function ListItem() {
   const history = useNavigate();
   const [items , setItems] = useRecoilState(totalItems);
   const random = (v) => Math.floor((Math.random() * v )+1)
   const addToCart = () => {
     const item = {id : random(100) ,qty : 1 , price : 120};
     set(items , item , setItems);
   }

  return (
    <div  >
        <article className="card card-product-list">
   <div className="row g-0">
      <aside className="col-xl-3 col-lg-4 col-md-12 col-12"   onClick={()=>history("/view/3/")}> 
      <a href="#" className="img-wrap"> <img src="../assets/images/3.jpg"/> </a> </aside>

      <div className="col-xl-6 col-lg-5 col-md-7 col-sm-7"  onClick={()=>history("/view/3/")}>
         <div className="card-body">
            <a href="#" className="h6 title mb-3"> Xiaomi Redmi 8 Original Global 128GB </a> 
            <ul className="list-check mb-2">
               <li>Optical heart sensor</li>
               <li>Gorilla glass screen with protection</li>
               <li>Modern style and design</li>
               <li>Some feature name</li>
            </ul>
            <label className="form-check"> 
            <input className="form-check-input" type="checkbox" value="" /> 
            <span className="form-check-label"> Add to compare </span> </label> 
         </div>
         
      </div>

      <aside className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
         <div className="info-aside">
            <div className="price-wrap"> <span className="price h5"> $240 </span> <del className="price-old"> $398</del> </div>
       
            <p className="text-success">Free shipping</p>
            <p className="text-muted"> 10 days ship </p>
            <br /> <a href="#" className="btn btn-primary w-100 mb-2" onClick={addToCart} > Add to cart </a> <a href="#" className="btn btn-outline-primary w-100"> Wishlist </a> 
         </div>
         
      </aside>

   </div>

</article>
    </div>
  )
}

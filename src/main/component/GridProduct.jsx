import React from 'react'
import {useNavigate} from 'react-router-dom';
import  { useCart } from "../component/cart/cartLogic"
import { toast } from 'wc-toast';

export default function GridProduct() {
  const history = useNavigate();
  const random = (v) => Math.floor((Math.random() * v )+1)
  const [setItem , removeItem] = useCart();
  const price = random(300)
  const addToCart = () => {
    const item = {id : random(100) ,qty : 1 , price : price};
    setItem(item);
    toast.success('added To Card success');
  }
  return (
    <div className="col-lg-3 col-sm-6 col-12"  >
                 <div className="card card-product-grid" >
                    <div className="img-wrap" onClick={()=>history("/view/1/")}> 
                    <img src="../../assets/images/13.jpg" /> 
                    </div>
                    <div className="info-wrap border-top">
                       <div className="price-wrap"> <strong className="price">${price}</strong> </div>
                      
                       <p className="title mb-2">T-shirts with multiple colors, for men and lady - unisex</p>
                       <a className="btn btn-primary" onClick={addToCart}
                       >Add to cart</a> 
                       <a  className="btn btn-outline-primary btn-icon mx-2">
                       <i class='bx bxs-heart'></i></a> 
                    </div>
            </div>
               
        </div>
  )
}

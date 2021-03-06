import React from 'react'
import {useNavigate} from 'react-router-dom';
import  { useCart } from "../cart/cartLogic"
import { toast } from 'wc-toast';
export default function GridItem() {
  const random = (v) => Math.floor((Math.random() * v )+1)
  const history = useNavigate();
  const price = random(300);
  const [setItem , removeItem] = useCart();
  const addToCart = () => {
    const item = {id : random(100) ,qty : 1 , price : price};
    setItem(item);
    toast.success("Added To Cart");
  }
  return (
    <div className="col-lg-4 col-sm-6 col-12"  >
                 <div className="card card-product-grid">
                    <div className="img-wrap" onClick={()=>history("/view/2/")}> <img src="../assets/images/13.jpg" /> </div>
                    <div className="info-wrap border-top">
                       <div className="price-wrap"> <strong className="price">${price}</strong> </div>
                      
                       <p className="title mb-2">T-shirts with multiple colors, for men and lady - unisex</p>
                       <a  className="btn btn-primary" onClick={addToCart} >Add to cart</a> <a href="#" className="btn btn-outline-primary btn-icon"> <i class='bx bxs-heart my-1'></i></a> 
                    </div>
            </div>
               
        </div>
  )
}

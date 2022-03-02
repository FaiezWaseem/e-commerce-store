import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import CartItem from "../component/cart/CartItem"
import ItemTotal from "../component/cart/ItemTotal"
import { useRecoilState } from "recoil";
import totalItems from "../component/cart/cartLogic" 

export default function Cart() {
  const [items] =  useRecoilState(totalItems)
  return (
    <div>
       <Header />
       <div  className='container mt-5 mb-5'>
           <div  className='row'>
               <div className='col-lg-8'>
                 {
                   items.map((item)=>{
                   return <CartItem  obj={item} key={item.id} />
                   })
                 }
               </div>
               <div className='col-lg-4'>
               <ItemTotal />
               </div>

           </div>
        
       </div>
       <Footer />

    </div>
  )
}

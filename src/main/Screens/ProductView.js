import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Product from "../component/productview/product"
import Aboutseller from "../component/productview/AboutSeller"
import Description from "../component/productview/Description"
import Reviews from "../component/productview/reviews"
import Reviewform from "../component/productview/ReviewForm"
export default function ProductView() {
  return (
    <div>
        <Header page={"View"} />
         <Product/>
         <div className='container'>
         <div  className='row mt-5'>
             <div  className='col-lg-8'>
               <Description />
             </div>
             <div className='col-lg-4' >
               <Aboutseller />
             </div>
         </div>
         </div>
         <div className='container'>
         <div  className='row mt-5'>
             <div  className='col-lg-8'>
               <Reviews />
             </div>
             <div className='col-lg-4' >
               <Reviewform />
             </div>
         </div>
         </div>
        <Footer/>
    </div>
  )
}

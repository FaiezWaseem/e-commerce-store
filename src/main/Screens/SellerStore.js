import React from 'react'
import Header from "../component/Header"
import Footer from "../component/Footer"
import Crousel from "../component/seller/Crousel"
import Aboutseller from "../component/seller/AboutSeller"
import GridProduct from "../component/GridProduct"
export default function SellerStore() {
  return (
    <div>
      <Header/>
      <Crousel/>
        <div className='container'>
          <div className='row'>
               <div className='col-lg-4'>
                 <Aboutseller />
                 </div>
                 <GridProduct />
                 <GridProduct />
                 <GridProduct />
                 <GridProduct />
                 <GridProduct />
                 <GridProduct />
                 <GridProduct />
                 <GridProduct />
                 <GridProduct />


          </div>
        </div>
      <Footer/>
    </div>
  )
}

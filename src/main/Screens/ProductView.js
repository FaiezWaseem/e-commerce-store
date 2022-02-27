import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Product from "../component/productview/product"
export default function ProductView() {
  return (
    <div>
        <Header page={"View"} />
         <Product/>
        <Footer/>
    </div>
  )
}

import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import CardCategory from "../component/categories/CardCategory"
export default function Categories() {
  return (
    <div>
      <Header page={"categories"} />
        <div  className='container mt-5 my-5'>
          <div className='row' >
          <CardCategory  info={ {
              title : "Men Summer Collection",
              offer : 60,
              url : "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/banner4.jpg",
              type : "meanswear"
            } } />
            <CardCategory  info={ {
              title : "Womens Summer Collection",
              offer : 40,
              url : "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/banner5.jpg",
              type : "meanswear"
            } } />
            <CardCategory  info={ {
              title : "Kids Summer Collection",
              offer : 40,
              url : "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/banner6.jpg",
              type : "meanswear"
            } } />
            <CardCategory  info={ {
              title : "Smart Watches Collection",
              offer : 10,
              url : "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/banner8.jpg",
              type : "meanswear"
            } } />
            <CardCategory  info={ {
              title : "Camera Collection",
              offer : 10,
              url : "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/banner1.jpg",
              type : "meanswear"
            } } />
            <CardCategory  info={ {
              title : "HeadPhones Collection",
              offer : 20,
              url : "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/banner2.jpg",
              type : "meanswear"
            } } />
            <CardCategory  info={ {
              title : "HeadPhones Collection",
              offer : 10,
              url : "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/banner2.jpg",
              type : "meanswear"
            } } />
            <CardCategory  info={ {
              title : "Bags Collection",
              offer : 5,
              url : "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.jpg",
              type : "meanswear"
            } } />
            <CardCategory  info={ {
              title : "Jackets Collection",
              offer : 25,
              url : "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.jpg",
              type : "meanswear"
            } } />
            
          </div>
        </div>
      <Footer />
    </div>
  )
}

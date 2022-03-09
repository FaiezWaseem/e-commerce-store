import React from 'react'
import Header from "../component/Header";
import Footer from "../component/Footer";
import CardList from "../component/wishlist/CardList"
import RecomendedSideList from "../component/RecomendedSideList"
export default function WishList() {
  return (
    <div>
        <Header page={"wishlist"} />
                   <div  className='container'>
                      <div className='row'>
                         
                         <div className='col-lg-8'>
                              <CardList />
                              <CardList />
                              <CardList />
                              <CardList />
                         </div>
                         <div className='col-lg-4'>
                           <RecomendedSideList/>
                         </div>

                      </div>
                   </div>
         <Footer />

    </div>
  )
}

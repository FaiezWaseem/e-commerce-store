import React from 'react'
import Header from "../component/Header";
import Intro from '../component/Home/Intro';
import SubCategories from "../component/Home/SubCategories"
import GridProduct from "../component/GridProduct"
import ElectronicCard from "../component/Home/ElectronicCard"
import ElectronicCardList from "../component/Home/ElectronicCardList"
import Banner from "../component/Home/Banner"
import EndBanner from "../component/Home/EndBanner"
import Footer from "../component/Footer"
import { useLoader }  from "../state"

export default function Home() {
  const [isLoading , setLoading ] = useLoader();

  React.useEffect(()=>{
    setLoading(true)
     setTimeout(()=> setLoading(false) ,1000)
     
  },[])


  return (
    <div>
      <Header page={"home"}  />
      <section  className='padding-top-sm'>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          <Intro />
          </div>

        </div>
        </div>
       
      </section>
      <section  className='container padding-top-sm'>
        <SubCategories />
      </section>
      <section  className='container padding-top-sm' >
        <h1> New Products</h1>
        <div className='row  padding-y'>
        <GridProduct />
      <GridProduct />
      <GridProduct />
      <GridProduct />
        </div>
        <div className='row'>
        <GridProduct />
      <GridProduct />
      <GridProduct />
      <GridProduct />
        </div>
        <h1  className='padding-top-sm'>
            Electronics
        </h1>
        <div className='card card-body'>
          <div className='row '>
       <ElectronicCard path="assets/images/1.jpg" />
       <ElectronicCard path="assets/images/2.jpg" />
       <ElectronicCard path="assets/images/3.jpg"  />
       <ElectronicCard path="assets/images/4.jpg"  />
          </div>
        </div>
        <div className='card card-body mt-5'>
          <div className='row '>
       <ElectronicCardList path="assets/images/1.jpg" />
       <ElectronicCardList path="assets/images/2.jpg" />
       <ElectronicCardList path="assets/images/3.jpg"  />
       <ElectronicCardList path="assets/images/4.jpg"  />
          </div>
        </div>
      </section>
      <div  className='container mt-5  mb-5'>
          <Banner   />
      </div>
      <div  className='container mt-5  mb-5'>
      <div className='row'>
        <GridProduct />
      <GridProduct />
      <GridProduct />
      <GridProduct />
        </div>
      </div>

      <div  className='container mt-5  mb-5'>
          <EndBanner   />
      </div>
      <Footer />
    </div>
  )
}

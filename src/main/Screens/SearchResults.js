import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import FilterSideBar from "../component/search/FilterSideBar"
import RouteBar from "../component/search/RouteBar"
import ListItem from "../component/search/ListItem"
import GridItem from "../component/search/GridItem"
import { atom, useRecoilState } from "recoil";
const gridState = atom({
   key: "isGrid", // unique ID (with respect to other atoms/selectors)
   default: false, // default value (aka initial value)
 });

export default function SearchResults() {
  const { query } = useParams();
  const [isGrid , setGrid] = useRecoilState(gridState)
   
  return (
          
    <div>
      <Header page="search"/>
         <div className='container  mt-5 mb-5'>
          <RouteBar />
           <div className='row mt-2'>
              <div className='col-lg-3'>
                
                 <FilterSideBar />
                 </div>
             
                 {
                  isGrid ? <div className='col-lg-9'> <div className='row' >
                  <GridItem />
                  <GridItem />
                  <GridItem />
                  <GridItem />
                  <GridItem />
                  </div> </div> :
                   <div className='col-lg-9'>
                   <ListItem />
                   <ListItem />
                   <ListItem />
                   <ListItem />
                   </div>

                 }
                
                
           </div>

         </div>
      <Footer />
   
    </div>
  )
}

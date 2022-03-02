import React from 'react'
import SideBar from "./SideBar"
import AccountTab from "./AccountTab"
import Spinner from 'react-spinner-material';
export default function Main() {
  return (
    <div>
           <div  className='container mt-5 mb-5'>
            <div  className='row'>
               <div className='col-lg-12'>
                   <Spinner size={120} spinnercolor={"#333"} spinnerWidth={2} visible={false} />
                   <SideBar />
               </div>
            </div>

        </div>
        <div  style={{ textAlign : "center"}}>
        <p> Seller ? <a  className='btn btn-primary'>Visit</a> Seller panel</p>
        </div>
    </div>
  )
}

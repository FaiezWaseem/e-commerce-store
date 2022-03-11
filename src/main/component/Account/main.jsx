import React from 'react'
import SideBar from "./SideBar"

export default function Main() {

  return (
    <div  >

       <div className='container mt-5 mb-5'>
          <div className='row'>
            <div className='col-lg-12'>

              <SideBar />
            </div>
          </div>

        </div><div style={{ textAlign: "center" }}>
            <p> Seller?<a className='btn btn-primary'  href='/seller/'>Visit</a> Seller panel</p>
          </div>
    </div>
  )
}

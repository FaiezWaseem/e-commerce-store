import React from 'react'
import SideBar from "./SideBar"
import OverlayLoader from "../OverlayLoader"
export default function Main() {
  const [isLoading , setLoading]  = React.useState(true)

  React.useEffect(()=>{
    setTimeout(()=> setLoading(false) , 4000)
  },[])


  return (
    <div  >
       <OverlayLoader show={isLoading} />
       <div className='container mt-5 mb-5'>
          <div className='row'>
            <div className='col-lg-12'>

              <SideBar />
            </div>
          </div>

        </div><div style={{ textAlign: "center" }}>
            <p> Seller?<a className='btn btn-primary'>Visit</a> Seller panel</p>
          </div>
    </div>
  )
}

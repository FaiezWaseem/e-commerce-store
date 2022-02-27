import React from 'react'

export default function Banner() {
  return (
    <article className="card p-4 bg-primary">
    <div className="row align-items-center">
       <div className="col">
          <h4 className="mb-0 text-white"> 20% off On Your First Order</h4>
          <p className="mb-0 text-white-50">*Only Applicable for new users</p>
       </div>
       <div className="col-auto"> <a className="btn btn-warning" href="#">Discover</a> </div>
    </div>
 </article>
  )
}

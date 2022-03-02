import React from 'react'

export default function NewOrders() {
  return (
    <div>
        <div className="card-body">
                       <header className="d-md-flex">
                          <div className="flex-grow-1">
                             <h6 className="mb-0"> Order ID: 1032 <i className="dot"></i><span className="text-danger"> Pending </span> </h6>
                             <span>Date: 16 December 2020</span> 
                          </div>
                          <div> <a href="#" className="btn btn-sm btn-outline-danger">Cancel order</a> <a href="#" className="btn btn-sm btn-primary">Track order</a> </div>
                       </header>
                       <hr />
                       <div className="row">
                          <div className="col-md-4">
                             <p className="mb-0 text-muted">Contact</p>
                             <p className="m-0"> Alex Donald <br/> Phone: 109-295-9131 <br/> Email: info@mywebsite.com </p>
                          </div>
                         
                          <div className="col-md-4 border-start">
                             <p className="mb-0 text-muted">Shipping address</p>
                             <p className="m-0"> United States <br/> 600 Markley Street, Suite 170777 Port Reading, NJ 07064 </p>
                          </div>
                         
                          <div className="col-md-4 border-start">
                             <p className="mb-0 text-muted">Payment</p>
                             <p className="m-0"> <span className="text-success"> Visa **** 0932 </span> <br/> Shipping fee: $12 <br/> Total paid: $150.90 </p>
                          </div>
           
                       </div>
                       
                       <hr/>
                       <ul className="row">
                          <li className="col-lg-4 col-md-6">
                             <div className="itemside mb-3">
                                <div className="aside"> <img width="72" height="72" src="../assets/images/1.jpg" className="img-sm rounded border"/> </div>
                                <div className="info">
                                   <p className="title">Apple SmartWatch Series 4 Space Gray</p>
                                   <strong> 2x = $137.00 </strong> 
                                </div>
                             </div>
                          </li>
                          <li className="col-lg-4 col-md-6">
                             <div className="itemside mb-3">
                                <div className="aside"> <img width="72" height="72" src="../assets/images/2.jpg" className="img-sm rounded border"/> </div>
                                <div className="info">
                                   <p className="title">Gaming Headset with mic</p>
                                   <strong> 2x = $339.90 </strong> 
                                </div>
                             </div>
                          </li>
                          <li className="col-lg-4 col-md-6">
                             <div className="itemside mb-3">
                                <div className="aside"> <img width="72" height="72" src="../assets/images/3.jpg" className="img-sm rounded border"/> </div>
                                <div className="info">
                                   <p className="title">Backpack for hiking</p>
                                   <strong> 2x = $339.90 </strong> 
                                </div>
                             </div>
                          </li>
                       </ul>
                    </div>
    </div>
  )
}

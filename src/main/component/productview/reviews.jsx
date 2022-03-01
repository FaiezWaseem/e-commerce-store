import React from 'react'

export default function Reviews() {
  return (
    <div>
                 <div className="card mb-4">
                    <div className="card-body">
                       <h5 className="card-title">Reviews </h5>
                       <hr/>
                       <blockquote className="border-bottom">
                          <div className="float-lg-end d-flex mb-3">
                             <div className="btn-group d-inline-flex me-2"> <button className="btn btn-light btn-sm float-end" data-bs-toggle="tooltip" data-bs-title="Like"> <i className="fa fa-thumbs-up"></i> </button> <button className="btn btn-light btn-sm float-end" data-bs-toggle="tooltip" data-bs-title="Dislike"> <i className="fa fa-thumbs-down"></i> </button> </div>
                             <button className="btn btn-light btn-sm float-end "> <i className="fa fa-ellipsis-v"></i> </button> 
                          </div>
                          <div className="icontext">
                             <img src="assets/images/avatar.jpg" className="img-xs icon rounded-circle"/> 
                             <div className="text">
                                <h6 className="mb-0"> Michael Jonathan </h6>
                                <div className="rating-wrap">
                                   <ul className="rating-stars">
                                      <li style={{ width : "80%"}} className="stars-active"> 
                                      <img src="assets/images/stars-active.svg" alt=""/> </li>
                                      <li> <img src="assets/images/starts-disable.svg" alt=""/> </li>
                                   </ul>
                                   <b className="dot"></b> <small className="label-rating text-muted"> Purchased on Wed, May 12 </small> 
                                </div>
                             </div>
                          </div>
                          
                          <div className="mt-3">
                             <p> It used to be great, finding almost every song, but now i dont know what happened (they might be hacked even) that it can not find any song and it just makes up a different song to thats all and all the best Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                          </div>
                       </blockquote>
                       <blockquote className="border-bottom">
                          <div className="float-lg-end d-flex mb-3">
                             <div className="btn-group d-inline-flex me-2"> <button className="btn btn-light btn-sm float-end" data-bs-toggle="tooltip" data-bs-title="Like"> <i className="fa fa-thumbs-up"></i> </button> <button className="btn btn-light btn-sm float-end" data-bs-toggle="tooltip" data-bs-title="Dislike"> <i className="fa fa-thumbs-down"></i> </button> </div>
                             <button className="btn btn-light btn-sm float-end "> <i className="fa fa-ellipsis-v"></i> </button> 
                          </div>
                          <div className="icontext">
                             <img src="assets/images/avatar1.jpg" className="img-xs icon rounded-circle"/> 
                             <div className="text">
                                <h6 className="mb-0"> Michael Jonathan </h6>
                                <div className="rating-wrap">
                                   <ul className="rating-stars">
                                      <li style={{ width : "80%"}} className="stars-active"> 
                                      <img src="bootstrap5-ecommerce/images/misc/stars-active.svg" alt=""/> </li>
                                      <li> <img src="bootstrap5-ecommerce/images/misc/starts-disable.svg" alt=""/> </li>
                                   </ul>
                                   <b className="dot"></b> <small className="label-rating text-muted"> Purchased on Wed, May 12 </small> 
                                </div>
                             </div>
                          </div>
                        
                          <div className="mt-3">
                             <p> It used to be great, finding almost every song, but now i dont know what happened (they might be hacked even) that it can not find any song and it just makes up a different song to thats all and all the best Just makes up a different song to thats all and all the best </p>
                          </div>
                       </blockquote>
                       <blockquote className="border-bottom">
                          <div className="float-lg-end d-flex mb-3">
                             <div className="btn-group d-inline-flex me-2"> <button className="btn btn-light btn-sm float-end" data-bs-toggle="tooltip" data-bs-title="Like"> <i className="fa fa-thumbs-up"></i> </button> <button className="btn btn-light btn-sm float-end" data-bs-toggle="tooltip" data-bs-title="Dislike"> <i className="fa fa-thumbs-down"></i> </button> </div>
                             <button className="btn btn-light btn-sm float-end "> <i className="fa fa-ellipsis-v"></i> </button> 
                          </div>
                          <div className="icontext">
                             <img src="assets/images/avatar3.jpg" className="img-xs icon rounded-circle"/> 
                             <div className="text">
                                <h6 className="mb-0"> John Alex </h6>
                                <div className="rating-wrap">
                                   <ul className="rating-stars">
                                      <li style={{ width : "80%"}} className="stars-active"> 
                                      <img src="bootstrap5-ecommerce/images/misc/stars-active.svg" alt=""/> </li>
                                      <li> <img src="bootstrap5-ecommerce/images/misc/starts-disable.svg" alt=""/> </li>
                                   </ul>
                                   <b className="dot"></b> <small className="label-rating text-muted"> Purchased on Wed, Apr 30 </small> 
                                </div>
                             </div>
                          </div>
                    
                          <div className="mt-3">
                             <p> It used to be great, finding almost every song, but now i dont know what happened (they might be hacked even) that it can not find any song and it just makes up a different song to thats all and all the best It used to be great, finding almost every song, but now i dont know what happened (they might be hacked even) </p>
                          </div>
                       </blockquote>
                    </div>
                 </div>
    </div>
  )
}

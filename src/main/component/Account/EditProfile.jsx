import React from 'react'
const imageAvatar = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8F97-4tTe0kDw2M0XktW8gHaHZ%26pid%3DApi&f=1";

export default function EditProfile() {
  return (
    <div>
        <div className="card-body">
                       <form>
                          <div className="row">
                             <div className="col-lg-8">
                                <div className="row gx-3">
                                   <div className="col-6 mb-3"> <label className="form-label">First name</label>
                                    <input className="form-control" type="text" placeholder="Type here"/> </div>
                                
                                   <div className="col-6 mb-3"> <label className="form-label">Last name</label> 
                                   <input className="form-control" type="text" placeholder="Type here"/> </div>
                                
                                   <div className="col-lg-6 col-md-6 mb-3"> <label className="form-label">Email</label> 
                                   <input className="form-control" type="email" placeholder="example@mail.com"/> </div>
                                
                                   <div className="col-lg-6 col-md-6 mb-3"> <label className="form-label">Phone</label>
                                    <input className="form-control" type="tel" placeholder="+1234567890"/> </div>
                                
                                   <div className="col-lg-12 mb-3"> <label className="form-label">Address</label> 
                                   <input className="form-control" type="text" placeholder="Type here"/> </div>
                                
                                   <div className="col-lg-6 col-6 mb-3"> <label className="form-label">Birthday</label>
                                    <input className="form-control" type="date"/> </div>
                                
                                </div>
                               
                             </div>
                             
                             <aside className="col-lg-4">
                                <div className="text-lg-center mt-3">
                                   <img className="img-lg mb-3 img-avatar" src={imageAvatar} alt="User Photo"/> 
                                   <div> <a className="btn btn-sm btn-light" href="#"> <i className="fa fa-camera"></i> Upload </a> <a className="btn btn-sm btn-outline-danger" href="#"> <i className="fa fa-trash"></i> </a> </div>
                                </div>
                             </aside>
                             
                          </div>
                         <br/> <button className="btn btn-primary" type="submit">Save changes</button> 
                       </form>
                       <hr className="my-4"/>
                       <div className="row" style={{ maxWidth : "920px"}}>
                          <div className="col-md">
                             <article className="box mb-3 bg-light">
                                <a className="btn float-end btn-light btn-sm" href="#">Change</a> 
                                <p className="title mb-0">Password</p>
                                <small className="text-muted d-block" style={{ width : "70%"}}>You can reset or change your password by clicking here</small> 
                             </article>
                          </div>
                          
                          <div className="col-md">
                             <article className="box mb-3 bg-light">
                                <a className="btn float-end btn-outline-danger btn-sm" href="#">Deactivate</a> 
                                <p className="title mb-0">Remove account</p>
                                <small className="text-muted d-block" style={{ width : "70%"}}>Once you delete your account, there is no going back.</small> 
                             </article>
                          </div>
                          
                       </div>
                      
                    </div>
    </div>
  )
}

import React from 'react'
const imageAvatar = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8F97-4tTe0kDw2M0XktW8gHaHZ%26pid%3DApi&f=1";

export default function AccountTab() {
  return (
    <div>
        <div className="card-body">
                       <div className="itemside align-items-center">
                          <div className="aside">
                              <img src={imageAvatar} className="icon-md img-avatar"/> </div>
                          <div className="info">
                             <h6 className="title">Mr. Jackson Mike</h6>
                             <p>Email: myusername@gmail.com <i className="dot"></i> Phone: +1234567890988 <a href="#" className="px-2"><i className="fa fa-pen"></i></a> </p>
                          </div>
                       </div>
                       <hr/>
                       <p className="text-muted">Delivery addresses</p>
                       <div className="row g-2 mb-3">
                          <div className="col-md-6">
                             <article className="box"> <b className="mx-2 text-muted"><i className="fa fa-map-marker-alt"></i></b> Tashkent city, Street name, Building 123, House 321 </article>
                          </div>
                          
                          <div className="col-md-6">
                             <article className="box"> <b className="mx-2 text-muted"><i className="fa fa-map-marker-alt"></i></b> Moscow city, Street name, Building lenin, House 77 </article>
                          </div>
                          
                       </div>
                       <a href="#" className="btn btn-outline-primary"> <i className="me-2 fa fa-plus"></i> Add new address </a> 
                       <hr/>
                       <p className="text-muted">Payment methods</p>
                       <div className="row g-2 mb-3">
                          <div className="col-md-6">
                             <article className="box"> <b className="mx-2 text-muted"><i className="fa fa-credit-card"></i></b> Visa •••• 9905, Exp: 12/21 </article>
                          </div>
                          
                       </div>
                       <a href="#" className="btn btn-outline-primary"> <i className="me-2 fa fa-plus"></i> Add payment method </a> 
                    </div>
    </div>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <footer className="section-footer bg-primary footer-dark">
    <div className="container">
       <section className="footer-main py-5">
          <div className="row">
             <aside className="col-12 col-sm-12 col-lg-3">
                <article className="me-lg-4">
                   
                   <p className="mt-3"> © 2018- 2021 Templatemount. <br /> All rights reserved. </p>
                </article>
             </aside>
             <aside className="col-6 col-sm-4 col-lg-2">
                <h6 className="title">Store</h6>
                <ul className="list-menu">
                   <li> <a href="#">About us</a></li>
                   <li> <a href="#">Find store</a></li>
                   <li> <a href="#">Categories</a></li>
                   <li> <a href="#">Blogs</a></li>
                </ul>
             </aside>
             <aside className="col-6 col-sm-4 col-lg-2">
                <h6 className="title">Information</h6>
                <ul className="list-menu">
                   <li> <a href="#">Help center</a></li>
                   <li> <a href="#">Money refund</a></li>
                   <li> <a href="#">Shipping info</a></li>
                   <li> <a href="#">Refunds</a></li>
                </ul>
             </aside>
             <aside className="col-6 col-sm-4 col-lg-2">
                <h6 className="title">Support</h6>
                <ul className="list-menu">
                   <li> <a href="#"> Help center </a></li>
                   <li> <a href="#"> Documents </a></li>
                   <li> <a href="#"> Account restore </a></li>
                   <li> <a href="#"> My Orders </a></li>
                </ul>
             </aside>
             <aside className="col-12 col-sm-12 col-lg-3">
                <h6 className="title">Newsletter</h6>
                <p>Stay in touch with latest updates about our products and offers </p>
                <form className="mb-3">
                   <div className="input-group"> <input className="form-control" type="text" placeholder="Email" /> <button className="btn btn-light" type="submit"> Join </button> </div>
                   
                </form>
             </aside>
          </div>
       
       </section>
       
       <hr className="my-0" />
       <section className="footer-bottom d-flex justify-content-lg-between">
          <div> <i className="fab fa-lg fa-cc-visa"></i> <i className="fab fa-lg fa-cc-amex"></i> <i className="fab fa-lg fa-cc-mastercard"></i> <i className="fab fa-lg fa-cc-paypal"></i> </div>
       </section>
    </div>
  
 </footer>
  )
}

import React from 'react';
import image2 from "../../assets/images/thumb2.jpg"
const Aboutseller = () => {
    return (
        <article className="card">
        <div className="card-body">
           <h5 className="card-title">About seller</h5>
           <div className="itemside mb-4">
              <div className="aside">
                   <img src={image2} width="60" height="60" className="img-sm img-thumbnail"/> 
                   </div>
              <div className="info">
                 <a href="#" className="h6 title">Texnoshop LLC</a> 
                 <div className="rating-wrap">
                    <ul className="rating-stars">
                       <li className="stars-active" style={{ width : "70%"}}> 
                       <img src="assets/images/stars-active.svg" alt="" /> </li>
                       <li> <img src="assets/images/starts-disable.svg" alt=""/> </li>
                    </ul>
                    <span className="label-rating text-muted">120 feedback</span> 
                 </div>
          
                 <p> <img height="20" src="assets/images/flag-usa.png" /> United States, 2 years</p>
              </div>
           </div>
           <p> Established in 1980, lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore ipsum </p>
           <div className="d-flex gap-2 mb-2"> <button className="btn w-100 btn-success" type="button"> <i className="me-2 fa fa-phone"></i> Contact</button> <button className="btn w-100 btn-warning" type="button"> <i className="me-2 fa fa-comment-dots"></i> Message</button> </div>
           <a className="btn w-100 btn-outline-primary">Visit store</a> 
        </div>
     </article>
    );
}

export default Aboutseller;

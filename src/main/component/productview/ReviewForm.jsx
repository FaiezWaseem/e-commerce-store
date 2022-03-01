import React from 'react';

const Reviewform = () => {
    return (
        <div>
                    <article className="card">
                    <div className="card-body">
                       <a href="#" className="btn w-100 btn-primary-light">Write review</a> 
                       <div className="rating-wrap mt-3">
                          <ul className="rating-stars stars-lg">
                             <li style={{ height : " 80% "}} className="stars-active"> 
                             <img src="bootstrap5-ecommerce/images/misc/stars-active.svg" alt="" /> </li>
                             <li> <img height="520" src="bootstrap5-ecommerce/images/misc/starts-disable.svg" alt=""/> </li>
                          </ul>
                          <b className="label-rating text-lg"> 4.6 out of 5 </b> 
                       </div>
                       
                       <p className="mt-1 text-muted"> 320 reviews </p>
                       <table className="table table-borderless table-sm">
                          <tbody>
                             <tr valign="middle">
                                <td width="50"> 5 star </td>
                                <td>
                                   <div className="progress" style={{ height : "10px" }}>
                                      <div className="progress-bar bg-warning" role="progressbar" style={{ width : "95%"  }} aria-valuenow="25" aria-valuemax="100"></div>
                                   </div>

                                </td>
                                <td width="50"> 95 % </td>
                             </tr>
                             <tr valign="middle">
                                <td> 4 star </td>
                                <td>
                                   <div className="progress" style={{ height : "10px" }}>
                                      <div className="progress-bar bg-warning" role="progressbar" style={{ width : " 80% "}}aria-valuenow="80" aria-valuemax="100"></div>
                                   </div>

                                </td>
                                <td> 80 % </td>
                             </tr>
                             <tr valign="middle">
                                <td> 3 star </td>
                                <td>
                                   <div className="progress" style={{ height : "10px" }}>
                                      <div className="progress-bar bg-warning" role="progressbar" style={{ width : "35%"  }}  aria-valuenow="35" aria-valuemax="100"></div>
                                   </div>

                                </td>
                                <td> 35 % </td>
                             </tr>
                             <tr valign="middle">
                                <td> 2 star </td>
                                <td>
                                   <div className="progress" style={{ height : "10px" }}>
                                      <div className="progress-bar bg-warning" role="progressbar" style={{ width : "13%"  }} aria-valuenow="13" aria-valuemax="100"></div>
                                   </div>

                                </td>
                                <td> 13 % </td>
                             </tr>
                             <tr valign="middle">
                                <td> 1 star </td>
                                <td>
                                   <div className="progress" style={{ height : "10px" }}>
                                      <div className="progress-bar bg-warning" role="progressbar" style={{ width : "15%"  }}  aria-valuenow="5" aria-valuemax="100"></div>
                                   </div>

                                </td>
                                <td> 15 % </td>
                             </tr>
                          </tbody>
                       </table>
                    </div>
                 </article>
        </div>
    );
}

export default Reviewform;

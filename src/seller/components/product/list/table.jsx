import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Table() {
  return (
    <div>
        <div className="app-card app-card-orders-table shadow-sm mb-5">
						    <div className="app-card-body"  style={{ overflowX : "scroll" }}>
							    <div className="table-responsive">
							        <table className="table app-table-hover mb-0 text-left">
										<thead>
											<tr>
												<th className="cell">Image</th>
												<th className="cell">Name</th>
												<th className="cell">Description</th>
												<th className="cell">Price</th>
												<th className="cell">Status</th>
												<th className="cell">Date</th>
												<th className="cell">Category</th>
												<th className="cell">Edit</th>
												<th className="cell">Delete</th>
											</tr>
										</thead>
										<tbody >
                                             <Tr />
                                             <Tr />
                                             <Tr />
                                             <Tr />
                                             <Tr />
                                             <Tr />
                                             <Tr />
                                             <Tr />
                                             <Tr />
                                             <Tr />
                                             <Tr />
                                         </tbody>
									</table>
						        </div>
						       
						    </div>
						</div>
    </div>
  )
}



const Tr = () =>{
  const history = useNavigate();
    return 	 <tr>
        <td>
            <img src='https://matx-react.ui-lib.com/assets/images/products/headphone-2.jpg'  alt='product-image'   style={{ width : 45 , height : 40}}/>
        </td>
        <td>Caviever Headphones</td>
        <td>
        <span className="truncate">lorem ipsum ala raba kum sa tum kah hara</span>
       </td>
     <td>1200/=</td>
     <td> <span className="badge bg-success">live</span></td>
     <td><span>8/January/2022</span></td>
     <td>Headphones</td>
     <td> <a className="btn-sm app-btn-secondary" onClick={()=>history("/seller/product/View/2")} >Edit</a></td>
     <td> <a className="btn-sm app-btn-secondary" href="#">Delete</a></td>
     </tr>
}
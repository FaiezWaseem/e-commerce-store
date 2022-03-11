import React from 'react'
import "../../../assets/css/Table.css"
export default function List() {
  return (
    <div className='app-card app-card-orders-table shadow-sm mb-5'  style={{ overflowX : "scroll" }}>
<table className="table app-table-hover mb-0 text-left">
   <thead className="thead-light">
      <tr>
         <th>#</th>
         <th>Order Code</th>
         <th>Num. of Products</th>
         <th>Customer</th>
         <th>Amount</th>
         <th>Delivery Status</th>
         <th>Options</th>
         <th>Payment Status</th>
      </tr>
   </thead>
   <tbody>
       <Tr/>
       <Tr/>
       <Tr/>
   </tbody>
</table>
    </div>
  )
}



const Tr = () =>{
    const [isOpen  , setOpen] = React.useState(false);
    const [isPaid  , setPaid] = React.useState(true);
    return (
        <tr>
        <td>
           7
        </td>
        <td>
           <a href="/seller/order/View/20200814-010435"  className="normal-link-style">20200814-010435</a>
        </td>
        <td>
           1
        </td>
        <td>
           Guest (714949)
        </td>
        <td>
          <p style={{ color : "teal"}}> $11,111.00</p>
        </td>
        <td>
           On delivery                                    
        </td>
        <td>
           <div className="dropdown">
              <button className="btn" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={()=>setOpen(!isOpen)} >
              <i class='bx bx-dots-vertical-rounded'></i>
              </button>
              <div className={isOpen ? "dropdown-menu dropdown-menu-right show" : "dropdown-menu dropdown-menu-right"} aria-labelledby="">
                 <a href='/seller/order/View/id' className="dropdown-item">Order Details</a>
                 <a  className="dropdown-item">Download Invoice</a>
              </div>
           </div>
        </td>
        <td>
          {isPaid ? <p style={{color : "teal"}} >Paid</p> : <p  style={{ color : "red"}}>UnPaid</p> }
        </td>
     
     </tr> 
    )
}
import React from 'react'
import { useRecoilState } from "recoil";
import totalItems from "./cartLogic"


export default function ItemTotal() {
    const [items] =  useRecoilState(totalItems)
    const [total , setTotal] = React.useState(0);
    const [totalWithTax , settotalWithTax] = React.useState(0);
    React.useEffect(()=>{
      var calculate = 0;
        items.forEach(item =>{
            calculate += item.qty * item.price;
            setTotal(calculate) 
        })
        settotalWithTax(calculate + +(0.10 * calculate).toFixed(2) )
        if(items.length === 0){
         setTotal(0) 
        }
    },[items])
  return (
    <div><aside >
    <div className="card mb-3">
       <div className="card-body">
          <form  onSubmit={(e)=> e.preventDefault()}>
             <label className="form-label">Have coupon?</label> 
             <div className="input-group">
                  <input type="text" className="form-control" placeholder="Coupon code" /> 
                  <button className="btn btn-light">Apply</button> </div>
          </form>
       </div>
       
    </div>

    <div className="card">
       <div className="card-body">
          <dl className="dlist-align">
             <dt>Total price:</dt>
             <dd className="text-end"> ${total}</dd>
          </dl>
     
          <dl className="dlist-align">
             <dt>TAX:</dt>
             <dd className="text-end text-danger"> + ${(0.10 * total).toFixed(2)} </dd>
          </dl>
          <hr />
          <dl className="dlist-align">
             <dt>Total:</dt>
             <dd className="text-end text-dark h5"> ${totalWithTax} </dd>
          </dl>
          <div className="d-grid gap-2 my-3"> 
          <a className="btn btn-primary w-100"> Make Purchase </a> 
          <a className="btn btn-light w-100"> Back to shop </a> </div>
       </div>
       
    </div>

 </aside></div>
  )
}
function discountCard() {
   return (
      <dl className="dlist-align">
      <dt>Discount:</dt>
      <dd className="text-end text-success"> - $60.00 </dd>
   </dl>
   )
}
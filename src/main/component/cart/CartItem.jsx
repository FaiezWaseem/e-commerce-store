import React from 'react'
import {  useRecoilState } from "recoil";
import totalItems , { set  ,remove } from "./cartLogic"



export default function CartItem({ obj }) {
  const [qty , setQty] = React.useState(obj.qty);
  const [amount] = React.useState(obj.price);
  const [items , setItems] = useRecoilState(totalItems);

React.useEffect(()=>{
    const item = {id : obj.id ,qty : qty , price : amount};
    set(items , item , setItems);
},[qty])




  const onChangeQty = (value)=>{
    if(value >= 1){
        setQty(value);}
  }

  return (
    <div>
        <article className="card card-body mb-3">
                    <div className="row gy-3 align-items-center">
                       <div className="col-md-6">
                          <a href="#" className="itemside align-items-center">
                             <div className="aside"> 
                             <img src="../assets/images/1.jpg" height="72" width="72" className="img-thumbnail img-sm" /> 
                             </div>
                             <div className="info">
                                <p className="title">T-shirts with multiple colors, for men and lady </p>
                                <span className="text-muted">Clothes</span> 
                             </div>
                          </a>
                       </div>

                       <div className="col-auto">
                          <div className="input-group input-spinner">
                             <button className="btn btn-light" type="button" onClick={()=> onChangeQty(qty -1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999" viewBox="0 0 24 24">
                                   <path d="M19 13H5v-2h14v2z"></path>
                                </svg>
                             </button>
                             <input type="text" className="form-control" value={qty}/> 
                             <button className="btn btn-light" type="button" onClick={()=> onChangeQty(qty + 1)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999" viewBox="0 0 24 24">
                                   <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                </svg>
                             </button>
                          </div>
                          
                       </div>

                       <div className="col"> <strong className="price"> ${amount} </strong> </div>
                       <div className="col text-end"> <a  className="btn btn-icon btn-light" onClick={()=> remove(items , obj.id , setItems)}>
                            <i className="fa fa-trash"></i> </a> </div>
                    </div>

                 </article>
    </div>
  )
}

import React from 'react'
import { atom, useRecoilState } from "recoil";
const textState = atom({
   key: "isGrid", // unique ID (with respect to other atoms/selectors)
   default: false, // default value (aka initial value)
 });


export default function RouteBar() {
   const [sharedValue, setSharedValue] = useRecoilState(textState);
   
   React.useEffect(()=>{
    if(sharedValue){
      document.getElementById("listView").classList.remove("active")
      document.getElementById("GridView").classList.add("active");
   }else{
       document.getElementById("GridView").classList.remove("active")
       document.getElementById("listView").classList.add("active");
    }
   },[sharedValue])

  return (
    <div>
        <div className="card">
   <div className="card-body d-lg-flex align-items-center">
      <nav className="mb-3 mb-lg-0">
         <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"> <a href="#">Home</a> </li>
            <li className="breadcrumb-item"> <a href="#">Category name</a> </li>
            <li className="breadcrumb-item"> <a href="#">Sub category</a> </li>
            <li className="breadcrumb-item active">Items</li>
         </ol>
      </nav>
      
      <div className="ms-auto">
         <div className="d-inline-flex align-middle dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"> Filter by </button> 
            <nav className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu2"> <a className="dropdown-item" href="#">Dropdown link</a> <a className="dropdown-item" href="#">Dropdown link</a> </nav>
         </div>
         
         <div className="btn-group"> 
         <a className="btn btn-light active" id='listView' data-bs-toggle="tooltip" title="List view" onClick={()=> setSharedValue(false) } > 
         <i className="fa fa-bars"></i> </a>
          <a  className="btn btn-light " id='GridView'  data-bs-toggle="tooltip" title="Grid view" onClick={()=> setSharedValue(true) }>
              <i className="fa fa-th"></i> </a>
               </div>
         
      </div>
   </div>
  
</div>
    </div>
  )
}

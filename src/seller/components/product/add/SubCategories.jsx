import React from 'react'

export default function SubCategories() {
  return (
    <div className="row mb-4">
    <label className="col-3 col-form-label">Sub Catgeories</label> 
    <div className="col-9">
       <ul className="row row-cols-xxl-3 row-cols-2">
          <li> <label className="form-check"> <input className="form-check-input" type="checkbox" value="" /> <span className="form-check-label"> HD camera </span> </label> </li>
          <li> <label className="form-check"> <input className="form-check-input" type="checkbox" value="" /> <span className="form-check-label"> Voice control </span> </label> </li>
          <li> <label className="form-check"> <input className="form-check-input" type="checkbox" value=""/> <span className="form-check-label"> Metallic </span> </label> </li>
          <li> <label className="form-check"> <input className="form-check-input" type="checkbox" value=""/> <span className="form-check-label"> 5K Display </span> </label> </li>
          <li> <label className="form-check"> <input className="form-check-input" type="checkbox" value=""/> <span className="form-check-label"> High speed </span> </label> </li>
          <li> <label className="form-check"> <input className="form-check-input" type="checkbox" value=""/> <span className="form-check-label"> Ultra wide </span> </label> </li>
          <li> <label className="form-check"> <input className="form-check-input" type="checkbox" value=""/> <span className="form-check-label"> 5K Display </span> </label> </li>
          <li> <label className="form-check"> <input className="form-check-input" type="checkbox" value=""/> <span className="form-check-label"> Blootooth 3.0 </span> </label> </li>
       </ul>
    </div>

 </div>
  )
}

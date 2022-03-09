import React from 'react'
import img1 from "../../../assets/images/ball.svg"
import img2 from "../../../assets/images/book.svg"
import img3 from "../../../assets/images/cpu.svg"
import img4 from "../../../assets/images/animal.svg"
import img5 from "../../../assets/images/shirt.svg"
import img6 from "../../../assets/images/med-tooth.svg"
import img7 from "../../../assets/images/education.svg"
export default function SelectCategory() {
  return (
    <div>
        <div className="card mb-4">
                    <div className="card-body">
                       <h5 className="card-title">Category selection</h5>
                       <div>
                          <label className="box box-check mb-2" style={{ width : "140px"}}>
                             <input  className="position-absolute form-check-input" type="checkbox" name="lorem"/> <b className="border-oncheck"></b> 
                             <span className="d-block text-center">
                                <img className="icon-xs" width="32" height="32" src={img1}/> 
                                <p className="m-0">Sport items</p>
                             </span>
                          </label>
                          <label className="box box-check mb-2" style={{ width : "140px"}}>
                             <input checked="false" className="position-absolute form-check-input" type="checkbox" name="lorem"/> <b className="border-oncheck"></b> 
                             <span className="d-block text-center">
                                <img className="icon-xs" width="32" height="32" src={img2}/> 
                                <p className="m-0">Books</p>
                             </span>
                          </label>
                          <label className="box box-check mb-2" style={{ width : "140px"}}>
                             <input className="position-absolute form-check-input" type="checkbox" name="lorem"/> <b className="border-oncheck"></b> 
                             <span className="d-block text-center">
                                <img className="icon-xs" width="32" height="32" src={img3}/> 
                                <p className="m-0">Computers</p>
                             </span>
                          </label>
                          <label className="box box-check mb-2" style={{ width : "140px"}}>
                             <input className="position-absolute form-check-input" type="checkbox" name="lorem"/> <b className="border-oncheck"></b> 
                             <span className="d-block text-center">
                                <img className="icon-xs" width="32" height="32" src={img4}/> 
                                <p className="m-0">Animals</p>
                             </span>
                          </label>
                          <label className="box box-check mb-2" style={{ width : "140px"}}>
                             <input className="position-absolute form-check-input" type="checkbox" name="lorem"/> <b className="border-oncheck"></b> 
                             <span className="d-block text-center">
                                <img className="icon-xs" width="32" height="32" src={img7}/> 
                                <p className="m-0">Education</p>
                             </span>
                          </label>
                          <label className="box box-check mb-2" style={{ width : "140px"}}>
                             <input className="position-absolute form-check-input" type="checkbox" name="lorem"/> <b className="border-oncheck"></b> 
                             <span className="d-block text-center">
                                <img className="icon-xs" width="32" height="32" src={img6}/> 
                                <p className="m-0">Medicine</p>
                             </span>
                          </label>
                          <label className="box box-check mb-2" style={{ width : "140px"}}>
                             <input className="position-absolute form-check-input" type="checkbox" name="lorem"/> <b className="border-oncheck"></b> 
                             <span className="d-block text-center">
                                <img className="icon-xs" width="32" height="32" src={img5}/> 
                                <p className="m-0">Fashion</p>
                             </span>
                          </label>
                       </div>
                    </div>
                    
                 </div>
    </div>
  )
}

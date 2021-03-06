import React from 'react'
import UnitPriceSelection from "./UnitPriceSelection"
import MetaTagForm from "./MetaTagForm"
import SubCategories from "./SubCategories"
import SelectCategory from "./SelectCategory"
import ThumbnailImage from "./ThumbnailImage"
import ExtraImages from "./ExtraImages"
export default function ProductForm() {
   
  return (
    <div>
        <div className="card mb-4">
                    <article className="card-body">
                       <h4 className="mb-4">Submit product</h4>
                       <form>
                          <div className="row mb-4">
                             <label className="col-3 col-form-label">Title *</label> 
                             <div className="col-9"> 
                             <input type="text" className="form-control" placeholder="Type here" required/> </div>
                          </div>

                              <UnitPriceSelection />
                              <ThumbnailImage />
                              <ExtraImages />

                          <div className="row mb-4">
                             <label className="col-3 col-form-label">Description</label> 
                             <div className="col-9"> <textarea className="form-control" placeholder="Type here" rows={10} required ></textarea> </div>

                          </div>

                          <div className="row mb-4">
                             <label className="col-3 col-form-label">Brand</label> 
                             <div className="col-9">
                                <select className="form-select" size="4">
                                   <option selected="">Select brand</option>
                                   <option value="1">Asus</option>
                                   <option value="2">Apple</option>
                                   <option value="3">Xuiaomi </option>
                                   <option value="4">Artel </option>
                                   <option value="6">Google </option>
                                </select>
                             </div>

                          </div>

                               <MetaTagForm />
                               <SelectCategory />
                               <SubCategories />
                          <div className="row mb-2">
                             <div className="col-9 offset-3">
                                 <button type="submit" className="btn btn-primary">Add product</button> 
                                 <button type="reset" className="btn btn-outline-danger">Cancel</button> 
                                 </div>
                          </div>

                       </form>

                    </article>
                    
                 </div>
    </div>
  )
}

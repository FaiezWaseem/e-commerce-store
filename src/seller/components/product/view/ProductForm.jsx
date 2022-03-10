import React from 'react'
import UnitPriceSelection from "../add/UnitPriceSelection"
import MetaTagForm from "../add/MetaTagForm"
import SubCategories from "../add/SubCategories"
import SelectCategory from "../add/SelectCategory"
import ThumbnailImage from "../add/ThumbnailImage"
import ExtraImages from "../add/ExtraImages"
import { useParams , useNavigate } from 'react-router-dom'; 
export default function ProductForm() {
    const { id } = useParams();
    const history = useNavigate();
    React.useEffect(()=>{
        if(!id){
            history("/seller/product/List/");
        }
    })
 
  return (
    <div>
          <div>
        <div className="card mb-4">
                    <article className="card-body">
                       <h4 className="mb-4">View/Edit product</h4>
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
                                 <button type="submit" className="btn btn-primary">Update Product</button> 
                                 <button type="reset" className="btn btn-outline-danger m-2">Delete Product</button> 
                                 </div>
                          </div>

                       </form>

                    </article>
                    
                 </div>
    </div>
    </div>
  )
}

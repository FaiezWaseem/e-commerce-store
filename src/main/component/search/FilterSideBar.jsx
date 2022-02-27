import React from 'react';

const FilterSideBar = () => {
    return (
        <div>
                     <div class="card">
                    <article class="filter-group">
                       <header class="card-header"> <a href="#" class="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside1"> <i class="icon-control fa fa-chevron-down"></i> Categories </a> </header>
                       <div class="collapse show" id="collapse_aside1">
                          <div class="card-body">
                             <ul class="list-menu">
                                <li><a href="#">Electronics </a></li>
                                <li><a href="#">Watches </a></li>
                                <li><a href="#">Cinema </a></li>
                                <li><a href="#">Clothes </a></li>
                                <li><a href="#">Home items </a></li>
                                <li><a href="#">Smartwatches </a></li>
                             </ul>
                          </div>
                          
                       </div>
                    </article>
                     
                    <article class="filter-group">
                       <header class="card-header"> <a href="#" class="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside2"> <i class="icon-control fa fa-chevron-down"></i> Price </a> </header>
                       <div class="collapse show" id="collapse_aside2">
                          <div class="card-body">
                             <div class="row mb-3">
                                <div class="col-6"> <label class="form-label">Min</label> <input class="form-control" placeholder="$0" type="number" /> </div>
                                
                                <div class="col-6"> <label class="form-label">Max</label> <input class="form-control" placeholder="$1,0000" type="number"  /> </div>
                                
                             </div>
                             <button class="btn btn-light w-100" type="button">Apply</button> 
                          </div>
                          
                       </div>
                    </article>
                     
                    <article class="filter-group">
                       <header class="card-header"> <a href="#" class="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside3"> <i class="icon-control fa fa-chevron-down"></i> Size </a> </header>
                       <div class="collapse show" id="collapse_aside3">
                          <div class="card-body"> 
                          <label class="checkbox-btn"> 
                          <input type="checkbox" /> 
                          <span class="btn btn-light"> XS </span> </label>
                           <label class="checkbox-btn"> 
                           <input type="checkbox" />
                            <span class="btn btn-light"> SM </span>
                             </label> <label class="checkbox-btn">
                            <input type="checkbox"/> <span class="btn btn-light"> LG </span>
                           </label> <label class="checkbox-btn">
                                 <input type="checkbox"/> <span class="btn btn-light"> XL </span>
                             </label> </div>
                          
                       </div>
                    </article>
                     
                    <article class="filter-group">
                       <header class="card-header"> <a href="#" class="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside4"> <i class="icon-control fa fa-chevron-down"></i> Brand type </a> </header>
                       <div class="collapse show" id="collapse_aside4">
                          <div class="card-body"> <label class="form-check mb-2"> 
                          <input class="form-check-input" type="checkbox" checked="" name="choose_x" />
                           <span class="form-check-label"> Samsung </span> </label> <label class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" checked="" name="choose_x"/> 
                                <span class="form-check-label"> Huawei </span> </label> <label class="form-check mb-2">
                                     <input class="form-check-input" type="checkbox" name="choose_x"/>
                                      <span class="form-check-label"> Tesla model </span> </label> 
                                      <label class="form-check mb-2"> 
                                      <input class="form-check-input" type="checkbox" name="choose_x"/> 
                                      <span class="form-check-label"> Oneplus </span> </label>
                                       <label class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" name="choose_x"/> 
                                    <span class="form-check-label"> Panasonic </span> </label> </div>
                          
                       </div>
                    </article>
                     
                    <article class="filter-group">
                       <header class="card-header"> <a href="#" class="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside5"> <i class="icon-control fa fa-chevron-down"></i> Colors </a> </header>
                       <div class="collapse show" id="collapse_aside5">
                          <div class="card-body">
                             <label class="form-check mb-2"> 
                             <input class="form-check-input" type="radio" name="check_opt_a" checked=""/> 
                             <span class="form-check-label"> Lightblue </span> </label>
                             <label class="form-check mb-2">
                                 <input class="form-check-input" type="radio" name="check_opt_a"/>
                                  <span class="form-check-label"> Orange </span> </label> 
                              <label class="form-check mb-2"> 
                              <input class="form-check-input" type="radio" name="check_opt_a" /> 
                              <span class="form-check-label"> Darkblue </span> </label> 
                               <label class="form-check mb-2"> 
                               <input class="form-check-input" type="radio" name="check_opt_a" />
                                <span class="form-check-label"> Silver </span> </label>
                          </div>
                          
                       </div>
                    </article>
                    
                 </div>
        </div>
    );
}

export default FilterSideBar;

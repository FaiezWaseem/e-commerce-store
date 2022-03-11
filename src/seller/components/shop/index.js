import React from 'react'
import "../../assets/css/shop.css"
export default function Shop() {

  return (
    <div className='p-4'>
    <div class="row">
        <div class="col-md-12">
            <label>Shop Name (English) <span class="required-star">*</span></label>
            <input type="text" class="form-control mb-3" placeholder="Shop Name (English)" name="name" required />
        </div>
        <div class="col-md-12">
            <label>Address (English) <span class="required-star">*</span></label>
            <input type="text" class="form-control mb-3" placeholder="Address Here, City, State, Country - Pincode" name="address" required />
        </div>
        <div class="col-md-12">
         <label> Description (English) <span class="required-star">*</span></label>
         <textarea name="meta_description" placeholder="Meta Description (English)" rows="6" class="form-control mb-3" required="">Sellers Shop</textarea>
       </div>
        <div class="col-md-12">
            <label>Logo <small>(120x120)</small></label>

            <input type="file" name="logo" id="file-2" class="custom-input-file custom-input-file--4" data-multiple-caption="{count} files selected" accept="image/*" />
            <label for="file-2" class="mw-100 mb-3">
                                <span></span>
                                <strong>
                                <i class="fa fa-upload"></i>
                                       Choose Image
                                  </strong>
           </label>
        </div>
    </div>
    <div class="row">
        <div class="col-md-2">
            <label>Current Logo</label>
        </div>
        <div class="col-md-10">
            <img src="https://www.nolimitlogic.com/demo/multi-ecommerce/public/uploads/shop/logo/Fn54wigRaMNBipEc275fWOES2zPgcTo4st92Od4U.jpeg" alt="" width="120px" height="120px" class="frontend-all-images-border" />
        </div>
    </div>
    <div class="form-box bg-white mt-4">
    <div class="form-box-title px-3 py-2">
        Slider Settings
    </div>
    <div class="form-box-content p-3">
        <div id="shop-slider-images">
            <div class="row">
                <div class="col-md-2">
                    <label>Slider Images <small>(1400x400)</small></label>
                </div>
                <div class="col-12 col-md-12">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="img-upload-preview">
                                <img loading="lazy" src="https://www.nolimitlogic.com/demo/multi-ecommerce/public/uploads/shop/sliders/1564063039.BANNER1.jpg" alt="" class="img-fluid"/>
                                <input type="hidden" name="previous_sliders[]" value="uploads/shop/sliders/1564063039.BANNER1.jpg"/>
                                <button type="button" class="btn btn-danger close-btn remove-files"><i class='bx bx-x-circle'></i></button>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="img-upload-preview">
                                <img loading="lazy" src="https://www.nolimitlogic.com/demo/multi-ecommerce/public/uploads/shop/sliders/1564063091.BANNER2.jpg" alt="" class="img-fluid"/>
                                <input type="hidden" name="previous_sliders[]" value="uploads/shop/sliders/1564063091.BANNER2.jpg"/>
                                <button type="button" class="btn btn-danger close-btn remove-files"><i class='bx bx-x-circle'></i></button>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="img-upload-preview">
                                <img loading="lazy" src="https://www.nolimitlogic.com/demo/multi-ecommerce/public/uploads/shop/sliders/1564063102.BANNER3.jpg" alt="" class="img-fluid" />
                                <input type="hidden" name="previous_sliders[]" value="uploads/shop/sliders/1564063102.BANNER3.jpg"/>
                                <button type="button" class="btn btn-danger close-btn remove-files"><i class='bx bx-x-circle'></i></button>
                            </div>
                        </div>
                    </div>
                    <input type="file" name="sliders[]" id="slide-0" class="custom-input-file custom-input-file--4" data-multiple-caption="{count} files selected" multiple="" accept="image/*" />
                   <label for="slide-0" class="mw-100 mb-3">
                                                <span></span>
                                                <strong>
                                                    <i class="fa fa-upload"></i>
                                                    Choose Image
                                                </strong>
                                            </label>
                </div>
            </div>
        </div>
        <div class="text-right">
            <button type="button" class="btn btn-primary mb-3" >Add More</button>
        </div>
    </div>
    </div>
    <div>
    <div class="form-box bg-white mt-4">
                            <div class="form-box-title px-3 py-2">
                                Social Media Link
                            </div>
                            <div class="form-box-content p-3">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Facebook </label>
                                   
                                        <input type="text" class="form-control mb-3" placeholder="Facebook" name="facebook" value="https://www.facebook.com/abc"/>
                                    </div>
                                
                                    <div class="col-md-6">
                                        <label>Twitter </label>
                                   
                                        <input type="text" class="form-control mb-3" placeholder="Twitter" name="twitter" value="https://www.twitter.com"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Instagram </label>
                                    
                                        <input type="text" class="form-control mb-3" placeholder="Instagram" name="instagram" value="https://www.instagram.com"/>
                                    </div>
                                
                                    <div class="col-md-6">
                                        <label>Google </label>
                                 
                                        <input type="text" class="form-control mb-3" placeholder="Google" name="google" value="https://www.google.com"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Youtube </label>
                                   
                                        <input type="text" class="form-control mb-3" placeholder="Youtube" name="youtube" value="https://www.youtube.com"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Linkedin </label>
                                   
                                        <input type="text" class="form-control mb-3" placeholder="Linkedin" name="linkedin" value="https://www.linkedin.com"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Whatsapp </label>
                                   
                                        <input type="text" class="form-control mb-3" placeholder="Whatsapp - Add only Whatsapp Number with country code e.g. 91xxxxxxxxxx" name="whatsapp" value="919999999999"/>
                                    </div>
                                </div>
                            </div>
    </div> 
    <div  style={{ 
        display : "flex",
        justifyContent : "flex-end"
    }}>
            <button type="button" class="btn btn-primary mb-3" >Update</button>
    </div>
    </div>
</div>
  )
}

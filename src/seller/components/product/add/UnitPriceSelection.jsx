import React from 'react'

export default function UnitPriceSelection() {
  return (
    <div className="form-box bg-white mt-4">
                <div className="form-box-title px-3 py-2">
                    Price
                </div>
                <div className="form-box-content p-3">
                    <div className="row">
                        <div className="col-md-2">
                            <label>Unit Price <span className="required-star">*</span></label>
                        </div>
                        <div className="col-md-10">
                            <input type="number" min="0" step="0.01" className="form-control mb-3" name="unit_price" placeholder="Unit Price (Base Price)" value="45.00"  required />
                        </div>
                        <div className="col-md-2">
                            <label>Purchase Price <span className="required-star">*</span></label>
                        </div>
                        <div className="col-md-10">
                            <input type="number" min="0" step="0.01" className="form-control mb-3" name="purchase_price" placeholder="Purchase Price" value="20.00" required=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Tax</label>
                        </div>
                        <div className="col-8">
                            <input type="number" min="0" step="0.01" className="form-control mb-3" name="tax" placeholder="Tax" value="5.00" />
                        </div>
                        <div className="col-md-2">
                            <div className="mb-3">
                                <select className="form-control selectpicker select2-hidden-accessible" name="tax_type" data-minimum-results-for-search="Infinity" tabindex="-1" aria-hidden="true">
                                    <option value="amount" selected="">$</option>
                                    <option value="percent">%</option>
                                </select>
                                <span className="select2 select2-container select2-container--default" dir="ltr" style={{ width : "284px"}}>
                                <span className="selection">
                                <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-tax_type-gv-container">
                                    
                                    <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span>
                                </span><span className="dropdown-wrapper" aria-hidden="true">

                                </span></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Discount</label>
                        </div>
                        <div className="col-8">
                            <input type="number" min="0" step="0.01" className="form-control mb-3" name="discount" placeholder="Discount" value="5.00"/>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-3">
                                <select className="form-control selectpicker select2-hidden-accessible" name="discount_type" data-minimum-results-for-search="Infinity" tabindex="-1" aria-hidden="true">
                                    <option value="amount" selected="">$</option>
                                    <option value="percent">%</option>
                                </select>
                                <span className="select2 select2-container select2-container--default" dir="ltr" style={{ width : "284px" }}>
                                <span className="selection">
                                <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-discount_type-lf-container">
                               
                                <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span>
                                </span>
                                <span className="dropdown-wrapper" aria-hidden="true"></span></span>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="quantity" style={{ display : "none"}} >
                        <div className="col-md-2">
                            <label>Quantity <span className="required-star">*</span></label>
                        </div>
                        <div className="col-md-10">
                            <input type="number" min="0" step="1" className="form-control mb-3" name="current_stock" placeholder="Quantity" value="1000" />
                        </div>
                    </div>
        
                </div>
            </div>
  )
}

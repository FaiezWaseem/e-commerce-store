import React from 'react'

export default function View() {
  return (
    <div class="gry-bg px-3 pt-0 mb-5 mt-5">
    <div class="pt-4">
      {/* STEPS  */}
    </div>
    <div class="row mt-5">
       <div class="offset-lg-2 col-lg-4 col-sm-6">
          <div class="form-inline">
             <select class="form-control selectpicker form-control-sm select2-hidden-accessible" data-minimum-results-for-search="Infinity" id="update_payment_status" tabindex="-1" aria-hidden="true">
                <option value="unpaid" selected="">Unpaid</option>
                <option value="paid">Paid</option>
             </select>
             <span class="select2 select2-container select2-container--default" dir="ltr" style={{ width : "100px"}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-update_payment_status-container"><span class="select2-selection__rendered" id="select2-update_payment_status-container" title="Unpaid">Unpaid</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
             <label class="my-2">Payment Status</label>
          </div>
       </div>
       <div class="col-lg-4 col-sm-6">
          <div class="form-inline">
             <select class="form-control selectpicker form-control-sm select2-hidden-accessible" data-minimum-results-for-search="Infinity" id="update_delivery_status" tabindex="-1" aria-hidden="true">
                <option value="pending">Pending</option>
                <option value="on_review">On review</option>
                <option value="on_delivery" selected="">On delivery</option>
                <option value="delivered">Delivered</option>
             </select>
             <span class="select2 select2-container select2-container--default select2-container--below" dir="ltr" style={{ width : "100px"}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-update_delivery_status-container"><span class="select2-selection__rendered" id="select2-update_delivery_status-container" title="On delivery">On delivery</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
             <label class="my-2">Delivery Status</label>
          </div>
       </div>
    </div>
    <div class="card mt-3">
       <div class="card-header py-2 px-3 ">
          <div class="heading-6 strong-600">Order Summary</div>
       </div>
       <div class="card-body  pb-0"  >
          <div class="row">
             <div class="col-lg-6">
                <table class="details-table table">
                   <tbody>
                      <tr>
                         <td class="w-50 strong-600">Order Code : </td>
                         <td><strong>20210725-015236</strong></td>
                      </tr>
                      <tr>
                         <td class="w-50 strong-600">Customer : </td>
                         <td>Bala</td>
                      </tr>
                      <tr>
                         <td class="w-50 strong-600">Email : </td>
                         <td>cool@gmail.com</td>
                      </tr>
                      <tr>
                         <td class="w-50 strong-600">Phone : </td>
                         <td>9098790987</td>
                      </tr>
                      <tr>
                         <td class="w-50 strong-600">Shipping address : </td>
                         <td>test</td>
                      </tr>
                      <tr>
                         <td class="w-50 strong-600">City : </td>
                         <td>Karachi</td>
                      </tr>
                      <tr>
                         <td class="w-50 strong-600">Country : </td>
                         <td>Pakistan</td>
                      </tr>
                      <tr>
                         <td class="w-50 strong-600">Postal Code : </td>
                         <td>769000</td>
                      </tr>
                   </tbody>
                </table>
             </div>
             <div class="col-lg-6">
                <table class="details-table table"  style={{ overflowX : "scroll" }}>
                   <tbody>
                      <tr>
                         <td class="w-50 strong-600">Order date : </td>
                         <td>22-2-2022 13:07 PM</td>
                      </tr>
                      <tr>
                         <td class="w-50 strong-600">Order status : </td>
                         <td>On delivery</td>
                      </tr>
                      <tr>
                         <td class="w-50 strong-600">Payment Status : </td>
                         <td>Unpaid</td>
                      </tr>
                      <tr>
                         <td class="w-50 strong-600">Total order amount : </td>
                         <td>$28.75</td>
                      </tr>
                      <tr>
                         <td class="w-50 strong-600">Payment Method : </td>
                         <td>
                            Cash on delivery                                                            
                         </td>
                      </tr>
                   </tbody>
                </table>
             </div>
          </div>
       </div>
    </div>
    <div class="row">
       <div class="col-lg-9">
          <div class="card mt-4">
             <div class="card-header py-2 px-3 heading-6 strong-600">Order Details</div>
             <div class="card-body  pb-0"  style={{ overflowX : "scroll" }}>
                <table class="details-table table"  style={{ overflowX : "scroll" }}>
                   <thead>
                      <tr>
                         <th>#</th>
                         <th width="40%">Product</th>
                         <th>Delivery Type</th>
                         <th>Quantity</th>
                         <th>Price</th>
                         <th>Tax</th>
                         <th>Total</th>
                         <th>Status</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr>
                         <td>1</td>
                         <td>
                            <a  target="_blank" class="normal-link-style">Demo Vendor Product 5</a>
                            <br/>
                         </td>
                         <td>
                            Home Delivery
                         </td>
                         <td>1</td>
                         <td>$23.75</td>
                         <td>$5.00</td>
                         <td>$28.75</td>
                         <td>
                            <p>On delivery</p>
                         </td>
                      </tr>
                   </tbody>
                </table>
             </div>
          </div>
       </div>
       <div class="col-lg-3">
          <div class="card mt-4">
             <div class="card-header py-2 px-3 heading-6 strong-600">Order Ammount</div>
             <div class="card-body pb-0">
                <table class="table details-table">
                   <tbody>
                      <tr>
                         <th>Sub Total</th>
                         <td class="text-right">
                            <span class="strong-600">$23.75</span>
                         </td>
                      </tr>
                      <tr>
                         <th>Shipping</th>
                         <td class="text-right">
                            <span class="text-italic">$0.00</span>
                         </td>
                      </tr>
                      <tr>
                         <th>Tax</th>
                         <td class="text-right">
                            <span class="text-italic">$5.00</span>
                         </td>
                      </tr>
                      <tr>
                         <th>Coupon Discount</th>
                         <td class="text-right">
                            <span class="text-italic">$0.00</span>
                         </td>
                      </tr>
                      <tr>
                         <th><span class="strong-600">Total</span></th>
                         <td class="text-right">
                            <strong>
                            <span>
                            $28.75
                            </span>
                            </strong>
                         </td>
                      </tr>
                   </tbody>
                </table>
                <table class="table details-table mb-lg-0 mb-5">
                   <tbody>
                      <tr>
                         <td class="text-center">
                            <a  class="btn btn-danger"><i class="fa fa-download"></i>&nbsp;Download</a>
                         </td>
                      </tr>
                   </tbody>
                </table>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}

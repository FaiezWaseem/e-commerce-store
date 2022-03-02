import React from 'react'
import AccountTab from "./AccountTab"
import NewOrders from "./NewOrders"
import EditProfile from "./EditProfile"
export default function SideBar() {


  return (
    <div>
       <div className="d-flex align-items-start">
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <a className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
    <a className="nav-link" id="v-pills-new-order-tab" data-bs-toggle="pill" data-bs-target="#v-pills-new-orders" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">new Orders</a>
    <a className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-order" type="button" role="tab" aria-controls="v-pills-order" aria-selected="false">Orders History</a>
    <a className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-wishlist" type="button" role="tab" aria-controls="v-pills-wishlist" aria-selected="false">Wishlist</a>
    <a className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile Settings</a>
    <a className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">LogOut</a>
  </div>
  <div className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        <AccountTab/>
    </div>
    <div className="tab-pane fade" id="v-pills-new-orders" role="tabpanel" aria-labelledby="v-pills-new-orders">
        <NewOrders/>
        <hr />
        <NewOrders/>

    </div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
        <EditProfile/>
    </div>
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">

    </div>
  </div>
</div>
    </div>
  )
}

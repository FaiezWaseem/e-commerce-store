import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./main/Screens/Home"
import Categories from "./main/Screens/Categories"
import SearchResults from "./main/Screens/SearchResults"
import Signin from "./main/Screens/Signin"
import Register from "./main/Screens/Register"
import ProductView from "./main/Screens/ProductView"
import Cart from "./main/Screens/Cart"
import Account from "./main/Screens/Account"
import WishList from "./main/Screens/WishList"
import About from "./main/Screens/About"
import OverlayLoader from "./main/component/OverlayLoader"
import SellerStore from "./main/Screens/SellerStore"
// ---------------------------------------------------
// 00--------------------SELLER PANEL------------------
import SellerHome from "./seller/pages/SellerHome"
import SellerProduct from "./seller/pages/SellerProduct"
import SellerOrder from "./seller/pages/SellerOrder"
import SellerProfile from "./seller/pages/SellerProfile"
import SellerShop from "./seller/pages/SellerShop"


export default function AppRoutes() {
  return (
     <>
     <OverlayLoader />
         <Router>
    <Routes>
      <Route index exact element={<Home />} />
    </Routes>
    <Routes>
    <Route path="/search/:query/" exact element={<SearchResults />} />
   </Routes>
    <Routes>
    <Route path="/search/" exact element={<SearchResults />} />
   </Routes>
   <Routes>
    <Route path="/categories/" exact element={<Categories />} />
   </Routes>
   <Routes>
    <Route path="/signin/" exact element={<Signin />} />
   </Routes>
   <Routes>
    <Route path="/register/" exact element={<Register />} />
   </Routes>
   <Routes>
    <Route path="/MyCart/" exact element={<Cart />} />
   </Routes>
   <Routes>
    <Route path="/Account/" exact element={<Account />} />
   </Routes>
   <Routes>
    <Route path="/WishList/" exact element={<WishList />} />
   </Routes>
   <Routes>
    <Route path="/About/" exact element={<About />} />
   </Routes>
   <Routes>
    <Route path="/view/:id/" exact element={<ProductView />} />
   </Routes>
   <Routes>
    <Route path="/store/:id/:storeName" exact element={<SellerStore />} />
   </Routes>
     {/* { --------     SELLER PANELS     --------- } */}
   <Routes>
    <Route path="/seller/" exact element={<SellerHome />} />
   </Routes>
   <Routes>
    <Route path="/seller/dashboard/" exact element={<SellerHome />} />
   </Routes>
   <Routes>
    <Route path="/seller/product/:q/" exact element={<SellerProduct />} />
    <Route path="/seller/product/:q/:id" exact element={<SellerProduct />} />
   </Routes>
   <Routes>
    <Route path="/seller/order/:q/" exact element={<SellerOrder />} />
    <Route path="/seller/order/:q/:id" exact element={<SellerOrder />} />
   </Routes>
   <Routes>
    <Route path="/seller/profile/" exact element={<SellerProfile />} />
   </Routes>
   <Routes>
    <Route path="/seller/shop/" exact element={<SellerShop />} />
   </Routes>
  </Router>
     </>
  )
}


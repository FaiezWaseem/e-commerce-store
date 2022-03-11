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
import Error from "./Error"
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
    <Route path="/search/:query/" exact element={<SearchResults />} />
    <Route path="/search/" exact element={<SearchResults />} />
    <Route path="/categories/" exact element={<Categories />} />
    <Route path="/signin/" exact element={<Signin />} />
    <Route path="/register/" exact element={<Register />} />
    <Route path="/MyCart/" exact element={<Cart />} />
    <Route path="/Account/" exact element={<Account />} />
    <Route path="/WishList/" exact element={<WishList />} />
    <Route path="/About/" exact element={<About />} />
    <Route path="/view/:id/" exact element={<ProductView />} />
    <Route path="/store/:id/:storeName" exact element={<SellerStore />} />
     {/* { --------     SELLER PANELS     --------- } */}
    <Route path="/seller/" exact element={<SellerHome />} />
    <Route path="/seller/dashboard/" exact element={<SellerHome />} />
    <Route path="/seller/product/:q/" exact element={<SellerProduct />} />
    <Route path="/seller/product/:q/:id" exact element={<SellerProduct />} />
    <Route path="/seller/order/:q/" exact element={<SellerOrder />} />
    <Route path="/seller/order/:q/:id" exact element={<SellerOrder />} />
    <Route path="/seller/profile/" exact element={<SellerProfile />} />
    <Route path="/seller/shop/" exact element={<SellerShop />} />
    <Route path='/404' element={<Error />}  />
    <Route path='*' element={<Error />}  />
    </Routes>
  </Router>
     </>
  )
}


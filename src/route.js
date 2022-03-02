import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./main/Screens/Home"
import Categories from "./main/Screens/Categories"
import SearchResults from "./main/Screens/SearchResults"
import Signin from "./main/Screens/Signin"
import Register from "./main/Screens/Register"
import ProductView from "./main/Screens/ProductView"
import Cart from "./main/Screens/Cart"
export default function AppRoutes() {
  return (
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
    <Route path="/view/:id/" exact element={<ProductView />} />
   </Routes>
  </Router>
  )
}

{/* <Router>
<Routes>
  <Route index exact element={<Home />} />
</Routes>
<Routes>
  <Route path="/watch/:video_Key/" exact element={<Watch />} />
</Routes>
<Routes>
  <Route path="/Authentication/:userName/" exact element={<Auth />} />
</Routes>
<Routes>
  <Route path="/Authentication/" exact element={<Auth />} />
</Routes>
</Router> */}
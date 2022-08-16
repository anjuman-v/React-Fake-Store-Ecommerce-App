import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Homepage"
import Products from "../pages/Products";
import Product from "../pages/Product"

 function AllRoutes(){
    return(
        <div>
            
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/products/:id' element={<Product/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
            
        </div>
    )
}

export  default AllRoutes
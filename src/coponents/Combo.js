import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Nav from "./nav/Nav"
import Home from "./nav/Home"
import All from "./nav/All"
import Product from "./nav/Product"
import Mycar from "./nav/Mycar"
import Contect from "./nav/Contect"
const Combo = () => {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/All" element={<All />} />
                    <Route path="/Contect" element={<Contect />} />
                    <Route path="/Prodouct" element={<Product />} />
                    <Route path="/Mycar" element={<Mycar />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Combo; 
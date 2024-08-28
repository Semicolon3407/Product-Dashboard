import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/shared/Layout";
import Dashboard from "../components/Dashboard";
import Products from "../components/Products";

const MyRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default MyRoute;

import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MyRoute from "./route/MyRoute";

function App() {

  return (
    <>
      <BrowserRouter>
        <MyRoute />
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/utilities/Footer";

const App = () => (
  <div style={{ width: "auto", fontFamily: "playfair", height: "100%" }}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    <Footer />
  </div>
);
export default App;

import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout.jsx";

const App = () => {
  return (
    <HashRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;

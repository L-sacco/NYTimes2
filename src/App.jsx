/* eslint-disable react-hooks/exhaustive-deps */
// TODO: Mobile g state //

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";

export default function App() {
  const searchValues = useSelector((state) => state.search.searchValues);

  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:q" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

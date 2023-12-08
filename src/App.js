import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import mockCats from "./mockCats";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    readCat();
  }, []);

  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((err) => console.error("Read cat errors", err));
  };

  const createCat = (cat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(cat),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => readCat())
      .catch((err) => console.error("Cat create errors", err));
  };

  const updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id:", id)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit" element={<CatEdit />} />
=======
        <Route path="/catnew" element={<CatNew createCat={createCat}/>} />
        <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
>>>>>>> 29e3654 (Added Update Functionality and Testing)
=======
        <Route path="/catnew" element={<CatNew createCat={createCat}/>} />
        <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
=======
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit" element={<CatEdit />} />
>>>>>>> 63049eb (Completed fetch for 'read' & 'create'.)
>>>>>>> e3d50bf (merging changes)
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

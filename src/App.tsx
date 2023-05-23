import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import CornerstoneOld from "./components/LoadingImages";
import Homepage from "./components/WebHomepage";
import Viewpage from "./components/Viewingpage";
import Contact from "./components/Contacts"
import Help from "./components/Helppage"
import React from "react";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/LoadingImages" element={<CornerstoneOld />}></Route>
        <Route path="/Contacts" element={<Contact />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Viewpage" element={<Viewpage />}></Route>
        <Route path="/Help" element={<Help />}></Route>
      </Routes>
    </div>
  );
}

export default App;

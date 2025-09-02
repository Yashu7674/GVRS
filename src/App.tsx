import React from "react";
import HeroSection from "./components/HeroSection";
import './App.css'
import Website from "./components/Website";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div>     
      <Navbar />
      <HeroSection />
      <Website/>
    </div>
  );
};

export default App

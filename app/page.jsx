"use client"

import About from "./components/About";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Splash from "./components/Splash";

export default function Home() {
  return (
    <div className="App">
      <NavBar />
      <Splash />
      <About />
      <Footer />
    </div>
  );
}

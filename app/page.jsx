"use client"

import { useState, useEffect } from "react";
import localFont from "next/font/local";

import About from "./components/About";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Splash from "./components/Splash";
import FilmDiary from "./components/FilmDiary";
import letterboxd from "./data/letterboxd";

const freight = localFont({
  src: "fonts/Freight.otf",
})

export default function Home() {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    letterboxd("jesszhu")
      .then((items) => setFilmList(items.slice(0, 4)))
      .catch(() => setFilmList(null));
  }, []);

  return (
    <>
      <NavBar font={freight}/>
      <Splash font={freight}/>
      <About font={freight}/>
      <Footer font={freight}/>
    </>
  );
}

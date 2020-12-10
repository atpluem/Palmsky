import React, { Component } from "react";
import Link from "next/link";
// Component 
import Nav from "../components/Nav";
import Slider from "../components/Slider"
import HomeCat from "../components/HomeCat";
import Footer from "../components/Footer";
import Promotion from "./category/promoteTag"
// Style
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div>
      <main>
        <Nav />
        <Slider/>
        <div className="container mb-5 mt-2" >
            <Promotion />
          </div>
        <HomeCat />
        <HomeCat />
        <Footer />
      </main>
    </div>
  );
}

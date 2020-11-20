import React, { Component } from "react";
import Link from "next/link";
// Component 
import Nav from "../components/Nav";
import Slider from "../components/Slider"
import HomeCat from "../components/HomeCat";
// Style
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div>
      <main>
        <Nav />
        <Slider />
        <HomeCat />
        <HomeCat />
        <HomeCat />
      </main>
    </div>
  );
}

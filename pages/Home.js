import { useEffect, useState } from "react";
import Link from "next/link";
// Component 
import Nav from "../components/Nav";
import Slider from "../components/Slider"
import HomeCat from "../components/HomeCat";
import Footer from "../components/Footer";
import Promotion from "./category/promoteTag"
// Style

export default function Home() {  

  return (
    <div>
      <main>
        <Nav indexPage={1} />
        <Slider/>
        <div className="container mb-5 mt-2" >
            <Promotion />
          </div>
        <HomeCat />
        <Footer />
      </main>
    </div>
  );
}

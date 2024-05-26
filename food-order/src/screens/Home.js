import React from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>Body</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

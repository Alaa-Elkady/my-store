import React from "react";
import HomeLanding from "../components/HomeLanding";
import NewArrivals from "../components/NewArrivals";
import Footer from "../components/Footer";
export default function HomePage({ fourItems }) {
  return (
    <div className="home">
      <HomeLanding />
      <NewArrivals fourItems={fourItems} />
      <Footer/>
    </div>
  );
}

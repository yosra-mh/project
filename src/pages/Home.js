import React from "react";
import HomeNav from "../components/HomeComponents/HomeNav";
import HomeContent from "../components/HomeComponents/HomeContent";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="content">
      <HomeNav />
      <HomeContent />
    </div>
  );
}

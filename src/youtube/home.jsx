import React from "react";
import "./home.css";
import Menu from "./menu";
import Sidebar from "./sidebar";

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <Menu/>
    </div>
  );
};
export default Home;

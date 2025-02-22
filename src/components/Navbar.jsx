import React from "react";
import logo from "../assets/GauravLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex item justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="" />
      </div>
      <div className="m-8 flex justify-center items-center gap-4 text-3xl "> 
      <a href="https://www.linkedin.com/in/gaurav-dotiyal-a93541255/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>
      <a href="https://github.com/gauravdotiyal" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
      <a href="https://www.instagram.com/grvdotiyal/" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a>
      <a href="https://x.com/Dotiyal_Gaurav" target="_blank" rel="noopener noreferrer"> <FaSquareXTwitter /></a>
         
      </div>
    </nav>
  );
};

export default Navbar;

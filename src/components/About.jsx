import React from "react";
import about from "../assets/aboutme.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import Resume from "../assets/Gaurav_Resume (2).pdf";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About Me</h1>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 "
        >
          <div className="flex items-center justify-center">
            <img className="rounded-3xl" src={about} alt="about" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-2xl tracking-tight">
              {ABOUT_TEXT}
            </p>
          </div>
          <div className="flex justify-center ml-14  pb-2 pt-2 pl-2 lg:w-1/4 bg-amber-50 rounded-2xl text-blue-500 font-bold ">
            <a href={Resume} download >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

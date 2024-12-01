import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from 
"react-icons/fa";
import { SiReactiveresume } from "react-icons/si";
const Page8header = () => {
  return (
    <div className="flex justify-end items-end gap-5 z-10 h-7 ">
      <a
        href="https://github.com/mayank-panditji"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <FaSquareGithub className="text-2xl" />
      </a>

      <a
        href="https://www.linkedin.com/in/mayank-trivedi-73909b292/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <FaLinkedin className="text-2xl" />
      </a>
      <a 
       href="/mtfina.pdf"
      
      download="mayank_resume.pdf"
      aria-label="Download Resume"
       className="cursor-pointer">
      <SiReactiveresume  className="text-2xl"/>
      </a>
      <a
        href="https://www.instagram.com/mayanktrivedi5991/profilecard/?igsh=MXFlcndzZGVuNWZydQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <FaInstagramSquare className="text-2xl" />
      </a>
    
    </div>
  );
};

export default Page8header;

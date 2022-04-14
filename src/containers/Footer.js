import React, { useState } from "react";

export const Footer = () => {

    const [navToggle, setNavToggle] = useState("hidden");
    const navToggler = () =>{
      if (navToggle === "") {
        setNavToggle("hidden");
      }
      else{
        setNavToggle("");
      }
    }
  
    return (
      <>
        <footer className="mt-10 py-4 grid text-lg justify-center bg-green-900 text-white">
        ©iitgandhinagar
        </footer>
      </>
    );
  };
  
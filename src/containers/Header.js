import React, { useState } from "react";

import { Link } from "react-router-dom";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export const Header = () => {

  const [navToggle, setNavToggle] = useState("hidden");
  const navToggler = () =>{
    if (navToggle === "") {
      setNavToggle("hidden");
    }
    else{
      setNavToggle("");
    }
  }

  // return (<>
  // <nav>
  //   <div>Hello</div>
  //   <a href="#">Eponics</a>  
  // </nav>
  //   </>)

  return (
    <>
        <nav className={ " fixed top-0 w-full flex items-center bg-green-100 p-2 flex-wrap"}>
          <a to="#" className=" px-2 mr-4 inline-flex items-center">
            <span className="text-4xl font-bold uppercase tracking-wide" data-target="#navigation">E-Ponics</span>
          </a>
          <button className="nav-toggler text-light-101 inline-flex p-2 hover:bg-background-301 lg:hidden ml-auto" onClick={()=>navToggler()}>
            <MenuRoundedIcon />
          </button>
          <div className={navToggle+" top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto"} id="navigation"  onClick={()=>navToggler()}>
            <div className="lg:inline-flex text-2xl font-semibold lg:flex-row lg:ml-auto flex flex-col">
              <a to={process.env.PUBLIC_URL + "/"} className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-medium text-light-101 hover:text-dark-801 hover:bg-primary-101">
                <span>Home</span>
              </a>
              <a to={process.env.PUBLIC_URL + "/status"} className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-medium text-light-101 hover:text-dark-801 hover:bg-primary-101">
                <span>Status</span>
              </a>
              <a to={process.env.PUBLIC_URL + "/control"} className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-medium text-light-101 hover:text-dark-801 hover:bg-primary-101">
                <span>Control</span>
              </a>
              <a to={process.env.PUBLIC_URL + "/more"} className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-medium text-light-101 hover:text-dark-801 hover:bg-primary-101">
                <span>More</span>
              </a>
              {/* <NavLink  to={process.env.PUBLIC_URL + "/inbox/"} params={{ data: props.user_name }} className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-medium text-light-101 hover:text-dark-801 hover:bg-primary-101">
                <span>Inbox</span>
              </NavLink>
              <NavLink to={process.env.PUBLIC_URL + "/profile/"} className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-medium text-light-101 hover:text-dark-801 hover:bg-primary-101">
                <span>{props.user_name}</span>
              </NavLink> */}
            </div>
          </div>
        </nav>
    </>
  );
};

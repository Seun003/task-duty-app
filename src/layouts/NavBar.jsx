import React from "react";
import { Link, useMatch } from "react-router-dom";
import navLogo from "/nav-logo.svg";
import NavLinks from "../assets/components/NavLinks";

const NavBar = () => {
  const isTask = useMatch("/all-tasks");
  const isNew = useMatch("/new-task");
  return (
    <>
      <nav className="container w-full px-5 mx-auto py-5 flex justify-between">
        {/* nav logo */}
        <Link to="/" >
          <div className="flex flex-row gap-2 h-12.5 items-center justify-between">
            <p className="h-10.25 w-[39.91px]">
              <img src={navLogo} alt="nav-logo" />
            </p>
            <p className="font-medium text-[27.37px] text-[#2D0050]">
              TaskDuty
            </p>
          </div>
        </Link>

        {/* nav link */}
        <NavLinks isNew={isNew} isTask={isTask}/>
      </nav>
      <hr style={{ border: "none", borderTop: "1px solid #B8B6B6" }} />
    </>
  );
};

export default NavBar;

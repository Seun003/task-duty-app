import React from 'react'
import { Link } from 'react-router-dom';
import profileImage from "../profile-img.png"
import menuOpen from "../menu-open.svg"



const NavLinks = ({isNew, isTask}) => {
  return (
    <>
    <main>
        <div>
          <ul className="hidden md:flex justify-between h-12.5 items-center gap-15 text-xl">
            {!isNew && (
              <Link to="/new-task" className="text-[22px] text-[#292929]">
                New Task
              </Link>
            )}
            {!isTask && (
              <Link to="/all-tasks" className="text-[22px] text-[#292929]">
                All Tasks
              </Link>
            )}

            <Link to="/" className="h-15 w-15">
              <img src={profileImage} alt="profile-image" />
            </Link>
          </ul>
        </div>
         {/* dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn rounded-lg bg-[#974FD0]">
            <img src={menuOpen} alt="menu-img" />
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-[22px] text-[#974FD0] border border-[#974FD0]"
          >
            <li>
              <Link to="/new-task" >
                New Task
              </Link>
            </li>
            <li>
              <Link to="/all-tasks">
                All Tasks
              </Link>
            </li>
          </ul>
        </div>
    </main>
    </>
  )
}

export default NavLinks
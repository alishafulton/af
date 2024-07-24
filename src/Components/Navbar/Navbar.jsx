import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("About");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

    return (
      <div>
        <div className="flex justify-center"><Logo/></div>

        
        <div className="flex justify-between pb-2">

        <div><NavLink to="/af/" onClick={() => handleItemClick("About")}
              className={`text-black ${
                activeItem === "About" && "font-bold text-red-600"
              }`}>about me</NavLink></div>
              
        <div className="grow font-sans text-2xl tracking-tighter p-0.5 text-blue"><NavLink to="/af/portfolio">portfolio</NavLink></div>
        <div className="grow font-sans text-2xl tracking-tighter p-0.5"><NavLink to="/af/contact">contact</NavLink></div>
        </div>
        
        
        </div>
      
    )
  };

export default NavBar;
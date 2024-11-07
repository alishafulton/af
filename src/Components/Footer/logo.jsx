import React, {useState} from "react";
import logo from '../../assets/logo.png';
import logohover from '../../assets/logohover.png';

export default function Logo() {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
<div className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>

            <div>
              {isHovering ? (
                <img src={logo} className="w-6 h-6" />
              ) : (
                <img src={logohover} className="w-6 h-6" />
              )}
            </div></div>
        );
      };
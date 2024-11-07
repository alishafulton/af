import React from "react";
import logo from '../../assets/logo.png';
import logohover from '../../assets/logohover.png';

export default function Logo() {

    return(
        <>
        <img src={ logo }
            onMouseOver={(e) => (e.currentTarget.src = { logohover })}
            onMouseLeave={(e) =>  (e.currentTarget.src = { logo })}
            className="w-6 h-6"
          />
        </>
    );
}
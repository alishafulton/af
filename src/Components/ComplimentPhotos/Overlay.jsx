import { Fragment } from "react";

export function Overlay({ isOpen, onClose, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div className="flex">
          <div className="bg-black opacity-60 w-screen h-screen fixed top-0 left-0 z-9 cursor-pointer" onClick={onClose}/>

          <div className="bg-pink h-2/3 w-1/2 fixed top-0 bottom-0 left-0 right-0  z-10 m-auto" >
            {children}
          </div>
        </div>
      )} 
    </Fragment>
  );
}

export default Overlay;
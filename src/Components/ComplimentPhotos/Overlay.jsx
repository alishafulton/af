import { Fragment } from "react";

export function Overlay({ isOpen, onClose, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div className="flex justify-center">
          
          <div className="bg-black opacity-80 w-screen h-screen fixed top-0 left-0 z-9 cursor-pointer" onClick={onClose}/>
          
          <div className="bg-pink mx-20 my-36 z-10 p-1" >
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;
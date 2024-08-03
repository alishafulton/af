import { Fragment } from "react";

export function Overlay({ isOpen, onClose, children }) {
  return (
 
    // when the overlay=isopen, the overlay appears!
    // a 60% opacity black background that can be clicked to close
    // and my children (the carousel)

    <Fragment>
      {isOpen && (
        <div className="flex justify-items-center justify-center">
          <div className="bg-black opacity-60 w-screen h-screen fixed top-0 left-0 z-9 cursor-pointer" onClick={onClose}/>

          <div className="fixed top-0 left-0  content-start justify-center z-10 bg-white w-2/3 lg:w-1/3 ">
            <div className="bg-gray-300 " >
              {children}
            </div>
          </div>
        </div>
      )} 
    </Fragment>
  );
}

export default Overlay;
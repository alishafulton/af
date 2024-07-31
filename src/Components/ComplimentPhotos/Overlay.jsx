import { Fragment } from "react";

export function Overlay({ isOpen, onClose, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div className="flex">
          <div className="bg-black opacity-60 w-screen h-screen fixed top-0 left-0 z-9 cursor-pointer" onClick={onClose}/>

          <div className="bg-transparent h-2/3 w-2/3 lg:w-1/3 fixed top-2 bottom-2 left-0 right-0 m-auto z-10 " >
            {children}
          </div>
        </div>
      )} 
    </Fragment>
  );
}

export default Overlay;
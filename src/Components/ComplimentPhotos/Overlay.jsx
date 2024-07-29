import { Fragment } from "react";

export function Overlay({ isOpen, onClose, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div className="flex justify-center">
          <div className="bg-black opacity-60 w-screen h-screen fixed top-0 left-0 z-9 cursor-pointer" onClick={onClose}/>
          <div className="bg-transparent fixed top-0 bottom-0 left-0 right-0 m-auto p-30 z-10 " >
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;
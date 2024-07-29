import { Fragment } from "react";

export function Overlay({ isOpen, onClose, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div className="flex justify-center">
          <div className="bg-black opacity-80 w-screen h-screen fixed top-0 left-0 z-9 cursor-pointer" onClick={onClose}/>
            <div className="flex bg-pink fixed top-0 bottom-0 left-0 right-0 m-1 z-10 p-1" >
              {children}
            </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;
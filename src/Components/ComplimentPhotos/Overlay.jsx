import { Fragment } from "react";

export function Overlay({ isOpen, onClose, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div>
          <div className="bg-black opacity-80 w-screen h-screen fixed top-0 left-0 z-9 cursor-pointer" onClick={onClose}/>
            <div className="bg-pink opacity-50 fixed top-0 bottom-0 left-0 right-0 m-auto z-10 p-10 w-fit h-fit " >
                <div className="flex justify-end align-middle">
                   <button className="cursor-pointer bg-transparent" type="button" onClick={onClose} />
                </div>
              {children}
            </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;
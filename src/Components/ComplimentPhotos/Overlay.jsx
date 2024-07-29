import { Fragment } from "react";

export function Overlay({ isOpen, onClose, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div className="overlay">
          <div className="bg-black fixed top-0 left-0 z-9 cursor-pointer" onClick={onClose} />
          <div className="bg-white fixed top-0 bottom-0 left-0 right-0 z-10 p-30 w-2/3 h-2/3 m-auto">
            <div className="flex justify-end align-middle">
              <button
                className="overlay__close"
                type="button"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;
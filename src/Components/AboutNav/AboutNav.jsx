import React from "react";


export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="AboutNav">
      {isOpen && <Popup />}
      <button onClick={toggle}>Toggle show</button>
    </div>
  );
}

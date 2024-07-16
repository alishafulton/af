import React from "react";
import './AboutNav.css';
import Blurb from "../Blurb/Blurb";


const AboutNav = () => {
  const [buttons, setButtons] = useState([
    { label: "about me", value: false },
    { label: "extracurriculars", value: false },
    { label: "spotify", value: false }
  ]);

  const handleButtonsChange = ({
    buttons,
    setButtons,
    handleButtonsChange
  }) => label => {
    const newButtonsState = buttons.map(button => {
      if (button.label === label) {
        return (button = { label: button.label, value: true });
      }
      return {
        label: button.label,
        value: false
      };
    });
    setButtons(newButtonsState);
  };

  return (
    <div className="AboutNav">
      <Specialbuton {...{ buttons, setButtons, handleButtonsChange }} />
      {buttons[0].value && <div>LOW</div>}
      {buttons[1].value && <div>MEDIUM</div>}
      {buttons[2].value && <div>HIGH</div>}
    </div>
  );
};

const Specialbuton = ({ buttons, setButtons, handleButtonsChange }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <button
          key={`${button.label}-${index}`}
          onClick={() =>
            handleButtonsChange({ buttons, setButtons })(button.label)
          }
        >
          {button.label.toUpperCase()}
        </button>
      ))}
    </>
  );
};














export default function navsection2 () {
    return (
      <div className='navsection'>
        <select name = "selectedAbout">
        <h5>
          <option value="about me">about me</option><br/>
          <option value="extracurriculars">extracurriculars</option><br/>
          <option value="spotify">spotify</option>
          </h5>
          </select>
        </div>
    );
  }


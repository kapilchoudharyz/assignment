import React from "react";
import radioButton from "/radio_button_checked.svg";
const OpenSteps: React.FC = () => {
  return (
    <img
      src={radioButton}
      alt="Button Showcasing Currently open route"
      className={"w-12 h-12"}
    />
  );
};

export default OpenSteps;

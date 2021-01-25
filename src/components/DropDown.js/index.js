import React from "react";
import Dropd from "react-dropd";

const Dropdown = ({ onChange }) => {
  return (
    <div className="dropdown">
      <Dropd
        placeholder="Actions"
        list={["Generate invoice"]}
        onItemChange={currentItem => {
          // if (currentItem == "Generate Invoice") {
          // console.log("yes");
          onChange();
          // }
        }}
      />
    </div>
  );
};

export default Dropdown;

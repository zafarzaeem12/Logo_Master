import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();
const FontFamily = ({ FontFamilys, Selected, handlechange }) => {
  console.log("IIII", Selected);
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
      fontFamily: Selected,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      const fontFamily = Selected;

      return { ...provided, opacity, transition, fontFamily };
    },
  };

  return (
    <>
      <div class="form-group">
        <label class="gen-label">Font Family</label>
        <Select
          className="select2-hidden-accessible custom-select gen-input"
          placeholder="Select Font Family"
          style={customStyles}
          components={animatedComponents}
          value={Selected}
          options={FontFamilys}
          onChange={(Selected) => handlechange(Selected)}
        />
      </div>
    </>
  );
};

export default FontFamily;

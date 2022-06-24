import React from 'react'
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();
const FontFamily = ({FontFamilys , Selected , handlechange}) => {
  console.log("IIII",FontFamilys)
  return (
    <>
           <div class="form-group">
                <label class="gen-label">Font Family</label>
                  <Select
                  className="select2-hidden-accessible custom-select gen-input"
                  placeholder="Select FontFamily Category"
                  components={animatedComponents}
                  value={Selected}
                  options={FontFamilys}
                  onChange={(Selected) =>  handlechange(Selected)}
                  
                  />
            </div>

    </>
  )
}

export default FontFamily
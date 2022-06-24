import React, { useState } from 'react'

const FontSize = (props) => {

  const [sloganSize, SetsloganSize] = useState(22);

  const handlechange = (e) => {
    console.log("yyyyy",e)
    SetsloganSize(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("rrr",e)
    props.onSubmitslogan(sloganSize)
  }

  return (
    <>
    <div class="form-group">
        <label class="gen-label">Font Size</label>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input  
            type="number" 
            placeholder="16" 
            id="logo-text-size" 
            value={sloganSize}
            class="gen-input" 
            onChange={(e) => handlechange(e.target.value)}
            /> 
        </form>
    </div>
</>
  )
}

export default FontSize
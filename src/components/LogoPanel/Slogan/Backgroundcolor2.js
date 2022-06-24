import React from 'react'

const Backgroundcolor2 = (props) => {
  return (
    <>
    <div class="form-group logo-background-color-wrap picker-box">
       <label class="gen-label">{props.name || "back"}</label>
       <input type="color" value="#000000" id="logo-background-color" />
   </div>
</>
  )
}

export default Backgroundcolor2
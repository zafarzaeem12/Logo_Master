import React from 'react'

const Backgroundcolor = (props) => {
  return (
    <>
     	<div class="form-group logo-background-color-wrap picker-box">
            <label class="gen-label">{props.name}</label>
            <input type="color" value="#000000" id="logo-background-color" />
        </div>
    </>
  )
}

export default Backgroundcolor
import React from 'react'

const CompanySlogan = ({name, slogan, text}) => {
  return (
    <>
        <div class="form-group">
            <label class="gen-label">{name}</label>
            <input 
                type="text" 
                placeholder="Slogan" 
                value={text[1]}
                class="logo-slogan gen-input"
             />
        </div>
    </>
  )
}

export default CompanySlogan
import React from 'react'

const CompanyName = ({CompanyName ,name , text}) => {

  console.log("slectcomp" ,CompanyName ,name ,text  )

  

  return (
    <>
        <div class="form-group">
            <label class="gen-label">{CompanyName}</label>
            <input 
                type="text" 
                placeholder="Logo Name" 
                value={text[0] || "Company"}
                class="logo-name gen-input"
                
            />
        </div>
    </>
  )
}

export default CompanyName
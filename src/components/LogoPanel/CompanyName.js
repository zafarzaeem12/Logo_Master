import React from 'react'

const CompanyName = ({CompanyName ,data }) => {

  console.log("slectcomp" ,CompanyName ,data  )

  

  return (
    <>
        <div class="form-group">
            <label class="gen-label">{CompanyName}</label>
            <input 
                type="text" 
                placeholder="Logo Name" 
                value={data?.company_name || "Company"}
                class="logo-name gen-input"
                
            />
        </div>
    </>
  )
}

export default CompanyName
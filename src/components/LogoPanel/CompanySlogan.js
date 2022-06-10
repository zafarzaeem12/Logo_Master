import React from 'react'

const CompanySlogan = ({name,data}) => {
  return (
    <>
        <div class="form-group">
            <label class="gen-label">{name}</label>
            <input 
                type="text" 
                placeholder="Slogan" 
                value={data?.company_slogan}
                class="logo-slogan gen-input"
             />
        </div>
    </>
  )
}

export default CompanySlogan
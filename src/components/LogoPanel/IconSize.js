import React from 'react'

const IconSize = () => {
  return (
    <>
        <div className="form-group">
            <label className="gen-label">Icon Size</label>
            <div className="reize-logo">
                <input type="range" min="30" max="400" value="150" id="resize-logo-icon" />
            </div>
        </div>
    </>
  )
}

export default IconSize
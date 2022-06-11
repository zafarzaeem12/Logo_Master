import React from 'react'

const ColorSelection = ({isLoading,select,printchecked,handleColorChange,Active,DataByCategory,Selected,styles}) => {
  return (
    <>
             <div class="create-text-1">
              <p class="heading title-font">
                Pick Some Colors <span>You Like</span>
              </p>
              <p>Colors help convey emotion in your logo</p>
            </div>
            <form className="logo-maker-form">
              <div className="color-selection-wrap">
                {!isLoading ? (
                  select &&
                  select.length > 0 &&
                  select.map((data, index) => {
                    return (
                      <div key={index} className="color-item">
                        <input
                          type="checkbox"
                          value={printchecked}
                          onChange={(e) => {
                            handleColorChange(e, data);
                            if(Active === 3) {
                             return   DataByCategory(Selected, styles, data);
                            }
                          }}
                        />
                        <span className={data?.name}>
                          <p>{data?.name}</p>
                          <p className="color-detail">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <>
                    <div className="spinner-container">
                      <div className="loading-spinner"></div>
                    </div>
                  </>
                )}
              </div>
            </form>
    </>
  )
}

export default ColorSelection
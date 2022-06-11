import React from 'react'
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();
const CategorySelection = ({Categories,Selected,handlechange,CategoriesByLogo,DataByCategory,Active}) => {
  return (
    <>
         <div className="create-text-1">
              <p className="heading title-font">
                Choose Your <span>Business Space</span>
              </p>
              <p>This helps us create better designs</p>
            </div>
            <form class="logo-maker-form">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="multiSelect-box">
                    <div class="form-group">
                      <Select
                        className="select2-hidden-accessible custom-select"
                        placeholder="Select Business Category"
                        components={animatedComponents}
                        value={Selected}
                        options={Categories}
                        onChange={(Selected) => {
                          handlechange(Selected);
                          CategoriesByLogo(Selected);
                          if(Active === 3) {
                            return DataByCategory(Selected);
                          }
                           
                          
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
    </>
  )
}

export default CategorySelection
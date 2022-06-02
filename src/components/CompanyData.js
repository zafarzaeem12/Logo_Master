import React, { useRef } from "react";
import CompanyDataHeader from "./CompanyDataHeader";

function CompanyData({ name, slogan, setName, setCompanySlogan ,DataByCategory,Selected, styles, printchecked ,Active }) {

  const formRef = useRef();
  const handleCompanyName = (e) => {
    setName(e.target.value);
  };
  const handleCompanySlogan = (e) => {
    setCompanySlogan(e.target.value);
  };
  const handlechange = (e) => {
    e.preventDefault();
    

  };
  const handlekeydown = (ev) => {
    if (ev.keyCode === 65) {
      formRef.current.submit();
    }
  };
  return (
    <>
      <div>
        <CompanyDataHeader />
      </div>
      <div onKeyDown={(e) => handlekeydown(e)}>
        <form class="logo-maker-form" onSubmit={handlechange} ref={formRef}>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={name}
                  onChange={(e) => { 
                                      handleCompanyName(e);
                                     
                                      DataByCategory(Selected, styles, printchecked,name);
                                   
                                      
                                    }
                            }
                  className="logo-name"
                  name="Companyname"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Add a Slogan (Optional)"
                  value={slogan}
                  onChange={(e) => {
                    handleCompanySlogan(e);

                    
                       DataByCategory(Selected, styles, printchecked,name,slogan); 
                  
                    
                  }
                  } 
                  className="logo-slogan"
                  name="slogan"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CompanyData;

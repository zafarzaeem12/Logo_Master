import React, { useRef } from "react";
import CompanyDataHeader from "./CompanyDataHeader";

function CompanyData({ name, slogan, setName, setCompanySlogan }) {
  const formRef = useRef();

  const handleCompanyName = (e) => {
    setName(e?.target?.value);
  };
  const handleCompanySlogan = (e) => {
    setCompanySlogan(e?.target?.value);
  };
  const handlechange = (e) => {
    e.preventDefault();
    formRef.current.contains(e);
  };

  return (
    <>
      <div>
        <CompanyDataHeader />
      </div>

      <form class="logo-maker-form" ref={formRef} onSubmit={handlechange}>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <input
                type="text"
                placeholder="Company Name"
                value={name}
                onChange={(e) => {
                  handleCompanyName(e);
                }}
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
                }}
                className="logo-slogan"
                name="slogan"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default CompanyData;

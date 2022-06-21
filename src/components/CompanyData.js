import React, { useRef, useEffect } from "react";
import CompanyDataHeader from "./CompanyDataHeader";

function CompanyData({
  name,
  slogan,
  setName,
  setCompanySlogan,
  DataByCategory,
  Selected,
  styles,
  printchecked,
}) {
  const formRef = useRef();

  const handleCompanyName = (e) => {
    setName(e.target.value);
  };
  const handleCompanySlogan = (e) => {
    setCompanySlogan(e.target.value);
  };
  const handlechange = (e) => {
    // console.log("RRRRRR", e);
    e.preventDefault();
    formRef.current.contains(e)
  };
  // const handlekeydown = (ev) => {
  //   if (ev.keyCode === 65) {

  //     formRef.current.form();
  //   }
  // };
  // console.log("ppppp",formRef.current.contains(e.target.value))
  // console.log("qqq",formRef.current[1].value)
  // useEffect(() => {
  //   window.addEventListener("keyup", handlekeydown);
  //   return () => {
  //     window.removeEventListener("keyup", handlekeydown);
  //   };
  // }, []);

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
                  DataByCategory(Selected, styles, printchecked, name);
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
                   handleCompanySlogan(e)
                  if(slogan && slogan.length > 0 && slogan !== ""){
                    setTimeout(() => {
                     DataByCategory(Selected, styles, printchecked,name,slogan)
                   },3000)
                  }
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

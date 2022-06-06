
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  customfirstsvg,
  customsecondsvg,
  customthirdsvg,
  customfourthsvg,
  customfifthsvg,
  customsixthsvg,
} from "../images/logo-templates";



// const images = [
//   customfirstsvg,
//   customsecondsvg,
//   customthirdsvg,
//   customfourthsvg,
//   customfifthsvg,
//   customsixthsvg,
// ];

function LogoCustomization({ name, slogan ,active }) {
  const navigate = useNavigate();
  const [styles, Setstyles] = useState("");
  const [images , Setimages] = useState([]);
  const [datas , SetDatas] = useState([images]);
  const [text , SetText] = useState([name,slogan])


  const GetSelectedLogo =  async () => {
    let url =  await fetch(`https://devv74.myprojectstaging.com/logo-master/public/api/get-selected-logos`)
    let data = await url.json()
    Setimages(data?.data)
    console.log("sss",data?.data)
  }
 

  const handleselect = (e, data) => {
    e.preventDefault();
    Setstyles(data);
    if(!SetDatas(data) && !SetText(data) === true ){
        navigate("/logopanel", { state: { images , text } }) 
    }
    {console.log("images",images)}

  };
  
  useEffect(() => {
    GetSelectedLogo();
  }, []);
  return (
    <>
      <div className="create-text-1">
        <p className="heading title-font">
          Choose a Logo <span>To Customize</span>
        </p>
        <p>Edit your font, icon, colors and more.</p>
      </div>
      <form className="logo-maker-form">
        <div className="container">
          <div className="gen-logo-box-wrap">
           
            {images &&
              images.length > 0 &&
              images.map((data, index) => {
                return (
                  <>
                    <div className="gen-logo-box generated-logo-preview">
                      <div className="textshow-sect">
                        <p className="textshow">{data?.company_name}</p>
                        <p className="textshow">{data?.company_slogan}</p>
                      </div>
                      <img
                        src={data?.image}
                        key={index}
                        width={40}
                        height={40}
                        alt={"img.jpg"}
                        onClick={(e) => handleselect(e, data)}
                        className={
                          styles === data ? "svgactive" : "gen-logo-box"
                        }
                      />
                    </div>
                  </>
                );
              })}
            
          </div>
        </div>
      </form>
    </>
  );
}

export default LogoCustomization;

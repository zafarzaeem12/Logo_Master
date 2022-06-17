import React, { useState, useEffect, useRef } from "react";
import { useNavigate , Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";

import { toggleFooter } from "../store/action/webSettingAction";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CompanyData from "./CompanyData";
import LogoCustomization from "./LogoCustomization";
import {
  customelogofirst,
  customelogosecond,
  customelogothird,
  customelogofourth,
  customelogofifth,
  customelogosixth,
  customelogoseventh,
  customelogoeight,
  customelogonine,
  customelogoten,
  customelogoeleven,
  customelogotwelwve,
  customelogothirteen,
  customelogofourteen,
  customelogofifteen,
} from "../images";
import CategorySelection from "./CategorySelection";
import LogoSelection from "./LogoSelection";
import ColorSelection from "./ColorSelection";
// import { colorsByLogo } from "../services/api";
// import { getApi } from "../services/functions";
import { getDataApi , postDataApi } from '../ApiMethods/functions';


let images = [
  customelogofirst,
  customelogosecond,
  customelogothird,
  customelogofourth,
  customelogofifth,
  customelogosixth,
  customelogoseventh,
  customelogoeight,
  customelogonine,
  customelogoten,
  customelogoeleven,
  customelogotwelwve,
  customelogothirteen,
  customelogofourteen,
  customelogofifteen,
];

function Editor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Active, Setactive] = useState(0);
  const [logoimages, Setlogoimages] = useState([]);
  const [styles, Setstyles] = useState("");
  const [currentWidth, setCurrentWidth] = useState(20);
  const [Companyname, Setcompanyname] = useState("");
  const [Slogan, Setslogan] = useState("");
  const [Categories, Setcategories] = useState([]);
  const [Selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [select, SetSelect] = useState([]);
  const [printchecked, Setprintchecked] = useState([]);
  
  const CategoryApi = async () => {
    try{
      let {categories} = await getDataApi(`categories`)
        const options = categories?.map((dat) => ({
          label: dat?.name,
          value: dat?.id,
        }));
        Setcategories(options);
    }
    catch(error){
      toast.error("Categories Not Loading")
      setIsLoading(true)
    }
  };

  const CategoriesByLogo = async (Selected) => {
    try{
      let item = Selected?.value;
      let {data} = await getDataApi(`logos-by-category/${item}`)
      Setlogoimages(data);
      setIsLoading(false);
    }
    catch(error){
      toast.error("Logos not Loading")
      setIsLoading(true)
    }
  };

  const colorIntgration = async (dat) => {
    try{
        let logocolor = dat?.id;
        let {data} = await getDataApi(`colors-by-logo/${logocolor}`);
        if(data[0]?.colors?.length > 0) {
          SetSelect(data[0]?.colors);
          setIsLoading(false);
        }else{
          toast.error("No Colors are found")
          setTimeout(()=>{
            navigate('/')
          },2500)
          setIsLoading(true)
        }
    }
    catch(error){
      toast.error("Colors is not Loading")
      setIsLoading(true)
      // navigate('../success',{ <Link to="/" /> })
      
    }
  };

  const handlechange = (Selected) => {
    console.log(Selected);
    return setSelected(Selected);
  };

  const handleNext = () => {
    let getCurrentWidth = currentWidth;
    if (getCurrentWidth <= 100) {
      setCurrentWidth(getCurrentWidth + 20);
      if (Active === 4) {
        navigate("/logopanel", { state: { Companyname, Slogan } });
      } else {
        Setactive(Active + 1);
      }
    }
  };
  const handlePrevious = () => {
    let getCurrentWidth = currentWidth;
    if (getCurrentWidth > 20) {
      setCurrentWidth(getCurrentWidth - 20);
      Setactive(Active - 1);
    }
  };
  const handleimage = (e, dat) => {
    //  e.preventDefault();
    Setstyles(dat);
  };

  const handleColorChange = (e, data) => {
    // e.preventDefault();
    return Setprintchecked(data);
  };


  const DataByCategory = async (Selected,styles,printchecked,Companyname,Slogan,) => {
    try{
        var category_id = Selected?.value;
        var logo_id = styles?.id;
        var color_id = printchecked?.id;
        var company_name = Companyname ;
        var company_slogan = Slogan;
        
      const payload = {
        category_id,
        logo_id,
        color_id,
        company_name,
        company_slogan
      }
        console.log("payload",payload)
        let url = `https://devv74.myprojectstaging.com/logo-master/public/api/selected-logos`;
        let methods  = {
          method: "POST",
          headers: { "Content-type": "application/json; charset=UTF-8" },
          body:JSON.stringify(payload)
        }
      const api = await  fetch(url,methods)
      const response = await api.json();
      toast.success(response)
    }
    catch(error){
      toast.error("Something is Missing")
    }
  };

  
  
  const StepsContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
          <CategorySelection 
            Categories={Categories} 
            Selected={Selected} 
            handlechange={handlechange}
            CategoriesByLogo={CategoriesByLogo}
            DataByCategory={DataByCategory}
            Active={Active}
            isLoading={isLoading}
            />
           
          </>
        );
      case 1:
        return (
          <>
          <LogoSelection 
            isLoading={isLoading} 
            logoimages={logoimages} 
            handleimage={handleimage} 
            colorIntgration={colorIntgration} 
            DataByCategory={DataByCategory}
            Active={Active}
            Selected={Selected}
            styles={styles}
            />
           
          </>
        );
      case 2:
        return (
          <>
            <ColorSelection 
              isLoading={isLoading} 
              select={select} 
              printchecked={printchecked} 
              handleColorChange={handleColorChange} 
              DataByCategory={DataByCategory}
              Selected={Selected}
              styles={styles}
              Active={Active}
              />
          </>
        );
      case 3:
        return (
          <>
            <CompanyData
              name={Companyname}
              slogan={Slogan}
              setName={Setcompanyname}
              setCompanySlogan={Setslogan}
              DataByCategory={DataByCategory}
              Selected={Selected}
              styles={styles}
              printchecked={printchecked}       
            />
          </>
        );
      case 4:
        return (
          <>
            <LogoCustomization
              name={Companyname}
              slogan={Slogan}
              active={Active}
              setactive={Setactive}
            />
          </>
        );
      default:
        return (
          <>
            <Typography>No Value Found</Typography>
          </>
        );
    }
  };


  useEffect(() => {

     CategoryApi();
     CategoriesByLogo();
  

    
    dispatch(toggleFooter());
    return () => {
      dispatch(toggleFooter());
    };
  }, []);

  return (
    <section class="editor-sec-1">
      <div class="container">
        <div class="logo-maker-box logo-maker-box-1">
          {StepsContent(Active)}
        </div>
        <div
          className="editorSec-bottomBar"
          style={{
            justifyContent: currentWidth > 20 ? "space-between" : "flex-end",
          }}
        >
          {currentWidth > 20 && (
            <button
              class="form-button logo-stepPre-4-btn"
              onClick={() => handlePrevious()}
            >
              Previous
            </button>
          )}

          {
            currentWidth < 100 && (
              <button
                class="form-button logo-step-1-btn"
                onClick={() =>{ !Selected ? CategoriesByLogo() :  handleNext()  }}
                type="submit"
              >
                Next
              </button>

            )
          }
          
        </div>
      </div>
      {/* <!-- STEPS BAR START --> */}
      <div class="StepBar-wrapper">
        <div id="progressbar_div">
          <div id="progressbar_wrapper">
            <div id="progressbar" style={{ width: `${currentWidth}%` }}></div>
          </div>
        </div>
      </div>
      {/* <!-- STEPS BAR END --> */}
    </section>
  );
}

export default Editor;

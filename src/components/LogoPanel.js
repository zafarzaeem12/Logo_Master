import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import img1 from "../images/editor-group-icon-1.png";
import img2 from "../images/editor-group-icon-2.png";
import img3 from "../images/editor-group-icon-3.png";
import img4 from "../images/editor-group-icon-4.png";
import img5 from "../images/editor-group-icon-5.png";
import CompanyName from "./LogoPanel/Name/CompanyName";
import FontFamily from "./LogoPanel/Name/FontFamily";
import FontSize from "./LogoPanel/Name/FontSize";
import Fontstyle from "./LogoPanel/Name/Fontstyle";
import FontWeight from "./LogoPanel/Name/FontWeight";
import GradientPalette from "./LogoPanel/Name/GradientPalette";
import Backgroundcolor from "./LogoPanel/Name/Backgroundcolor";

import CompanySlogan from "./LogoPanel/Slogan/CompanySlogan";
import FontSize2 from "./LogoPanel/Slogan/FontSize2";
import FontFamily2 from "./LogoPanel/Slogan/FontFamily2";
import Fontstyle2 from "./LogoPanel/Slogan/Fontstyle2";
import FontWeight2 from "./LogoPanel/Slogan/FontWeight2";
import GradientPalette2 from "./LogoPanel/Slogan/GradientPalette2";
import Backgroundcolor2 from "./LogoPanel/Slogan/Backgroundcolor2";
import IconSize from "./LogoPanel/IconSize";
import LogoEditing from "./LogoPanel/LogoEditing";
import SVGLogo from "./LogoPanel/SVGLogo";

function LogoPanel() {
  const [Editing, SetEditing] = useState([]);
  const [Names, Setnames] = useState(" ");
  const [Slogans, Setslogan] = useState(" ");
  const [Size, setSize] = useState(22);
  const [sloganSize, Setslogansize] = useState(22);
  const { state } = useLocation();
  const { Companyname, Slogan, data } = state;
  const [FontFamilys, SetFontFamilys] = useState([]);
  const [Selected, setSelected] = useState("");

  console.log("FontFamilys", FontFamilys);

  const FinalLogoEditing = (data) => {
    SetEditing(data);
  };

  const handlechange = (Selected) => {
    setSelected(Selected);
  };

  const onhandlesubmit = (name) => {
    console.log("******", name);
    Setnames(name);
  };

  const onhandlessubmit = (slogan) => {
    console.log("!!!!!", slogan);
    Setslogan(slogan);
  };

  const onsizehandle = (Size) => {
    console.log("ppp", Size);
    setSize(Size);
  };

  const handleslogan = (sloganSize) => {
    console.log("we88888", sloganSize);
    Setslogansize(sloganSize);
  };

  // Google Font Api with Key and supported data returns only start here
  const FontFamilyApiData = async () => {
    let apikey = "AIzaSyCSmTJkLEMFZMvF47raVkmL_YhKpgrTCrA";
    const url = await fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${apikey}`
    );
    const { items } = await url.json();
    return items;
  };
  // Google Font Api with Key and supported data returns only end here


  // Google Font Api Integration with Logopanel start here
  const FontFamilyies = async (items) => {
    let FaFamily = await FontFamilyApiData(items);
    let datas1 = FaFamily?.filter((data) => {
      if (
        data?.family &&
        data?.variants?.length > 0 &&
        data?.variants?.length < 2 &&
        data?.subsets?.length > 0 &&
        data?.subsets?.length < 2
      ) {
        return fetch(
          `https://fonts.googleapis.com/css?family=${data?.family}:${data?.variants}&subset=${data?.subsets}`
        )
          .then((res) => res?.json())
          .then((dataa) => dataa);
      }
    });
    // let final = await Promise.all(datas1)

    let options = datas1?.map((data) => ({
      label: data?.family,
      id: data?.version,
    }));

    SetFontFamilys(options);
  };
  // Google Font Api Integration with Logopanel end here

  useEffect(() => {
    FontFamilyies();
  }, []);

  console.log("first", Editing, FontFamilys);
  console.log("%%imageimagess", data);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div class="d-flex align-items-start logo-wrapper p-0">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <div
                style={{ background: "#3c526f" }}
                class="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  style={{ padding: 85 }}
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <img src={img1} width={55} height={55} /> <p>Suggested</p>
                </button>
                <button
                  style={{ padding: 85 }}
                  class="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <img src={img2} width={55} height={55} />
                  <p>Text </p>
                </button>
                <button
                  style={{ padding: 85 }}
                  class="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <img src={img3} width={55} height={55} />
                  <p>Slogan</p>
                </button>
                <button
                  style={{ padding: 85 }}
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <img src={img3} width={55} height={55} />
                  <p>Icons</p>
                </button>
                <button
                  style={{ padding: 85 }}
                  class="nav-link"
                  id="v-pills-settings-tabs"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settingss"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <img src={img4} width={55} height={55} />
                  <p>Background</p>
                </button>
                <button
                  style={{ padding: 85 }}
                  class="nav-link"
                  id="v-pills-settings-tabss"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settingsss"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <img src={img5} width={55} height={55} />
                  <p>Save</p>
                </button>
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <SVGLogo data={data} FinalLogoEditing={FinalLogoEditing} />
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div class="editor-group-options">
                    <CompanyName
                      CompanyName="Company Name"
                      name={Companyname}
                      data={data}
                      onSubmitName={(e) => onhandlesubmit(e)}
                    />

                    <FontSize onSubmitSize={(e) => onsizehandle(e)} />
                    <FontFamily
                      FontFamilys={FontFamilys}
                      Selected={Selected}
                      handlechange={handlechange}
                    />
                    <FontWeight />
                    <Fontstyle />
                    <Backgroundcolor />
                    <GradientPalette />
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div class="editor-group-options">
                    <CompanySlogan
                      name="Company Slogan"
                      slogan={Slogan}
                      data={data}
                      onSubmitSlogan={(e) => onhandlessubmit(e)}
                    />
                    {"  "}
                    <FontSize2 onSubmitslogan={(e) => handleslogan(e)} />
                    {"  "}
                    <FontFamily2 FontFamilys={FontFamilys} />
                    {"  "}
                    <FontWeight2 />
                    {"  "}
                    <Fontstyle2 />
                    {"  "}
                    <Backgroundcolor2 name="Slogan Color" />
                    {"  "}
                    <GradientPalette2 />
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <div class="editor-group-options logo-icon-maniplulation">
                    <IconSize />
                    {"  "}
                    <Backgroundcolor name="Icon Color" />
                    {"  "}
                    <GradientPalette />
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-settingss"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tabs"
                >
                  <div class="editor-group-options">
                    <Backgroundcolor name="Background Color" />
                    <GradientPalette />
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-settingsss"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tabss"
                >
                  ...Save
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <div className="editor-col-3">
                <div className="gen-logo-sec">
                  <div className="generated-logo-preview generated-logo-preview1 generated-logo-preview-big">
                    <LogoEditing
                      FinalLogoEditing={FinalLogoEditing}
                      Editing={Editing}
                      Names={Names}
                      Slogans={Slogans}
                      Size={Size}
                      sloganSize={sloganSize}
                      Selected={Selected}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoPanel;

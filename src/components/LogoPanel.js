import React from "react";
import { useLocation } from "react-router-dom";
import img1 from "../images/editor-group-icon-1.png";
import img2 from "../images/editor-group-icon-2.png";
import img3 from "../images/editor-group-icon-3.png";
import img4 from "../images/editor-group-icon-4.png";
import img5 from "../images/editor-group-icon-5.png";
import Backgroundcolor from "./LogoPanel/Backgroundcolor";
import CompanyName from "./LogoPanel/CompanyName";
import CompanySlogan from "./LogoPanel/CompanySlogan";
import FontFamily from "./LogoPanel/FontFamily";
import FontSize from "./LogoPanel/FontSize";
import Fontstyle from "./LogoPanel/Fontstyle";
import FontWeight from "./LogoPanel/FontWeight";
import GradientPalette from "./LogoPanel/GradientPalette";
import IconSize from "./LogoPanel/IconSize";
import SVGLogo from "./LogoPanel/SVGLogo";

function LogoPanel() {
  const { state } = useLocation();
  const {  Companyname, Slogan , datas , text} = state;
  
  
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
            <div className="col-md-3">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <SVGLogo data={datas} text={text} />
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
                      text={text}
                    />

                    <FontSize />
                    <FontFamily />
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
                    <CompanySlogan name="Company Slogan" slogan={Slogan} text={text} />
                    {"  "}
                    <FontSize />
                    {"  "}
                    <FontFamily />
                    {"  "}
                    <FontWeight />
                    {"  "}
                    <Fontstyle />
                    {"  "}
                    <Backgroundcolor name="Slogan Color" />
                    {"  "}
                    <GradientPalette />
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
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoPanel;

import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Icon  } from "react-3d-icons";
// import { facebook,twitter, github } from "react-3d-icons";
import {
  faFacebookF,
  faSkype,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "../images/star-icon.png";
import payment1 from "../images/footer-payment-1.png";
import payment2 from "../images/footer-payment-2.png";
import payment3 from "../images/footer-payment-3.png";
import payment4 from "../images/footer-payment-4.png";
import payment5 from "../images/footer-payment-5.png";
import ScrollBottomToTop from "./ScrollBottomToTop";
const Footer = () => {
  const showFooter = useSelector(
    ({ user_settings }) => user_settings.show_footer
  );
  console.log("showFooter", showFooter);
  return (
    <>
      {showFooter && (
        <footer>
          <div className="footer-top">
            <div className="container">
              <div
                className="footer-top-text"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <p className="heading title-font">
                  Join Millions of Users and Enjoy DesignEvo Now
                </p>
                <p>Try it for free, no download required.</p>
                <a href="#!" className="gen-btn">
                  Try Logo Maker
                </a>
                <img src={img1} alt="icon" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="container">
              <div className="footer-nav-wrap">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6 footer-nav-col">
                    <p className="footer-group-title">Products</p>
                    <ul className="footer-nav-list">
                      <li>
                        <a href="#!">Logo Maker</a>
                      </li>
                      <li>
                        <a href="#!">Brand Kit</a>
                      </li>
                      <li>
                        <a href="#!">Social Media Kit</a>
                      </li>
                      <li>
                        <a href="#!">Business Cards</a>
                      </li>
                      <li>
                        <a href="#!">How it works</a>
                      </li>
                      <li>
                        <a href="#!">Reviews</a>
                      </li>
                      <li>
                        <a href="#!">Business Name Generator</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6 footer-nav-col">
                    <p className="footer-group-title">Inspiration</p>
                    <ul className="footer-nav-list">
                      <li>
                        <a href="#!">Blog</a>
                      </li>
                      <li>
                        <a href="#!">Logo Ideas</a>
                      </li>
                      <li>
                        <a href="#!">Logo Colors</a>
                      </li>
                      <li>
                        <a href="#!">Logo Styles</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6 footer-nav-col">
                    <p className="footer-group-title">Company</p>
                    <ul className="footer-nav-list">
                      <li>
                        <a href="#!">About</a>
                      </li>
                      <li>
                        <a href="#!">Press</a>
                      </li>
                      <li>
                        <a href="#!">Careers</a>
                      </li>
                      <li>
                        <a href="#!">Affiliates</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-12 col-sm-6 col-6 footer-nav-col">
                    <p className="footer-group-title">Support</p>
                    <ul className="footer-nav-list">
                      <li>
                        <a href="#!">Help Center</a>
                      </li>
                      <li>
                        <a href="#!">Contact</a>
                      </li>
                      <li>
                        <a href="mailto:support@logomaker.com">
                          support@logomaker.com
                        </a>
                      </li>
                    </ul>
                    <ul className="footer-social">
                      <li>
                        <a href="#!">
                          <FontAwesomeIcon icon={faFacebookF} />
                          {/* <Icon file={facebook} color={"#1DA1F2"} scale={10} style={{ height: "100px", width: "100px" }} /> */}
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <FontAwesomeIcon icon={faSkype} />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ScrollBottomToTop />
              <div className="footer-bottom">
                <div className="footer-bottom-row">
                  <p>
                    © 2022 Logomaker <a href="#!">Privacy</a> /{" "}
                    <a href="#!">Terms</a> / <a href="#!">Site Map</a>
                  </p>
                  <ul className="footer-payment">
                    <li>
                      <a href="#!">
                        <img src={payment1} alt="icon" className="img-fluid" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img src={payment2} alt="icon" className="img-fluid" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img src={payment3} alt="icon" className="img-fluid" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img src={payment4} alt="icon" className="img-fluid" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img src={payment5} alt="icon" className="img-fluid" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;

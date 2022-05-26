import React,{useEffect} from 'react'
import logo from '../images/logo.png'
import img1 from '../images/header-abs-1.png'
import { Link } from "react-router-dom";
import AOS from 'aos';

function Header() {
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
  return (
      <>
      <div className="flex-container">
            <header>
            <div className="container">
                <div className="header-row">
                    <div className="logo-wrap"  data-aos="fade-right" data-aos-duration="1200">
                    <Link to="/">
                        <img src={logo} alt="logo" className="img-fluid" />
                    </Link>
                    
                    </div>
                    <div className="navigation-wrap">
                        <div id="main-nav" className="stellarnav custom-nav">
                            <ul>
                                <li><Link to="/editor">Logo Maker</Link></li>
                                <li><Link to="/brandkitpage">Brand Kit</Link></li>
                                <li><Link to="/howitwork">How It Works</Link></li>
                                <li><Link to="/login" className="login-btn">Login</Link></li>
                                <li><Link to="/register" className="sign-up-btn">Signup</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="abs-1">
                <img src={img1} alt="img" className="img-fluid" />
            </div>
            </header>

      </div>


      </>
  )
}

export default Header
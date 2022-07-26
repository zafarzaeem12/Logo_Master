import React from 'react'
import img1 from '../images/login-abs-img-1.png'
import img2 from '../images/login-abs-img-2.png'
import img3 from '../images/index-banner-abs-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF , faSkype ,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { GoogleLogin } from 'react-google-login'
function Login() {

  const GoogleSuccessfulresponse  = async (response) => {
    console.log("success",response)

  }

  const GoogleFailurefulresponse  = async (response) => {
    console.log("failure",response)
  }

  return (
    <>
        <section className="login-sec inner-pg-banner about-banner">
          <div className="container">
            <div className="inner-banner-text">
              <p className="heading">Login For<br /><span>Logomaster</span> </p>
              <p className="tagline">By signing up, you agree to our <a href="#!"> terms of service</a></p>	
            </div>
            <form>
              <div className="form-group">
                <input type="name" required placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <input type="password" required placeholder="Password" />
              </div>
              <a href="#!" className="forget-btn">Forgot Password</a>
              <a href="#!" className="login-btn">Login</a>
                <GoogleLogin
                    clientId='819534639726-95ggtcfrqo0indihojndn1js3iqjr73b.apps.googleusercontent.com'
                    buttonText=""
                    onSuccess={(e , response) => GoogleSuccessfulresponse(e , response)}
                    onFailure={(e , response) => GoogleFailurefulresponse(e , response)}
                />
              <p className="bottom-tagline">Dont have an acount? <a href="#!">Signup</a></p>	
            </form>
            <ul className="socil-list list-unstyled">
              <li><a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a></li>
							<li><a href="#!"><FontAwesomeIcon icon={faSkype} /></a></li> 
							<li><a href="#!"><FontAwesomeIcon icon={faLinkedin} /></a></li> 
            </ul>
            <p className="tagline-2">© 2021 Logomaker All Right Reserved</p>
          </div>
          <div className="abs-img abs-img-1 login-abs-1">
            <img src={img1} alt="img" className="img-fluid" />
          </div>
          <div className="abs-img abs-img-2 login-abs-2">
            <img src={img2} alt="img" className="img-fluid" />
          </div>
          <div className="login-abs-3">
            <img src={img3} alt="img" className="img-fluid" />
          </div>
        </section>

    </>
  )
}

export default Login